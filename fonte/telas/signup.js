import {
    View, Text,
    TextInput, TouchableOpacity,
    KeyboardAvoidingView, StatusBar,
    Image, ActivityIndicator
} from "react-native"
import React, { useState } from "react"
import { useNavigation } from "@react-navigation/native";
import * as Animatable from 'react-native-animatable';
// import { AntDesign } from '@expo/vector-icons';

import styles from "../../useful/style";
import firebase from '../../useful/firebase/config'
import { useEffect } from "react";

const Signup = () => {
    const [email, setemail] = useState('');
    const [password, setpass] = useState('');
    const [nome, setnome] = useState('');
    const [errocadastro, seterrocadastro] = useState('');
    const navigation = useNavigation();
    const [loading, setloading] = useState(true)

    const cadastrofirebase = () => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                setloading(true)
                //navigation.navigate('Compromissos', { idUser: user.uid })
                navigation.navigate('draws', { idUser: user.uid })
                // ...
            })
            .catch((error) => {
                seterrocadastro(true)
                const errorCode = error.code;
                const errorMessage = error.message;

                // ..
            });
    }

    // function imageback(categoriacomp) {
    //     // setloading(true)
        
    //     return (


    //     )}


    useEffect(() => {
        setloading(false)

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
        

    return (
        

        <KeyboardAvoidingView style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}>


            <View style={styles.backgroundlogin}>
                <StatusBar
                    barStyle="light-content"
                />
                <Animatable.Image
                    animation={'fadeIn'}
                    
                    // onLoad= {setloading(false)}
                    source={require('../content/new/backgroundcad.png')}
                    resizeMode='cover'
                    style={{ flex: 1, width: '100%', opacity: 0.5 }}
                >
                </Animatable.Image>

            </View>


            <View style={styles.ctnlogin}>
                {/* <Text style={styles.texttitulologin}>CADASTRO</Text> */}
                <Animatable.Image
                    animation='slideInRight'
                    duration={2000}
                    onLoad = {() =>{}}
                    style={styles.imagecad}
                    source={require('../content/new/logonewlogin.png')}
                    resizeMode='contain'>
                </Animatable.Image>
                
                <TextInput
                    style={styles.inputcadnome}
                    type='text'
                    onChangeText={(text) => setnome(text)}
                    placeholder='Nome'
                    placeholderTextColor='#767676'
                    value={nome}
                />


                <TextInput
                    style={styles.inputcademail}
                    type='text'
                    onChangeText={(text) => { setemail(text); seterrocadastro(false) }}
                    value={email}
                    placeholder='Email'
                    placeholderTextColor='#767676'
                />



                <TextInput
                    style={styles.inputcadpass}
                    secureTextEntry={true}
                    type='text'
                    onChangeText={(text) => { setpass(text); seterrocadastro(false) }}
                    value={password}
                    placeholder='Senha'
                    placeholderTextColor='#767676'
                />



                {email === '' || password === '' || nome === ''
                    ?
                    <TouchableOpacity style={styles.buttoncaddisable} disabled={true}>
                        <Text style={styles.textbuttonlogindisabled}>Cadastrar-se</Text>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity style={styles.buttoncadcad} onPress={() => { cadastrofirebase() }}>
                        <Text style={styles.textbuttonlogin}>Cadastrar-se</Text>
                    </TouchableOpacity>
                }

                {errocadastro === true
                    ?
                    // <View style={styles.alert}>
                    //     <Text style={styles.texterrorcad}><AntDesign
                    //         name="warning" size={22}
                    //         color="#FE9393" />   Email ou senha incorretos</Text>
                    // </View>
                    <View style={styles.alert}>
                        <Image
                            source={require('../content/newthree/warning.png') }
                            resizeMode ='contain'
                            style = {{width: 20, height:'100%',
                            tintColor:'#FE9393', 
                            // borderWidth: 2, borderColor: 'blue'
                        }}
                           
                       
                            />
                            <Text style={styles.texterrorlogin}>
                               Email ou senha incompatíveis</Text>
                    </View>
                    :
                    <View />
                }

                <View>
                    <TouchableOpacity 
                style={{
                    color: '#FE9393',
                    marginTop: 15
                    
                }} 
                onPress={() => navigation.goBack()}>
                    <Text style={styles.textbuttoncadd}>Voltar para login</Text>
                </TouchableOpacity>
                    
                </View>
                
                

            </View>



        </KeyboardAvoidingView>
    )
}}

export default Signup