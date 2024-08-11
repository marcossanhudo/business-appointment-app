import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View, StyleSheet, Button, Pressable } from 'react-native';
import styles from '@/constants/Styles';
import { formatTime } from '@/scripts/formatting';
import { FlatList } from 'react-native-gesture-handler';

export const BusinessPage = ({ navigation, route }: any) => {

    const BUSINESS_INFO_ENDPOINT = 'http://localhost:3000/businesses/' + route.params.id;
    const SERVICE_INFO_ENDPOINT = 'http://localhost:3000/services/?businessId=' + route.params.id;

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [businessInfo, setBusinessInfo] = useState({
        name: "",
        description: "",
        openingTime: "",
        closingTime: "",
        address: ""
    });
    const [services, setServices] = useState([{
        _id: "",
        name: "",
        appointmentDurationInMinutes: 0,
        appointmentPrice: 0,
        businessId: ""
    }]);

    React.useEffect(() => {
        fetch(BUSINESS_INFO_ENDPOINT, { method: "GET" })
            .then(res => res.json())
            .then(json => setBusinessInfo(json))
            .catch(error => { setError(true); console.log(error.message); })
            .finally(() => setLoading(false));
    }, []);

    React.useEffect(() => {
        fetch(SERVICE_INFO_ENDPOINT, { method: "GET" })
            .then(res => res.json())
            .then(json => setServices(json))
            .then(() => console.log(services))
            .catch(error => { setError(true); console.log(error.message); });
    }, []);

    const renderService = (service: any) => {
        return(
            <Pressable style={ styles.serviceListing }>
                <Text style={ styles.serviceName }>{ service.name }</Text>
                <View style={ styles.serviceDetails }>
                    <Text>$ { service.appointmentPrice }</Text>
                    <Text>{ service.appointmentDurationInMinutes } minutes</Text>
                </View>
            </Pressable>);
    }

    return(
        <ScrollView style={{ backgroundColor: '#FFFFFF' }}>
            {
                loading
                ? <View style={ styles.page }>
                    <Text>Loading</Text>
                </View>
                : error
                ? <View style={ styles.page }>
                    <Text>An error occured. Please try again later.</Text>
                </View>
                : <View style={ styles.page }>
                    <Text style={ styles.h1 }>{ businessInfo.name }</Text>
                    <Text style={ styles.descriptionText }>{ businessInfo.description }</Text>
                    <View style={ styles.box }>
                        <Text style={ styles.descriptionText }>Open from { formatTime(businessInfo.openingTime) } to { formatTime(businessInfo.closingTime) }</Text>
                        <View style={ styles.row }>
                            <Text style={ styles.descriptionText }>{ businessInfo.address }</Text>
                            <Button title='Map' />
                        </View>
                        <View style={ styles.row }>
                            <Text style={ styles.descriptionHeading }>Payment options</Text>
                            <View>
                                <Button title='Review' />
                            </View>
                        </View>
                    </View>
                    <Text style={ styles.h2 }>Services</Text>
                    <FlatList
                        data={ services }
                        renderItem={ ({item}) => renderService(item) }
                    />
                </View>
            } 
        </ScrollView>
    );

};