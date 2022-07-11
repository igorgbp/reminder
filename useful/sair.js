
import { useNavigation } from "@react-navigation/native"
import React, { useEffect } from "react"

import { View, Text, ActivityIndicator } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import firebase from '../useful/firebase/config'



function Sair({route}) {

    const navigation = useNavigation();
    const Out = () => {

        firebase.auth().signOut().then(() => {
            navigation.navigate('Welcome')
        }).catch((error) => {
        })
    }

    return (
        <View
            style={{
                justifyContent: 'center',
                backgroundColor: '#2a2a2a',
                width: 50,
                height: 3, 
                borderWidth: 2, 
                borderColor: 'blue'
                
            }}>

            <Text
                style={{
                    color: 'white',
                    fontSize: 25,
                    alignSelf: 'center',

                }}
            >
                Realmente deseja sair?
            </Text>
            <View
                style={{
                    flexDirection: 'row',
                    // borderWidth: 2,
                    // borderColor: 'white',
                    marginTop: 15,
                    height: 60,
                    width: '33%',
                    alignSelf: 'center',
                    justifyContent: 'space-between'

                }}
            >
                <TouchableOpacity
                    style={{
                        // borderWidth: 2,
                        // borderColor: 'white',
                        width: 60,
                        height: '100%',
                        borderRadius: 50,
                        backgroundColor: 'lightpink'
                    }}
                    onPress={navigation.goBack()}
                >

                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        // borderWidth: 2,
                        // borderColor: 'white',
                        width: 60,
                        height: '100%',
                        borderRadius: 60,
                        backgroundColor: 'lightblue'

                    }}
                    onPress={() =>  Out()
                       
                    }
                >

                </TouchableOpacity>



            </View>


        </View>
    )
}

export default Sair