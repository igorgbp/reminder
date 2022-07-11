import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Image, Touchable, StatusBar } from "react-native";
import styles from "../../useful/style";
import * as Animatable from 'react-native-animatable';



// import { AntDesign } from '@expo/vector-icons';



import firebase from "../../useful/firebase/config";

import {
    useFonts,
    Jost_400Regular
} from '@expo-google-fonts/jost'
import AppLoading from "expo-app-loading";





export default function Login() {
    const [fonts] = useFonts(
        {
            Jost_400Regular
        }
    )









    const [email, setemail] = useState('')
    const [password, setpass] = useState('')
    const [errorlogin, seterrorlogin] = useState('')




    if (!fonts) {
        <AppLoading />
    }

    const loginfirebase = () => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                //navigation.navigate('Compromissos', { idUser: user.uid })
                navigation.navigate('draws', { idUser: user.uid })
                
                // ...
            })
            .catch((error) => {
                seterrorlogin(true)
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    }

    const navigation = useNavigation();
    const newLocal = () => { loginfirebase(); };
    return (
        <KeyboardAvoidingView style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <View style={styles.backgroundlogin}>

                <StatusBar
                barStyle="light-content"
                backgroundColor={'#2a2a2a'}
                />


                <Animatable.Image
                    animation={'fadeIn'}
                    source={require('../content/new/backgroundlogin.png')}
                    resizeMode='cover'
                    style = {{flex:1, width:'100%', opacity:0.6}}
                >

                </Animatable.Image>

            </View>

            <View
                style={styles.ctnlogin}
                
            >
                <Animatable.Image 
                animation={'fadeInUp'}
                style={styles.imagelogin}
                source= {require('../content/new/logonewlogin.png')}
                resizeMode= 'contain'>
                </Animatable.Image>
                <TextInput
                    style={styles.inputloginemail}
                    type='text'
                    onChangeText={(text) => {setemail(text); seterrorlogin(false)}}
                    value={email}
                    placeholder='Email'
                    placeholderTextColor='#767676'
                    
                />
                <TextInput
                    style={styles.inputloginpass}
                    secureTextEntry={true}
                    type='text'
                    onChangeText={(text) => {setpass(text); seterrorlogin(false)}}
                    value={password}
                    placeholder='Senha'
                    placeholderTextColor='#767676'
                />



                {email === '' || password === ''
                    ?
                    <TouchableOpacity style={styles.buttonlogindisabled} disabled={true}>
                        <Text style={styles.textbuttonlogindisabled}>Entrar</Text>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity style={styles.buttonlogin} onPress={() => { loginfirebase() }}>
                        <Text style={styles.textbuttonlogin}>Entrar</Text>
                    </TouchableOpacity>
                }
                {/* <TouchableOpacity style={styles.buttonlogin} onPress={() => { loginfirebase() }}>
                        <Text style={styles.textbuttonlogin}>ir pra tab</Text>
                    </TouchableOpacity> */}

                {errorlogin === true
                    ?
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
                               Email ou senha incorretos</Text>
                    </View>
                    :
                    <View />
                }
                <View
                    style = {{
                        alignItems: 'center', 
                        // borderWidth: 2, 
                        // borderColor: 'blue',
                        marginTop: 20
                    }}
                >
                    <Text style={styles.textntc}>Não tem uma conta?</Text>
                <TouchableOpacity style={styles.buttoncad} onPress={() => navigation.navigate('Cadastro')}>
                    <Text style={styles.textbuttoncad}>Cadastre-se</Text>
                </TouchableOpacity>
                </View>

                

                {/* <TouchableOpacity><Text style={{
                    color:'white',
                    fontSize:25
                    
                }}
                onPress={()=>{navigation.navigate('Welcome')}}
                >welcome</Text></TouchableOpacity> */}
            </View>


        </KeyboardAvoidingView>



    )
}