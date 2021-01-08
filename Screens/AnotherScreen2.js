import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const AnotherScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Razones para aprender a cocinar</Text>
            <Text style={styles.body}> “Ver los alimentos, tocarlos, manipular con ellos buscando darles una forma única, 
                olerlos, probarlos — todo esto y más son elementos de un gran arte, único en su inmediatez 
                y la imposibilidad de preservar, el arte de cocinar. ” </Text>
            <Text>Cualquier arte enriquece nuestra existencia, pero el arte de cocinar la sublima</Text>
        </View>
    )
}

export default AnotherScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-around', 
      textAlign:'center',
    },
    header:{
        fontSize:20,
        color: '#F49898', 
        fontWeight: 'bold',
      },
    body:{
    fontSize:15, 
    fontWeight: 'bold',
    },
});