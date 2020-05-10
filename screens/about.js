import React from 'react';
import { View, Text } from 'react-native';
import css from '../styles/global';

export default function About({ navigation }) {

    return (
        <View style={css.container}>
            <Text style={css.titleText}>About Page</Text>
        </View>
    );
}
