// import { useNavigation } from "@react-navigation/native";
import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    StatusBar,
    // ScrollView,
    Image,
    ActivityIndicator
} from "react-native";
import firebase from '../../useful/firebase/config'
import React, { useState, useEffect } from "react";
import styles from "../../useful/style";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { Icon } from "react-native-elements";





const Comp = ({ route, navigation }) => {

    const database = firebase.firestore();
    const [info, setInfo] = useState([])
    const [loading, setloading] = useState(true)



    const [flag, setflag] = useState('0')


    {


        // const [ok, setok] = useState(false)

        // const datateste = new Date(route.params.data)


        // function logout() {
        //     firebase.auth().signOut().then(() => {
        //         navigation.navigate('Welcome')
        //     }).catch((error) => {
        //     })
        // }




        // const handleOrderClick = () => {
        //     let newinfo = [info];

        //     newinfo.sort((a, b) => (a.nomecomp.tostr > b.nomecomp ? 1 : b.nomecomp > a.nomecomp ? -1 : 0));
        //     // newinfo.sort((a,b) => a.nomecomp - b.nomecomp)
        //     // newinfo.sort((a,b) => (a.nomecomp).localeCompare(b.nomecomp))
        //     setInfo(newinfo);
        // }

    }

    function deletetask(id) {
        database.collection(route.params.idUser).doc(id).delete()
        // setflag('0')

        // navigation.goBack()
    }
    function concluir(id) {
        database.collection(route.params.idUser).doc(id).update({
            concluido: true

        })
    }

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

    if (loading) {
        return <View
            style={{
                justifyContent: 'center',
                backgroundColor: '#2a2a2a',
                flex: 1

            }}>

            <ActivityIndicator
                animating={true}
                size="large"
                color='#FE9393'


            />


        </View>
    }
    else {
        // setloading(true)

        return (
            <View style={styles.ctnsafeareacomps}>

                <StatusBar
                    barStyle='light-content'
                    backgroundColor={'#2a2a2a'}
                />

                <FlatList
                    style={styles.listcomp}
                    data={info}
                    renderItem={({ item }) => {
                        if (item.concluido === false) {
                            return (
                                <View style={{
                                    flex: 1,
                                    // borderWidth: 2, borderColor: 'purple'
                                }}>


                                    <TouchableOpacity
                                        style={styles.buttoncomp}
                                        onPress={() => {
                                            navigation.navigate('Instancia',
                                                {
                                                    comp: item.nomecomp,
                                                    id: item.id,
                                                    idUser: route.params.idUser,
                                                    gravidade: item.categoriacomp,
                                                    nota: item.notacomp,
                                                    data: item.datacomp,
                                                    datea: item.datea,
                                                    datef: item.datef,
                                                    datoff: item.datoff,
                                                    concluido: item.concluido

                                                })
                                        }}>


                                        {/* image back */}
                                        <View style={{
                                            width: '100%', height: '100%',
                                            justifyContent: 'center',
                                            // marginRight: 5,

                                            // borderWidth: 2,
                                            // borderColor: 'green',

                                        }}>
                                            {imageback(item.categoriacomp)
                                            }
                                            {
                                                setloading(false)
                                            }

                                        </View>

                                        {/* row dos lados do comp */}
                                        <View
                                            style={{
                                                width: '100%', height: '100%',
                                                // borderWidth: 2, borderColor: 'yellow',
                                                flexDirection: 'row',
                                                position: 'absolute'
                                            }}>

                                            {/* lado esquerdo do row comp */}
                                            <View
                                                style={{
                                                    width: '55%', 
                                                    // height: '100%',
                                                    flex: 1,
                                                    marginLeft: 18,
                                                    justifyContent: 'center'
                                                    // marginTop: 5,
                                                    // borderWidth: 2,
                                                    // borderColor: 'red'

                                                }}>

                                                {/* nome compromisso */}
                                                <View
                                                    style={{
                                                        // borderWidth: 2, 
                                                        // borderColor:'blue',
                                                        // height: '55%'
                                                        // backgroundColor: 'rgba(0, 0, 0, 0.4)',
                                                        borderRadius: 15,
                                                        paddingVertical: 2, 
                                                        paddingHorizontal: 8

                                                    }}
                                                >
                                                    <Text style={styles.textbuttoncomp}
                                                        numberOfLines={2}
                                                    >{item.nomecomp}
                                                    </Text>
                                                </View>



                                                {/* data and cat */}
                                                <View
                                                    style={{
                                                        // borderWidth: 2,
                                                        // borderColor: 'white'
                                                    }}>
                                                     {/* categoria */}   
                                                    <Text style={styles.textcategoriacomp}>
                                                        {item.categoriacomp}
                                                    </Text>


                                                    {/* data */}
                                                    {item.datoff === true
                                                        ?
                                                        <View />
                                                        :
                                                        <Text style={styles.textdatacomp}>
                                                            {item.datacomp}
                                                        </Text>
                                                    }
                                                </View>





                                            </View>


                                            {/* lado direito*/}
                                            <View
                                                style={{
                                                    width: '40%',
                                                    height: '100%',
                                                    alignItems: 'flex-start',
                                                    // justifyContent: 'center',
                                                    // position:'absolute',
                                                    // borderWidth: 2,
                                                    // borderColor: 'green',


                                                }}>

                                                {/* botoes lixo e concluido */}
                                                <View
                                                    style={{
                                                        // borderWidth: 2,
                                                        // borderColor: 'blue',
                                                        flexDirection: 'row',
                                                        alignItems: 'center',
                                                        height: '40%',
                                                        marginTop: 6,
                                                        alignSelf: 'flex-end',
                                                        marginRight: 10
                                                    }}>


                                                    {/* botao concluido */}
                                                    <TouchableOpacity
                                                        style={{
                                                            width: '30%',
                                                            height: '90%',
                                                            padding: 8,
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                            // borderWidth: 2, 
                                                            borderColor: '#2a2a2a',
                                                            backgroundColor: '#3a3a3a',
                                                            borderRadius: 15,
                                                            marginRight: 3
                                                        }}

                                                        onPress={() => {
                                                            // setloading(true);
                                                            concluir(item.id)
                                                        }}
                                                    >
                                                        <Image
                                                            source={require('../content/ok.png')}
                                                            resizeMode='contain'
                                                            style={{
                                                                width: '100%', height: '100%',
                                                                tintColor: '#eb8892'
                                                            }}
                                                        />

                                                    </TouchableOpacity>



                                                    {/* botao lixo */}
                                                    <TouchableOpacity
                                                        style={{
                                                            width: '30%',
                                                            height: '90%',
                                                            padding: 8,
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                            // borderWidth: 2, 
                                                            borderColor: '#2a2a2a',
                                                            backgroundColor: '#3a3a3a',
                                                            borderRadius: 15
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


                                                {/* nota */}
                                                {
                                                    item.notacomp === ''
                                                        ?
                                                        <View></View>
                                                        :

                                                        <View
                                                            style={{
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




                                    </TouchableOpacity>
                                </View>
                            )
                        }
                    }} />

                {
                    flag === '0'
                        ?
                        <View style={{
                            // borderWidth: 2, borderColor: 'red', 
                            width: '100%', height: '100%',
                            alignItems: 'center',
                            justifyContent: 'center'

                        }


                        }>
                            <Text style={{
                                fontSize: 20, fontWeight: '500', color: '#6D5D5D',
                                // borderWidth: 2, borderColor: 'lightblue', 


                                // alignSelf: 'center'

                            }}>

                                Adicione um compromisso
                            </Text>

                        </View>
                        :
                        <View></View>
                }








                <View style={styles.ctnbuttonplus}>

                    <Image
                        style={styles.imagedegbuttonplus}
                        source={require('../content/newtwo/buttonshadow.png')}
                        resizeMode='stretch'
                    />

                    <TouchableOpacity style={styles.buttonplus}
                        onPress={() => navigation.navigate('Newcomp',
                            { idUser: route.params.idUser })}>

                        <View style={{
                            width: '100%',
                            height: '100%',
                            // borderRadius: 500



                        }}>

                            <Image
                                source={require('../content/newtwo/buttongradient.png')}
                                resizeMode='center'
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    borderRadius: 500

                                }}

                            >

                            </Image>

                        </View>

                        <Text style={styles.textbuttonplus}>+</Text>
                    </TouchableOpacity>

                </View>
            </View>

        )
    }
}

export default Comp;