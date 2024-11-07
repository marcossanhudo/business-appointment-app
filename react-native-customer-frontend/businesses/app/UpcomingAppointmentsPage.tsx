import React, { useState } from "react";
import { ScrollView, View, Text } from "react-native";

export const UpcomingAppointmentsPage = ({ navigation, route }: any) => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const [months, setMonths] = useState([]);
    const [collapseMonthsStartingOnIndex, setCollapseMonthsStartingOnIndex] = useState(null);

    return(
        <ScrollView>
            {
                months.length > 0
                ? <View>

                </View>
                : <View>
                    <Text>You have no upcoming appointments.</Text>
                </View>
            }
        </ScrollView>
    );

}