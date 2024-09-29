import React, { useEffect, useState } from "react";
import { Pressable, Text, View } from "react-native";
import Styles from "./Styles";

export const MenuItem = ({ name, onPress, firstLine, secondLine, inHorizontalList, horizontalDetails }: any) => {

    const [itemStyle, setItemStyle] = useState(Object);
    const [detailsDirection, setDetailsDirection] = useState(Object);

    useEffect(() => {
        if (inHorizontalList)
            setItemStyle(Styles.inHorizontalList);
        else
            setItemStyle(Styles.inVerticalList);

        if (horizontalDetails)
            setDetailsDirection(Styles.horizontalDetails);
        else
            setDetailsDirection(Styles.verticalDetails);
    }, []);

    return(
        <Pressable
            role="menuitem"
            style={[ Styles.item, itemStyle ]}
            onPress={ onPress } >
            <Text style={ Styles.name }>{ name }</Text>
            {
                firstLine &&
                <View style={[ Styles.details, detailsDirection ]}>
                    <Text style={ Styles.detailLine }>{ firstLine }</Text>
                    {
                        secondLine &&
                        <Text style={ Styles.detailLine }>{ secondLine }</Text>
                    }
                </View>
            }
        </Pressable>
    );

}