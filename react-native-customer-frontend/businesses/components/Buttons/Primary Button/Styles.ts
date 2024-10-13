import { StyleSheet } from "react-native";
import { SpacingSizes } from "@/constants/StyleVariables";

export const buttonStyles = StyleSheet.create({
    allStates: {
        padding: SpacingSizes.secondary,
        borderRadius: SpacingSizes.tertiary,
        justifyContent: "center"
    },

    enabledResting: {
        backgroundColor: "#000000"
    },
    disabled: {
        backgroundColor: "#606060"
    },
    onHover: {
        backgroundColor: "#202020"
    },
    onPress: {
        backgroundColor: "#404040"
    }
});

export const labelStyles = StyleSheet.create({
    allStates: {
        color: "#FFFFFF",
        fontWeight: 700,
        textAlign: "center",
        fontSize: 18,
    },

    onPress: {
        fontSize: 16
    }
});