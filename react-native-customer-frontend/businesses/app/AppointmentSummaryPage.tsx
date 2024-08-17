import React, { useState } from 'react';
import { ScrollView, View, Text, Pressable, Button } from 'react-native';
import Styles from '@/constants/Styles';
import { formatTime, ignoreDate } from '@/scripts/formatting';

export const AppointmentSummaryPage = ({ navigation, route }: any) => {

    const appointmentDetails = route.params.appointmentDetails;

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
                        <Text style={ Styles.infoBoxBodyText }>{ appointmentDetails.attendant.name }</Text>
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
                <Button title="Schedule appointment" />
            </View>
        </ScrollView>
    );

}