import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../Navigations/StackNavigation2';
import Consulta from '../Screens/Consulta';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Listado from '../Navigations/StackNavigation1';
import AnotherScreen from '../Navigations/TopTapNavigator1';
import Gallery from '../Navigations/TopTapNavigator2';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator1(){
    return(
        <Tab.Navigator
            initialRouteName="HomeScreen"
            tabBarOptions={{
                activeTintColor:"#ff6600",
                inactiveTintColor:"#060606",
                showLabel:true,
                labelStyle:{
                    fontSize:12
                },
                style:{
                    paddingBottom:5,
                    backgroundColor:"#f3f3f1"
                }

            }}
        > 
           
            <Tab.Screen
                name="Inicio"
                component={HomeScreen}
                options={{
                    tabBarIcon:({color})=>(
                        <Ionicons name={"ios-home"} size={20} color={color}/>
                    )
                }}
            
            />
            <Tab.Screen
                name="Ingresar"
                component={Listado}
                options={{
                    tabBarIcon:({color})=>(
                        <Ionicons name={"list"} size={20} color={color}/>
                    )
                }}
            />
            <Tab.Screen
                name="Recetario"
                component={Consulta}
                options={{
                    tabBarIcon:({color})=>(
                        <Ionicons name={"search"} size={20} color={color}/>
                    )
                }}
            
            />
            <Tab.Screen
                name="Galeria"
                component={Gallery}
                options={{
                    tabBarIcon:({color})=>(
                        <Ionicons name={"image"} size={20} color={color}/>
                    )
                }}
            
            />
            <Tab.Screen
                name="Más"
                component={AnotherScreen}
                options={{
                    tabBarIcon:({color})=>(
                        <Ionicons name={"ios-help"} size={20} color={color}/>
                    )
                }}
            />
        </Tab.Navigator>
    )
}