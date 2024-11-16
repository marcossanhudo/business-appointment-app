import React, { useState } from 'react';
import { ScrollView, View, Text } from 'react-native';
import Styles from '@/constants/Styles';
import { getServiceAvailableTimes } from '@/networking/controllers/serviceController';
import { getLocaleTimeString } from '@/scripts/formatting';
import { DatePicker } from '@/components/Date Picker/DatePicker';
import { Menu } from '@/components/Menu/Menu';
import { MenuItem } from '@/components/Menu Item/MenuItem';
import AvailableTimeDTO from '@/dto/AvailableTimeDTO';

export const AppointmentTimePage = ({ navigation, route }: any) => {

    const appointmentDetails = route.params.appointmentDetails;

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const [timesAvailable, setTimesAvailable] = useState<Array<AvailableTimeDTO>>([]);
    const [appointmentDate, setAppointmentDate] = useState(Date.now());

    React.useEffect(() => {
        try {
            getServiceAvailableTimes(appointmentDetails.service._id, appointmentDate)
            .then(availableTimes => setTimesAvailable(availableTimes))
            .catch(error => { setError(true); console.log(error); })
            .finally(() => setLoading(false));
        } catch (error) {
            console.log(error);
        }
    }, [appointmentDate]);

    const renderTimeAvailable = (timeAvailable: any) => {
        return (
            <MenuItem
                name={ getLocaleTimeString(timeAvailable.startTime) }
                onPress={ () => navigation.navigate("Appointment Attendant", { appointmentDetails: { ...appointmentDetails, time: timeAvailable } }) }
                firstLine={ "until " + getLocaleTimeString(timeAvailable.endTime) } />
        );
    };

    return (
        <ScrollView style={{ backgroundColor: '#FFFFFF' }}>
            <View style={ Styles.page }>
                <View style={ Styles.infoBox }>
                    <Text style={ Styles.infoBoxPrimaryHeading }>{ appointmentDetails.service.name }</Text>
                    <View style={ Styles.row }>
                        <Text style={ Styles.infoBoxBodyText }>{ appointmentDetails.business.name }</Text>
                        <Text style={ Styles.infoBoxBodyText }>$ { appointmentDetails.service.appointmentPrice }</Text>
                    </View>
                </View>
                <View style={ Styles.verticalListContainer }>
                    <Text style={ Styles.h2 }>Pick a time</Text>
                    <Text style={ Styles.h3 }>Date</Text>
                    <DatePicker
                        date={ appointmentDate }
                        setDate={ setAppointmentDate }
                        min={ Date.now() } />
                    <Text style={ Styles.h3 }>Time</Text>
                    {
                        loading
                        ? <View>
                            <Text>Loading.</Text>
                        </View>
                        : error
                        ? <View>
                            <Text>An error occured. Please try again later.</Text>
                        </View>
                        : <Menu
                            items={ timesAvailable }
                            renderItem={ renderTimeAvailable }
                            accessibilityLabel="Available times menu"
                            accessibilityHint="Lets you choose the time for your appointment." />
                    }
                </View>
            </View>
        </ScrollView>
    );

};