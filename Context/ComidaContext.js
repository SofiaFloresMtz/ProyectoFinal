import React, {createContext, useState,useEffect} from 'react';
import firebase from '../Settings/ConfigFirebase';

export const ComidaContext = createContext();


const ComidaProvider = (props)=>{
    const [comida, setComida] = useState({
        idComida:"",
        nombre:"",
        ingredientes:"",
        tipo:""
    })

    const [lista, setLista]= useState([]);
    const [listaSelected, setListaSelected]= useState([]);

    useEffect(()=>{
        firebase.database().ref('MenuReactNative').on('value', snapshot=>{
            let comidasLista=[];
            snapshot.forEach(row=>{
                comidasLista.push({
                    idComida:row.key,
                    nombre:row.val().nombre,
                    ingredientes:row.val().ingredientes,
                    tipo:row.val().tipo
                })
            })
            setLista(comidasLista)
        })
    },[])

    const eliminar =(id)=>{
        firebase.database().ref('MenuReactNative/'+id).set(null).then(()=>{
            alert("Eliminado")
        })

        const temporal = lista.filter((item)=>{
            return item.idComida!== id;
        })
        setLista(temporal)
    }

    const addSelect=(x)=>{
        const temporal = lista.filter((selected)=>{
            return selected.tipo=== x;
        })
        setListaSelected(temporal)
    }

    return(
        <ComidaContext.Provider
            value={{
                comida,
                lista,
                setComida,
                setLista,
                eliminar,
                setListaSelected,
                listaSelected,
                addSelect
            }}
        >
            {props.children}

        </ComidaContext.Provider>
    )
}

export default ComidaProvider;