import { StyleSheet } from "react-native"



/*
    containers
    texts
    buttons
    images
    inputs
*/

const styles = StyleSheet.create({

    //containers
    container: {
        position: 'absolute',
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: '#2D4263',
        borderWidth:2
    },

    containerlogo: {
        // flex: 0.5,
        // borderWidth: 2, 
        width:'100%',
        height: '70%',
        // borderColor: 'blue', 
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerform: {
        flex: 1,
        backgroundColor: '#2a2a2a',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
        

    },

    ctnlogin: {

        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        width: '100%',
        height: '100%',


    },
    ctnregister:
    {
        alignContent: 'center',
        alignItems: 'center',
        paddingTop: '20%'
    },
    ctnhome: {
        flex: 1, 
        position:'absolute',
        width:'100%',
        borderWidth:2,
        borderColor:'lightgreen'
               
    },
    ctnnewcomp: {
        backgroundColor: '#2a2a2a',
        flex: 1,
        // borderWidth:2, 
        // borderColor:'blue',


        justifyContent:'flex-start'
    },
    formnamectn: {
        backgroundColor: '#343A50',
        width: '90%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        height: 200,
        alignSelf: 'center',
        // borderWidth: 2, 
        // borderColor: 'lightyellow'
    },
    ctninstancia: {

        flex: 1
    },

    ctnviewlist: {
        flex: 1,
        // backgroundColor:'#3E3E3E'
        borderWidth:2, 
        borderColor:'yellow'
    },
    ctnbuttonplus: {
        position: 'absolute',
        width: 150,
        height: 150,
        alignSelf:'flex-end',
        // marginRight:0,
        justifyContent: 'center',
        // marginTop: 0,
        // borderWidth:2, 
        // borderColor:'blue',
        // marginTop: 5
        
    },
    ctnsafeareacomps: {
        flex: 1,
        backgroundColor: '#2a2a2a', 
        // borderWidth:2,
        // borderColor:'yellow',
        alignItems:'flex-end',
        justifyContent:'flex-end'

    },
    ctndateios: {
        backgroundColor: '#343A50',
        width:'45%',
        height:'100%',
        borderBottomStartRadius: 20,
        borderBottomEndRadius:10,
        borderTopEndRadius: 10,
        borderTopStartRadius: 20,
        // justifyContent:'center',
        flexDirection:'column',
        alignItems:'center',
        // borderWidth: 2, 
        // borderColor: 'green'
    },
    ctndateandroid:{
        backgroundColor:'#343A50',
        width:'45%',
        paddingVertical:5,
        // borderRadius:20,
        // alignSelf:'center',
        // marginTop:'3%',
        height: '55%',
        marginTop: 8,

        // borderWidth: 2, 
        // borderColor: 'yellow'
        
    }
    ,

    spacewelcome: {
        height: '10%'
    },

    containerformthings: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%'
    },

    ctnformspacewelcome: {
        // flex: 0.8,
        height: '30%',
        alignItems:'center',
        // borderWidth:2,
        // borderColor:'white',
        // borderWidth: 2, 
        // borderColor: 'blue',
        justifyContent: 'flex-start'

    },

    backgroundlogin: {

        backgroundColor: '#191919',
        width: '100%',
        height: '100%',
    }
    ,

    cntdownnewcomp: {
        marginTop:'4%',
        borderWidth:2,
        borderColor:'blue'
        
    },

    ctndateandpicker:{ 

        flexDirection:'row', 
        justifyContent:'center',
        height:'37%',
        width:'96%',
        alignSelf:'center',
        marginTop: '3%',
        // marginBottom:20,
        // borderWidth: 2, 
        // borderColor: 'red'
    },

    ctnnotacomp:{
        backgroundColor:'#2a2a2a',
        borderRadius:20,
        width:'100%',
        height:'100%',
        opacity:0.5,
        borderWidth:2,
        borderColor:'yellow'
    },

    ctnnotacompbase:{
        
        borderRadius:10,
        width:'100%',
        borderWidth:2, 
        borderColor:'blue',
        
        height:'100%'
    },
    alert: {
        // borderWidth: 2, 
        // borderColor: 'red',
        // height: 50, 
        marginTop: 10,
        width: '100%',
        flexDirection: 'row', 
        justifyContent: 'center'


    }
,


    //texts
    title1:
    {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',

        marginBottom: 4,


    },
    title2:
    {
        fontSize: 15,
        color: 'white',

    },
    textbuttonwelcome:
    {
        fontSize: 20,
        color: '#313131',
       


    },
    textbuttonlogin:
    {
        fontSize: 20,
        color: '#2a2a2a',


    },
    textbuttoncad:
    {
        fontSize: 20,
        color: '#FFF',
        


    },
    textbuttoncadd:
    {
        fontSize: 15,
        color: '#F9C098',
        


    },
    textbuttonlogindisabled:
    {
        fontSize: 20,
        color: '#3a3a3a',


    },
    textbutton2: {
        fontSize: 17,
        color: '#1C1C1C',
    }
    ,
    credittext:
    {
        color: '#FFF',
        fontSize: 10,
        opacity: 0.4
    },
    loginscrtext:
    {
        color: 'white',
        fontSize: 18
    },
    textntc:
    {
        // paddingTop: '8%',
        color: '#DADADA',
        marginBottom: 5
    },
    textvpl:{
        paddingTop: '8%',
        
        fontSize:17,
        color:'#D5B39F'
    },
    textregistrar:
    {
        fontSize: 17,
        color: 'lightblue',

    },
    texttitulologin: {
        color: '#FAC0C0',
        fontSize: 70,
        fontWeight: 'bold',

    },
    textsair: {
        fontWeight: 'bold',
        fontSize: 15,
    },

    testefontes: {

        fontSize: 50
    },
    textbuttoncomp: {
        fontSize: 25,
        // marginBottom: 5,
        alignSelf: 'stretch',
        // marginLeft: '8%',
        // marginTop: 2,
        fontWeight:'bold',
        color:'#DFD0CF',
                
        
    },
    textbuttonplus: {
        fontSize: 40,
        fontWeight:'600',
        color:'white',
        position:'absolute',
        alignSelf:'center',
       
    },
    texttitlecomps: {
        color: '#FAC0C0',
        fontSize: 45,
        paddingTop: 20,
        marginBottom: 30,
        alignSelf: 'center',
        position: 'absolute'
    },
    textnewcomp: {
        color: 'white',
        fontSize: 33,
        alignSelf: 'center',
        marginTop:'16%'

    },
    textdescriptnewcomp: {
        color: 'white',
        fontSize: 23
    },
    textbuttonnewcomp: {
        fontSize: 24,
        color: '#1C1C1C',
        fontWeight: 'bold'

    }
    ,
    textbuttonnewcompdisabled: {
        fontSize: 24,
        color: '#585858',
        fontWeight: 'bold'
    },
    textinstancia: {
        fontSize: 30,

    },
    textdata: {
        fontSize: 20,
        color: 'white',
        borderWidth:2,
        borderColor:'purple',
        width:'100%',
        alignSelf:'flex-start'
    },
    textcategoria: {
        fontSize: 20,
        color: 'white',
        alignSelf: 'center'
    },
    texttitlesformwelcome: {
        alignItems: 'center',
        // marginTop: '16%',
        // borderWidth:2, 
        // borderColor: 'black'
    },
    texterrorlogin: {
        fontSize: 17,
        color: '#FE9393',
        // paddingTop: 10,
        // borderWidth: 2, borderColor: 'yellow'
    },
    texterrorcad: {
        fontSize: 17,
        color: '#FE9393',
        paddingTop: 15
    },
    textnotacomp:{
        // marginLeft:'5%',
        marginTop:0,
        fontSize:18,
        color:'#D0D0D0',
        position:'absolute',
        // borderWidth:2, 
        // borderColor:'orange',
        paddingVertical:2
    },

    textcategoriacomp:{
        
        fontSize:16, 
        marginLeft:5,
        color:'#DFD0CF',
        fontWeight:'500',

    },
    textdatacomp:{
        fontSize:16, 
        marginLeft:5,
        color:'#DFD0CF',
        fontWeight:'500'
    },

    textcatcalendar:{
        fontSize:20, 
        color:'#2a2a2a',
        marginTop:2,
        fontWeight:'600'
    },
    textdatacalendar:{
        fontSize:20, 
        color:'#2a2a2a',
        marginTop:2,
        fontWeight:'700',
        fontSize:22
    },
    textcompcalendar:{
        fontSize:26, 
        color:'#2a2a2a',
        fontWeight:'500',
        marginLeft:13,
        

    },

    //buttons
    buttonwelcome:
    {

        // width: '60%',
        paddingHorizontal: 100, 
        alignItems: 'center',  
        marginTop: '5%',
        // height:'20%',
        paddingVertical: 25,
        backgroundColor:'white',
        justifyContent:'center',
        borderRadius:50,
        // borderWidth: 2, 
        // borderColor: 'green'
        

    },
    buttonlogin:
    {
        backgroundColor: 'white',
        borderRadius: 30,
        width: '30%',
        alignSelf: 'center',
        marginTop: '3%',
        alignContent: 'center',
        alignItems: 'center',
        paddingVertical: 9,
        // marginBottom: 10

    },
    buttonlogindisabled:
    {
        backgroundColor: '#ABABAB',
        borderRadius: 30,
        width: '30%',
        alignSelf: 'center',
        marginTop: '3%',
        alignContent: 'center',
        alignItems: 'center',
        paddingVertical: 9,
        // marginBottom: 10
    },
    buttoncad: {
        backgroundColor: '#775BC1',
        borderRadius: 25,
        // width: '35%',
        paddingHorizontal: 20, 
        alignSelf: 'center',
        // marginTop: '2%',
        alignContent: 'center',
        alignItems: 'center',
        paddingVertical: 9,
        // marginBottom: '0%'
    },
    buttoncadcad: {
        backgroundColor: '#DE9EA6',
        borderRadius: 30,
        paddingHorizontal: 25, 
        // width: '35%',
        alignSelf: 'center',
        marginTop: '2%',
        // alignContent: 'center',
        alignItems: 'center',
        paddingVertical: 9,
        // marginBottom: '0%'
    },
    buttoncaddisable: {
        backgroundColor: '#a36f76',
        borderRadius: 30,
        // width: '35%',
        alignSelf: 'center',
        marginTop: '2%',
        // alignContent: 'center',
        alignItems: 'center',
        paddingVertical: 9,
        // marginBottom: '0%'
        paddingHorizontal: 25,     },
    buttonlogout: {
        backgroundColor: 'white',
        alignContent: 'center',
        alignItems: 'center',
        marginTop: '10%',
        marginLeft: '80%',
        width: '13%',
        paddingVertical: 9,
        borderRadius: 50,

    },
    buttoncomp: {

        backgroundColor: '#4c3a51',
        width: '90%',
        alignSelf: 'center',
        height: 115,
        borderRadius: 25,
        marginBottom:10,
        // flexDirection:'row',
        // justifyContent:'center',
        // alignContent:'center',
   
        // borderWidth:2,
        // borderColor:'blue'
    },
    compconcluido:{
        backgroundColor: '#4c3a51',
        width: '90%',
        alignSelf: 'center',
        height: 110,
        borderRadius: 25,
        marginBottom:10,
    },
    compcalendar:{
        backgroundColor: '#d6bfbe',
        width: '90%',
        alignSelf: 'center',
        alignItems:'center',
        justifyContent:'center',
        height: 80,
        borderRadius: 12,
        // borderWidth: 2, 
        // borderColor: 'lightblue',
        flexDirection:'row',
        // borderColor:'blue',
        // borderWidth:2
       
 

    },  

    buttonplus: {
        width: '50%',
        height: '50%',
        // backgroundColor: '#2D4263',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        position: 'absolute',
        // borderWidth:2,
        // borderColor:'yellow'
     
        
    },

    buttonnewcompsave: {
        width: '30%',
        backgroundColor: '#FAC0C0',
        paddingVertical: 5,
        borderRadius: 30,
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 50
    },
    buttonnewcompsavedisabled: {
        width: '30%',
        backgroundColor: '#638E8B',
        paddingVertical: 5,
        borderRadius: 30,
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 5
    },

    buttonativar:{
        backgroundColor:'white',
        opacity: 0.5,
        borderWidth: 2, 
        borderColor: 'red', 
        width:'100%',
        height: 30,
        borderRadius: 20, 

        // alignSelf: 'flex-end',
        justifyContent: 'center',
    },

    buttondelete:
        {
            backgroundColor: '#9B4B53',
            // borderRadius: 30,
            width: '30%',
            alignSelf: 'center',
            marginTop: '3%',
            alignContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 12,
            paddingVertical: 10,
            borderRadius: 20
        },
    


    //images
    imagelogo:
    {
        width: '90%',
        // flex: 0.6,
        tintColor:'#FFF',
        // borderWidth: 2, 
        // borderColor: 'black',
        height: 350, 
        marginBottom: 15


    },
    imagedegbuttonplus: {
        height: '100%',
        width: '100%'
    },

    backimagewelcome:{
        // flex:1,
        width:'100%',
        height: '100%'
    },
    imagelogin:{
        width:'55%',
        height:'32%',
    },
    imagecad:{
        width:'40%',
        height:'20%',
        marginBottom:10
    },

    //inputs
    inputloginemail: {
        paddingVertical: 10,
        borderRadius: 30,
        paddingLeft: 20,
        paddingRight: 10,
        width: '73%',
        backgroundColor: '#504d4d',
        color: 'white',
        fontSize: 18,
        height: 50,
        marginTop: '5%',
        textAlign:'center'
    },
    inputloginpass: {

        width: '73%',
        paddingVertical: 10,
        borderRadius: 30,
        paddingLeft: 20,
        paddingRight: 10,
        backgroundColor: '#504d4d',
        color: 'white',
        marginTop: 8,
        fontSize: 18,
        height: 50,
        textAlign:'center'

    },
    inputcademail: {
        paddingVertical: 10,
        borderRadius: 30,
        width: '73%',
        backgroundColor: '#504d4d',
        color: 'white',
        fontSize: 18,
        height: 50,
        marginTop: 8,
        textAlign:'center',
        marginTop:15,  
    },
    inputcadnome: {
        paddingVertical: 10,
        borderRadius: 30,
        width: '60%',
        backgroundColor: '#504d4d',
        color: 'white',
        fontSize: 18,
        height: 50,
        marginTop: 8,
        textAlign:'center',
        marginTop:5,  
    },
    inputcadpass: {
        width: '73%',
        paddingVertical: 10,
        borderRadius: 30,
        backgroundColor: '#504d4d',
        color: 'white',
        marginTop: 8,
        fontSize: 18,
        height: 50,
        textAlign:'center',
        marginBottom:15


    },

    inputncname: {
        width: '88%',
        paddingVertical: 1,
        paddingRight: 10,
        marginTop: 18,
        marginLeft: 10,
        alignSelf: 'center',
        color: '#E6E1E1',
        fontSize: 25,
        // borderWidth: 2, 
        // borderColor: 'blue'

    },
    inputncnamein: {
        width: '88%',
        paddingVertical: 1,
        paddingRight: 10,
        marginTop: 18,
        marginLeft: 10,
        alignSelf: 'center',
        color: '#E6E1E1',
        fontSize: 25
    },
    inputncnota: {
        width: '88%',
        paddingVertical: 1,
        paddingRight: 10,
        marginTop: 10,
        marginLeft: 10,
        alignSelf: 'center',
        color: '#E6E1E1',
        fontSize: 20,
        height: 120,
        // borderWidth: 2, 
        // borderColor: 'red',
        // fontSize: 20,
    },
    inputncnotain: {
        width: '88%',
        paddingVertical: 1,
        paddingRight: 10,
        marginTop: 10,
        marginLeft: 10,
        alignSelf: 'center',
        color: '#E6E1E1',
        fontSize: 20,
        height: 120,
        // borderWidth: 2, 
        // borderColor: 'red',
        // fontSize: 20
    },


    //lists
    listcomp: {
        width: '100%',
        alignSelf: 'center',
        height:'100%',
        marginTop:'7%',
        // borderWidth:2,
        // borderColor:'red',   
    },
    listcompcalendar:{
        width: '100%',
        alignSelf: 'center',
        height:'100%',
        marginTop: 8
        // marginTop:'20%',
        // borderWidth:2,
        // borderColor:'white',   
    },
    

    //dates
    datenewcompios: {
        width:'50%',
        color:'#191919',
        alignItems:'center',
        // borderWidth: 2, 
        // borderColor: 'yellow', 
        // backgroundColor: '#2a2a2a'
     
    },

    //picker
    pickernewcomp: {
        width: '45%',
        backgroundColor: '#2D4263',
        borderColor: 'blue',
        borderRadius:20,
        height:'100%',
        marginLeft:'3%'        
    },

    //video
    videoback:{
        flex:1

    }


})
export default styles;