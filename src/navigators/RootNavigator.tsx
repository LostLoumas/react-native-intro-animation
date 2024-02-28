import React from "react";
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import IntroScreen01 from "../screens/IntroScreen01";
import IntroScreen02 from "../screens/IntroScreen02";
import LogInScreen from "../screens/LogInScreen";
import LandingPage from "../screens/LandingPage";
import Login from "../screens/Login";

export type RootStackParamList = {
  LandingPage:undefined;
  Login: undefined;
  IntroScreen01: undefined;
  IntroScreen02: undefined;
  LogInScreen: undefined;
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
        <RootStack.Screen name="LandingPage" component={LandingPage} />
        <RootStack.Screen name="Login" component={Login} />
        <RootStack.Screen name="IntroScreen01" component={IntroScreen01} />
        <RootStack.Screen name="IntroScreen02" component={IntroScreen02} />
        <RootStack.Screen name="LogInScreen" component={LogInScreen} />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};

export default RootNavigator;
