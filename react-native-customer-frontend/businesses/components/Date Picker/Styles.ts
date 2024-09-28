import { StyleSheet } from "react-native";
import { SpacingSizes, FontSizes } from "@/constants/StyleVariables";

export default StyleSheet.create({
    picker: {
        padding: SpacingSizes.tertiary,

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: SpacingSizes.secondary,
        alignContent: 'center',

        borderWidth: 1,
        borderColor: '#CCCCCC',
        borderRadius: 8,

        backgroundColor: "#F0F0F0"
    },

    selectedDate: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignContent: 'center',
        fontSize: FontSizes.bigNumber,
        fontWeight: '500'
    }
})