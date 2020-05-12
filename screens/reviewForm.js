import React from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import { css } from '../styles/global';
import FlatButton from '../shared/button';

const reviewSchema = yup.object({
    title: yup.string().required().min(4),
    body: yup.string().required().min(8),
    rating: yup.number().integer().required().test('is-num-1-5', 'Number must be between 1-5.', val => {
        return parseInt(val) > 0 && parseInt(val) < 6
    })
});

export const ReviewForm = ({ addReview }) => {
    return (
        <View>
            <Formik
                validationSchema={reviewSchema}
                initialValues={{ title: '', body: '', rating: '' }}
                onSubmit={(values, actions) => {
                    values.key = Math.random().toString();
                    addReview(values);
                    actions.resetForm();
                }}
            >
                {
                    ({ handleChange, values, handleSubmit, errors, touched, handleBlur }) => (
                        <View style={css.input}>
                            <TextInput
                                style={css.input}
                                placeholder='Review Title'
                                onChangeText={handleChange('title')}
                                value={values.title}
                                onBlur={ handleBlur('title')}
                            />
                            <Text style={css.errorText}>{touched.title && errors.title}</Text>
                            <TextInput
                                multiline
                                style={css.input}
                                placeholder='Review Body'
                                onChangeText={handleChange('body')}
                                value={values.body}
                                onBlur={handleBlur('body')}
                                minHeight={100}
                            />
                            <Text style={css.errorText}>{touched.body && errors.body}</Text>
                            <TextInput
                                multiline
                                keyboardType='numeric'
                                style={css.input}
                                placeholder='Rating (1-5)'
                                onChangeText={handleChange('rating')}
                                value={values.rating}
                                onBlur={handleBlur('rating')}
                            />
                            <Text style={css.errorText}>{touched.rating && errors.rating}</Text>
                            <View style={css.submitButton}>
                                <FlatButton text='Submit' onPress={handleSubmit} />
                            </View>
                        </View>
                    )
                }
            </Formik>
        </View>
    );
}
