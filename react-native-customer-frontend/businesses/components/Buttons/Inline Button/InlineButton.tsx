import React from "react";
import { Button } from "../Button";
import { buttonStyles, labelStyles } from "@/components/Buttons/Inline Button/Styles";

export const InlineButton = ({ label, onPress, disabled, accessibilityLabel, accessibilityLanguage }: any) => {

    return (
        <Button
            label={ label }
            onPress={ onPress }
            disabled={ disabled }
            accessibilityLabel={ accessibilityLabel }
            accessibilityLanguage={ accessibilityLanguage }
            buttonStyleSheet={ buttonStyles }
            labelStyleSheet={ labelStyles }
        />
    );

}