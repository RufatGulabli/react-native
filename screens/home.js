import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Modal, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Card from '../shared/card';
import { css } from '../styles/global';
import { ReviewForm } from './reviewForm';

export default function Home({ navigation }) {

    const [modalOpen, setModalOpen] = useState(false);
    const [reviews, setReviews] = useState([
        { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'Lorem Ipsum dolor siet aim.', key: "1" },
        { title: 'Gotta catch them all (again)', rating: 3, body: 'Lorem Ipsum dolor siet aim.', key: "2" },
        { title: 'No so, "Final" fantasy', rating: 4, body: 'Lorem Ipsum dolor siet aim.', key: "3" }
    ]);

    const openModal = () => {
        setModalOpen(prevState => !prevState);
    }

    const closeModal = () => {
        setModalOpen(prevState => !prevState);
    }

    const addReview = review => {
        setReviews(prevState => [review, ...prevState]);
        setModalOpen(false);
    }

    return (
        <View style={css.container}>
            <Modal visible={modalOpen} animationType='slide'>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View>
                        <MaterialIcons name='close' size={24} onPress={closeModal}
                            style={{ ...css.modalToggle, ...css.modalClose }} />
                        <View>
                            <ReviewForm addReview={addReview} />
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
            <MaterialIcons name='add' size={24} onPress={openModal} style={css.modalToggle} />
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
