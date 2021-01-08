import React from 'react';
import { StyleSheet, Text, View, Button,TouchableOpacity,Image} from 'react-native';
import {Header} from 'react-native-elements';

const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Lasaña</Text>
            <Image
                style={styles.tinyLogo}
                source={require('../Imagenes/lasana.jpg')}
            />
            <Text>Sandwich de pollo</Text>
            <Image
                style={styles.tinyLogo}
                source={require('../Imagenes/pollo.jpg')}
            />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    tinyLogo: {
        width: 250,
        height: 250,
        justifyContent: "space-around",
      },
    header:{
    fontSize:20, 
    textAlign:'center', 
    marginBottom:40,
    color:'#E15757',
    },
});