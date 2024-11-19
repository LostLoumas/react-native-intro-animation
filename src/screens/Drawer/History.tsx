import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    KeyboardAvoidingView,
    useWindowDimensions,
    Button,
    ImageBackground,
  } from "react-native";
  import React, { useState } from 'react'
  import { RootStackScreenProps } from "../../navigators/RootNavigator";
  import { useTheme } from "@react-navigation/native";
  import { Ionicons } from "@expo/vector-icons";

  
  
  const History = ({ navigation }: RootStackScreenProps<"History">) => {

    const theme = useTheme();
    const dimensions = useWindowDimensions();
    return (
      <KeyboardAvoidingView behavior="position" style={{ flex: 1 }}>
        <View
          style={{
            flex: 1,
            backgroundColor: theme.colors.card,
            minHeight: dimensions.height,
          }}
        >
        </View>
      </KeyboardAvoidingView>
    );
  };
  
  export default History;
  
  // Thanks for watching 😃
  