import React from 'react';
import { Image, View, Dimensions, Alert, TouchableOpacity, TouchableHighlight, Text } from 'react-native';
import { Icon, Input } from 'native-base';

// import Icon from 'react-native-vector-icons/Ionicons'
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {
    createStackNavigator,
    // createBottomTabNavigator,
    // createDrawerNavigator,
    // DrawerActions,
    // createSwitchNavigator
} from "react-navigation-stack";
import {createBottomTabNavigator} from 'react-navigation-tabs'
// Icon.loadFont();
import Conversation from '../converstaions/Conversation'

import Tab1 from '../tab/Tab1';
import Tab2 from '../tab/Tab2';
import Inbox from '../tab/Inbox';


const Home1Nav = createStackNavigator(
    {
        tab1:{
            screen:Tab1,
        },
       

    },
    {
        initialRouteName: 'tab1',
        // headerMode: 'none',
        navigationOptions: ({ navigation }) => ({

            tabBarIcon: ({ tintColor }) => {
                console.log("Route Name", navigation.state.routeName)


                if (tintColor === 'blue') {
                    return (
                        <TouchableOpacity>

                            <Icon name={'md-home'} style={{ color: 'blue'}} />

                        </TouchableOpacity>
                    )
                }
                else {
                    return (
                        <Icon name={'md-home'} style={{ color: 'black' }} />
                    )
                }
            }
        }),

        

    }
);

const Home2Nav = createStackNavigator(
    {
        Tab2,
    },
    {
        initialRouteName: 'Tab2',
        // headerMode: 'none',
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ tintColor }) => {

                if (tintColor === 'blue') {
                    return (
                        <TouchableOpacity>
                            <Icon name={'circle'} type='FontAwesome' style={{ color: 'blue' }} />
                        </TouchableOpacity>

                    )

                } else {
                    return (

                        <Icon name={'circle'} type='FontAwesome' style={{ color: 'black' }} />
                    )

                }
            }
        })

        
    }
);
const InboxNav = createStackNavigator(
    {
        Inbox:{
            screen:Inbox,
        },
        Conversation:{screen:Conversation}

    },
    {
        initialRouteName: 'Inbox',
        // headerMode: 'none',
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ tintColor }) => {

                if (tintColor === 'blue') {
                    return (
                        <TouchableOpacity>

                            <Icon name={'chat-processing'} type='MaterialCommunityIcons' style={{ color: 'blue' }} />

                        </TouchableOpacity>

                    )

                } else {
                    return (

                        <Icon name={'chat-processing'} type='MaterialCommunityIcons' style={{ color: 'black' }} />
                    )

                }
            }

        }),

        


    }

);

const BottomTabNavigator = createBottomTabNavigator(
    {
        Home1: Home1Nav,
        Home2: Home2Nav,
        Home3: InboxNav,
    },
    {
        initialRouteName: 'Home1',
        animationEnabled: true,
        tabBarOptions: {
            activeTintColor: 'blue',
            showLabel: false,
            style: {
                borderTopColor: 'white',
            },
        },
    },
    {
        navigationOptions: {
        }
    }

);


const MainApp = createStackNavigator(
    {

        MainTab: BottomTabNavigator
    },
    {
        initialRouteName: "MainTab",
        headerMode: 'none',
    },


);
export default MainApp;