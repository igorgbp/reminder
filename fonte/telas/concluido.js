import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    StatusBar,
    // ScrollView,
    Image,
    ActivityIndicator,
    SafeAreaView
} from "react-native";
import firebase from '../../useful/firebase/config'
import React, { useState, useEffect } from "react";
import styles from "../../useful/style";




const Concluido = ({route}) =>{

    const database = firebase.firestore();
    const [info, setInfo] = useState([])
    const [loading, setloading] = useState(true)
    const [flag, setflag] = useState('0')

useEffect(() => {
    // setloading(false)
    database.collection(route.params.idUser).onSnapshot((query) => {
        const list = []
        setflag('0')
        query.forEach((doc) => {
            list.push({ ...doc.data(), id: doc.id }) //list.push(doc.data()) desse jeito não ta pegando o id do deumento, só o que ta dentro do documento, 
            /*para pegar o que ta dentro seria tipo list.push({...doc.data(), id: doc.id}), nesse caso ta pegando 
            o data do doc, ou seja o conteúdo de dentro do documento, mais o doc.id, ta pegando os dois.
            */
            setflag('1')
        })
        setInfo(list)

        // if (list == )
        // {setflag('0')
        // console.log('flagzero')}
        // else
        // {setflag('1')
        // console.log('flagum')}




        setloading(false)



        let newinfo = list;

        newinfo.sort((a, b) => (a.datef > b.datef ? 1 : b.datef > a.datef ? -1 : 0));
        // newinfo.sort((a,b) => a.nomecomp - b.nomecomp)
        // newinfo.sort((a,b) => (a.nomecomp).localeCompare(b.nomecomp))
        setInfo(newinfo);




    })

    



}, [])
function imageback(categoriacomp) {
        // setloading(true)
        let marca = 0
        return (

            // marca===0
            // ?
            // <View>
            // :
            // <View></View>;



            categoriacomp === 'Aula'
                ?
                <Image
                    source={require('../content/newtwo/aula.png')}
                    resizeMode='cover'
                    style={{
                        width: '100%', height: '100%',
                        borderRadius: 21,
                        opacity: 0.4,
                        alignSelf: 'flex-end',

                    }}
                    onLoad={() => {
                        marca = 1
                    }}


                />


                :
                categoriacomp === 'Trabalho'
                    ?

                    <Image
                        source={require('../content/newtwo/trabalho.png')}
                        resizeMode='cover'
                        style={{
                            width: '100%', height: '100%',
                            borderRadius: 21,
                            opacity: 0.4,
                            backgroundColor: 'blue',
                        }}
                    // onLoad = {()=>{
                    //     setloading(false)
                    // }}

                    />
                    :
                    categoriacomp === 'Estudar'
                        ?
                        <Image
                            source={require('../content/newtwo/estudar.png')}
                            resizeMode='cover'
                            style={{
                                width: '100%', height: '100%',
                                borderRadius: 21,
                                opacity: 0.4
                            }}
                        // onLoad = {()=>{
                        //     setloading(false)
                        // }}

                        />
                        :
                        <Image
                            source={require('../content/newtwo/outro.png')}
                            resizeMode='cover'
                            style={{
                                width: '100%', height: '100%',
                                borderRadius: 21,
                                opacity: 0.4
                            }}
                        // onLoad = {()=>{
                        //     setloading(false)
                        // }}

                        />




        )


    }
    function deletetask(id) {
        database.collection(route.params.idUser).doc(id).delete()

        
    }
function nconcluir (id){
    database.collection(route.params.idUser).doc(id).update({
        concluido: false

    })
}

    return (
        <SafeAreaView
            style = {{
                backgroundColor: '#2a2a2a'
            }}
        >
            <StatusBar
        barStyle='light-content'
        backgroundColor={'#2a2a2a'}
      />
            <Text
                style = {{
                    fontSize: 20, 
                    alignSelf: 'center', 
                    color: '#FFF',
                    marginTop: 19
                }}
            >
                Compromissos concluídos
            </Text>
            <FlatList
                    style={styles.listcomp}
                    data={info}
                    renderItem={({ item }) => {
                        if (item.concluido === true) {
                        return (
                            <View style={{
                                flex: 1,
                                // borderWidth: 2, borderColor: 'purple'
                            }}>


                                <View
                                    style={styles.compconcluido}
                                    // onPress={() => {
                                    //     navigation.navigate('Instancia',
                                    //         {
                                    //             comp: item.nomecomp,
                                    //             id: item.id,
                                    //             idUser: route.params.idUser,
                                    //             gravidade: item.categoriacomp,
                                    //             nota: item.notacomp,
                                    //             data: item.datacomp,
                                    //             datea: item.datea,
                                    //             datef: item.datef,
                                    //             datoff: item.datoff,
                                    //             concluido: item.concluido

                                    //         })
                                    // }}
                                    >
                                    <View style={{
                                        width: '100%', height: '100%',
                                        justifyContent: 'center',
                                        // marginRight: 5,

                                        // borderWidth: 2,
                                        // borderColor: 'green',

                                    }}>

                                        {/* {item.categoriacomp === 'aula'
                                            ?
                                            <Image
                                                source={require('../content/newtwo/aula.png')}
                                                resizeMode='cover'
                                                style={{
                                                    width: '100%', height: '100%',
                                                    borderRadius: 21,
                                                    opacity: 0.6,
                                                    alignSelf: 'flex-end',

                                                }}

                                            />
                                            
                                            :
                                            item.categoriacomp === 'trabalho'
                                                ?

                                                <Image
                                                    source={require('../content/newtwo/trabalho.png')}
                                                    resizeMode='cover'
                                                    style={{
                                                        width: '100%', height: '100%',
                                                        borderRadius: 21,
                                                        opacity: 0.6,
                                                        backgroundColor: 'blue',
                                                    }}

                                                />
                                                :
                                                item.categoriacomp === 'estudar'
                                                    ?
                                                    <Image
                                                        source={require('../content/newtwo/estudar.png')}
                                                        resizeMode='cover'
                                                        style={{
                                                            width: '100%', height: '100%',
                                                            borderRadius: 21,
                                                            opacity: 0.6
                                                        }}

                                                    />
                                                    :
                                                    <View></View>

                                        } */}
                                        {imageback(item.categoriacomp)
                                        }
                                        {
                                            setloading(false)
                                        }

                                    </View>

                                    <View style={{
                                        width: '100%', height: '100%',
                                        // borderWidth: 2, borderColor: 'yellow',
                                        flexDirection: 'row',
                                        position: 'absolute'
                                    }}>
                                        <View style={{
                                            width: '55%', height: '100%',
                                            flex: 1,
                                            marginLeft: 18,
                                            marginTop: 5,
                                            // borderWidth: 2,
                                            // borderColor: 'red'

                                        }}>
                                            <View
                                                style={{
                                                    // borderWidth: 2, 
                                                    // borderColor:'blue',
                                                    // height: '55%'
                                                    borderRadius: 15,
                                                    paddingVertical: 2, 
                                                    paddingHorizontal: 8
                                                }}
                                            >
                                                <Text style={styles.textbuttoncomp}
                                                    numberOfLines={1}
                                                >{item.nomecomp}
                                                </Text>
                                            </View>



                                            <View
                                              style = {{
                                                // borderWidth: 2,
                                                // borderColor: 'blue'
                                              }}
                                            >
                                                <Text style={styles.textcategoriacomp}>
                                                {item.categoriacomp}
                                            </Text>

                                            {item.datoff === true
                                                ?
                                                <View />
                                                :
                                                <Text style={styles.textdatacomp}>
                                                    {item.datacomp}
                                                </Text>
                                            }
                                            </View>

                                            


                                            {/* colocando uma view a mais para poder, mudar a opacidade do fundo 
                                                            do container da nota depois, pra ficar um pouco transluscido e ver a 
                                                            imagem, qua ta atrás no touchableopacity da comp */}
                                            {/* <View
                                                    //esse é o com a borda amarela
                                                    ></View> */}

                                            {/* esse de baico é o com a borda laranja*/}



                                        </View>
                                        <View style={{
                                            width: '40%',
                                            height: '100%',
                                            alignItems: 'flex-start',
                                            // justifyContent: 'center',
                                            // position:'absolute',
                                            // borderWidth: 2,
                                            // borderColor: 'green',


                                            }}>


                                            <View
                                                style={{
                                                    // borderWidth: 2, 
                                                    // borderColor: 'blue',
                                                    flexDirection: 'row',
                                                    alignItems: 'center',
                                                    height: '35%', 
                                                    marginTop: 6,
                                                    alignSelf: 'flex-end',
                                                    marginRight:10
                                                    }}>
                                                    


                                                    <TouchableOpacity
                                                        style={{
                                                            // borderWidth: 2,
                                                            // borderColor: 'green',
                                                            width: '40%',
                                                            height: '100%',
                                                            justifyContent: 'center',
                                                            alignItems: 'center'
                                                        }}
                                                        onPress={() => {
                                                            // setloading(true);
                                                            nconcluir(item.id)
                                                        }}
                                                    >
                                                        <Image
                                                            source={require('../content/newfour/blok.png')}
                                                            resizeMode='contain'
                                                            style={{
                                                                width: '80%', height: '80%',
                                                                tintColor: '#eb8892'
                                                            }}
                                                        />

                                                    </TouchableOpacity>

                                                



                                                


                                                    <TouchableOpacity
                                                        style={{
                                                            // borderWidth: 2,
                                                            // borderColor: 'green',
                                                            width: '35%',
                                                            height: '80%',
                                                            justifyContent: 'center',
                                                            alignItems: 'center'
                                                        }}
                                                        onPress={() => {
                                                            // setloading(true);
                                                            deletetask(item.id)
                                                        }}
                                                    >
                                                        <Image
                                                            source={require('../content/newthree/trasht.png')}
                                                            resizeMode='contain'
                                                            style={{
                                                                width: '100%', height: '100%',
                                                                tintColor: '#eb8892'
                                                            }}
                                                        />

                                                    </TouchableOpacity>

                                                

                                            </View>
                                            {
                                                item.notacomp === ''
                                                    ?
                                                    <View></View>
                                                    :
                                                    <View style={{
                                                        // position: 'absolute', 
                                                        width: '100%',
                                                        height: '50%',
                                                        // borderWidth: 2, borderColor: 'purple',
                                                        marginLeft: 22,
                                                        marginTop: 4,
                                                        alignSelf: 'center',
                                                        // alignItems: 'center',
                                                        // backgroundColor: 'rgba(34, 26, 25, 0.0)',
                                                        justifyContent: 'center',
                                                        // borderTopLeftRadius: 14,
                                                        padding: 10
                                                        // marginRight: 12

                                                    }}>
                                                        <Text numberOfLines={2} style={styles.textnotacomp}>

                                                            {item.notacomp}
                                                        </Text>



                                                    </View>
                                            }


                                        </View>
                                    </View>




                                </View>
                            </View>
                        )}
                    }} />
        </SafeAreaView>
    )

}
export default Concluido