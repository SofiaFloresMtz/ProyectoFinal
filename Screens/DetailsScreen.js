import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const DetailsScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>La siguiente aplicación es creada por:</Text>
            <Text>- Sofia Flores -</Text>
            <Text>Fecha: 08 de Enero del 2021</Text>
        </View>
    )
}

export default DetailsScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
});