import AppStyles from "@/constants/Styles";
import Styles from "./Styles";
import React from "react";
import { Pressable, Text, Image } from "react-native";

export const AppPageLink = ({ label, onPress }: any) => {

    const ICON_SOURCE = "@/assets/images/RightPointingArrow.svg";

    return(
        <Pressable
            style={[ AppStyles.row, Styles.link ]}
            role="link"
            onPress={ onPress } >
            <Text style={ AppStyles.h2 }>{ label }</Text>
            <Image
                role="presentation"
                source={ require(ICON_SOURCE) } />
        </Pressable>
    );

}