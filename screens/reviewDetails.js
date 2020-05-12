import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import {css, images} from '../styles/global';
import Card from '../shared/card';

export default function About({ navigation }) {

    const rating = navigation.getParam('rating');

    return (
        <View style={css.container}>
            <Card>
                <Text style={css.titleText}>{navigation.getParam('title')}</Text>
                <Text style={css.titleText}>{navigation.getParam('body')}</Text>
                <View style={localCssStyle.rating}>
                    <Text>Rating:  </Text>
                    <Image source={images.ratings[rating]}/>
                </View>
            </Card>
        </View>
    );
}

const localCssStyle = StyleSheet.create({
    rating: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 16,
        marginTop: 16,
        borderTopWidth: 1,
        borderTopColor: "#eee"
    }
});
