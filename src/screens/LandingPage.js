import React from 'react';
import { StyleSheet, Text, View, StatusBar, Dimensions, TouchableOpacity, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { AntDesign } from '@expo/vector-icons';

const LandingPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* Uncomment and adjust if needed */}
        {/* <Animatable.Image
            animation="bounceIn"
            duration={1500}
            source={require('../images/logo.jpg')}
            style={styles.logo}
            resizeMode="contain"
        /> */}
      </View>
      <Animatable.View style={styles.footer} animation="fadeInUpBig" duration={1500}>
        <Text style={styles.title}>
          Descubra o Poder da Integração: Conecte-se instantaneamente com os Principais Bancos e Serviços.
        </Text>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => navigation.navigate('Login')} activeOpacity={0.7}>
            <View style={styles.signin}>
              <Text style={styles.textSignin}>Confirmar</Text>
              <AntDesign name="right" size={15} color="black" />
            </View>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

const { height } = Dimensions.get('screen');
const height_logo = height * 0.7 * 0.4;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center', // Fixed alignment
  },
  footer: {
    flex: 1,
    backgroundColor: '#EBEBEB',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  logo: {
    width: '70%',
    height: height_logo,
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text: {
    color: 'gray',
    marginTop: 5,
  },
  button: {
    alignItems: 'flex-end',
    marginTop: 50,
  },
  signin: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    flexDirection: 'row',
    backgroundColor: '#63F92D',
  },
  textSignin: {
    color: 'black',
    fontWeight: 'bold',
    marginRight: 5, // Slight spacing between text and icon
  },
});

export default LandingPage;
