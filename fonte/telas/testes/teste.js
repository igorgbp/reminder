import React from 'react';
import { 
  View, StyleSheet, Text

} from 'react-native';


// import { Feather } from '@expo/vector-icons';
// import Ionicons from '@expo/vector-icons/Ionicons';
// import { AntDesign } from '@expo/vector-icons';


import { Calendar, CalendarList, Agenda } from 'react-native-calendars';


const Teste = () => {
  return (
    <View>
        
        <Feather name="home" size={24} color="black" />
         <AntDesign name="warning" size={24} color="black" />

        <Text>
    <Ionicons name='md-checkmark-circle' size={32} color='green' />;
   
        </Text>     
        <Calendar/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: "space-around"
  },
  header: {
    fontSize: 36,
    marginBottom: 48
  },
  textInput: {
    height: 40,
    borderColor: "#000000",
    borderBottomWidth: 1,
    marginBottom: 36
  },
  btnContainer: {
    backgroundColor: "white",
    marginTop: 12
  }
});

export default Teste;