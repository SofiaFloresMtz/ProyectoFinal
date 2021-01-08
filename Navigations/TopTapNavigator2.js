import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Gallery from '../Screens/Gallery';
import Gallery2 from '../Screens/Gallery2';
import Gallery3 from '../Screens/Gallery3';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Constants from 'expo-constants';

const Tab =  createMaterialTopTabNavigator();

export default function TopTapNavigator1(){
    return(
        <Tab.Navigator
            initialRouteName="Gallery"
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
                name="Gallery"
                component={Gallery}
                options={{
                    tabBarLabel:"Entradas",
                    tabBarIcon:({color})=>(
                        <Ionicons name={"apps"} size={20} color={color}/>
                    )
                }}
            />
            <Tab.Screen
                name="Gallery2"
                component={Gallery2}
                options={{
                    tabBarLabel:"Plato fuerte",
                    tabBarIcon:({color})=>(
                        <Ionicons name={"apps"} size={20} color={color}/>
                    )
                }}
            />
            <Tab.Screen
                name="Gallery3"
                component={Gallery3}
                options={{
                    tabBarLabel:"Postre",
                    tabBarIcon:({color})=>(
                        <Ionicons name={"apps"} size={20} color={color}/>
                    )
                }}
            />
        </Tab.Navigator>
    )
}