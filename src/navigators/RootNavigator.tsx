import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";

// Screens
import Login from "../screens/auth/Login";
import IntroScreen02 from "../screens/register/IntroScreen02";
import IntroScreen03 from "../screens/register/IntroScreen03";
import IntroScreen04 from "../screens/register/IntroScreen04";
import IntroScreen05 from "../screens/register/IntroScreen05";
import BankSelect from "../screens/register/BankSelect";
import AccountType from "../screens/register/AccountType";
import LogInScreen from "../screens/register/Resgister1";
import LandingPage1 from "../screens/auth/LandingPage1";
import Dashy from "../screens/Dashy";
import Profile from "../screens/profile/Profile";
import Support from "../screens/Drawer/Support";
import AboutUs from "../screens/Drawer/AboutUs";
import Settings from "../screens/Drawer/Settings";
import History from "../screens/Drawer/History";
import Favorite from "../screens/favorite/Favorite";
import Search_Screen from "../screens/search/Search_Screen";
import CustomDrawerContent from ".//CustomDrawerContent";

// Type Definitions
export type DrawerParamList = {
  Dashy: undefined;
  Profile: undefined;
  History: undefined;
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
  Search: undefined;
  Favorite: undefined;
  DrawerNavigator: undefined;
  Profile: undefined;

};

// Navigators
const RootStack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator<DrawerParamList>();

const MyDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
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
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="History" component={History} />
      <Drawer.Screen name="Settings" component={Settings} />
      <Drawer.Screen name="Support" component={Support} />
      <Drawer.Screen name="AboutUs" component={AboutUs} />
    </Drawer.Navigator>
  );
};

const RootNavigator = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <RootStack.Navigator screenOptions={{ headerShown: false, animation: "fade" }}>
        <RootStack.Screen name="LandingPage1" component={LandingPage1} />
        <RootStack.Screen name="Login" component={Login} />
        <RootStack.Screen name="Profile" component={Profile} />
        <RootStack.Screen name="Favorite" component={Favorite} />
        <RootStack.Screen name="IntroScreen02" component={IntroScreen02} />
        <RootStack.Screen name="IntroScreen03" component={IntroScreen03} />
        <RootStack.Screen name="IntroScreen04" component={IntroScreen04} />
        <RootStack.Screen name="IntroScreen05" component={IntroScreen05} />
        <RootStack.Screen name="LogInScreen" component={LogInScreen} />
        <RootStack.Screen name="BankSelect" component={BankSelect} />
        <RootStack.Screen name="AccountType" component={AccountType} />
        <RootStack.Screen name="Search" component={Search_Screen} />
        <RootStack.Screen name="DrawerNavigator" component={MyDrawer} />
      </RootStack.Navigator>
    </GestureHandlerRootView>
  );
};

export default RootNavigator;
