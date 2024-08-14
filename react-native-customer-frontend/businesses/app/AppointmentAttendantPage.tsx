import React, { useState, useEffect } from 'react';
import { ScrollView, View, FlatList, Text, Pressable, Button } from 'react-native';
import Styles from '@/constants/Styles';

export const AppointmentAttendantPage = ({ navigation, route }: any) => {

    const appointmentDetails = route.params.appointmentDetails;

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const [attendantsAvailable, setAttendantsAvailable] = useState([{}]);

    React.useEffect(() => {
        setAttendantsAvailable([
            { name: "Alice" },
            { name: "Bob" },
            { name: "Charlie" }
        ]);
        setLoading(false);
    }, []);

    const renderAttendantAvailable = (attendantAvailable: any) => {
        return (
            <Pressable style={ Styles.verticalListOption }
                onPress={ () => navigation.navigate("Appointment Summary", { appointmentDetails: { ...appointmentDetails, attendant: attendantAvailable }})}>
                <Text style={ Styles.verticalListOptionName }>{ attendantAvailable.name }</Text>
            </Pressable>
        );
    }

    return (
        <ScrollView style={{ backgroundColor: '#FFFFFF' }}>
            <View style={ Styles.page }>
                <View style={ Styles.infoBox }>
                    <Text style={ Styles.infoBoxPrimaryHeading }>{ appointmentDetails.service.name }</Text>
                    <View style={ Styles.row }>
                        <Text style={ Styles.infoBoxText }>{ appointmentDetails.business.name }</Text>
                        <Text style={ Styles.infoBoxText }>$ { appointmentDetails.service.appointmentPrice }</Text>
                    </View>
                </View>
                <View>
                    <Text style={ Styles.h2 }>Time</Text>
                    <View style={ Styles.row }>
                        <Text style={ Styles.bodyText }>{ appointmentDetails.time.startTime }</Text>
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
                </View>
            </View>
        </ScrollView>
    );

};