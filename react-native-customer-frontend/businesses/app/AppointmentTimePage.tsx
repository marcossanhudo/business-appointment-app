import React, { useState, useEffect } from 'react';
import { ScrollView, View, FlatList, Text, Pressable } from 'react-native';
import Styles from '@/constants/Styles';

export const AppointmentTimePage = ({ navigation, route }: any) => {

    const appointmentDetails = route.params.appointmentDetails;

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const [timesAvailable, setTimesAvailable] = useState([{

    }]);

    React.useEffect(() => {
        setTimesAvailable([{}]);
        setLoading(false);
    }, []);

    const renderTimeAvailable = (timeAvailable: any) => {
        return (
            <Pressable style={ Styles.verticalListOption }
                onPress={ () => navigation.navigate("Appointment Attendant", { appointmentDetails: { ...appointmentDetails, time: timeAvailable } }) }>
                <Text style={ Styles.verticalListOptionName }>{ timeAvailable.startTime }</Text>
                <Text style={ Styles.verticalListOptionDetails }>until { timeAvailable.endTime }</Text>
            </Pressable>
        );
    };

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
                <View style={ Styles.verticalListContainer }>
                    <Text style={ Styles.h2 }>Times available</Text>
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
                            data={ timesAvailable }
                            renderItem={ ({item}) => renderTimeAvailable(item) }/>
                    }
                </View>
            </View>
        </ScrollView>
    );

};