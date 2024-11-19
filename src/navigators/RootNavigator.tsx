import React from "react";
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import {
  createDrawerNavigator,
  DrawerScreenProps,
} from "@react-navigation/drawer";
import Login from "../screens/auth/Login";
import IntroScreen02 from "../screens/register/IntroScreen02";
import IntroScreen03 from "../screens/register/IntroScreen03";
import IntroScreen04 from "../screens/register/IntroScreen04";
import IntroScreen05 from "../screens/register/IntroScreen05";
import BankSelect from "../screens/register/BankSelect";
import AccountType from "../screens/register/AccountType";
import LogInScreen from "../screens/LogInScreen";
import LandingPage1 from "../screens/auth/LandingPage1";
import Dashy from "../screens/Dashy";
import Profile from "../screens/profile/Profile";
import Support from "../screens/Drawer/Support";
import AboutUs from "../screens/Drawer/AboutUs";
import Settings from "../screens/Drawer/Settings";

// Type Definitions
export type DrawerParamList = {
  Dashy: undefined;
  Settings: undefined;
  Support: undefined;
  AboutUs: undefined;
};

export type RootStackParamList = {
  LandingPage1: undefined;
  Login: undefined;
  IntroScreen02: undefined;
  IntroScreen03: undefined;
  IntroScreen04: undefined;
  IntroScreen05: undefined;
  LogInScreen: undefined;
  BankSelect: undefined;
  AccountType: undefined;
  Profile: undefined;
  DrawerNavigator: undefined; // Root navigator now includes DrawerNavigator
};

// Navigators
const RootStack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator<DrawerParamList>();

// Drawer Navigator
const MyDrawer = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: "black",
        drawerActiveBackgroundColor: "#63F92D",
        drawerLabelStyle: {
          color: "#A3A2A2",
        },
      }}
    >
      <Drawer.Screen name="Dashy" component={Dashy} />
      <Drawer.Screen name="Settings" component={Settings} />
      <Drawer.Screen name="Support" component={Support} />
      <Drawer.Screen name="AboutUs" component={AboutUs} />
    </Drawer.Navigator>
  );
};

// Root Navigator (Stack)
const RootNavigator = () => {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false, animation: "fade" }}>
      <RootStack.Screen name="LandingPage1" component={LandingPage1} />
      <RootStack.Screen name="Login" component={Login} />
      <RootStack.Screen name="Profile" component={Profile} />
      <RootStack.Screen name="IntroScreen02" component={IntroScreen02} />
      <RootStack.Screen name="IntroScreen03" component={IntroScreen03} />
      <RootStack.Screen name="IntroScreen04" component={IntroScreen04} />
      <RootStack.Screen name="IntroScreen05" component={IntroScreen05} />
      <RootStack.Screen name="LogInScreen" component={LogInScreen} />
      <RootStack.Screen name="BankSelect" component={BankSelect} />
      <RootStack.Screen name="AccountType" component={AccountType} />
      
      {/* Add Drawer Navigator here */}
      <RootStack.Screen name="DrawerNavigator" component={MyDrawer} />
    </RootStack.Navigator>
  );
};

export default RootNavigator;
