import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AnotherScreen from '../Screens/AnothetScreen';
import AnotherScreen2 from '../Screens/AnotherScreen2';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Constants from 'expo-constants';

const Tab =  createMaterialTopTabNavigator();

export default function TopTapNavigator1(){
    return(
        <Tab.Navigator
            initialRouteName="AnotherScreen"
            tabBarOptions={{
                activeTintColor:"#ff6600",
                inactiveTintColor:"#060606",
                showIcon:true,
                showLabel:true,
                labelStyle:{
                    fontSize:11
                },
                style:{
                    paddingTop:Constants.statusBarHeight,
                    backgroundColor:"#f3f3f1"
                }

            }}
        > 

            <Tab.Screen
                name="About"
                component={AnotherScreen}
                options={{
                    tabBarLabel:"Acerca de",
                    tabBarIcon:({color})=>(
                        <Ionicons name={"ios-help-circle"} size={20} color={color}/>
                    )
                }}
            />
            <Tab.Screen
                name="About2"
                component={AnotherScreen2}
                options={{
                    tabBarLabel:"Acerca de",
                    tabBarIcon:({color})=>(
                        <Ionicons name={"ios-help-circle"} size={20} color={color}/>
                    )
                }}
            />
        </Tab.Navigator>
    )
}