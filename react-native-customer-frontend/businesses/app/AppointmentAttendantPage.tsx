import React, { useState, useEffect } from 'react';
import { ScrollView, View, FlatList, Text, Pressable, Button } from 'react-native';
import Styles from '@/constants/Styles';
import { formatTime, ignoreDate } from '@/scripts/formatting';

export const AppointmentAttendantPage = ({ navigation, route }: any) => {

    const appointmentDetails = route.params.appointmentDetails;

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const [attendantsAvailable, setAttendantsAvailable] = useState([{}]);

    React.useEffect(() => {
        setAttendantsAvailable([{}, { _id: null }]);
        setLoading(false);
    }, []);

    const renderAttendantAvailable = (attendantAvailable: any) => {
        return (
            <Pressable style={ Styles.verticalListOption }
                onPress={ () => navigation.navigate("Appointment Summary", { appointmentDetails: { ...appointmentDetails, attendant: attendantAvailable }})}>
                <Text style={ Styles.verticalListOptionName }>{
                    attendantAvailable._id === null ? "Anyone is okay" : attendantAvailable.name
                }</Text>
            </Pressable>
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
                        <Text style={ Styles.bodyText }>From { formatTime(ignoreDate(appointmentDetails.time.startTime)) } to { formatTime(ignoreDate(appointmentDetails.time.endTime)) }</Text>
                        <Button title="Change" />
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
                        : <FlatList
                            data={ attendantsAvailable }
                            renderItem={ ({item}) => renderAttendantAvailable(item) } />
                    }
                    <View style={ Styles.infoBox }>
                        <Text style={ Styles.infoBoxBodyText }>If the person you want isn’t available, try a different time.</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );

};