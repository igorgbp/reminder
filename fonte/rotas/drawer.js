import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import * as React from 'react';
import Comp from '../telas/comps';
// import Side from '../telas/side';
import Tabs from './tabs';
import { Image, Modal, View, Text } from 'react-native';
// import Sair from '../../useful/sair';
import firebase from '../../useful/firebase/config'
import Teste from '../telas/testes/teste';
import Concluido from '../telas/concluido';



const Drawer = createDrawerNavigator();
function LogoTitle() {
    return (
        <Image
            style={{
                width: 60, height: 60,
                // borderWidth:2, 
                // borderColor:'white',
                marginBottom: 10,
                tintColor: '#eb8892'
            }}
            source={require('../content/login/logo.png')}

        />
    );
}

function LogoDrawer() {
    return (

        <Image
            style={{
                width: 100,
                height: 100,
                // borderWidth:2, 
                // borderColor:'white',
                // marginBottom: 10,
                // tintColor: '#eb8892',
                alignSelf: 'center',
            }}
            source={require('../content/login/logo.png')}
            resizeMode='center'

        />
    );
}

export default function Draws({ route }) {
    const navigation = useNavigation()

    const Out = () => {

        firebase.auth().signOut().then(() => {
            navigation.navigate('Welcome')
        }).catch((error) => {
        })
        return <View
            style={{
                backgroundColor: 'blue'
            }}
        />
    }


    return (
        // <NavigationContainer>

        //   <Drawer.Navigator initialRouteName="Home">
        //     <Drawer.Screen name="Home" component={Comp} initialParams={{idUser: route.params.idUser}} />
        //     <Drawer.Screen name="Notifications" component={Side} />
        //   </Drawer.Navigator>

        // </NavigationContainer>



        <Drawer.Navigator
            initialRouteName="Tabs"
            // drawerActiveTintColor='blue'
            screenOptions={{
                drawerStyle: {
                    backgroundColor: '#2f2f2f',
                    width: '70%',
                },
            }}
        //     // drawerLabel: ' ',
        //     drawerActiveTintColor: '#3a3a3a',
        //     // headerStyle:{
        //     //     backgroundColor: 'red',
        //     //     headerShown:false
        //     // } 
        //     headerTitle: () => <LogoTitle />,
        //     headerStyle: {
        //         backgroundColor: '#2a2a2a',
        //         height: 110,
        //         shadowColor: 'transparent',
        //         // borderWidth:2, 
        //         // borderColor:'blue',
        //         borderBottomColor: 'blue',



        //     },
        //     headerLeft: false,
        //     headerTitleAlign: 'center',

        // }

        // }

        >







            <Drawer.Screen
                name="Tabs"
                style={{
                    color: 'white'
                }}
                component={Tabs}
                initialParams={{
                    idUser: route.params.idUser
                }}

                options={{
                    // drawerStyle: {
                    //     backgroundColor: '#2f2f2f',
                    //     width: '60%',
                    //     // alignItems:'center',
                    //     // justifyContent: 'center'
                    // },
                    // drawerLabel: () => <LogoDrawer/>,
                    drawerLabel: 'Início',
                    drawerLabelStyle: {
                        alignSelf: 'center',
                        fontSize: 23
                    },
                    drawerActiveTintColor: '#eb8892',
                    drawerItemStyle: {
                        // borderWidth: 2, 
                        // borderColor: 'blue',
                        marginTop: 60,
                        width: '100%',
                        // alignItems: 'center',
                        alignSelf: 'center',
                        marginTop: 5

                    },
                    drawerType: 'front',
                    drawerInactiveTintColor: '#696161',
                    drawerActiveBackgroundColor: 'transparent',
                    // headerStyle:{
                    //     backgroundColor: 'red',
                    //     headerShown:false
                    // } 
                    headerTitle: () => <LogoTitle />,
                    headerStyle: {
                        backgroundColor: '#2a2a2a',
                        height: 110,
                        shadowColor: 'transparent',
                        // borderWidth:2, 
                        // borderColor:'blue',
                        borderBottomColor: 'blue',



                    },
                    headerLeft: false,
                    headerTitleAlign: 'center',

                }}


            />



            <Drawer.Screen
                name="Concluídos"
                component={Concluido}
                initialParams={{
                    idUser: route.params.idUser
                }}

                options={{
                    // drawerStyle: {
                    //     backgroundColor: '#3a3a3a',
                    //     width: '70%',
                    //     // alignItems:'center',
                    //     // justifyContent: 'center'
                    // },

                    drawerLabel: 'Concluídos',
                    drawerLabelStyle: {
                        alignSelf: 'center',
                        fontSize: 23
                    },

                    drawerActiveTintColor: '#eb8892',
                    drawerType: 'front',
                    drawerInactiveTintColor: '#696161',
                    drawerActiveBackgroundColor: 'transparent',
                    
                    headerLeft: false,
                    headerTitleAlign: 'center',

                    headerTitle: () => <LogoTitle />,
                    headerStyle: {
                        backgroundColor: '#2a2a2a',
                        height: 110,
                        shadowColor: 'transparent',
                        // borderWidth:2, 
                        // borderColor:'blue',
                        borderBottomColor: 'blue',



                    },
                    headerLeft: false,
                    headerTitleAlign: 'center',

                }}


            // initialParams={{
            //     idUser: route.params.idUser
            //     }} 
            // options = {{
            //     headerShown:false
            // }}



            />


            <Drawer.Screen
                name="Sair"
                component={Out}
                options={{

                    // drawerStyle:{

                    // },
                    drawerLabelStyle: {
                        color: '#B8A7A7',
                        fontSize: 20,
                        alignSelf: 'flex-end',
                        borderWidth: 1,
                        paddingVertical: 2,
                        borderColor: '#B8A7A7',
                        paddingHorizontal: 15,
                        marginTop: '60%',
                        borderRadius: 10,
                        // backgroundColor: '#B8A7A7'
                        // position: 'absolute',
                    },



                }}


            // initialParams={{
            //     idUser: route.params.idUser
            //     }} 
            // options = {{
            //     headerShown:false
            // }}



            />







        </Drawer.Navigator>
    );
}