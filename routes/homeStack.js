import React from 'react';
import Header from '../shared/header';
import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';


export default HomeStack = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='GameZone' />,
                headerStyle: {
                    backgroundColor: 'skyblue'
                }
            }
        }
    },
    Review: {
        screen: ReviewDetails,
        navigationOptions: {
            headerTitle: "Review",
        }
    }
});
