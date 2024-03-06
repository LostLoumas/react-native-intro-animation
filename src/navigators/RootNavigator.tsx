import React from "react";
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import IntroScreen01 from "../screens/register/IntroScreen01";
import IntroScreen02 from "../screens/register/IntroScreen02";
import IntroScreen03 from "../screens/register/IntroScreen03";
import IntroScreen04 from "../screens/register/IntroScreen04";
import IntroScreen05 from "../screens/register/IntroScreen05";
import BankSelect from "../screens/register/BankSelect";
import AccountType from "../screens/register/AccountType";
import LogInScreen from "../screens/LogInScreen";
import LandingPage from "../screens/LandingPage";
import Login from "../screens/auth/Login";
import Dashy from "../screens/Dashy";

export type RootStackParamList = {

  Login: undefined;
  IntroScreen01: undefined;
  IntroScreen02: undefined;
  LogInScreen: undefined;
  IntroScreen03: undefined;
  IntroScreen04: undefined;
  IntroScreen05: undefined;
  BankSelect: undefined;
  AccountType: undefined;
  Dashy: undefined;

};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

const RootNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Group
        screenOptions={{
          headerShown: false,
          animation: "fade",
        }}
      >
        <RootStack.Screen name="Login" component={Login}/>
        <RootStack.Screen name="IntroScreen01" component={IntroScreen01} />
        <RootStack.Screen name="IntroScreen02" component={IntroScreen02} />
        <RootStack.Screen name="IntroScreen03" component={IntroScreen03} />
        <RootStack.Screen name="IntroScreen04" component={IntroScreen04} />
        <RootStack.Screen name="IntroScreen05" component={IntroScreen05} />
        <RootStack.Screen name="LogInScreen" component={LogInScreen} />
        <RootStack.Screen name="BankSelect" component={BankSelect} />
        <RootStack.Screen name="AccountType" component={AccountType} />
        <RootStack.Screen name="Dashy" component={Dashy} />





      </RootStack.Group>
    </RootStack.Navigator>
  );
};

export default RootNavigator;
