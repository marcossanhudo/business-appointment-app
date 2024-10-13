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
        borderColor: "#000000",
    },

    disabled: {
        borderColor: "#606060",
    }
});

export const labelStyles = StyleSheet.create({
    allStates: {
        color: "#000000",
        fontWeight: 700,
        textAlign: "center",
        fontSize: 18
    }
});