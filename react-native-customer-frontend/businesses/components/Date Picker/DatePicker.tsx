import Styles from './Styles';
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { Button } from '@/components/Button/Button';
import { getLocaleDateString } from '@/scripts/formatting';

export const DatePicker = ({ date, setDate, min, max }: any) => {

    const DAY_DURATION_IN_MILLISECONDS = 24 * 60 * 60 * 1000;
    
    const accessibilityLanguage = "en-US";
    const [disablePreviousDayButton, setDisablePreviousDayButton] = useState(Boolean);
    const [disableNextDayButton, setDisableNextDayButton] = useState(Boolean);

    const displayedDate = () => {
        return getLocaleDateString(date);
    }

    const narratedDate = () => {
        return "Selected date: " + displayedDate();
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
            style={ Styles.picker }
        >
            <Button
                type="inline"
                label="<"
                disabled={ disablePreviousDayButton }
                accessibilityLabel="Previous day"
                onPress={ () => treatDateChange(date - DAY_DURATION_IN_MILLISECONDS) } />
            <Text
                accessibilityLabel={ narratedDate() }
                style={ Styles.selectedDate }
            >{ displayedDate() }</Text>
            <Button
                type="inline"
                label=">"
                disabled={ disableNextDayButton }
                accessibilityLabel="Next day"
                onPress={ () => treatDateChange(date + DAY_DURATION_IN_MILLISECONDS) } />
        </View>
    );
}