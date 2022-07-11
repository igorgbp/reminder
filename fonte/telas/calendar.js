import React, { useState, useEffect } from "react";
import { Text, View, FlatList, TouchableOpacity, Image, SafeAreaView } from "react-native";
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { LocaleConfig } from 'react-native-calendars';
import styles from '../../useful/style';
import firebase from '../../useful/firebase/config'
import { StatusBar } from "react-native";
import moment from "moment";
import { useNavigation } from "@react-navigation/native";
// import colors from './colors'
import * as Animatable from 'react-native-animatable';





LocaleConfig.locales.fr = {
  monthNames: [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
  ],
  monthNamesShort: [
    "Jan.",
    "Fev.",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul.",
    "Ago",
    "Set.",
    "Out.",
    "Nov.",
    "Dez."
  ],
  dayNames: [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado"
  ],
  dayNamesShort: ["Dom.", "Seg.", "Ter.", "Qua.", "Qui.", "Sex.", "Sáb."]
};

LocaleConfig.defaultLocale = "fr";





const Calendario = ({ route }) => {



  const database = firebase.firestore();
  const [info, setInfo] = useState([])
  const [loading, setloading] = useState(true)
  // const styletype = ['default', 'dark-content', 'light-content'];

  const [datac, setdatac] = useState('')
  const [changedois, setchangedois] = useState(false)
  const [pressed, setpressed] = useState()

  // const [datamarc, setdatamarc] = useState()
  const [change, setchange] = useState(false)

  // const [df, setdf] = useState()
  // const [changesuport, setchangesuport] = useState()


  // let hoje = new Date;
  // let b = hoje.getFullYear() + '-' + hoje.getMonth() + '-' + hoje.getDate();
  // console.log('alçksjdhflakjshdf')
  // console.log(b)
  // console.log('alçksdjflçaksdjfaslçkdfj')


  let tempdate = new Date()
  let df
  let cont = 0;

  if ((tempdate.getMonth() + 1) < 10) {
    // console.log('mes é menor que 10')
    df = tempdate.getFullYear() + '-0' + (tempdate.getMonth() + 1) + '-' + tempdate.getDate();
    cont = cont + 1;
  }
  if ((tempdate.getDate()) < 10) {
    // console.log('dia é menor que 10')
    df = tempdate.getFullYear() + '-' + (tempdate.getMonth() + 1) + '-0' + tempdate.getDate();
    cont = cont + 1;
  }
  if (cont === 2) {
    df = tempdate.getFullYear() + '-0' + (tempdate.getMonth() + 1) + '-0' + tempdate.getDate();
  }
  if (cont === 0) {
    df = tempdate.getFullYear() + '-' + (tempdate.getMonth() + 1) + '-' + tempdate.getDate();
  }




  let markedday = {};
  // let markedday = {};

  {
    const aula = { key: 'aula', color: '#E779D6' };
    const trabalho = { key: 'trabalho', color: '#FDD48B' }
    const estudar = { key: 'estudar', color: '#7F5BFA' }
    const outro = {key :'outro', color:'lightgreen'}
    info.map((item) => {


     if (item.concluido == false){

    
      if (item.categoriacomp === 'Estudar') {
        // console.log(item.datef)
        // console.log('açlsdjfçlaksdjflçkasjdfçlkja')
        markedday[item.datef] = {
          selected: true,
          marked: true,
          // selectedDotColor: 'red',
          dots: [estudar],
        }
      }
      if (item.categoriacomp === 'Aula') {
        markedday[item.datef] = {
          selected: true,
          marked: true,
          // selectedDotColor: 'blue',
          dotColor: 'red',
          dots: [aula],

        }

      }
      if (item.categoriacomp === 'Trabalho') {
        markedday[item.datef] = {
          selected: true,
          marked: true,
          // selectedDotColor: 'blue',
          dotColor: 'green',
          dots: [trabalho],
        }
      }
      if (item.categoriacomp === 'Outro') {
        markedday[item.datef] = {
          selected: true,
          marked: true,
          // selectedDotColor: 'blue',
          // dotColor: 'lightblue',
          dots: [outro],
        }
      }
    } })
  }


  const daypress = (date, dtstring) => {
    let mes, dia

    if (date.day < 10) dia = '0' + date.day
    else dia = date.day
    if (date.month < 10) mes = '0' + date.month
    else mes = date.month

    setpressed(dia + ' / ' + mes)
    setchangedois(!changedois)
    setchange(true)



    setdatac(date.day + '/' + date.month + '/' + date.year)

    console.log(datac)
  }


  useEffect(() => {

    database.collection(route.params.idUser).onSnapshot((query) => {
      const list = []
      query.forEach((doc) => {
        list.push({ ...doc.data(), id: doc.id })
      })
      setInfo(list)
      // console.log(info)
      setloading(false)
    })
  }, [])


  // const marks = route.params.datacomp





  const navigation = useNavigation()

  const [flag, setflag] = useState('0')


  // const contad = 0;
  return (

    <SafeAreaView style={{
      flex: 1,
      // borderWidth: 2,
      // borderColor: 'blue',
      backgroundColor: '#2a2a2a'

    }}>
      <StatusBar
        barStyle='light-content'
        backgroundColor={'#2a2a2a'}
      />




      <View style={{
        // flex: 1,
        // borderWidth: 2,
        // // height:'50%',
        // borderColor: 'yellow'
      }}>

        <Calendar
          // initialDate={new Date()}
          minDate={df}
          //maxDate={'2012-05-30'}
          onDayPress={
            day => {
              setflag('0')
              daypress(day, day.dateString);


            }}
          markedDates={markedday}
          markingType={'multi-dot'}

          monthFormat={'MMMM'}
          theme={
            {

              'stylesheet.calendar.header': {
                dayHeader: {
                  marginTop: 2,
                  marginBottom: 7,
                  width: 30,
                  textAlign: 'center',
                  fontSize: 12,
                  color: '#B8A7A7',
                  // borderWidth: 2, 
                },
                week: {
                  marginTop: 7,
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  paddingHorizontal: 15,
                  // borderWidth:2, 
                  // borderColor:'blue'
                },
              },
              'stylesheet.calendar.main':
              {
                monthView: {
                  // backgroundColor:'purple',
                  // borderWidth: 2, 
                  // borderColor: 'blue', 
                  // height: 100
                  // height: 50
                },
                week: {
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  height: 38,
                  // backgroundColor: 'red',
                  // margin: 1,

                  // borderBottomWidth: 1,
                  // borderBottomColor: colors.grey30,
                },
              },



              calendarBackground: '#2a2a2a',
              // width: '50%',

              todayTextColor: '#F59CA5',

              //nao sei onde aparece
              // selectedDayBackgroundColor: '#d6bfbe',
              // selectedDayTextColor: '#2a2a2a',
              // selectedDotColor: 'green',
              selectedDayBackgroundColor: '#2e2e2e',
              selectedDayTextColor: '#E1CFCF',



              dayTextColor: '#d6bfbe',
              textDayHeaderFontSize: 13,
              'stylesheet.day.basic': {
                text: {
                  marginTop: 4, // specify the margin you want
                  color: '#B8A7A7',
                  fontSize: 18
                },
              },

              textDisabledColor: '#696161',

              // dotColor: 'red',

              monthTextColor: '#d6bfbe',
              // todayBackgroundColor: '#313131',



              arrowColor: '#E2D3D3',
              textDayStyle: {
                fontSize: 20,
                alignSelf: 'center'
              }


            }
          }
          hideExtraDays={true}
        />

      </View>






      <View style={{

        // height: '49%',
        // borderWidth: 2,
        // borderColor: 'green'
      }}
      >

        {
          change === true
            ?
            <Animatable.View
              animation={'fadeIn'}

            >
              {
                changedois === true
                  ?
                  <View

                    style={{
                      // borderWidth: 2, 
                      // borderColor: 'blue',
                      backgroundColor: '#3a3a3a',
                      width: '25%',
                      borderRadius: 20,
                      justifyContent: 'center',
                      alignSelf: 'center',
                      paddingVertical: 5

                    }}>
                    <Animatable.Text


                      animation={'flipInX'}
                      style={{
                        fontSize: 22,
                        color: '#CDBDBD',
                        alignSelf: 'center',


                      }}
                    // onchange = {isInteraction}
                    >
                      {pressed}
                    </Animatable.Text>
                  </View >

                  :
                  <View

                    style={{
                      // borderWidth: 2, 
                      // borderColor: 'blue',
                      backgroundColor: '#3a3a3a',
                      width: '25%',
                      borderRadius: 20,
                      justifyContent: 'center',
                      alignSelf: 'center',
                      paddingVertical: 5

                    }}>
                    <Animatable.Text


                      animation={'flipInY'}
                      style={{
                        fontSize: 22,
                        color: '#CDBDBD',
                        alignSelf: 'center',


                      }}
                    // onchange = {isInteraction}
                    >
                      {pressed}
                    </Animatable.Text>
                  </View >}

            </Animatable.View>
            :
            <View />
        }



        {/* <Text style = {{
          alignSelf: 'center', 
          fontSize: 15, 
          color:'#505050',
          marginBottom: 5
          
          }}>
          COMPROMISSOS
        </Text> */}
        <FlatList
          style={styles.listcompcalendar}
          data={info}
          renderItem={({ item }) => {

            if (item.datacomp === datac) {
              setflag('1')
              return (


                <View style={{
                  marginTop: 5,
                  // borderWidth: 2,
                  // borderColor:'red' 
                }}>

                  <TouchableOpacity style={styles.compcalendar}
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
                    }}

                  >
                    <View style={{ width: '100%', height: '100%', justifyContent: 'center' }}>
                      {item.categoriacomp === 'Aula'
                        ?
                        <Image
                          source={require('../content/newtwo/aula.png')}
                          resizeMode='cover'
                          style={{
                            width: '100%', height: '100%',
                            borderRadius: 12,
                            opacity: 0.8,
                          }}

                        />
                        :
                        item.categoriacomp === 'Trabalho'
                          ?

                          <Image
                            source={require('../content/estudar.png')}
                            resizeMode='cover'
                            style={{
                              width: '100%', height: '100%',
                              borderRadius: 12,
                              opacity: 0.2,
                              backgroundColor: 'blue'
                            }}

                          />
                          :
                          item.categoriacomp === 'Estudar'
                            ?
                            <Image
                              source={require('../content/trabalho.jpg')}
                              resizeMode='cover'
                              style={{
                                width: '100%', height: '100%',
                                borderRadius: 12,
                                opacity: 0.2
                              }}

                            />
                            :
                            <Image
                              source={require('../content/newtwo/outro.png')}
                              resizeMode='cover'
                              style={{
                                width: '100%', height: '100%',
                                borderRadius: 12,
                                opacity: 0.2
                              }}

                            />

                      }

                    </View>
                    <View style={{
                      width: '100%',
                      // borderWidth: 2, borderColor: 'yellow',
                      flexDirection: 'row',
                      position: 'absolute',
                      justifyContent: 'center',
                      alignItems: 'center',


                      // borderWidth:1,
                      // borderColor:'blue'
                    }}>
                      <View style={{
                        width: '60%', height: '100%',
                        marginLeft: 8,
                        // borderWidth: 2, borderColor: 'red',
                        justifyContent: 'center'
                      }}>
                        <Text
                          numberOfLines={2}
                          style={styles.textcompcalendar}>{item.nomecomp}</Text>
                        {/* <View style={styles.ctnnotacompbase}>
                      colocando uma view a mais para poder, mudar a opacidade do fundo 
                      do container da nota depois, pra ficar um pouco transluscido e ver a 
                      imagem, qua ta atrás no touchableopacity da comp 
                      
                      <View style={styles.ctnnotacomp}>
                        <Text style={styles.textnotacomp}>{item.notacomp} </Text>
                      </View>
                      

                     </View> */}
                      </View>

                      <View style={{
                        width: '38%',
                        alignItems: 'center',

                        height: '100%',
                        alignSelf: 'center',
                        // borderColor: 'yellow',
                        //  borderWidth: 2,
                        justifyContent: 'center'
                      }}>

                        <Text style={styles.textcatcalendar}>
                          {item.categoriacomp}
                        </Text>
                        <Text style={styles.textdatacalendar}>
                          {item.datacomp
                          }
                        </Text>


                      </View>
                    </View>

                  </TouchableOpacity>
                </View>



              )
              // {
              //   contad = contad +1;
              // }
              // console.log(contad)

            }
            else {
              return <View />
            }





          }} />





        {
          flag === '0'
            ?
            <View style={{
              // borderWidth: 2, borderColor: 'red', 
              width: '100%', height: '100%',
              alignItems: 'center',
              justifyContent: 'flex-start'

            }


            }>
              <Text style={{
                fontSize: 20, fontWeight: '500', color: '#6D5D5D',
                // borderWidth: 2, borderColor: 'lightblue', 
                marginTop: 20,

                // alignSelf: 'center'

              }}>

                Nenhum compromisso este dia
              </Text>

            </View>
            :
            <View></View>
        }


        {/* <CalendarList/> */}

      </View>



    </SafeAreaView>
  )
}
export default Calendario;