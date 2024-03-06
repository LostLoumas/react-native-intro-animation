import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    KeyboardAvoidingView,
    useWindowDimensions,
    Button,
    Image
  } from "react-native";
  import React, { useState } from 'react'
  import { RootStackScreenProps } from "../navigators/RootNavigator";
  import { SafeAreaView } from "react-native-safe-area-context";
  import { useTheme } from "@react-navigation/native";
  import Icons from "@expo/vector-icons/MaterialIcons";
  import Artwork03 from "../components/artworks/Artwork03";
  import { ACCOUNT_HUB } from "../utils/constants";
  import PrimaryButton from "../components/PrimaryButton";
  import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";
  import * as ImagePicker from 'expo-image-picker';
  import { FontAwesome } from '@expo/vector-icons';
  import { Colors } from "react-native/Libraries/NewAppScreen";
  
  
  const Dashy = ({ navigation }: RootStackScreenProps<"Dashy">) => {

    const theme = useTheme();
    const dimensions = useWindowDimensions();
    const [image, setImage] = useState(null);
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)


  
    return (
      <KeyboardAvoidingView behavior="position" style={{ flex: 1 }}>
        <SafeAreaView
          style={{
            flex: 1,
            backgroundColor: theme.colors.card,
            minHeight: dimensions.height,
          }}
        >
  
   
          <View style={{ padding: 24 }}>
            <Animated.Text
              entering={FadeInDown.duration(1000).springify()}
              style={{
                fontSize: 40,
                fontWeight: "800",
                color: theme.colors.text,
              }}
            >
              {ACCOUNT_HUB.title}
            </Animated.Text>
            <Animated.Text
              entering={FadeInDown.delay(100).duration(1000).springify()}
              style={{
                opacity: 0.5,
                marginTop: 16,
                fontSize: 16,
                color: theme.colors.text,
              }}
            >
              {ACCOUNT_HUB.description}
            </Animated.Text>
  
            <View style={{ alignItems: "center", gap: 16, marginTop: 32 }}>

            </View>
          </View>
        </SafeAreaView>
      </KeyboardAvoidingView>
    );
  };
  
  export default Dashy;
  
  // Thanks for watching 😃
  