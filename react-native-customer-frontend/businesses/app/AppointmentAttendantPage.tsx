import React, { useState, useEffect } from 'react';
import { ScrollView, View, FlatList, Text, Pressable, Button } from 'react-native';
import Styles from '@/constants/Styles';

export const AppointmentAttendantPage = ({ navigation, route }: any) => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const [businessInfo, setBusinessInfo] = useState(route.params.business);
    const [serviceInfo, setServiceInfo] = useState(route.params.service);
    const [apppointmentTime, setAppointmentTime] = useState(route.params.appointmentTime);

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
            <Pressable style={ Styles.verticalListOption }>
                <Text style={ Styles.verticalListOptionName }>{ attendantAvailable.name }</Text>
            </Pressable>
        );
    }

    return (
        <ScrollView style={{ backgroundColor: '#FFFFFF' }}>
            <View style={ Styles.page }>
                <View style={ Styles.infoBox }>
                    <Text style={ Styles.infoBoxPrimaryHeading }>{ serviceInfo.name }</Text>
                    <View style={ Styles.row }>
                        <Text style={ Styles.infoBoxText }>{ businessInfo.name }</Text>
                        <Text style={ Styles.infoBoxText }>$ { serviceInfo.appointmentPrice }</Text>
                    </View>
                </View>
                <View>
                    <Text style={ Styles.h2 }>Time</Text>
                    <View style={ Styles.row }>
                        <Text style={ Styles.bodyText }>{ apppointmentTime.startTime }</Text>
                        <Button title="Change" />
                    </View>
                </View>
                <View>
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