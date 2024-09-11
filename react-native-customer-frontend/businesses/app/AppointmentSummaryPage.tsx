import React, { useState } from 'react';
import { ScrollView, View, Text, Pressable, Button } from 'react-native';
import Styles from '@/constants/Styles';
import { formatTime, ignoreDate } from '@/scripts/formatting';
import { postAppointment } from '@/networking/controllers/appointmentController';

export const AppointmentSummaryPage = ({ navigation, route }: any) => {

    const appointmentDetails = route.params.appointmentDetails;

    const postAppointmentAndContinue = () => {
        postAppointment({
            serviceId: appointmentDetails.service._id,
            customerId: "66b84b5f4d019d6b83778176", // temporary test variable
            startDateTime: appointmentDetails.time.startTime,
            endDateTime: appointmentDetails.time.endTime,
            status: "pending"
        })
        .then(() => navigation.navigate("Schedule Success"))
        .catch(error => { console.log(error); })
    }

    return (
        <ScrollView style={{ backgroundColor: '#FFFFFF' }}>
            <View style={ Styles.page }>
                <View style={ Styles.infoBox }>
                    <View style={ Styles.row }>
                        <Text style={ Styles.infoBoxPrimaryHeading }>{ appointmentDetails.service.name }</Text>
                        <Button title="Edit" />
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
                <Button title="Schedule appointment"
                    onPress={ () => postAppointmentAndContinue() }/>
            </View>
        </ScrollView>
    );

}