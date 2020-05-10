import React from 'react';
import { View, Text, Button } from 'react-native';
import css from '../styles/global';
import Card from '../shared/card';

export default function About({ navigation }) {
    return (
        <View style={css.container}>
            <Card>
                <Text style={css.titleText}>{navigation.getParam('title')}</Text>
                <Text style={css.titleText}>{navigation.getParam('body')}</Text>
                <Text style={css.titleText}>{navigation.getParam('rating')}</Text>
            </Card>
        </View>
    );
}
