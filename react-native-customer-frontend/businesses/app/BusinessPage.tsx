import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { InlineButton } from '@/components/Buttons/Inline Button/InlineButton';
import Styles from '@/constants/Styles';
import { getLocaleTimeString } from '@/scripts/formatting';
import { getBusiness } from '@/networking/controllers/businessController';
import { getServicesFromBusiness } from '@/networking/controllers/serviceController';
import { MenuItem } from '@/components/Menu Item/MenuItem';
import { Menu } from '@/components/Menu/Menu';
import BusinessDTO from '@/dto/BusinessDTO';
import ServiceDTO from '@/dto/ServiceDTO';

export const BusinessPage = ({ navigation, route }: any) => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [businessInfo, setBusinessInfo] = useState<BusinessDTO | null>(null);
    const [services, setServices] = useState<Array<ServiceDTO>>([]);

    React.useEffect(() => {
        getBusiness(route.params.id)
            .then(business => setBusinessInfo(business))
            .catch(error => { setError(true); console.log(error.message); })
            .finally(() => setLoading(false));
    }, []);

    React.useEffect(() => {
        getServicesFromBusiness(route.params.id)
            .then(services => setServices(services))
            .then(() => console.log(services))
            .catch(error => { setError(true); console.log(error.message); });
    }, []);

    const renderService = (service: any) => {
        return(
            <MenuItem
                name={ service.name }
                onPress={ () => navigation.navigate("Appointment Time", { appointmentDetails: { business: businessInfo, service: service } }) }
                firstLine={ "$ " + service.appointmentPrice }
                secondLine={ service.appointmentDurationInMinutes + " minutes" }
                horizontalDetails={ true } />
            );
    }

    return(
        <ScrollView style={{ backgroundColor: '#FFFFFF' }}>
            {
                loading
                ? <View style={ Styles.page }>
                    <Text>Loading</Text>
                </View>
                : error || businessInfo === null
                ? <View style={ Styles.page }>
                    <Text>An error occured. Please try again later.</Text>
                </View>
                : <View style={ Styles.page }>
                    <Text style={ Styles.h1 }>{ businessInfo.name }</Text>
                    <Text style={ Styles.infoBoxBodyText }>{ businessInfo.description }</Text>
                    <View style={ Styles.infoBox }>
                        <Text style={ Styles.infoBoxBodyText }>Open from { getLocaleTimeString(businessInfo.openingTime) } to { getLocaleTimeString(businessInfo.closingTime) }</Text>
                        <View style={ Styles.row }>
                            <Text style={ Styles.infoBoxBodyText }>{ businessInfo.address }</Text>
                            <InlineButton
                                label="Map" />
                        </View>
                        <View style={ Styles.row }>
                            <Text style={ Styles.infoBoxSecondaryHeading }>Payment options</Text>
                            <View>
                                <InlineButton
                                    label="Review" />
                            </View>
                        </View>
                    </View>
                    <View style={ Styles.verticalListContainer }>
                        <Text style={ Styles.h2 }>Services</Text>
                        <Menu
                            items={ services }
                            renderItem={ renderService }
                            accessibilityLabel="Services list"
                            accessibilityHint="Lets you choose a service to book an appointment." />  
                    </View>
                </View>
            } 
        </ScrollView>
    );

};