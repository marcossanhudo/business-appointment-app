import { StyleSheet } from "react-native";
import { SpacingSizes } from "@/constants/StyleVariables";

export const buttonStyles = StyleSheet.create({
    allStates: {
        padding: SpacingSizes.secondary,
        backgroundColor: "#00000000",
        borderWidth: 2,
        borderRadius: SpacingSizes.tertiary
    },
    
    enabledResting: {
        borderColor: "#000000"
    },
    disabled: {
        borderColor: "#606060"
    },
    onHover: {
        borderColor: "#202020"
    },
    onPress: {
        borderColor: "#404040"
    }
});

export const labelStyles = StyleSheet.create({
    allStates: {
        fontWeight: 700,
        textAlign: "center",
        fontSize: 18,
        lineHeight: 27
    },

    enabledResting: {
        color: "#000000"
    },
    disabled: {
        color: "#606060"
    },
    onHover: {
        color: "#202020"
    },
    onPress: {
        color: "#404040",
        fontSize: 16
    }
});