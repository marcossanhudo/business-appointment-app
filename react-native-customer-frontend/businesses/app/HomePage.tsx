import React, { useState } from 'react';
import { ScrollView, View, Text } from 'react-native';
import Styles from '@/constants/Styles';
import { getLocaleTimeString } from '@/scripts/formatting';
import { getAllBusinesses } from '@/networking/controllers/businessController';
import { Menu } from '@/components/Menu/Menu';
import { MenuItem } from '@/components/Menu Item/MenuItem';
import { AppPageLink } from '@/components/App Page Link/AppPageLink';
import { getFirstUpcomingAppointment } from '@/networking/controllers/customerController';

const HomePage = ({ navigation }: any) => {

    const TEST_CUSTOMER_ID = "66b84b5f4d019d6b83778176";
    const customerId = TEST_CUSTOMER_ID;

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
    const [firstUpcomingAppointment, setFirstUpcomingAppointment] = useState({
        serviceName: "",
        appointmentStartDateTime: 0,
        businessName: ""
    });

    React.useEffect(() => {
        /*getFirstUpcomingAppointment(customerId, Date.now())
            .then(json => setFirstUpcomingAppointment(json))
            .catch(error => { setError(true); console.log(error); });*/

        getAllBusinesses()
            .then(json => setBusinesses(json))
            .catch(error => { setError(true); console.log(error); })
            .finally(() => setLoading(false));
    }, []);

    const renderBusiness = (business: any) => {
        return(
            <MenuItem
                name={ business.name }
                onPress={ () => navigation.navigate("Business", { id: business._id }) }
                firstLine={ "Open from " + getLocaleTimeString(business.openingTime) + " to " + getLocaleTimeString(business.closingTime) }
                secondLine={ business.address }
                inHorizontalList={ true } />
            );
    }

    const renderFirstUpcomingAppointment = () => {
        return(
            <MenuItem
                name={ firstUpcomingAppointment.serviceName }
                firstLine={ firstUpcomingAppointment.appointmentStartDateTime }
                secondLine={ firstUpcomingAppointment.businessName } />
        )
    }

    return(
        <ScrollView style={{ backgroundColor: '#FFFFFF' }}>
            <View style={ Styles.page }>
                <Text style={ Styles.h1 }>Businesses</Text>
                {
                    firstUpcomingAppointment
                    ? <View style={ Styles.column }>
                        <Text style={ Styles.h2 }>Your next appointment</Text>
                        { renderFirstUpcomingAppointment() }
                        <AppPageLink label="See all your appointments" />
                    </View>
                    : <Text>What do you need today?</Text>
                }
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