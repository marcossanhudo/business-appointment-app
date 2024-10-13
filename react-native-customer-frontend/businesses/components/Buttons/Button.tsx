import React, { useEffect, useState } from "react";
import { Pressable, Text } from "react-native";

export const Button = ({ label, onPress, disabled, accessibilityLabel, accessibilityLanguage, buttonStyleSheet, labelStyleSheet }: any) => {

    const [buttonStyle, setButtonStyle] = useState([ buttonStyleSheet.allStates, buttonStyleSheet.enabledResting ]);
    const [labelStyle, setLabelStyle] = useState([ labelStyleSheet.allStates ]);

    useEffect(() => {
        if (disabled)
            setDisabledStyling();
    }, []);

    const setPressStyling = () => {
        setButtonStyle([ buttonStyleSheet.allStates, buttonStyleSheet.onPress ]);
        setLabelStyle([ labelStyleSheet.allStates, labelStyleSheet.onPress ]);
    }

    const setHoverStyling = () => {
        setButtonStyle([ buttonStyleSheet.allStates, buttonStyleSheet.onHover ]);
        setLabelStyle([ labelStyleSheet.allStates, labelStyleSheet.onHover ]);
    }

    const setEnabledRestStyling = () => {
        setButtonStyle([ buttonStyleSheet.allStates, buttonStyleSheet.enabledResting ]);
        setLabelStyle([ labelStyleSheet.allStates, labelStyleSheet.enabledResting ]);
    }

    const setDisabledStyling = () => {
        setButtonStyle([ buttonStyleSheet.allStates, buttonStyleSheet.disabled ]);
        setLabelStyle([ labelStyleSheet.allStates, labelStyleSheet.disabled ]);
    }

    return (
        <Pressable
            role="button"
            onPress={ onPress }
            disabled={ disabled }
            accessibilityLabel={ accessibilityLabel }
            accessibilityLanguage={ accessibilityLanguage }
            style={ buttonStyle }
            onHoverIn={ setHoverStyling }
            onPressIn={ setPressStyling }
            onPressOut={ setHoverStyling }
            onHoverOut={ setEnabledRestStyling }
        >
            <Text style={ labelStyle }>
                { label }
            </Text>
        </Pressable>
    );

}