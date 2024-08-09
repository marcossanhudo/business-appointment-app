import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, FlatList, View, Text, Pressable } from 'react-native';

const HomePage = ({ navigation }: any) => {

    const BUSINESSES_ENDPOINT = 'http://localhost:3000/businesses';

    const [loading, setLoading] = useState(true);

    const [businesses, setBusinesses] = useState([
        {
            _id: String,
            name: "",
            openingTime: String,
            closingTime: String,
            address: String
        }
    ]);

    React.useEffect(() => {
        fetch(BUSINESSES_ENDPOINT)
            .then(response => response.json())
            .then(json => setBusinesses(json))
            .catch(error => console.log(error))
            .finally(() => setLoading(false));
    }, [ ]);

    const renderBusiness = (business: any) => {

        console.log (business);
        return(
            <Pressable style={ styles.businessListing }
                onPress={ () => navigation.navigate("Business", { id: business._id }) }>
                <Text style={ styles.businessName }>{ business.name }</Text>
                <View
                    style={ styles.businessDescription }>
                    <Text>Open from { business.openingTime } to { business.closingTime }</Text>
                    <Text>{ business.address }</Text>
                </View>
            </Pressable>);
    }

    return(
        <ScrollView style={{ backgroundColor: '#FFFFFF' }}>
            <View style={ styles.page }>
                <Text style={ styles.h1 }>Businesses</Text>
                <Text>What do you need today?</Text>
                <Text style={ styles.h2 }>Places</Text>
                {   
                    loading
                    ? <Text>Loading</Text>
                    : <View>
                        <FlatList
                            data={ businesses }
                            horizontal={ true }
                            renderItem={ ({ item }) => renderBusiness(item) } />
                    </View>
                }
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
    businessListing: {
        padding: 16,
        marginRight: 16,
        backgroundColor: "#EAEAEA",
        borderWidth: 1,
        borderColor: "#CCCCCC",
        borderRadius: 8,
        width: 240,
        display: 'flex',
        flexDirection: 'column',
        gap: 16
    },
    businessName: {
        fontSize: 18,
        fontWeight: 700
    },
    businessDescription: {
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        fontSize: 14,
        fontWeight: 400
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

export default HomePage;