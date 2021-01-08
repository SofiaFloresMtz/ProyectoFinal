import React from 'react';
import { StyleSheet, Text, View, Button,TouchableOpacity,Image} from 'react-native';
import {Header} from 'react-native-elements';

const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Header
                centerComponent={{ text: 'Inicio', style: { color: '#fff', fontSize:20 } }}
                containerStyle={{backgroundColor:'#E15757'}}
            />

            <Text style={styles.header}>Bienvenido a tu recetario</Text>
            <Image
                style={styles.tinyLogo}
                source={require('../Imagenes/logodos.jpg')}
            />
            <Button 
                title="Detalles" 
                onPress={()=>navigation.navigate('DetailsScreen')}
            />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    tinyLogo: {
        width: 400,
        height: 400,
      },
    header:{
    fontSize:20, 
    textAlign:'center', 
    marginBottom:40,
    },
});