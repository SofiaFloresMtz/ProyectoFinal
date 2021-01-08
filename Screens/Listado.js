import React, {useContext} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {ListItem, Header} from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ComidaContext} from '../Context/ComidaContext';

const Listado = ({navigation}) => {

    const {lista, setComida,eliminar} = useContext(ComidaContext);

    return (
    
    <View style={styles.container}>
        <Header
            centerComponent={{ text: 'Lista de Recetas', style: { color: '#fff', fontSize:20 } }}
            rightComponent={{ icon: 'add-circle', color: '#fff', onPress:()=>{
                setComida({
                     idComida:null,
                     nombre:"",
                     ingredientes:"",
                     tipo:""
                 })   

                 navigation.navigate('Formulario',{status:"add"})

            }}}
            containerStyle={{backgroundColor:'#E15757'}}
        />
        <ScrollView>
        {
            lista.length>0
            ?
            lista.map((a,i)=>(
                <ListItem key={i} bottomDivider>
                    <ListItem.Content>
                        <ListItem.Title>{a.nombre}</ListItem.Title>
                        <ListItem.Subtitle>{a.ingredientes}</ListItem.Subtitle>
                    </ListItem.Content>
                    <View style={styles.buttons}>
                        <Ionicons name='ios-trash' size={30} color={'red'} onPress={()=>eliminar(a.idComida)}/>
                        <Ionicons name='md-create' size={30} color={'green'}  onPress={()=>{
                            setComida({
                                idComida:a.idComida.toString(),
                                nombre:a.nombre,
                                ingredientes:a.ingredientes,
                                tipo:a.tipo
                            })

                            navigation.navigate('Formulario',{status:"edit"})
                        }}/>

                    </View>
                </ListItem>

            ))
            :
            <Text style={{marginTop:50, textAlign:'center', fontSize:20}}>No hay recetas</Text>


        }


        </ScrollView>


    </View>
    );
}
 
export default Listado;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    buttons:{
        width:'25%', 
        flexDirection:'row', 
        justifyContent:'space-between'
    }
});