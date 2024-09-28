import React, { useEffect, useState } from "react";
import { Pressable, Text } from "react-native";
import { buttonStyles, labelStyles } from "@/components/Button/Styles";

export const Button = ({ type, label, onPress, disabled, accessibilityLabel, accessibilityLanguage }: any) => {

    const [buttonStyle, setButtonStyle] = useState(buttonStyles.primary);
    const [labelStyle, setLabelStyle] = useState(labelStyles.primary);

    useEffect(() => {
        switch(type) {
            case "primary": {
                setButtonStyle(buttonStyles.primary);
                setLabelStyle(labelStyles.primary);
                break;
            };
            case "secondary": {
                setButtonStyle(buttonStyles.secondary);
                setLabelStyle(labelStyles.secondary);
                break;
            };
            case "inline": {
                setButtonStyle(buttonStyles.inline);
                setLabelStyle(labelStyles.inline);
                break;
            };
        }
    }, []);

    return (
        <Pressable
            onPress={ onPress }
            disabled={ disabled }
            accessibilityLabel={ accessibilityLabel }
            accessibilityLanguage={ accessibilityLanguage }
            style={ buttonStyle }
        >
            <Text style={ labelStyle }>
                { label }
            </Text>
        </Pressable>
    );

}