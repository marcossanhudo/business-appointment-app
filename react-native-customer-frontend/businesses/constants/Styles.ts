import { StyleSheet } from "react-native";

export default StyleSheet.create({
    page: {
        backgroundColor: "#FFFFFF",
        padding: 24,
        display: 'flex',
        flexDirection: 'column',
        gap: 24
    },
    businessListing: {
        padding: 16,
        marginRight: 16,
        backgroundColor: "#EAEAEA",
        borderWidth: 1,
        borderColor: "#CCCCCC",
        borderRadius: 8,
        width: 240,
        display: 'flex',
        flexDirection: 'column',
        gap: 16
    },
    businessName: {
        fontSize: 18,
        fontWeight: '700'
    },
    businessDescription: {
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        fontSize: 14,
        fontWeight: '400'
    },
    h1: {
        fontSize: 24,
        fontWeight: '700'
    },
    h2: {
        fontSize: 18,
        fontWeight: '700'
    },
    descriptionText: {
        fontSize: 14,
        fontWeight: '500'
    },
    descriptionHeading: {
        fontSize: 14,
        fontWeight: '700'
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 16,
        alignContent: 'center'
    },
    box: { 
        padding: 16,
        borderColor: "#CCCCCC",
        borderWidth: 1,
        borderRadius: 8,
        display: 'flex',
        flexDirection: 'column',
        gap: 16
    }
});