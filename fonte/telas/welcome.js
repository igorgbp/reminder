import { useNavigation } from "@react-navigation/native";
import React, { useRef, useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, Linking, StatusBar } from "react-native";
import styles from '../../useful/style'
import firebase from '../../useful/firebase/config';
import { Video, AVPlaybackStatus } from 'expo-av';
import { Button } from "react-native";
import style from "react-native-datepicker/style";
import * as Animatable from 'react-native-animatable'


export default function Welcome() {
    const video = React.useRef(null);
    // const [status, setStatus] = React.useState({});


    useEffect(() => {
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                //navigation.navigate('Compromissos', { idUser: user.uid })
                //navigation.navigate('Newcomp')
                // navigation.navigate('tabs', { idUser: user.uid })
                navigation.navigate('draws',{ idUser: user.uid } )

            } else {
            }
        }
        )

    }, [])


    const navigation = useNavigation();


    return (
        <View style={styles.container}>
            <StatusBar
                barStyle="dark-content"
                backgroundColor={'#34a5'}
            />
            
            <Animatable.Image
                animation={'slideInUp'}
                source={require('../content/new/backgroundtwo.png')}
                resizeMode='cover'
                style={styles.backimagewelcome}
            />


            <View style={{ 
                position: 'absolute', 
                // flex:1,
                width: '100%', 
                height: '100%', 
                flexDirection: 'column',
                // borderWidth: 2, 
                // borderColor:'yellow'
                
                
                
                }}>
                <View style={styles.containerlogo}>


                    <Animatable.Image
                        animation='zoomInUp'
                        source={require('../content/welcome/logo.png')}
                        style={styles.imagelogo}
                        resizeMode='contain'

                    />
                    <Text style={styles.credittext} onPress={() => { Linking.openURL('https://instagram.com/igor.gbp') }}>
                        developed by @igor.gbp
                    </Text>




                </View>

                <View style={styles.ctnformspacewelcome}>
                    
                    <View style={styles.texttitlesformwelcome}>
                        <Text style={styles.title1}>Bem vindo ao Reminder</Text>
                        <Text style={styles.title2}>Faça login para começar</Text>
                    </View>
                    <TouchableOpacity style={styles.buttonwelcome} onPress={() => { navigation.navigate('Login') }}>

                        <Text style={{
                            position: 'absolute',
                            fontWeight: '400', 
                            fontSize: 24
                        }}>
                            Ir para o App
                        </Text>
                    </TouchableOpacity>

                    {/* <TouchableOpacity style={styles.buttonwelcome} onPress={() => {navigation.navigate('testedois')  }}>
                            <Text style={styles.textbuttonwelcome}>teste</Text>
                        </TouchableOpacity> */}
                    {/* <Button
                            title={status.isPlaying ? 'Pause' : 'Play'}
                            onPress={() =>
                                status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
                            }
                        /> */}

                    {/* <View style={styles.spacewelcome} /> */}

                </View>
            </View>





        </View>

    )
}

