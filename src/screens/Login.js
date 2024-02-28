import React, { useState, useContext } from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';

const Login = ({ navigation }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [check, setCheck] = useState(false);

  const [data, setData] = useState({
    email: '',
    password: '',
    check: true,
    check_textInputChange: true,
  });

  const textInputChange = (val) => {
    if (val.length !== 0) {
      setData({
        ...data,
        email: val,
        check_textInputChange: true,
        check: true
      });
    } else {
      setData({
        ...data,
        email: val,
        check_textInputChange: false,
        check: false
      })
    }
  }

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textHeader}>Seja Bem-Vindo!</Text>
      </View>
      <Animatable.View style={styles.footer} animation="fadeInUpBig">
        <Text style={styles.textfooter}>Email</Text>
        <View style={styles.action}>
          <Feather name="user" size={24} color="white" />
          <TextInput
            placeholder='email'
            style={styles.TextInput}
            onChangeText={(val) => textInputChange(val)} />
        </View>
        <Text style={styles.textfooter}>Password</Text>
        <View style={styles.action}>
          <Icon name="lock" color="white" size={28} />
          <TextInput
            placeholder='password'
            style={styles.TextInput}
            secureTextEntry={!passwordVisible}
          />
          <TouchableOpacity onPress={togglePasswordVisibility}>
            <Ionicons name={passwordVisible ? 'eye-outline' : 'eye-off-outline'} size={24} color="white" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Text style={{ marginTop: '5%', color: 'white' }}>Esqueceu a Palavra-Passe?</Text>
        </TouchableOpacity>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => navigation.navigate('Dashy')}>
            <View style={styles.signin}>
              <Text style={styles.textSignin}>Confirmar</Text>
              <AntDesign name="right" size={15} color="white" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{ alignSelf: 'center', marginTop: '25%' }} onPress={() => navigation.navigate('IntroScreen01')} >
            <Text style={{ color: 'white' }}>Criar Conta</Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  )
}
export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff8c00',
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  footer: {
    flex: 2,
    backgroundColor: '#05375a',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30
  },
  tittle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30
  },
  text: {
    color: 'gray',
    marginTop: 5
  },
  button: {
    alignItems: 'flex-end',
    marginTop: 50
  },
  signin: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    flexDirection: 'row',
    backgroundColor: "#262c40",
  },
  textHeader: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
    padding: 10
  },
  textfooter: {
    fontSize: 18,
    color: 'white',
    marginTop: 10
  },
  textSignin: {
    color: 'white',
    fontWeight: 'bold',
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2d2',
    paddingBottom: 5
  },
  TextInput: {
    flex: 1,
    paddingLeft: 10,
    color: 'white'
  },
});
