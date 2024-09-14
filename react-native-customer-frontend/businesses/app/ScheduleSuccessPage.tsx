import Styles from "@/constants/Styles";
import { getAppointment } from "@/networking/controllers/appointmentController";
import { getAttendant } from "@/networking/controllers/attendantController";
import { getBusiness } from "@/networking/controllers/businessController";
import { getService } from "@/networking/controllers/serviceController";
import React, { useState, useEffect } from "react";
import { ScrollView, View, Text, Button, FlatList } from "react-native";

export const ScheduleSuccessPage = ({ navigation, route }: any) => {

    const TEST_PAYMENT_OPTIONS = {
        credit: [
            { name: "Visa" },
            { name: "MasterCard" }
        ],
        debit: [
            { name: "Visa" },
            { name: "MasterCard" }
        ]
    };

    const appointmentId = route.params.appointmentId;
    const [appointment, setAppointment] = useState({
        _id: "",
        serviceId: "",
        customerId: "",
        //attendantId: "",
        startDateTime: "",
        endDateTime: ""
    });
    const [service, setService] = useState({
        _id: "",
        name: "",
        businessId: "",
        appointmentPrice: 0
    });
    const [business, setBusiness] = useState({
        _id: "",
        name: ""
    });
    const [attendant, setAttendant] = useState({
        _id: "",
        name: ""
    });
    const [paymentOptions, setPaymentOptions] = useState({ credit: [{}], debit: [{}] });

    const [showPaymentOptions, setShowPaymentOptions] = useState(Boolean);
    const [paymentOptionsButtonTitle, setPaymentOptionsButtonTitle] = useState(String);

    const [loading, setLoading] = useState(true);

    const expandPaymentOptions = () => {
        setPaymentOptionsButtonTitle("Collapse");
        setShowPaymentOptions(true);
    }

    const collapsePaymentOptions = () => {
        setPaymentOptionsButtonTitle("Expand");
        setShowPaymentOptions(false);
    }

    const renderPaymentOption = (paymentOption: any) => {
        return (
            <Text style={ Styles.rowItem }>{ paymentOption.name }</Text>
        );
    }

    useEffect(() => {
        getAppointment(appointmentId)
        .then(appointment => setAppointment(appointment))
        .then(() => expandPaymentOptions())
        .then(() => setLoading(false))
        .catch(error => { console.log(error); })
    }, []);

    useEffect(() => {
        getService(appointment.serviceId)
        .then(json => setService(json));
        
        getBusiness(service.businessId)
        .then(json => setBusiness(json));

        setPaymentOptions(TEST_PAYMENT_OPTIONS);
    }, [appointment]);

    return (
        <ScrollView>
            <View style={ Styles.page }>
                <View style={ Styles.column }>
                    <Text style={[ Styles.bodyText, { textAlign: 'center' } ]}>Your appointment has been scheduled.</Text>
                    <Text style={[ Styles.bodyText, { textAlign: 'center' } ]}>Please remember to cancel it if you can't make it.</Text>
                </View>
                {
                    loading
                    ? <Text>Loading.</Text>
                    : <View style={ Styles.infoBox }>
                    <Text style={ Styles.infoBoxPrimaryHeading }>{ service.name }</Text>
                    <View style={ Styles.row }>
                        <Text style={ Styles.infoBoxSecondaryHeading }>Place</Text>
                        <Text style={ Styles.infoBoxBodyText }>{ business.name }</Text>
                    </View>
                    <View style={ Styles.row }>
                        <Text style={ Styles.infoBoxSecondaryHeading }>Time</Text>
                        <Text style={ Styles.infoBoxBodyText }>{ appointment.startDateTime } to { appointment.endDateTime }</Text>
                    </View>
                    <View style={ Styles.row }>
                        <Text style={ Styles.infoBoxSecondaryHeading }>Attendant</Text>
                        <Text style={ Styles.infoBoxBodyText }>{ attendant.name }</Text>
                    </View>
                </View>
                }
                <View style={ Styles.infoBox }>
                    <View style={[ Styles.row, Styles.receiptPriceDecoration ]}>
                        <Text style={ Styles.bigNumberLegend }>Price</Text>
                        <Text style={ Styles.bigNumber }>$ { service.appointmentPrice }</Text>
                    </View>
                    <View style={ Styles.row }>
                        <Text style={ Styles.infoBoxSecondaryHeading }>Payment options</Text>
                        <Button title={ paymentOptionsButtonTitle }
                            onPress={ () => { showPaymentOptions ? collapsePaymentOptions() : expandPaymentOptions() } } />
                    </View>
                    {
                        !loading &&
                        showPaymentOptions &&
                        <View style={ Styles.column }>
                            <Text style={ Styles.bodyText }>You'll pay in the business.</Text>
                            <View style={ Styles.row }>
                                <Text style={ Styles.infoBoxSecondaryHeading }>Cash</Text>
                            </View>
                            <View style={ Styles.row }>
                                <Text style={ Styles.infoBoxSecondaryHeading }>Credit</Text>
                                <FlatList
                                    data={ paymentOptions.credit }
                                    horizontal={ true }
                                    renderItem={ ({ item }) => renderPaymentOption(item) }
                                />
                            </View>
                            <View style={ Styles.row }>
                                <Text style={ Styles.infoBoxSecondaryHeading }>Debit</Text>
                                <FlatList
                                    data={ paymentOptions.debit }
                                    horizontal={ true }
                                    renderItem={ ({ item }) => renderPaymentOption(item) }
                                />
                            </View>
                        </View> 
                    }
                </View>
                <View style={ Styles.column }>
                    <Button title={ "Cancel appointment" } />
                    <Button title={ "OK" }
                        onPress={ () => navigation.reset({ index: 0, routes: [{ name: "Home" }] }) } />
                </View>
            </View>
        </ScrollView>
    )
}