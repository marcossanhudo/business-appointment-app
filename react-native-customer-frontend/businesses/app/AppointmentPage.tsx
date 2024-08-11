import React, { useState, useEffect } from 'react';
import { ScrollView, View, FlatList, Text } from 'react-native';
import Styles from '@/constants/Styles';

export const AppointmentPage = ({ navigation, route }: any) => {

    const [businessInfo, setBusinessInfo] = useState(route.params.business);
    const [serviceInfo, setService] = useState(route.params.service);
    const [timesAvailable, setTimesAvailable] = useState([{

    }]);
    const [attendantsAvailable, setAttendantsAvailable] = useState([{
        
    }]);

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
                </View>
                <View>
                    <Text style={ Styles.h2 }>Attendants available</Text>
                </View>
            </View>
        </ScrollView>
    );

};