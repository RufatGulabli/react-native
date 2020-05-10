import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import Card from '../shared/card';
import css from '../styles/global';

export default function Home({ navigation }) {

    const [reviews, setReviews] = useState([
        { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'Lorem Ipsum dolor siet aim.', key: "1" },
        { title: 'Gotta catch them all (again)', rating: 3, body: 'Lorem Ipsum dolor siet aim.', key: "2" },
        { title: 'No so, "Final" fantasy', rating: 4, body: 'Lorem Ipsum dolor siet aim.', key: "3" }
    ]);

    return (
        <View style={css.container}>
            <FlatList data={reviews} renderItem={
                ({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('Review', item)}>
                            <Card>
                                <Text style={css.titleText}>{item.title}</Text>
                            </Card>
                        </TouchableOpacity>
                    )
                }
            } />
        </View>
    );
}
