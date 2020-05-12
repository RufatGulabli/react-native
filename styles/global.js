import { StyleSheet } from "react-native";

export const css = StyleSheet.create({
    container: {
        padding: 20
    },
    titleText: {
        fontFamily: 'nunito-regular',
        fontSize: 28
    },
    modalToggle: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: 'lightgray',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center'
    },
    modal: {
        flex: 1
    },
    modalClose: {
        marginTop: 20
    },
    input: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 6,
        fontSize: 18,
        margin: 4
    },
    submitButton: {
        marginTop: 10,
    },
    errorText: {
        color: 'crimson',
        fontWeight: 'bold',
        marginHorizontal: 10,
        fontSize: 14
    }
});

export const images = {
    ratings: {
        '1': require("../assets/images/rating-1.png"),
        '2': require("../assets/images/rating-2.png"),
        '3': require("../assets/images/rating-3.png"),
        '4': require("../assets/images/rating-4.png"),
        '5': require("../assets/images/rating-5.png")
    }
}