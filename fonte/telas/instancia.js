import {
    Text,
    TextInput,
    View,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StatusBar,
    Image
} from "react-native";
import React, { useState } from "react";
import styles from "../../useful/style";
import firebase from '../../useful/firebase/config'
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import DateTimePicker from '@react-native-community/datetimepicker';
import { useRef } from "react";
import { Picker } from '@react-native-picker/picker'
import { Icon } from "react-native-elements";




const Inst = ({ route }) => {


    let nova
    if (route.params.datoff) {
        nova = new Date()
    }
    else {
        nova = new Date(route.params.datef)
        nova.setDate(nova.getDate() + 1)
    }

    // const [datea, setdatea] = useState(new Date(route.params.datef));
    const [datea, setdatea] = useState(nova);
    // datea.setDate(datea.getDate()+1)
    const [mode, setmode] = useState('date');
    const [nome, setnome] = useState(route.params.comp)
    const [nota, setnota] = useState(route.params.nota)
    const [gravidade, setgravidade] = useState(route.params.gravidade)

    const teste = route.params.data;

    const [show, setshow] = useState(Platform.OS === 'ios');
    const [textdata, settextdata] = useState(route.params.data)
    const [texttime, settexttime] = useState('')

    const [dateformat, setdateformat] = useState(route.params.datef);


    const [dateoff, setdateoff] = useState(route.params.datoff);

    const onchange = (event, selecteddate) => {
        const currentdate = selecteddate || datea;
        setshow(Platform.OS === 'ios');
        setdatea(currentdate);

        let tempdate = new Date(currentdate);
        let fdate = tempdate.getDate() + '/' + (tempdate.getMonth() + 1) + '/' + tempdate.getFullYear();
        let datec = tempdate.getFullYear() + '-' + (tempdate.getMonth() + 1) + '-' + tempdate.getDate();
        let ftime = 'Hours: ' + tempdate.getHours() + ' Minutes: ' + tempdate.getMinutes();
        let fdated = tempdate.getDate() + '/' + (tempdate.getMonth() + 1) + '/' + tempdate.getFullYear();


        settextdata(fdate)
        settexttime(ftime)
        console.log(fdate)


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
    }


    function decisao() {
        if (dateoff) updatemod()
        else update()
    }

    function update(nomecomp, datacomp, categoriacomp, notacomp) {
        database.collection(route.params.idUser).doc(dados.id).update({
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

    function updatemod(nomecomp, datacomp, categoriacomp, notacomp) {
        database.collection(route.params.idUser).doc(dados.id).update({
            nomecomp: nome,
            // datacomp: textdata,
            categoriacomp: gravidade,
            notacomp: nota,
            // data: datea,
            datef: '',
            datoff: dateoff,
            concluido: false

        })
        navigation.goBack()
    }






    const navigation = useNavigation();
    const database = firebase.firestore();

    function deletetask(id) {
        database.collection(dados.idUser).doc(dados.id).delete()
        navigation.goBack()
    }

    const dados = route.params;

    {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity
                    style={{
                        marginRight: 24,
                        backgroundColor: '#6F5F95',
                        paddingHorizontal: 12,
                        paddingVertical: 5,
                        borderRadius: 20,


                    }}
                    onPress={() => { decisao() }}

                >
                    <Text style={{
                        fontSize: 18,
                        color: 'white',
                    }}>
                        Salvar
                    </Text>
                </TouchableOpacity>)
        })


        navigation.setOptions({
            headerLeft: () => (
                <TouchableOpacity
                    style={{


                        marginLeft: 13,
                        width: '100%',
                        // borderWidth: 2, 
                        // borderColor: 'yellow', 

                        paddingHorizontal: 12,
                        paddingVertical: 5,
                        borderRadius: 20


                    }}
                    onPress={() => { navigation.goBack() }}

                >
                    <Text style={{
                        fontSize: 18,
                        color: 'white',
                    }}>
                        Cancelar
                    </Text>
                </TouchableOpacity>)
        })
    }

    return (
        <View style={styles.ctninstancia}>

            <KeyboardAvoidingView style={styles.ctnnewcomp}
                behavior={Platform.OS === "ios" ? "padding" : "height"}>
                <View
                // style={{ justifyContent: '' }}
                >{/** */}
                    <StatusBar
                        barStyle='light-content'
                        backgroundColor={'#2a2a2a'}
                    >
                    </StatusBar>

                    {/* <Text style={styles.textnewcomp}>
                    Novo compromisso
                </Text> */}
                    {/* <Text style={styles.textnewcomp}>
                {textdata}
                </Text> */}


                    <View style={styles.formnamectn}>

                        <TextInput
                            style={styles.inputncnamein}
                            placeholder="Nome"
                            onChangeText={setnome}
                            value={nome}
                            placeholderTextColor='#928D81'
                        />

                        <View
                            style={{
                                borderBottomColor: '#ECDBBA',
                                borderBottomWidth: 1,
                                width: '100%',
                                marginTop: 15
                            }}
                        />

                        <TextInput
                            style={styles.inputncnotain}
                            placeholder="Nota"
                            onChangeText={setnota}
                            value={nota}
                            placeholderTextColor='#928D81'
                            multiline={true}
                            siz
                        />

                    </View>



                    <View style={styles.ctndateandpicker}>
                        {/* aparece o botao de ativar se for android */}
                        {Platform.OS === 'android'
                            ?
                            // <View style={styles.ctndateandroid}>
                            //     <TouchableOpacity
                            //         style={styles.buttonativar}
                            //         onPress={() => setshow(true)}>
                            //         <Text >
                            //             Ativar data
                            //         </Text>
                            //     </TouchableOpacity>


                            // </View>

                            <View style={styles.ctndateandroid}>
                                {/* ativar data, primeiro row*/}
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        // borderWidth: 2,
                                        // borderColor: 'red',
                                        height: 50,
                                        justifyContent: 'center',
                                        alignItems: 'center'

                                    }}>
                                    <Text
                                        style={{
                                            color: 'white',
                                            fontSize: 20,
                                            // borderWidth: 2,
                                            // borderColor: 'blue',
                                            height: 40,
                                            marginTop: 10,
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

                                {
                                    !dateoff
                                        ?
                                        <View
                                            style={{
                                                // borderWidth: 2,
                                                // borderColor: 'blue',
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
                                                onPress={() => {
                                                    setshow(true)
                                                }}
                                            >
                                                {textdata}
                                            </Text>
                                        </View>
                                        :
                                        <View />

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
                        {/* {
                            route.params.datoff == true
                            ?
                            setdatea(new Date())
                            :
                            <View/>
                        } */}
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





                        {/* <Picker
                            selectedValue={gravidade}
                            onValueChange={(itemValue, itemIndex) =>
                                setgravidade(itemValue)
                            }
                            style={{
                                width: '45%', backgroundColor: '#343A50',
                                borderRadius: 20, marginLeft: '2%',
                                borderTopStartRadius: 10, borderBottomStartRadius: 10,
                                justifyContent: 'center',
                            }}
                            enabled={true}


                        >
                            <Picker.Item label="Aula" value="Aula" color="white" />
                            <Picker.Item label="Trabalho" value="Trabalho" color="white" />
                            <Picker.Item label="Estudar" value="Estudar" color="white" />
                            <Picker.Item label="Outro" value="Outro" color="white" />
                        </Picker> */}


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
                                <Picker.Item label="Aula" value="Aula" color="black" 
                                />
                                <Picker.Item label="Trabalho" value="Trabalho" color="black" />
                                <Picker.Item label="Estudar" value="Estudar" color="black" />
                                <Picker.Item label="Outro" value="Outro" color="Black" />
                            </Picker>

                        }


                    </View>
                    <TouchableOpacity onPress={() => { deletetask(dados.id) }}
                        style={styles.buttondelete}>
                        <Text style={{
                            color: 'white', fontSize: 16,
                            fontWeight: '500'
                        }}>Deletar</Text>
                    </TouchableOpacity>
                    <Text style={{
                        color: 'white', fontSize: 25,
                        alignSelf: 'center'
                    }}></Text>


                    {/* <View style={styles.cntdownnewcomp}>

                </View> */}



                    {/* <TouchableOpacity onPress={() => showmode('time')}>
                    <Text>
                        Mostra em formato de hora
                    </Text>
                </TouchableOpacity> */}


                    {/* <View style={{
                            borderWidth: 2, borderColor: 'red',
                            alignSelf: 'center', width: '40%',
                            position: 'absolute',
                        }}>
                            {nome === ''
                                ?
                                <TouchableOpacity style={styles.buttonnewcompsavedisabled} disabled={true}>
                                    <Text style={styles.textbuttonnewcompdisabled}>Salvar</Text>
                                </TouchableOpacity>
                                :
                                <TouchableOpacity onPress={() => { update(nome, textdata, gravidade, nota) }} style={styles.buttonnewcompsave}>
                                    <Text style={styles.textbuttonnewcomp}>Salvar</Text>
                                </TouchableOpacity>
                            }
                        </View> */}




                    {/* <TextInput>
                    asdf
                </TextInput> */}
                </View>


            </KeyboardAvoidingView>

        </View>
    )

}

export default Inst;