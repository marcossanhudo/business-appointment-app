import Styles from '@/constants/Styles';
import { ignoreTime, midnight } from '@/scripts/formatting';
import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';

export const DatePicker = ({ date, setDate }: any) => {

    const DAY_DURATION_IN_MILLISECONDS = 24 * 60 * 60 * 1000;
    
    const accessibilityLanguage = "en-US";
    
    const displayedDate = () => {
        return ignoreTime(new Date(date).toISOString());
    }

    return (
        <View
            accessible={ true }
            accessibilityLabel="Date picker"
            accessibilityHint="Sets the date"
            accessibilityLanguage={ accessibilityLanguage }
            style={ Styles.datePicker }
        >
            <Button title="<"
                accessibilityLabel="Previous day"
                onPress={ () => setDate(date - DAY_DURATION_IN_MILLISECONDS) } />
            <Text
                accessibilityLabel={ "Selected date: " + date }
                style={ Styles.datePickerSelectedDate }
            >{ displayedDate() }</Text>
            <Button title=">"
                accessibilityLabel="Next day"
                onPress={ () => setDate(date + DAY_DURATION_IN_MILLISECONDS) } />
        </View>
    );
}