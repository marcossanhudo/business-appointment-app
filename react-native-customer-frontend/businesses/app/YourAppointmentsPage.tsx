import React from "react";
import { ScrollView, View, Text } from "react-native";
import { Menu } from "@/components/Menu/Menu";
import Styles from "@/constants/Styles";
import { AppPageLink } from "@/components/App Page Link/AppPageLink";

export const YourAppointmentsPage = ({ navigation, route }: any) => {

    return(
        <ScrollView>
            <View>
                <Text style={ Styles.h2 }>Today's appointments</Text>
                <Menu />
            </View>
            <View>
                <Text style={ Styles.h2 }>Later appointments</Text>
                <Menu />
            </View>
            <View>
                <AppPageLink
                    label="See all upcoming appointments" />
                <AppPageLink
                    label="See past appointments" />
            </View>
        </ScrollView>
    );

}