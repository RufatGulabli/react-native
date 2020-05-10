import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header({ navigation, title }) {

    const openMenu = () => {
        navigation.openDrawer();
    };

    return (
        <View style={css.header}>
            <View style={{ flex: 1 }}>
                <MaterialIcons name='menu' size={28} onPress={openMenu} style={css.icon} />
            </View>
            <View style={{ flex: 1 }}>
                <Text style={css.headerText}>{title}</Text>
            </View>
        </View >
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
    }
});
