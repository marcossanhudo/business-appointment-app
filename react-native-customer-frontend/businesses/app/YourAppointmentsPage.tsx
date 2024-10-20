import React, { useEffect, useState } from "react";
import { ScrollView, View, Text } from "react-native";
import { Menu } from "@/components/Menu/Menu";
import Styles from "@/constants/Styles";
import { AppPageLink } from "@/components/App Page Link/AppPageLink";
import { MenuItem } from "@/components/Menu Item/MenuItem";
import { getLocaleDateTimeString } from "@/scripts/formatting";

export const YourAppointmentsPage = ({ navigation, route }: any) => {

    const [todaysAppointments, setTodaysAppointments] = useState([]);

    const [laterAppointments, setLaterAppointments] = useState([]);

    useEffect(() => {
        
    }, []);

    const renderAppointment = (appointment: any) => {
        return(
            <MenuItem
                name={ appointment.service.name }
                onPress={ () => {} }
                firstLine={ getLocaleDateTimeString(appointment.startDateTime) }
                secondLine={ appointment.business.name } />
        );
    }

    return(
        <ScrollView>
            { 
                todaysAppointments.length > 0 &&
                <View>
                    <Text style={ Styles.h2 }>Today's appointments</Text>
                    <Menu
                        items={ todaysAppointments }
                        accessibilityLabel="Today's appointments list"
                        renderItem={ renderAppointment } />
                </View>
            }
            { 
                laterAppointments.length > 0 &&
                <View>
                    <Text style={ Styles.h2 }>Later appointments</Text>
                    <Menu
                        items={ laterAppointments }
                        accessibilityLabel="Later appointments list"
                        renderItem={ renderAppointment } />
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