import Styles from "@/constants/Styles";
import { getExtendedAppointment } from "@/networking/controllers/appointmentController";
import React, { useState, useEffect } from "react";
import { ScrollView, View, Text, FlatList } from "react-native";
import { InlineButton } from "@/components/Buttons/Inline Button/InlineButton";
import { SecondaryButton } from "@/components/Buttons/Secondary Button/SecondaryButton";
import { PrimaryButton } from "@/components/Buttons/Primary Button/PrimaryButton";
import AppointmentDTO from "@/dto/AppointmentDTO";

export const ScheduleSuccessPage = ({ navigation, route }: any) => {

    const EXPAND_PAYMENT_OPTIONS_BUTTON_TITLE = "Expand";
    const COLLAPSE_PAYMENT_OPTIONS_BUTTON_TITLE = "Collapse";

    const appointmentId = route.params.appointmentId;
    const [appointment, setAppointment] = useState<AppointmentDTO | null>(null);

    const [showPaymentOptions, setShowPaymentOptions] = useState<Boolean | null>(null);
    const [paymentOptionsButtonTitle, setPaymentOptionsButtonTitle] = useState<String | null>(null);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const expandPaymentOptions = () => {
        setPaymentOptionsButtonTitle(COLLAPSE_PAYMENT_OPTIONS_BUTTON_TITLE);
        setShowPaymentOptions(true);
    }

    const collapsePaymentOptions = () => {
        setPaymentOptionsButtonTitle(EXPAND_PAYMENT_OPTIONS_BUTTON_TITLE);
        setShowPaymentOptions(false);
    }

    const renderPaymentOption = (paymentOption: any) => {
        return (
            <Text style={ Styles.rowItem }>{ paymentOption.cardCompanyName }</Text>
        );
    }

    useEffect(() => {
        getExtendedAppointment(appointmentId)
        .then(appointment => setAppointment(appointment))
        .then(() => expandPaymentOptions())
        .catch(error => { setError(true); console.log(error); })
        .finally(() => setLoading(false));
    }, []);

    return (
        <ScrollView>
            {
                loading
                ? <Text>Loading.</Text>

                : error || appointment === null
                ? <Text>An error occured. Please try again later.</Text>

                : <View style={ Styles.page }>
                    <View style={ Styles.column }>
                        <Text style={[ Styles.bodyText, { textAlign: 'center' } ]}>Your appointment has been scheduled.</Text>
                        <Text style={[ Styles.bodyText, { textAlign: 'center' } ]}>Please remember to cancel it if you can't make it.</Text>
                    </View>
                        <View style={ Styles.infoBox }>
                        <Text style={ Styles.infoBoxPrimaryHeading }>{ appointment.service.name }</Text>
                        <View style={ Styles.row }>
                            <Text style={ Styles.infoBoxSecondaryHeading }>Place</Text>
                            <Text style={ Styles.infoBoxBodyText }>{ appointment.business.name }</Text>
                        </View>
                        <View style={ Styles.row }>
                            <Text style={ Styles.infoBoxSecondaryHeading }>Time</Text>
                            <Text style={ Styles.infoBoxBodyText }>From { new Date(appointment.startDateTime).toLocaleString() } to { new Date(appointment.endDateTime).toLocaleString() }</Text>
                        </View>
                        <View style={ Styles.row }>
                            <Text style={ Styles.infoBoxSecondaryHeading }>Attendant</Text>
                            <Text style={ Styles.infoBoxBodyText }>{ appointment.attendant == null ? "Whoever is available" : appointment.attendant.name }</Text>
                        </View>
                    </View>
                    <View style={ Styles.infoBox }>
                        <View style={[ Styles.row, Styles.receiptPriceDecoration ]}>
                            <Text style={ Styles.bigNumberLegend }>Price</Text>
                            <Text style={ Styles.bigNumber }>$ { appointment.service.appointmentPrice }</Text>
                        </View>
                        <View style={ Styles.row }>
                            <Text style={ Styles.infoBoxSecondaryHeading }>Payment options</Text>
                            <InlineButton
                                label={ paymentOptionsButtonTitle }
                                onPress={ () => { showPaymentOptions ? collapsePaymentOptions() : expandPaymentOptions() } } />
                        </View>
                        {
                            showPaymentOptions &&
                            <View style={ Styles.column }>
                                <Text style={ Styles.bodyText }>You'll pay in the business.</Text>
                                { 
                                    appointment.business.paymentOptions.cash &&
                                    <View style={ Styles.row }>
                                        <Text style={ Styles.infoBoxSecondaryHeading }>Cash</Text>
                                    </View>
                                }
                                {
                                    appointment.business.paymentOptions.credit.length > 0 &&
                                    <View style={ Styles.row }>
                                        <Text style={ Styles.infoBoxSecondaryHeading }>Credit</Text>
                                        <FlatList
                                            data={ appointment.business.paymentOptions.credit }
                                            horizontal={ true }
                                            renderItem={ ({ item }) => renderPaymentOption(item) }
                                        />
                                    </View>
                                }
                                {
                                    appointment.business.paymentOptions.debit.length > 0 &&
                                    <View style={ Styles.row }>
                                        <Text style={ Styles.infoBoxSecondaryHeading }>Debit</Text>
                                        <FlatList
                                            data={ appointment.business.paymentOptions.debit }
                                            horizontal={ true }
                                            renderItem={ ({ item }) => renderPaymentOption(item) }
                                        />
                                    </View>
                                }
                            </View> 
                        }
                    </View>
                    <View style={ Styles.column }>
                        <SecondaryButton
                            label={ "Cancel appointment" } />
                        <PrimaryButton
                            label={ "OK" }
                            onPress={ () => navigation.reset({ index: 0, routes: [{ name: "Home" }] }) } />
                    </View>
                </View>
            }
        </ScrollView>
    )
}