import Styles from "@/constants/Styles";
import { getAppointment } from "@/networking/controllers/appointmentController";
import { getAttendant } from "@/networking/controllers/attendantController";
import { getBusiness } from "@/networking/controllers/businessController";
import { getService } from "@/networking/controllers/serviceController";
import React, { useState, useEffect } from "react";
import { ScrollView, View, Text, Button, FlatList } from "react-native";

export const ScheduleSuccessPage = ({ navigation, route }: any) => {

    const appointmentId = route.params.appointmentId;
    const [appointment, setAppointment] = useState({
        _id: "",
        service: {
            _id: "",
            name: "",
            appointmentPrice: 0
        },
        business: {
            _id: "",
            name: "",
            paymentOptions: {
                credit: [{}],
                debit: [{}]
            }
        },
        attendant: {
            _id: "",
            name: ""
        },
        startDateTime: "",
        endDateTime: ""
    });

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
        .then(appointment => getFurtherInfo(appointment))
        .then(info => setAppointment(info))
        .then(() => expandPaymentOptions())
        .then(() => setLoading(false))
        .catch(error => { console.log(error); })
    }, []);

    const getFurtherInfo = async (appointment: any) => {
        await getService(appointment.serviceId)
        .then((service) => appointment = { ...appointment, service })
        .then(() => getBusiness(appointment.service.businessId))
        .then((business) => appointment = { ...appointment, business });

        return appointment;
    };

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
                    <Text style={ Styles.infoBoxPrimaryHeading }>{ appointment.service.name }</Text>
                    <View style={ Styles.row }>
                        <Text style={ Styles.infoBoxSecondaryHeading }>Place</Text>
                        <Text style={ Styles.infoBoxBodyText }>{ appointment.business.name }</Text>
                    </View>
                    <View style={ Styles.row }>
                        <Text style={ Styles.infoBoxSecondaryHeading }>Time</Text>
                        <Text style={ Styles.infoBoxBodyText }>{ appointment.startDateTime } to { appointment.endDateTime }</Text>
                    </View>
                    <View style={ Styles.row }>
                        <Text style={ Styles.infoBoxSecondaryHeading }>Attendant</Text>
                        <Text style={ Styles.infoBoxBodyText }>{ appointment.attendant.name }</Text>
                    </View>
                </View>
                }
                <View style={ Styles.infoBox }>
                    <View style={[ Styles.row, Styles.receiptPriceDecoration ]}>
                        <Text style={ Styles.bigNumberLegend }>Price</Text>
                        <Text style={ Styles.bigNumber }>$ { appointment.service.appointmentPrice }</Text>
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
                                    data={ appointment.business.paymentOptions.credit }
                                    horizontal={ true }
                                    renderItem={ ({ item }) => renderPaymentOption(item) }
                                />
                            </View>
                            <View style={ Styles.row }>
                                <Text style={ Styles.infoBoxSecondaryHeading }>Debit</Text>
                                <FlatList
                                    data={ appointment.business.paymentOptions.debit }
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