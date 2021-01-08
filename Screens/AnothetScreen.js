import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const AnotherScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>¿Por qué tener un recetario?</Text>
            <Text> ~ Son el orden indispensable para asegurar la perfección en una preparación. ~</Text>
            <Text> - La receta no solo es el registro de nuestra memoria, es la única manera de reproductir exitosamente
                la riqueza culinaria de cualquier cocina. -
            </Text>
            <Text> ~ Son vitales para el proceso que estamos viviendo y sin ellos es muy difícil que lleguemos
                a la internacionalización absoluta. ~
            </Text>
        </View>
    )
}

export default AnotherScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5C3C3',
      alignItems: 'center',
      justifyContent: 'space-around', 
      textAlign:'center',
    },
    header:{
        fontSize:20,
        color: 'white', 
        fontWeight: 'bold',
      },
});