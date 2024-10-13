import { StyleSheet } from "react-native";
import { SpacingSizes } from "@/constants/StyleVariables";

export const buttonStyles = StyleSheet.create({
    allStates: {
        backgroundColor: "#DDDDDD",
        padding: SpacingSizes.tertiary,
        borderWidth: 2,
        borderRadius: SpacingSizes.tertiary
    },
    
    enabledResting: {
        borderColor: "#606060",
    },
    disabled: {
        borderColor: "#7D7D7D"
    },
    onHover: {
        borderColor: "#404040"
    },
    onPress: {
        borderColor: "#202020"
    }
});

export const labelStyles = StyleSheet.create({
    allStates: {
        color: "#000000",
        fontWeight: 500,
        textAlign: "center",
        fontSize: 12
    },

    disabled: {
        color: "#606060"
    },
    onPress: {
        fontSize: 10
    }
});