import React from "react";
import { Pressable, Text, View } from "react-native";
import Styles from "./Styles";

export const MenuItem = ({ name, onPress, firstLine, secondLine }: any) => {

    return(
        <Pressable
            role="menuitem"
            style={ Styles.item }
            onPress={ onPress } >
            <Text style={ Styles.name }>{ name }</Text>
            {
                firstLine &&
                <View style={ Styles.details }>
                    <Text style={ Styles.detailLine }>{ firstLine }</Text>
                    <Text style={ Styles.detailLine }>{ secondLine }</Text>
                </View>
            }
        </Pressable>
    );

}