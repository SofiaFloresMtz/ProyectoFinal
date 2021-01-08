import React, {useContext} from 'react';
import {TextInput, View, StyleSheet, Text} from 'react-native';
import {Button} from 'react-native-elements'
import {Picker} from '@react-native-picker/picker';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {ComidaContext} from '../Context/ComidaContext';
import Constants from 'expo-constants';
import firebase from '../Settings/ConfigFirebase'


const validations =Yup.object().shape({
    idComida:Yup.number().typeError('Este campo es numérico').max(99999999,"Número muy grande").required('Obligatorio'),
    nombre:Yup.string().min(2,'Nombre muy corto').max(50,'Nombre muy largo').required('Obligatorio'),
    ingredientes: Yup.string().min(2,'Pocos ingredientes').max(100,'Muchos ingredientes').required('Obligatorio'),
    tipo: Yup.string().nullable().required('Selecciona un tipo')
})


export default function Formulario({route,navigation}){
    const {status} = route.params;
    const {comida,lista,setComida,setLista}= useContext(ComidaContext);

    return(
        <View style={styles.container}>
            <Text style={styles.header}>Receta</Text>

            <Formik
                initialValues={comida}
                onSubmit={(values,{resetForm})=>{
                    firebase.database().ref('MenuReactNative/'+comida.idComida).update(comida).then(()=>{
                        alert("Enviado")
                    })
                    const temporal = lista.filter(al=>al.idComida!=comida.idComida);//!==
                    //alert('enviado')
                    setLista([...temporal,comida]);
                    resetForm({
                        idComida:"",
                        nombre:"",
                        ingredientes:"",
                        tipo:""
                    })
                    navigation.goBack();

                    console.log(lista) 
                }}
                validationSchema={validations}
                validate={(values)=>{
                    setComida(values)
                    console.log(comida)
                }}
            >
            {
                ({handleChange, handleBlur, handleSubmit, setFieldValue, handleReset, errors, values})=>(
                    <View>
                        <TextInput
                            style={styles.textinput}
                            onChangeText={handleChange('idComida')}
                            onBlur={handleBlur('idComida')}
                            placeholder="Número de receta"
                            value={values.idComida}
                            editable={status==="add"?true:false}
                        />
                        
                        {errors.idComida && <Text style={styles.texterror}>{errors.idComida}</Text>}

                        <TextInput
                            style={styles.textinput}
                            onChangeText={handleChange('nombre')}
                            onBlur={handleBlur('nombre')}
                            placeholder="Nombre"
                            value={values.nombre}                        

                        />

                        {errors.nombre && <Text style={styles.texterror}>{errors.nombre}</Text>}

                        <TextInput
                            style={styles.textingre}
                            onChangeText={handleChange('ingredientes')}
                            onBlur={handleBlur('ingredientes')}
                            placeholder="Ingredientes"
                            value={values.ingredientes}                        

                        />      

                        {errors.ingredientes && <Text style={styles.texterror}>{errors.ingredientes}</Text>}       

                        <View style={styles.picker}>
                            <Picker
                                mode="dialog"
                                style={{height:40, backgroundColor:'white'}}
                                selectedValue={values.tipo}
                                onValueChange={ (v)=>
                                    setFieldValue('tipo',v)
                                }
                            >
                                <Picker.Item color="grey" label="Tipo comida" value="" />
                                <Picker.Item color="black" label="Entrada" value="Entrada"/>
                                <Picker.Item color="black" label="Plato fuerte" value="Platofuerte"/>
                                <Picker.Item color="black" label="Postre" value="Postre"/>
                            </Picker>
                        </View>

                        {errors.tipo && <Text style={styles.texterror}>{errors.tipo}</Text>}

                        <View style={{marginTop:20}}>
                            <Button
                                buttonStyle={styles.buttons}
                                onPress={handleSubmit}
                                title="Enviar"
                            />

                            {
                                status==="add"
                                &&
                                <Button
                                buttonStyle={styles.buttons}
                                onPress={handleReset}
                                title="Limpiar"
                                />

                            }
                        


                        </View>

                    </View>
                )


            }    
                
            </Formik>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent:'center',
      margin:20,
      marginTop:Constants.statusBarHeight
   
    },
    texterror:{
      color:'red'
    },
    textinput:{
      borderRadius:10, 
      height: 40, 
      borderColor: 'gray', 
      borderWidth: 1, 
      margin:5, 
      paddingLeft:15, 
      backgroundColor:'white',
      elevation: 5,
    },
    textingre:{
        borderRadius:10, 
        height: 80, 
        borderColor: 'gray', 
        borderWidth: 1, 
        margin:5, 
        paddingLeft:15, 
        backgroundColor:'white',
        elevation: 2,
      },
    buttons:{
      backgroundColor:'gray', 
      color:'black', 
      marginTop:10, 
      borderRadius:10
    },
    header:{
      fontSize:20, 
      textAlign:'center', 
      marginBottom:40
    },
    picker:{
      margin:5, 
      borderRadius: 10, 
      borderWidth: 1, 
      borderColor: 'gray', 
      overflow: 'hidden',
      elevation: 5,
    }
  
  });