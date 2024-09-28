import React, { useState } from 'react';
import { ScrollView, View, Text, Pressable } from 'react-native';
import { Button } from '@/components/Button/Button';
import Styles from '@/constants/Styles';
import { formatTime, ignoreDate } from '@/scripts/formatting';
import { postAppointment } from '@/networking/controllers/appointmentController';

export const AppointmentSummaryPage = ({ navigation, route }: any) => {

    const TEST_SERVICE_ID = "66b84b5f4d019d6b83778176";
    const TEST_CUSTOMER_ID = "66b84b5f4d019d6b83778176";
    const TEST_ATTENDANT_ID = "66b84b5f4d019d6b83778176";
    const TEST_START_DATE_TIME = "2024-09-13T12:00:00.000Z-03:00";
    const TEST_END_DATE_TIME = "2024-09-13T12:30:00.000Z-03:00";

    const appointmentDetails = route.params.appointmentDetails;

    const postAppointmentAndContinue = () => {
        postAppointment({
            serviceId: appointmentDetails.service._id,
            customerId: TEST_CUSTOMER_ID, // appointmentDetails.customerId,
            attendantId: appointmentDetails.attendant._id,
            startDateTime: appointmentDetails.time.startTime,
            endDateTime: appointmentDetails.time.endTime,
            status: "pending"
        })
        .then((json) => json && navigation.navigate("Schedule Success", { appointmentId: json.appointment._id }))
        .catch(error => { console.log(error); });
    }

    return (
        <ScrollView style={{ backgroundColor: '#FFFFFF' }}>
            <View style={ Styles.page }>
                <View style={ Styles.infoBox }>
                    <View style={ Styles.row }>
                        <Text style={ Styles.infoBoxPrimaryHeading }>{ appointmentDetails.service.name }</Text>
                        <Button
                            type="inline"
                            label="Edit" />
                    </View>
                    <View style={ Styles.row }>
                        <Text style={ Styles.infoBoxSecondaryHeading }>Place</Text>
                        <Text style={ Styles.infoBoxBodyText }>{ appointmentDetails.business.name }</Text>
                    </View>
                    <View style={ Styles.row }>
                        <Text style={ Styles.infoBoxSecondaryHeading }>Time</Text>
                        <Text style={ Styles.infoBoxBodyText }>From { appointmentDetails.time.startTime } to { appointmentDetails.time.endTime }</Text>
                    </View>
                    <View style={ Styles.row }>
                        <Text style={ Styles.infoBoxSecondaryHeading }>Attendant</Text>
                        <Text style={ Styles.infoBoxBodyText }>{ appointmentDetails.attendant._id == null ? "Whoever is available" : appointmentDetails.attendant.name }</Text>
                    </View>
                </View>
                <View style={[ Styles.infoBox, { backgroundColor: '#F0F0F0' } ]}>
                    <View>
                        <Text style={ Styles.bigNumberLegend }>Price</Text>
                        <Text style={ Styles.bigNumber }>$ { appointmentDetails.service.appointmentPrice }</Text>
                    </View>
                    <View>
                        <Text style={ Styles.h3 }>Payment options</Text>
                        <Text style={ Styles.bodyText }>You'll pay in the business.</Text>
                    </View>
                </View>
            </View>
            <View style={ Styles.mainButtonArea }>
                <Button
                    label="Schedule appointment"
                    type="primary"
                    onPress={ () => postAppointmentAndContinue() }/>
            </View>
        </ScrollView>
    );

}