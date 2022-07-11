import {
    Text,
    TextInput,
    View,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StatusBar,
    Image,
    // Button
} from "react-native";
import React, { useState } from "react";
import styles from "../../useful/style";
import firebase from '../../useful/firebase/config'
import { TouchableOpacity } from "react-native-gesture-handler";
// import { useNavigation } from "@react-navigation/native";
import DateTimePicker from '@react-native-community/datetimepicker';
// import { useRef } from "react";
import { Picker } from '@react-native-picker/picker'
// import { Icon } from "react-native-elements";
// import Ionicons from '@expo/vector-icons/Ionicons'; 

const Newcomp = ({ route, navigation }) => {

    const database = firebase.firestore()
    const [nome, setnome] = useState('')
    const [gravidade, setgravidade] = useState('Outro')
    const [nota, setnota] = useState('')


    //date states
    // const [datea, setdatea] = useState(new Date());
    const [datea, setdatea] = useState(new Date());

    // const [mode, setmode] = useState('date');

    const [dateformat, setdateformat] = useState([]);

    const [show, setshow] = useState(Platform.OS === 'ios');
    const [textdata, settextdata] = useState('empty')
    const [texttime, settexttime] = useState('empty')


    const [datainicial, setdatainicial] = useState('');



    const [dateoff, setdateoff] = useState(true);

    const onchange = (event, selecteddate) => {
        const currentdate = selecteddate || datea;
        setshow(Platform.OS === 'ios');
        setdatea(currentdate);
        let tempdate = new Date(currentdate);




        let fdate = tempdate.getDate() + '/' + (tempdate.getMonth() + 1) + '/' + tempdate.getFullYear();

        // let ftime = 'Hours: ' + tempdate.getHours() + ' Minutes: ' + tempdate.getMinutes();

        console.log(tempdate.getDay())
        console.log(tempdate.getDate())



        var cont = 0;

        if ((tempdate.getMonth() + 1) < 10) {
            // console.log('mes é menor que 10')
            setdateformat(tempdate.getFullYear() + '-0' + (tempdate.getMonth() + 1) + '-' + tempdate.getDate());
            cont = cont + 1;
        }
        if ((tempdate.getDate()) < 10) {
            // console.log('dia é menor que 10')
            setdateformat(tempdate.getFullYear() + '-' + (tempdate.getMonth() + 1) + '-0' + tempdate.getDate());
            cont = cont + 1;
        }
        if (cont === 2) {
            setdateformat(tempdate.getFullYear() + '-0' + (tempdate.getMonth() + 1) + '-0' + tempdate.getDate());
        }
        if (cont === 0) {
            setdateformat(tempdate.getFullYear() + '-' + (tempdate.getMonth() + 1) + '-' + tempdate.getDate());
        }



        var contdois = 0;

        if ((tempdate.getMonth() + 1) < 10) {
            // console.log('mes é menor que 10')
            setdatainicial(tempdate.getFullYear() + '-0' + (tempdate.getMonth() + 1) + '-' + tempdate.getDate());
            contdois = contdois + 1;
        }
        if ((tempdate.getDate()) < 10) {
            // console.log('dia é menor que 10')
            setdatainicial(tempdate.getFullYear() + '-' + (tempdate.getMonth() + 1) + '-0' + tempdate.getDate());
            contdois = contdois + 1;
        }
        if (contdois === 2) {
            setdatainicial(tempdate.getFullYear() + '-0' + (tempdate.getMonth() + 1) + '-0' + tempdate.getDate());
        }
        if (contdois === 0) {
            setdatainicial(tempdate.getFullYear() + '-' + (tempdate.getMonth() + 1) + '-' + tempdate.getDate());
        }

        // console.log(cont)
        // console.log(dateformat)

        settextdata(fdate)
        // settexttime(ftime)

    }

    // const showmode = (currentmode) => {
    //     setshow(true);
    //     setmode(currentmode);
    // }



    function decisao() {
        if (dateoff) addmod()
        else add()
    }

    function add() {
        database.collection(route.params.idUser).add({
            nomecomp: nome,
            datacomp: textdata,
            categoriacomp: gravidade,
            notacomp: nota,
            datea: datea,
            datef: dateformat,
            datoff: dateoff,
            concluido: false
        })
        navigation.goBack()
    }

    function addmod() {
        onchange(new Date())


        database.collection(route.params.idUser).add({
            nomecomp: nome,
            // datacomp: textdata,
            categoriacomp: gravidade,
            notacomp: nota,
            // data: datea,
            // datef: dateformat,
            datoff: dateoff,
            concluido: false

        })
        navigation.goBack()
    }



    {
        navigation.setOptions({
            headerRight: () => (
                <View
                    style={{
                        // borderWidth: 2, 
                        // borderColor: 'red', 
                        height: '100%',
                        width: '100%',
                        alignItems: 'flex-end',
                        justifyContent: 'center',
                        marginRight: 10
                    }}>

                    {nome === ''
                        ?
                        // desativado
                        <TouchableOpacity
                            style={{
                                marginRight: 6,
                                backgroundColor: '#6F5F95',
                                paddingHorizontal: 12,
                                justifyContent: 'center',
                                paddingVertical: 5,
                                borderRadius: 20,


                            }}
                            disabled={true}
                        >
                            {/* salvar */}
                            <Text
                                style={{
                                    fontSize: 18,
                                    color: '#9A9A9A',
                                    fontWeight: '600'
                                }}>
                                Salvar
                            </Text>
                        </TouchableOpacity>
                        :
                        // ativado
                        <TouchableOpacity
                            style={{
                                marginRight: 6,
                                backgroundColor: '#7860B3',
                                paddingHorizontal: 12,
                                paddingVertical: 5,
                                borderRadius: 20,


                            }}
                            // disabled= {true}
                            onPress={() => { decisao() }}
                        >
                            <Text
                                style={{
                                    fontSize: 18,
                                    color: 'white',
                                    fontWeight: '600'
                                }}
                            >
                                Salvar
                            </Text>
                        </TouchableOpacity>
                    }

                </View>

            )
        })
    }




    return (
        // all
        <KeyboardAvoidingView style={styles.ctnnewcomp}

            behavior={Platform.OS === "ios" ? "padding" : "height"}>

            <View
                style={{

                    marginTop: '2%',
                    // borderWidth: 2,
                    // borderColor: 'yellow',
                    height: 600

                }}>
                <StatusBar
                    barStyle='light-content'
                    backgroundColor={'#2a2a2a'}
                />


                {/* inputs  */}
                <View style={styles.formnamectn}>
                    {/* input nome  */}
                    <TextInput
                        style={styles.inputncname}
                        placeholder="Nome"
                        onChangeText={setnome}
                        value={nome}
                        placeholderTextColor='#B19C90'
                    />
                    {/* linha */}
                    <View
                        style={{
                            borderBottomColor: '#B19C90',
                            borderBottomWidth: 1,
                            width: '100%',
                            marginTop: 15,
                            // borderWidth: 2, 
                        }}
                    />
                    {/* input nota */}
                    <TextInput
                        style={styles.inputncnota}
                        placeholder="Nota"
                        onChangeText={setnota}
                        value={nota}
                        placeholderTextColor='#B19C90'
                        multiline={true}

                    />

                </View>


                {/* row com picker e datetime  */}

                <View style={styles.ctndateandpicker}>
                    {/* aparece o botao de ativar se for android */}
                    {Platform.OS === 'android'
                        ?
                        // funciona 
                        <View style={styles.ctndateandroid}>
                            {/* ativar data, primeiro row*/}
                            <View
                                style={{
                                    flexDirection: 'row',
                                    // borderWidth: 2,
                                    // borderColor: 'red',
                                    height: 50,
                                    justifyContent: 'center'

                                }}>
                                <Text
                                    style={{
                                        color: 'white',
                                        fontSize: 20,
                                        // borderWidth: 2,
                                        // borderColor: 'blue',
                                        height: 40,
                                        marginTop: 3
                                    }}>
                                    Data
                                </Text>

                                <TouchableOpacity
                                    onPress={() => {
                                        setdateoff(!dateoff);
                                        if (!dateoff == false)
                                            setshow(true)
                                    }}
                                    style={{
                                        // width: '60%', 
                                        width: 55,
                                        height: 40,
                                        marginLeft: 2,

                                        // borderWidth: 2,
                                        // borderColor: 'green'
                                    }}
                                >
                                    {
                                        !dateoff
                                            ?
                                            <Image
                                                source={require('../content/newthree/enablet.png')}
                                                resizeMode='contain'
                                                style={{
                                                    width: '100%',
                                                    height: '100%'
                                                }} />
                                            :
                                            <Image
                                                source={require('../content/newthree/disablet.png')}
                                                resizeMode='contain'
                                                style={{
                                                    width: '100%',
                                                    height: '100%'
                                                }} />
                                    }

                                </TouchableOpacity>
                            </View>

                            {/* botao escolher */}
                            {/* <TouchableOpacity
                                style={styles.buttonativar}
                                onPress={() => { setshow(!show); setdateoff(false) }}
                                disabled={dateoff}>

                                <Text
                                    style={{
                                        alignSelf: 'center',
                                        fontSize: 18,
                                        color: 'white'
                                    }}
                                >
                                    Escolher
                                </Text>
                            </TouchableOpacity> */}

                            {
                                !dateoff
                                    ?
                                    <View
                                        style={{
                                            // borderWidth: 2,
                                            // borderColor: 'blue'
                                            width: '70%',
                                                alignSelf: 'center',
                                                borderRadius: 10,
                                                backgroundColor: 'rgba(0,0,0,0.3)',
                                                paddingVertical: 3
                                        }}>
                                        <Text
                                            style={{
                                                fontSize: 18,
                                                color: 'white',
                                                alignSelf: 'center'
                                            }}
                                            onPress = {()=>setshow(true)}
                                            >
                                            {textdata}
                                        </Text>
                                    </View>
                                    :
                                    <View/>

                            }



                        </View>


                        :
                        <View />
                    }


                    {/* o datetime se for andoid */}
                    {
                        show && Platform.OS === 'android' && (
                            <DateTimePicker
                                testID='dateTimePicker'
                                value={datea}
                                mode='date'
                                display='default'
                                onChange={onchange}
                                style={styles.datenewcomp}
                            />
                        )
                    }


                    {/* esse datetime já aparece se for ios */}
                    {
                        show && Platform.OS === 'ios' && (
                            <View style={styles.ctndateios}>

                                <View style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    height: '20%',
                                    marginBottom: 15,
                                    width: '100%',
                                    marginTop: 55

                                }}>

                                    <Text style={{
                                        fontSize: 25,
                                        color: 'white',
                                        marginLeft: 7
                                    }}>
                                        Data
                                    </Text>
                                    <TouchableOpacity
                                        style={{
                                            width: 70,

                                            height: 40,
                                            marginLeft: 5
                                        }}
                                        onPress={() => { setdateoff(!dateoff); onchange(datea); }}>
                                        {
                                            !dateoff
                                                ?
                                                <Image
                                                    source={require('../content/newthree/enablet.png')}
                                                    resizeMode='contain'
                                                    style={{
                                                        width: '100%',
                                                        height: '100%'
                                                    }} />
                                                :
                                                <Image
                                                    source={require('../content/newthree/disablet.png')}
                                                    resizeMode='contain'
                                                    style={{
                                                        width: '100%',
                                                        height: '100%'
                                                    }} />
                                        }

                                    </TouchableOpacity>



                                </View>

                                {
                                    dateoff === false
                                        ?
                                        <DateTimePicker
                                            testID='dateTimePicker'
                                            value={datea}
                                            mode='date'
                                            display='compact'
                                            onChange={onchange}
                                            style={styles.datenewcompios}
                                            disabled={dateoff}
                                            themeVariant={'dark'}
                                            textColor='red'

                                        />
                                        :
                                        <View />
                                }

                                {/* <Text>
                                    <Ionicons name='md-checkmark-circle' size={32} color='green' />;
                                </Text> */}
                            </View>
                        )
                    }



                    {Platform.OS === 'ios'
                        ?
                        <Picker
                            selectedValue={gravidade}
                            onValueChange={(itemValue, itemIndex) =>
                                setgravidade(itemValue)
                            }
                            style={{
                                width: '45%', backgroundColor: '#343A50',
                                borderRadius: 20, marginLeft: '2%',

                                justifyContent: 'center',
                            }}
                            enabled={true}


                        >
                            <Picker.Item label="Aula" value="Aula" color="white" />
                            <Picker.Item label="Trabalho" value="Trabalho" color="white" />
                            <Picker.Item label="Estudar" value="Estudar" color="white" />
                            <Picker.Item label="Outro" value="Outro" color="white" />
                        </Picker>
                        :
                        <Picker
                            selectedValue={gravidade}
                            onValueChange={(itemValue, itemIndex) =>
                                setgravidade(itemValue)
                            }
                            style={{
                                width: '45%', backgroundColor: '#343A50',
                                borderRadius: 20, marginLeft: '2%',
                                height: '55%', color: 'white',

                                justifyContent: 'center',
                                marginTop: 8
                            }}
                            enabled={true}


                        >
                            <Picker.Item label="Aula" value="Aula" color="black" />
                            <Picker.Item label="Trabalho" value="Trabalho" color="black" />
                            <Picker.Item label="Estudar" value="Estudar" color="black" />
                            <Picker.Item label="Outro" value="Outro" color="Black" />
                        </Picker>

                    }





                </View>
            </View>
        </KeyboardAvoidingView>



    )
}
export default Newcomp;