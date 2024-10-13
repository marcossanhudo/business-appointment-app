import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { PrimaryButton } from '@/components/Buttons/Primary Button/PrimaryButton';
import Styles from '@/constants/Styles';
import { getLocaleDateTimeString } from '@/scripts/formatting';
import { postAppointment } from '@/networking/controllers/appointmentController';
import { InlineButton } from '@/components/Buttons/Inline Button/InlineButton';

export const AppointmentSummaryPage = ({ navigation, route }: any) => {

    const TEST_CUSTOMER_ID = "66b84b5f4d019d6b83778176";
    
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
                        <InlineButton
                            label="Edit" />
                    </View>
                    <View style={ Styles.row }>
                        <Text style={ Styles.infoBoxSecondaryHeading }>Place</Text>
                        <Text style={ Styles.infoBoxBodyText }>{ appointmentDetails.business.name }</Text>
                    </View>
                    <View style={ Styles.row }>
                        <Text style={ Styles.infoBoxSecondaryHeading }>Time</Text>
                        <Text style={ Styles.infoBoxBodyText }>From { getLocaleDateTimeString(appointmentDetails.time.startTime) } to { getLocaleDateTimeString(appointmentDetails.time.endTime) }</Text>
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
                <PrimaryButton
                    label="Schedule appointment"
                    onPress={ () => postAppointmentAndContinue() }/>
            </View>
        </ScrollView>
    );

}