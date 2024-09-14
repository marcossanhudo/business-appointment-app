import Styles from '@/constants/Styles';
import { ignoreTime, midnight } from '@/scripts/formatting';
import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';

export const DatePicker = ({ date, setDate, min, max }: any) => {

    const DAY_DURATION_IN_MILLISECONDS = 24 * 60 * 60 * 1000;
    
    const accessibilityLanguage = "en-US";
    const [disablePreviousDayButton, setDisablePreviousDayButton] = useState(Boolean);
    const [disableNextDayButton, setDisableNextDayButton] = useState(Boolean);

    const displayedDate = () => {
        return ignoreTime(new Date(date).toISOString());
    }

    const calculateDay = (date: number) => {
        return Math.floor(date / DAY_DURATION_IN_MILLISECONDS);
    }

    const treatDateChange = (date: number) => {
        if (min && calculateDay(date) <= calculateDay(min))
            setDisablePreviousDayButton(true);
        else
            setDisablePreviousDayButton(false);

        if (max && calculateDay(date) >= calculateDay(max))
            setDisableNextDayButton(true);
        else
            setDisableNextDayButton(false);

        setDate(date);
    }

    useEffect(() => {
        treatDateChange(date);
    }, []);

    return (
        <View
            accessible={ true }
            accessibilityLabel="Date picker"
            accessibilityHint="Sets the date"
            accessibilityLanguage={ accessibilityLanguage }
            style={ Styles.datePicker }
        >
            <Button title="<"
                disabled={ disablePreviousDayButton }
                accessibilityLabel="Previous day"
                onPress={ () => treatDateChange(date - DAY_DURATION_IN_MILLISECONDS) } />
            <Text
                accessibilityLabel={ "Selected date: " + date }
                style={ Styles.datePickerSelectedDate }
            >{ displayedDate() }</Text>
            <Button title=">"
                disabled={ disableNextDayButton }
                accessibilityLabel="Next day"
                onPress={ () => treatDateChange(date + DAY_DURATION_IN_MILLISECONDS) } />
        </View>
    );
}