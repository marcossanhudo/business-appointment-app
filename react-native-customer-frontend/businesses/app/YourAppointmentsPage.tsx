import React, { useEffect, useState } from "react";
import { ScrollView, View, Text } from "react-native";
import { Menu } from "@/components/Menu/Menu";
import Styles from "@/constants/Styles";
import { AppPageLink } from "@/components/App Page Link/AppPageLink";
import { MenuItem } from "@/components/Menu Item/MenuItem";
import { getLocaleDateTimeString } from "@/scripts/formatting";
import { getLaterAppointments, getTodaysAppointments } from "@/networking/controllers/customerController";
import AppointmentDTO from "@/dto/AppointmentDTO";

export const YourAppointmentsPage = ({ navigation, route }: any) => {

    const TEST_CUSTOMER_ID = "66b84b5f4d019d6b83778176";

    const customerId = TEST_CUSTOMER_ID;

    const [todaysAppointments, setTodaysAppointments] = useState<Array<AppointmentDTO>>([]);

    const [laterAppointments, setLaterAppointments] = useState<Array<AppointmentDTO>>([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState(false);

    useEffect(() => {
        getTodaysAppointments(customerId)
        .then(todaysAppointments => setTodaysAppointments(todaysAppointments))
        .then(() => getLaterAppointments(customerId))
        .then(laterAppointments => setLaterAppointments(laterAppointments))
        .then(() => setLoading(false))
        .catch(error => { setError(true); console.log(error); })
    }, []);

    const renderAppointment = (appointment: AppointmentDTO) => {
        return(
            <MenuItem
                name={ appointment.service.name }
                onPress={ () => {} }
                firstLine={ getLocaleDateTimeString(appointment.startDateTime) }
                secondLine={ appointment.business.name } />
        );
    }

    return(
        <ScrollView style={ Styles.page }>
            {
                loading
                ? <View>
                    <Text>Loading.</Text>
                </View>
                : error
                ? <View>
                    <Text>An error occured. Please try again later.</Text>
                </View>
                : <View>
                        <View style={ Styles.verticalListContainer }>
                            <Text style={ Styles.h2 }>Today's appointments</Text>
                            { 
                                todaysAppointments.length > 0
                                ? <View>
                                    <Menu
                                        items={ todaysAppointments }
                                        accessibilityLabel="Today's appointments list"
                                        renderItem={ renderAppointment } />
                                </View>
                                : <View>
                                    <Text style={[ Styles.bodyText, { marginTop: 48, marginBottom: 48, textAlign: "center" } ]}>You have no later appointments.</Text>
                                </View>
                            }
                        </View>
                        <View style={ Styles.verticalListContainer }>
                            <Text style={ Styles.h2 }>Later appointments</Text>
                            { 
                                laterAppointments.length > 0
                                ? <View>
                                    <Menu
                                        items={ laterAppointments }
                                        accessibilityLabel="Later appointments list"
                                        renderItem={ renderAppointment } />
                                </View>
                                : <View>
                                    <Text style={[ Styles.bodyText, { marginTop: 48, marginBottom: 48, textAlign: "center" } ]}>You have no later appointments.</Text>
                                </View>
                            }
                        </View>
                </View>
            }
            <View>
                <AppPageLink
                    label="See all upcoming appointments" />
                <AppPageLink
                    label="See past appointments" />
            </View>
        </ScrollView>
    );

}