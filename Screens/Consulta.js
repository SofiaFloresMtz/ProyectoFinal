import React, {useContext} from 'react';
import { StyleSheet, Text, View, Button,ScrollView,Image} from 'react-native';
import {Header} from 'react-native-elements';
import {ListItem} from 'react-native-elements';
import {Picker} from '@react-native-picker/picker';
import {ComidaContext} from '../Context/ComidaContext';

const Consulta = () => {

    const {setListaSelected, listaSelected,addSelect} = useContext(ComidaContext);

    return (
        <View style={styles.container}>
            <Header
                centerComponent={{ text: 'Consulta', style: { color: '#fff', fontSize:20 } }}
                containerStyle={{backgroundColor:'#E15757'}}
            />

            <Picker
                style={{height:40, backgroundColor:'white'}}
                onValueChange={(itemValue,itemIndex)=>addSelect(itemValue)}
            >
                <Picker.Item color="grey" label="Tipo de receta" value="" />
                <Picker.Item color="black" label="Entrada" value="Entrada"/>
                <Picker.Item color="black" label="Plato fuerte" value="Platofuerte"/>
                <Picker.Item color="black" label="Postre" value="Postre"/>
            </Picker>

            <ScrollView>
                {
                    listaSelected.length>0
                    ?
                    listaSelected.map((a,i)=>(
                        <ListItem key={i} bottomDivider>
                            <ListItem.Content>
                                <ListItem.Title>{a.nombre}</ListItem.Title>
                                <ListItem.Subtitle>{a.ingredientes}</ListItem.Subtitle>
                            </ListItem.Content>
                        </ListItem>

                    ))
                    :
                    <Text style={{marginTop:50, textAlign:'center', fontSize:20}}>No hay recetas</Text>


                }


                </ScrollView>
        </View>
    )
}

export default Consulta

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    tinyLogo: {
        width: 50,
        height: 50,
      },
});