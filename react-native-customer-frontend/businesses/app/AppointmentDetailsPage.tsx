import React, { useEffect, useState } from "react";
import { ScrollView, View, Text } from "react-native";
import Styles from "@/constants/Styles";
import { SecondaryButton } from "@/components/Buttons/Secondary Button/SecondaryButton";
import { InlineButton } from "@/components/Buttons/Inline Button/InlineButton";
import AppointmentDTO from "@/dto/AppointmentDTO";
import { getExtendedAppointment } from "@/networking/controllers/appointmentController";
import { getLocaleDateTimeString } from "@/scripts/formatting";

export const AppointmentDetailsPage = ({ navigation, route }: any) => {

    const [appointmentId, setAppointmentId] = useState(route.params.id);
    const [appointment, setAppointment] = useState<AppointmentDTO | null>(null);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const [showPaymentOptions, setShowPaymentOptions] = useState<Boolean | null>(null);

    useEffect(() => {
        getExtendedAppointment(appointmentId)
        .then(appointment => setAppointment(appointment))
        .catch(error => { setError(true); console.log(error); })
        .finally(() => setLoading(false));
    }, []);

    const renderPaymentOptions = () => {
        return(
            <View>
                <View style={ Styles.row }>
                    <Text style={ Styles.infoBoxSecondaryHeading }>Cash</Text>
                </View>
                <View style={ Styles.row }>
                    <Text style={ Styles.infoBoxSecondaryHeading }>Debit</Text>
                </View>
                <View style={ Styles.row }>
                    <Text style={ Styles.infoBoxSecondaryHeading }>Credit</Text>
                </View>
            </View>
        );
    }
 
    return(
        <ScrollView style={ Styles.page }>
            {
                loading
                ? <Text>Loading.</Text>

                : error || appointment === null
                ? <Text>An error ocurred. Please try again later.</Text>

                : <View style={ Styles.column }>
                    <View style={ Styles.infoBox }>
                        <Text style={ Styles.infoBoxPrimaryHeading }>{ appointment.service.name }</Text>
                        <View style={ Styles.row }>
                            <Text style={ Styles.infoBoxSecondaryHeading }>Place</Text>
                            <Text style={ Styles.infoBoxBodyText }>{ appointment.business.name }</Text>
                        </View>
                        <View style={ Styles.row }>
                            <Text style={ Styles.infoBoxSecondaryHeading }>Time</Text>
                            <Text style={ Styles.infoBoxBodyText }>From { getLocaleDateTimeString(appointment.startDateTime) } to { getLocaleDateTimeString(appointment.endDateTime) }</Text>
                        </View>
                        <View style={ Styles.row }>
                            <Text style={ Styles.infoBoxSecondaryHeading }>Attendant</Text>
                            <Text style={ Styles.infoBoxBodyText }>{ appointment.attendant.name }</Text>
                        </View>
                    </View>
                    <View style={ Styles.infoBox }>
                        <View style={[ Styles.row, Styles.receiptPriceDecoration ]}>
                            <Text style={ Styles.bigNumberLegend }>Price</Text>
                            <Text style={ Styles.bigNumber }>$ { appointment.service.appointmentPrice }</Text>
                        </View>
                        <View style={ Styles.row }>
                            <Text style={ Styles.infoBoxPrimaryHeading }>Payment options</Text>
                            <InlineButton
                                label="Collapse" />
                        </View>
                        { renderPaymentOptions() }
                    </View>
                    <View style={ Styles.column }>
                        <Text style={ Styles.reminder }>If you believe you can’t make it, please cancel or reschedule.</Text>
                        <SecondaryButton
                            label="Cancel appointment" />
                        <SecondaryButton
                            label="Reschedule appointment" />
                    </View>
                </View>
            }
        </ScrollView>
    );

}