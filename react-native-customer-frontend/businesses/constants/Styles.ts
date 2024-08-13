import { StyleSheet } from "react-native";
import { SpacingSizes, FontSizes, FontWeights } from "@/constants/StyleVariables";

export default StyleSheet.create({
    page: {
        backgroundColor: "#FFFFFF",
        padding: SpacingSizes.primary,
        display: 'flex',
        flexDirection: 'column',
        gap: SpacingSizes.primary
    },

    businessListing: {
        padding: SpacingSizes.secondary,
        marginRight: SpacingSizes.secondary,
        backgroundColor: "#EAEAEA",
        borderWidth: 1,
        borderColor: "#CCCCCC",
        borderRadius: 8,
        width: 240,
        display: 'flex',
        flexDirection: 'column',
        gap: SpacingSizes.secondary
    },
    businessName: {
        fontSize: FontSizes.optionName,
        fontWeight: '700'
    },
    businessDescription: {
        display: 'flex',
        flexDirection: 'column',
        gap: SpacingSizes.tertiary,
        fontSize: FontSizes.bodyText,
        fontWeight: '400'
    },

    verticalListOption: {
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
    verticalListOptionName: {
        fontSize: FontSizes.optionName,
        fontWeight: '700'
    },
    verticalListOptionDetails: {
        fontSize: FontSizes.bodyText,
        fontWeight: '400',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    infoBox: {
        padding: SpacingSizes.secondary,

        display: 'flex',
        flexDirection: 'column',
        gap: SpacingSizes.secondary,

        borderWidth: 1,
        borderColor: '#CCCCCC',
        borderRadius: 8
    },
    infoBoxPrimaryHeading: {
        fontSize: FontSizes.boxTitle,
        fontWeight: '700'
    },
    infoBoxSecondaryHeading: {
        fontSize: FontSizes.bodyText,
        fontWeight: '700'
    },
    infoBoxText: {
        fontSize: FontSizes.bodyText,
        fontWeight: '500'
    },


    h1: {
        fontSize: FontSizes.h1,
        fontWeight: '700'
    },
    h2: {
        fontSize: FontSizes.h2,
        fontWeight: '700'
    },
    bodyText: {
        fontSize: FontSizes.bodyText,
        fontWeight: '400'
    },

    row: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: SpacingSizes.secondary,
        alignContent: 'center'
    }
});