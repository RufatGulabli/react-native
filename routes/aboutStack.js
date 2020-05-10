import React from 'react';
import Header from '../shared/header';
import { createStackNavigator } from 'react-navigation-stack';
import About from '../screens/about';

export default AboutStack = createStackNavigator({
    About: {
        screen: About,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='About' />,
                headerStyle: {
                    backgroundColor: 'skyblue'
                }
            }
        }
    }
});
