import { StyleSheet, Text, View,StatusBar, Dimensions, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable';
import { AntDesign } from '@expo/vector-icons';
import LottieView from 'lottie-react-native';

const LandingPage = ({navigation}) => {
  return (
      <View style={styles.container}>
      <View style={styles.header}>
        {/* <Animatable.Image
            animation="bounceIn"
            duration={1500}
            source={require('../images/logo.jpg')}
            style={styles.logo}
            resizeMode={'contain'}/> */}
           
      </View>
      <Animatable.View 
      style={styles.footer}
      animation="fadeInUpBig">
            <Text style={styles.tittle}>Descubra o Poder da Integração: Conecte-se instantaneamente com os Principais Bancos e Serviços.</Text>
        <View style={styles.button}>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <View style={styles.signin}>
                    <Text style={styles.textSignin}>Confirmar</Text>
                    <AntDesign name="right" size={15} color="white" />
                </View>
            </TouchableOpacity>
           
        </View>
      </Animatable.View>
    </View>
  )
}

const {height} = Dimensions.get('screen');
const height_logo = height * 0.7 * 0.4;

export default LandingPage

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ff8c00',
    },
    header:{
        flex:2,
        justifyContent:'center',
        alignItems:'items'
    },
    footer:{
        flex:1,
        backgroundColor:'#05375a',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingVertical:50,
        paddingHorizontal:30
    },
    logo:{
        width: '100%',
        height:'100%'
    },
    tittle:{
        color: 'white',
        fontWeight: 'bold',
        fontSize:30
    },
    text:{
        color:'gray',
        marginTop:5 
    },
    button:{
        alignItems: 'flex-end',
        marginTop:50
        

    },
    signin:{
        width:150,
        height:40,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:30,
        flexDirection:'row',
        backgroundColor: "#262c40",

    },
    textSignin:{
        color:'white',
        fontWeight:'bold'
    },
})