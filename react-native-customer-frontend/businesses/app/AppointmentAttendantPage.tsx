import React, { useState, useEffect } from 'react';
import { ScrollView, View, FlatList, Text, Pressable } from 'react-native';
import { Button } from '@/components/Button/Button';
import Styles from '@/constants/Styles';
import { formatTime, ignoreDate } from '@/scripts/formatting';
import { getServiceAttendants } from '@/networking/controllers/serviceController';
import { getAttendant } from '@/networking/controllers/attendantController';
import { Menu } from '@/components/Menu/Menu';
import { MenuItem } from '@/components/Menu Item/MenuItem';

export const AppointmentAttendantPage = ({ navigation, route }: any) => {

    const appointmentDetails = route.params.appointmentDetails;

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const [attendantsAvailable, setAttendantsAvailable] = useState([{ _id: null }]);

    React.useEffect(() => {
        getServiceAttendants(appointmentDetails.service._id)
            .then(data => data.forEach(async (id: string) => {
                setAttendantsAvailable([ await getAttendant(id), ...attendantsAvailable ]);
            }))
            .then(() => setLoading(false))
            .catch(error => { setError(true); console.log(error); });
    }, []);

    const renderAttendantAvailable = (attendantAvailable: any) => {
        return (
            <MenuItem
                name={ attendantAvailable._id === null ? "Anyone is okay" : attendantAvailable.name }
                onPress={ () => navigation.navigate("Appointment Summary", { appointmentDetails: { ...appointmentDetails, attendant: attendantAvailable }})} />
        );
    }

    return (
        <ScrollView style={{ backgroundColor: '#FFFFFF' }}>
            <View style={ Styles.page }>
                <View style={ Styles.infoBox }>
                    <Text style={ Styles.infoBoxPrimaryHeading }>{ appointmentDetails.service.name }</Text>
                    <View style={ Styles.row }>
                        <Text style={ Styles.infoBoxBodyText }>{ appointmentDetails.business.name }</Text>
                        <Text style={ Styles.infoBoxBodyText }>$ { appointmentDetails.service.appointmentPrice }</Text>
                    </View>
                </View>
                <View>
                    <Text style={ Styles.h2 }>Time</Text>
                    <View style={ Styles.row }>
                        <Text style={ Styles.bodyText }>From { appointmentDetails.time.startTime } to { appointmentDetails.time.endTime }</Text>
                        <Button
                            type="inline"
                            label="Change"
                            onPress={ () => navigation.navigate("Appointment Time", { appointmentDetails: appointmentDetails }) } />
                    </View>
                </View>
                <View style={ Styles.verticalListContainer }>
                    <Text style={ Styles.h2 }>Attendants available</Text>
                    {
                        loading
                        ? <View>
                            <Text>Loading.</Text>
                        </View>
                        : error
                        ? <View>
                            <Text>An error occured. Please try again later.</Text>
                        </View>
                        : <Menu
                            items={ attendantsAvailable }
                            renderItem={ renderAttendantAvailable }
                            accessibilityLabel="Available attendants menu"
                            accessibilityHint="Lets you choose the attendant for your appointment." />
                    }
                    <View style={ Styles.infoBox }>
                        <Text style={ Styles.infoBoxBodyText }>If the person you want isn’t available, try a different time.</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );

};