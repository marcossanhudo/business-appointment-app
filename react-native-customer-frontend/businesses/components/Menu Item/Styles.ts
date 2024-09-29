import { FontSizes, SpacingSizes } from "@/constants/StyleVariables";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    item: {
        padding: SpacingSizes.secondary,
        marginBottom: SpacingSizes.secondary,
        display: 'flex',
        flexDirection: 'column',
        gap: SpacingSizes.secondary,
        backgroundColor: '#EAEAEA',
        borderWidth: 1,
        borderColor: '#CCCCCC',
        borderRadius: 8
    },

    name: {
        fontSize: FontSizes.optionName,
        fontWeight: '700'
    },

    details: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    
    detailLine: {
        fontSize: FontSizes.bodyText,
        fontWeight: '400',
    }
});