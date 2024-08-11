import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View, StyleSheet, Button } from 'react-native';
import styles from '@/constants/Styles';
import { formatTime } from '@/scripts/formatting';

export const BusinessPage = ({ navigation, route }: any) => {

    const BUSINESS_INFO_ENDPOINT = 'http://localhost:3000/businesses/' + route.params.id;

    const [businessInfo, setBusinessInfo] = useState({
        name: null,
        description: null,
        openingTime: null,
        closingTime: null,
        address: null
    });
    const [services, setServices] = useState({});

    React.useEffect(() => {
        fetch(BUSINESS_INFO_ENDPOINT, { method: "GET" })
            .then(res => res.json())
            .then(json => setBusinessInfo(json))
            .catch(error => console.log(error.message));
    }, []);

    return(
        <ScrollView style={{ backgroundColor: '#FFFFFF' }}>
            <View style={ styles.page }>
                <Text style={ styles.h1 }>{ businessInfo.name ? businessInfo.name : "Loading" }</Text>
                <Text style={ styles.descriptionText }>{ businessInfo.description ? businessInfo.description : "Loading" }</Text>
                <View style={ styles.box }>
                    <Text style={ styles.descriptionText }>Open from { businessInfo.openingTime ? formatTime(businessInfo.openingTime) : "Loading" } to { businessInfo.closingTime ? formatTime(businessInfo.closingTime) : "Loading" }</Text>
                    <View style={ styles.row }>
                        <Text style={ styles.descriptionText }>{ businessInfo.address ? businessInfo.address : "Loading" }</Text>
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
            </View>
        </ScrollView>
    );

};