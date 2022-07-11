import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Comp from "../telas/comps";
import Teste from "../telas/testes/teste";
import { Image, Text, View } from "react-native";
import Calendario from "../telas/calendar";
import Faltas from "../telas/faltas";
import Draws from "./drawer";











function LogoTitle() {
    return (
        <Image
            style={{
                width: 60, height: 60,
                // borderWidth:2, 
                // borderColor:'white',
               marginBottom:10,
               tintColor:'#eb8892'
            }}
            source={require('../content/login/logo.png')}

        />
    );
}




const Tab = createBottomTabNavigator();
export default function Tabs({ route }) {


    return (






        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
            }}
        >











            <Tab.Screen
                name='calendar'
                component={Calendario}
                initialParams={{ idUser: route.params.idUser }}
                options={{

                    headerShown: false,
                    headerTitle: () => <LogoTitle />,
                    headerStyle: {
                        backgroundColor: '#2a2a2a',
                        height: 110,
                        shadowColor: 'transparent',
                        // borderWidth:2, 
                        // borderColor:'blue',
                        borderBottomColor:'blue'
                    
                        
                       
                    },
                    headerTitleAlign: 'center',


                    tabBarStyle: {
                        backgroundColor: '#2a2a2a',
                        // position: 'absolute',
                        // bottom: 24,
                        // left: 20,
                        // right: 20,
                        // elevation: 0,
                        
                        
                        // borderRadius: 30,
                        width: '100%',
                        borderTopWidth: 0,
                        height:105,
                        
                    },
                    
                    // headerTitle: 'Calendário',
                    // headerStyle: {
                    //     backgroundColor: '#2a2a2a',
                    //     height: 100,
                    //     shadowColor: 'transparent',
                       
                    // },
                    // headerTitleStyle:{
                    //     color:'white',
                    //     fontSize:20

                    // },
                    tabBarIcon: ({ focused }) => (
                        <View style={{

                            width: 100, height: 100,
                            marginTop: '8%', justifyContent: 'center',
                            // marginLeft:50, 
                            alignItems: 'center'

                        }}>
                            {focused
                                ?
                                <Image
                                    source={require('../content/newthree/calendarm.png')}
                                    resizeMode='contain'
                                    style={{ width:60, marginLeft:11, marginTop:0,
                                        tintColor: '#eb8892'
                                    }}

                                />
                                :
                                <Image
                                source={require('../content/newthree/calendarm.png')}
                                resizeMode='contain'
                                    style={{  width:50, marginLeft:11,opacity:0.5, marginTop:10,
                                        tintColor: '#eb8892'

                                    }}
                                />
                            }

                        </View>
                    ),


                }}
            />













            <Tab.Screen
                name='comps'
                component={Comp}
                initialParams={{ idUser: route.params.idUser }}
                options={{
                    headerShown: false,
                    headerTitle: () => <LogoTitle />,
                    headerStyle: {
                        backgroundColor: '#2a2a2a',
                        height: 110,
                        shadowColor: 'transparent',
                        // borderWidth:2,
                        // borderColor:'blue',
                        borderBottomColor:'blue'
                    
                        
                       
                    },
                    headerTitleAlign: 'center',
                    // headerTitleStyle: {
                    //     fontSize: 23,
                    // },
                    tabBarActiveTintColor: 'tomato',
                    tabBarStyle: {
                        backgroundColor: '#2a2a2a',
                        // position: 'absolute',
                        // bottom: 24,
                        // left: 20,
                        // right: 20,
                        // elevation: 0,
                        
                        
                        // borderRadius: 30,
                        width: '100%',
                        borderTopWidth: 0,
                        height:105,
                        
                    },
                    tabBarIcon: ({ focused }) => (
                        <View style={{
                            width: 100, height: 100,
                            marginTop: '8%', justifyContent: 'center',
                            alignItems:'center',
                            // borderWidth:2, borderColor:'yellow'
                        }}>
                            {focused ?
                                <Image
                                    source={require('../content/newthree/taskmt.png')}
                                    resizeMode='contain'
                                    style={{ width:60 }}
                                />
                                :
                                <Image
                                source={require('../content/newthree/taskmt.png')}
                                resizeMode='contain'
                                    style={{ width:50, marginTop:10, opacity:0.3 }}
                                />


                            }

                        </View>
                    ),
                    tabBarIconStyle: {
                        backgroundColor: 'red'
                    },
                }}
            />















            {/* <Tab.Screen
                name='faltas'
                // component={Faltas}
                component={Faltas}
                initialParams={{ idUser: route.params.idUser }}
                
                
                
                options={{
                    
                    headerShown: false,
                    
                    headerTitle: () => <LogoTitle />,
                    headerStyle: {
                        backgroundColor: '#2a2a2a',
                        height: 110,
                        shadowColor: 'transparent',
                        // borderWidth:2, 
                        // borderColor:'blue',
                        borderBottomColor:'blue'
                    
                        
                       
                    },
                    headerTitleAlign: 'center',
                    tabBarIcon: ({ focused }) => (
                        <View style={{
                            width: 100, height: 100,
                            marginTop: '8%', justifyContent: 'center',
                            alignItems:'center',
                            // borderWidth:2, borderColor:'yellow'
                         }}>
                            {focused ?
                                <Image
                                    source={require('../content/newthree/taskmt.png')}
                                    resizeMode='contain'
                                    style={{ width:60, height: 60 }}
                                />
                                :
                                <Image
                                source={require('../content/newthree/taskmt.png')}
                                resizeMode='contain'
                                    style={{ width:50, marginTop:10, opacity:0.3 ,
                                    // borderWidth: 2, borderColor: 'white',
                                    height: 50
                                    }}
                                />


                            }

                        </View>
                    ),
                    tabBarIconStyle: {
                        backgroundColor: 'red'
                    },
                    tabBarActiveTintColor: 'tomato',
                    tabBarStyle: {
                        backgroundColor: '#2a2a2a',
                        // position: 'absolute',
                        // bottom: 24,
                        // left: 20,
                        // right: 20,
                        // elevation: 0,
                        
                        
                        // borderRadius: 30,
                        width: '100%',
                        borderTopWidth: 0,
                        height:105,
                        
                    },
                }}
                
            /> */}






        </Tab.Navigator>
    )
}