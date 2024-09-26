import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View, Pressable } from 'react-native';
import { Button } from '@/components/Button/Button';
import Styles from '@/constants/Styles';
import { formatTime } from '@/scripts/formatting';
import { FlatList } from 'react-native-gesture-handler';
import { getBusiness } from '@/networking/controllers/businessController';
import { getServicesFromBusiness } from '@/networking/controllers/serviceController';

export const BusinessPage = ({ navigation, route }: any) => {

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
        getBusiness(route.params.id)
            .then(json => setBusinessInfo(json))
            .catch(error => { setError(true); console.log(error.message); })
            .finally(() => setLoading(false));
    }, []);

    React.useEffect(() => {
        getServicesFromBusiness(route.params.id)
            .then(json => setServices(json))
            .then(() => console.log(services))
            .catch(error => { setError(true); console.log(error.message); });
    }, []);

    const renderService = (service: any) => {
        return(
            <Pressable style={ Styles.verticalListOption }
                onPress={ () => navigation.navigate("Appointment Time", { appointmentDetails: { business: businessInfo, service: service } }) }>
                <Text style={ Styles.verticalListOptionName }>{ service.name }</Text>
                <View style={ Styles.verticalListOptionDetails }>
                    <Text>$ { service.appointmentPrice }</Text>
                    <Text>{ service.appointmentDurationInMinutes } minutes</Text>
                </View>
            </Pressable>);
    }

    return(
        <ScrollView style={{ backgroundColor: '#FFFFFF' }}>
            {
                loading
                ? <View style={ Styles.page }>
                    <Text>Loading</Text>
                </View>
                : error
                ? <View style={ Styles.page }>
                    <Text>An error occured. Please try again later.</Text>
                </View>
                : <View style={ Styles.page }>
                    <Text style={ Styles.h1 }>{ businessInfo.name }</Text>
                    <Text style={ Styles.infoBoxBodyText }>{ businessInfo.description }</Text>
                    <View style={ Styles.infoBox }>
                        <Text style={ Styles.infoBoxBodyText }>Open from { businessInfo.openingTime } to { businessInfo.closingTime }</Text>
                        <View style={ Styles.row }>
                            <Text style={ Styles.infoBoxBodyText }>{ businessInfo.address }</Text>
                            <Button
                                type="inline"
                                label="Map" />
                        </View>
                        <View style={ Styles.row }>
                            <Text style={ Styles.infoBoxSecondaryHeading }>Payment options</Text>
                            <View>
                                <Button
                                    type="inline"
                                    label="Review" />
                            </View>
                        </View>
                    </View>
                    <View style={ Styles.verticalListContainer }>
                        <Text style={ Styles.h2 }>Services</Text>
                        <FlatList
                            data={ services }
                            renderItem={ ({item}) => renderService(item) }
                        />  
                    </View>
                </View>
            } 
        </ScrollView>
    );

};