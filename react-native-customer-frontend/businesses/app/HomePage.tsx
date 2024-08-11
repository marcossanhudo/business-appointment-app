import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, FlatList, View, Text, Pressable } from 'react-native';
import Styles from '@/constants/Styles';
import { formatTime } from '@/scripts/formatting';

const HomePage = ({ navigation }: any) => {

    const BUSINESSES_ENDPOINT = 'http://localhost:3000/businesses';

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [businesses, setBusinesses] = useState([
        {
            _id: String,
            name: String,
            openingTime: String,
            closingTime: String,
            address: String
        }
    ]);

    React.useEffect(() => {
        fetch(BUSINESSES_ENDPOINT)
            .then(response => response.json())
            .then(json => setBusinesses(json))
            .catch(error => { setError(true); console.log(error); })
            .finally(() => setLoading(false));
    }, [ ]);

    const renderBusiness = (business: any) => {
        return(
            <Pressable style={ Styles.businessListing }
                onPress={ () => navigation.navigate("Business", { id: business._id }) }>
                <Text style={ Styles.businessName }>{ business.name }</Text>
                <View
                    style={ Styles.businessDescription }>
                    <Text>Open from { formatTime(business.openingTime) } to { formatTime(business.closingTime) }</Text>
                    <Text>{ business.address }</Text>
                </View>
            </Pressable>);
    }

    return(
        <ScrollView style={{ backgroundColor: '#FFFFFF' }}>
            <View style={ Styles.page }>
                <Text style={ Styles.h1 }>Businesses</Text>
                <Text>What do you need today?</Text>
                <Text style={ Styles.h2 }>Places</Text>
                {   
                    loading
                    ? <Text>Loading</Text>
                    : error
                    ? <Text>An error occured. Please try again later.</Text>
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

export default HomePage;