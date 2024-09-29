import { FontSizes, SpacingSizes } from "@/constants/StyleVariables";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    item: {
        padding: SpacingSizes.secondary,
        display: 'flex',
        flexDirection: 'column',
        gap: SpacingSizes.secondary,
        backgroundColor: '#EAEAEA',
        borderWidth: 1,
        borderColor: '#CCCCCC',
        borderRadius: 8
    },
    
    inVerticalList: {
        marginBottom: SpacingSizes.secondary,
    },
    inHorizontalList: {
        marginEnd: SpacingSizes.secondary,
        width: 240,
    },

    name: {
        fontSize: FontSizes.optionName,
        fontWeight: '700'
    },

    details: {
        display: 'flex'
    },
    
    verticalDetails: {
        flexDirection: 'column',
        gap: SpacingSizes.tertiary
    },
    horizontalDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    
    detailLine: {
        fontSize: FontSizes.bodyText,
        fontWeight: '400'
    }
});