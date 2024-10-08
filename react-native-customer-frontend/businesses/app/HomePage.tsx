import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, FlatList, View, Text, Pressable } from 'react-native';
import Styles from '@/constants/Styles';
import { formatTime } from '@/scripts/formatting';
import { getAllBusinesses } from '@/networking/controllers/businessController';
import { Menu } from '@/components/Menu/Menu';
import { MenuItem } from '@/components/Menu Item/MenuItem';

const HomePage = ({ navigation }: any) => {

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
        getAllBusinesses()
            .then(json => setBusinesses(json))
            .catch(error => { setError(true); console.log(error); })
            .finally(() => setLoading(false));
    }, [ ]);

    const renderBusiness = (business: any) => {
        return(
            <MenuItem
                name={ business.name }
                onPress={ () => navigation.navigate("Business", { id: business._id }) }
                firstLine={ "Open from " + business.openingTime + " to " + business.closingTime }
                secondLine={ business.address }
                inHorizontalList={ true } />
            );
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
                        <Menu
                            items={ businesses }
                            accessibilityLabel="Business list"
                            accessibilityHint="Shows businesses where you can book appointments."
                            horizontal={ true }
                            renderItem={ renderBusiness } />
                    </View>
                }
            </View>
        </ScrollView>
    );

}

export default HomePage;