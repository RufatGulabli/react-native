import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header({ navigation, title }) {

    const openMenu = () => {
        navigation.openDrawer();
    };

    return (
        <ImageBackground style={css.header} source={require("../assets/images/game_bg.png")}>
            <MaterialIcons name='menu' size={28} onPress={openMenu} style={css.icon} />
            <View style={{ flexDirection: 'row' }}>
                <Image style={css.headerImage} source={require('../assets/images/heart_logo.png')} />
                <Text style={css.headerText}>{title}</Text>
            </View>
        </ImageBackground>
    );
}

const css = StyleSheet.create({
    header: {
        flexDirection: 'row',
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1,
        alignSelf: "center"
    },
    icon: {
        marginRight: 100
    },
    headerImage: {
        width: 26,
        height: 26,
        marginRight: 8,
    }
});
