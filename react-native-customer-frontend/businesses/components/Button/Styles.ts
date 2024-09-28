import { StyleSheet } from "react-native";
import { SpacingSizes } from "@/constants/StyleVariables";

export const buttonStyles = StyleSheet.create({
    primary: {
        backgroundColor: "#000000",
        padding: SpacingSizes.secondary,
        borderRadius: SpacingSizes.tertiary
    },
    secondary: {
        backgroundColor: "#00000000",
        padding: SpacingSizes.secondary,
        borderWidth: 2,
        borderColor: "#000000",
        borderRadius: SpacingSizes.tertiary
    },
    inline: {
        backgroundColor: "#DDDDDD",
        padding: SpacingSizes.tertiary,
        borderWidth: 1,
        borderColor: "#CCCCCC",
        borderRadius: SpacingSizes.tertiary
    }
});

export const labelStyles = StyleSheet.create({
    primary: {
        color: "#FFFFFF",
        fontWeight: 700,
        textAlign: "center",
        fontSize: 18
    },
    secondary: {
        color: "#000000",
        fontWeight: 700,
        textAlign: "center",
        fontSize: 18
    },
    inline: {
        color: "#000000",
        fontWeight: 500,
        textAlign: "center",
        fontSize: 12
    }
});