import React, { useState } from 'react';
import { ScrollView, View, Text } from 'react-native';
import Styles from '@/constants/Styles';
import { getLocaleDateTimeString, getLocaleTimeString } from '@/scripts/formatting';
import { getAllBusinesses } from '@/networking/controllers/businessController';
import { Menu } from '@/components/Menu/Menu';
import { MenuItem } from '@/components/Menu Item/MenuItem';
import { AppPageLink } from '@/components/App Page Link/AppPageLink';
import { getFirstUpcomingAppointment } from '@/networking/controllers/customerController';
import BusinessDTO from '@/dto/BusinessDTO';
import AppointmentDTO from '@/dto/AppointmentDTO';

const HomePage = ({ navigation }: any) => {

    const TEST_CUSTOMER_ID = "66b84b5f4d019d6b83778176";
    const customerId = TEST_CUSTOMER_ID;

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [businesses, setBusinesses] = useState<Array<BusinessDTO>>([]);
    const [firstUpcomingAppointment, setFirstUpcomingAppointment] = useState<AppointmentDTO | null>(null);

    React.useEffect(() => {
        getFirstUpcomingAppointment(customerId)
            .then(appointment => setFirstUpcomingAppointment(appointment))
            .catch(error => { setError(true); console.log(error); });

        getAllBusinesses()
            .then(businesses => setBusinesses(businesses))
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
        if (firstUpcomingAppointment !== null)
            return(
                <MenuItem
                    name={ firstUpcomingAppointment.service.name }
                    onPress={ navigation.navigate("Appointment Details", { id: firstUpcomingAppointment._id }) }
                    firstLine={ getLocaleDateTimeString(firstUpcomingAppointment.startDateTime) }
                    secondLine={ firstUpcomingAppointment.business.name } />
            )
    }

    return(
        <ScrollView style={{ backgroundColor: '#FFFFFF' }}>
            <View style={ Styles.page }>
                <Text style={ Styles.h1 }>Businesses</Text>
                {
                    !loading && firstUpcomingAppointment !== null
                    ? <View style={ Styles.column }>
                        <Text style={ Styles.h2 }>Your next appointment</Text>
                        { renderFirstUpcomingAppointment() }
                    </View>
                    : <Text>What do you need today?</Text>
                }
                <AppPageLink
                    label="See all your appointments"
                    onPress={ () => navigation.navigate("Your Appointments") } />
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