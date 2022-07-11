
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import firebase from '../../useful/firebase/config'
import React, { useState, useEffect } from "react";
import styles from '../../useful/style'

import { Button } from "react-native";

const Faltas = ({ route }) => {

    
    const database = firebase.firestore();
    const [info, setInfo] = useState([])
    const [loading, setloading] = useState(true)









    useEffect(() => {
        setloading(false)
        database.collection(route.params.idUser).onSnapshot((query) => {
            const list = []
            query.forEach((doc) => {
                list.push({ ...doc.data(), id: doc.id }) //list.push(doc.data()) desse jeito não ta pegando o id do deumento, só o que ta dentro do documento, 
                /*para pegar o que ta dentro seria tipo list.push({...doc.data(), id: doc.id}), nesse caso ta pegando 
                o data do doc, ou seja o conteúdo de dentro do documento, mais o doc.id, ta pegando os dois.
                */
            })
            setInfo(list)

            console.log(list)



            setloading(false)



            let newinfo = list;

            newinfo.sort((a, b) => (a.datef > b.datef ? 1 : b.datef > a.datef ? -1 : 0));
            // newinfo.sort((a,b) => a.nomecomp - b.nomecomp)
            // newinfo.sort((a,b) => (a.nomecomp).localeCompare(b.nomecomp))
            setInfo(newinfo);




        })
    }, []) 
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: '#2a2a2a',
                // justifyContent: 'center'
                borderWidth: 2, 
               
            }}
        >

            <View
                style={{
                    backgroundColor: '#2a2a2a',
                    // flex: 1,
                    flexDirection: 'row',
                    // borderWidth: 2,
                    borderColor: '#3a3a3a',
                    width: '88%',
                    height: '70%',
                    marginTop: 40,
                    alignSelf: 'center',
                    // alignItems: 'center',
                    // justifyContent: 'center',
                    borderRadius: 20,
                    // backgroundColor: '#3a3a3a'
                }}

            >
                <FlatList
                    // style={styles.listcomp}
                    data={info}
                    // style={{
                    //     borderWidth: 2,
                    //     borderColor: 'lightgreen',
                    //     flex: 1
                    // }}
                    renderItem={({ item }) => {
                        return (
                            <View
                                style={{
                                    // borderWidth: 2,
                                    // borderColor: '#3a3a3a',
                                    marginTop: 4,
                                    height: '100%',
                                    backgroundColor: '#4a4a4a',
                                    borderRadius: 15,
                                    // padding: 26,
                                    height: 80,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    flexDirection: 'row'
                                }}

                            >
                                <TouchableOpacity
                                    style={{
                                        // borderWidth: 2,
                                        // borderColor: 'red',
                                        width: '100%',
                                        height: '100%',
                                        justifyContent: 'center'
                                    }}

                                >
                                    <Text style={{
                                        color: 'white', fontSize: 20,
                                        alignSelf: 'center',

                                    }}>
                                        {item.nomecomp}
                                    </Text>
                                </TouchableOpacity>
                           
                            </View>
                        )
                    }}

                />
                {/* <TouchableOpacity
                    style={{
                        borderWidth: 2,
                        borderColor: 'lightblue',
                        width: 80,
                        paddingVertical: 15,
                        paddingHorizontal: 20,
                        height: 60
                    }}
                    // onPress= {}

                >
                    <Text
                        style={{
                            color: 'white',
                            fontSize: 20
                        }}
                    >
                        asdf
                    </Text>

                </TouchableOpacity>


                <Text
                    style={{
                        color: 'white',
                        fontSize: 25
                    }}>
                    igor
                </Text> */}
            </View>
            {/* <View>
                <Button
                    onPress={() => onDisplayNotification()}
                />
            </View> */}

        </View>
    )
}

export default Faltas;