import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View, StyleSheet, Button } from 'react-native';

export function BusinessPage({ navigation, route }: any) {

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
                    <Text style={ styles.descriptionText }>Open from { businessInfo.openingTime ? businessInfo.openingTime : "Loading" } to { businessInfo.closingTime ? businessInfo.closingTime : "Loading" }</Text>
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

}

const styles = StyleSheet.create({
    page: {
        backgroundColor: "#FFFFFF",
        padding: 24,
        display: 'flex',
        flexDirection: 'column',
        gap: 24
    },
    h1: {
        fontSize: 24,
        fontWeight: 700
    },
    h2: {
        fontSize: 18,
        fontWeight: 700
    },
    descriptionText: {
        fontSize: 14,
        fontWeight: 500
    },
    descriptionHeading: {
        fontSize: 14,
        fontWeight: 700
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 16,
        alignContent: 'center'
    },
    box: { 
        padding: 16,
        borderColor: "#CCCCCC",
        borderWidth: 1,
        borderRadius: 8,
        display: 'flex',
        flexDirection: 'column',
        gap: 16
    }
});