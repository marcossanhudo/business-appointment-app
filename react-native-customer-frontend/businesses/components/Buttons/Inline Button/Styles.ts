import { StyleSheet } from "react-native";
import { SpacingSizes } from "@/constants/StyleVariables";

export const buttonStyles = StyleSheet.create({
    allStates: {
        backgroundColor: "#DDDDDD",
        padding: SpacingSizes.tertiary,
        borderWidth: 1,
        borderColor: "#CCCCCC",
        borderRadius: SpacingSizes.tertiary
    }
});

export const labelStyles = StyleSheet.create({
    allStates: {
        fontWeight: 500,
        textAlign: "center",
        fontSize: 12
    },
    
    enabledResting: {
        color: "#000000"
    },
    disabled: {
        color: "#606060"
    },
    onPress: {
        fontSize: 10
    }
});