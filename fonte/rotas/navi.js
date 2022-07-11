import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "../telas/welcome";
import Login from "../telas/login";
import Teste from "../telas/testes/teste";
import Signup from "../telas/signup";


import Comp from "../telas/comps";
import Newcomp from '../telas/newcomp'
import Inst from "../telas/instancia";
import Tabs from "./tabs";


import { TouchableOpacity, View, Image } from 'react-native'
import { Text, Button } from 'react-native'
import Draws from "./drawer";





const Stack = createStackNavigator();

export default function Rotas() {

    const Title = () => {
        return (
            <View
                style = {{
                    // borderWidth: 2, 
                    // borderColor: 'blue', 
                    width: '100%',
                    alignItems: 'center'
                }}
             >
                <Text
                    style = {{
                        fontSize: 19, 
                        color: 'white'
                    }}
                >
                    Novo
                </Text>
                <Text
                    style = {{
                        fontSize: 19, 
                        color: 'white'
                    }}
                >
                    Compromisso
                </Text>
            </View>

        )
    }
    const Titleinstancia = () => {
        return (
            <View
                style = {{
                    // borderWidth: 2, 
                    // borderColor: 'blue', 
                    width: '100%',
                    alignItems: 'center'
                }}
             >
                <Text
                    style = {{
                        fontSize: 18, 
                        color: 'white'
                    }}
                >
                    Editar
                </Text>
                <Text
                    style = {{
                        fontSize: 18, 
                        color: 'white'
                    }}
                >
                    Compromisso
                </Text>
            </View>

        )
    }




    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Welcome'
                component={Welcome}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name='Login'
                component={Login}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name='Cadastro'
                component={Signup}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name='Compromissos'
                component={Comp}
                options={{ headerShown: false, }}
            />

            <Stack.Screen
                name='Instancia'
                component={Inst}
                options={{
                    headerShown: true,
                    headerLeft: null,
                    headerTitle: () => <Titleinstancia />,
                    headerStyle: {
                        backgroundColor: '#2a2a2a',
                        height: 100,
                        shadowColor: 'transparent',
                    },



                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        fontSize: 20,
                    },
                    headerTintColor: 'white',
                    // headerRight: ()=>{
                    //     <Text>Comps</Text>
                    // },

                    headerBackTitleStyle: {
                        fontSize: 18,
                        marginLeft: 4
                    },
                }}
            />


            <Stack.Screen
                name='Newcomp'
                component={Newcomp}
                options={{
                    headerShown: true,
                    headerTitle: () => <Title />,
                
                    headerStyle: {
                        backgroundColor: '#2a2a2a',
                        height: 100,
                        shadowColor: 'transparent',
                        alignItems: 'center'
                    },



                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        fontSize: 18,
                        borderWidth: 2,
                        borderColor: 'yellow'
                    },
                    headerTintColor: 'white',
                    // headerRight: ()=>{
                    //     <Text>Comps</Text>
                    // },

                    headerBackTitleStyle: {
                        fontSize: 15,
                        marginLeft: 4
                    },
                    headerBackTitle: 'Voltar',


                    tabBarActiveTintColor: 'tomato',





                }}
            />

            <Stack.Screen
                name='teste'
                component={Teste}
                options={{
                    headerShown: true,
                    headerBackTitle: 'face',
                    headerBackTitleStyle: { color: 'red' },
                    headerRightContainerStyle: { backgroundColor: 'blue' },



                }}
            />




            <Stack.Screen
                name='tabs'
                component={Tabs}
                options={{
                    headerShown: false, headerLeft: null,
                    gestureEnabled: false


                }}
            />

            <Stack.Screen
                name='draws'
                component={Draws}
                options={{
                    headerShown: false, headerLeft: null,
                    gestureEnabled: false


                }}
            />




        </Stack.Navigator>
    )
}