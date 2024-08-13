import React, { useState, useEffect } from 'react';
import { ScrollView, View, FlatList, Text, Pressable } from 'react-native';
import Styles from '@/constants/Styles';

export const AppointmentTimePage = ({ navigation, route }: any) => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    
    const [businessInfo, setBusinessInfo] = useState(route.params.business);
    const [serviceInfo, setService] = useState(route.params.service);

    const [timesAvailable, setTimesAvailable] = useState([{

    }]);

    React.useEffect(() => {
        setTimesAvailable([
            { startTime: "8 AM", endTime: "9 AM" },
            { startTime: "9 AM", endTime: "10 AM" },
            { startTime: "10 AM", endTime: "11 AM" },
            { startTime: "11 AM", endTime: "12 PM" },
            { startTime: "12 AM", endTime: "1 PM" },
            { startTime: "1 PM", endTime: "2 PM" },
            { startTime: "2 PM", endTime: "3 PM" },
            { startTime: "3 PM", endTime: "4 PM" },
            { startTime: "4 PM", endTime: "5 PM" }
        ]);
        setLoading(false);
    }, []);

    const renderTimeAvailable = (timeAvailable: any) => {
        return (
            <Pressable style={ Styles.verticalListOption }
                onPress={ () => navigation.navigate("Appointment Attendant", { business: businessInfo, service: serviceInfo, appointmentTime: timeAvailable }) }>
                <Text style={ Styles.verticalListOptionName }>{ timeAvailable.startTime }</Text>
                <Text style={ Styles.verticalListOptionDetails }>until { timeAvailable.endTime }</Text>
            </Pressable>
        );
    };

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