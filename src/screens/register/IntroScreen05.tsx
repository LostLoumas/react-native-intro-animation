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
  import { RootStackScreenProps } from "../../navigators/RootNavigator";
  import { SafeAreaView } from "react-native-safe-area-context";
  import { useTheme } from "@react-navigation/native";
  import Icons from "@expo/vector-icons/MaterialIcons";
  import Artwork03 from "../../components/artworks/Artwork03";
  import { REGISTER_SCREEN4 } from "../../utils/constants";
  import PrimaryButton from "../../components/PrimaryButton";
  import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";
  import * as ImagePicker from 'expo-image-picker';
  import { FontAwesome } from '@expo/vector-icons';

  
  
  const RegisterScreen2 = ({ navigation }: RootStackScreenProps<"IntroScreen05">) => {

    const theme = useTheme();
    const dimensions = useWindowDimensions();
    const [image, setImage] = useState(null);
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.canceled) {
          setImage(result.assets[0].uri);
        }
      };

  
    return (
      <KeyboardAvoidingView behavior="position" style={{ flex: 1 }}>
        <SafeAreaView
          style={{
            flex: 1,
            backgroundColor: theme.colors.card,
            minHeight: dimensions.height,
          }}
        >
          {/* It Works! */}
          <Animated.View
            entering={FadeInUp.duration(1000).springify()}
            style={{
              paddingHorizontal: 24,
              height: 42,
              alignItems: "center",
              flexDirection: "row",
            }}
          >
          </Animated.View>
  
          <Animated.View
            entering={FadeInUp.delay(200).duration(1000).springify()}
            style={{
              alignItems: "center",
              flex: 1,
              justifyContent: "center",
            }}
          >
           <View style={{ alignItems:'center'}}>
                <FontAwesome name="photo" size={100} color={theme.colors.text} onPress={pickImage}/>
                {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
                </View>
                
          </Animated.View>
  
          <View style={{ padding: 24 }}>
            <Animated.Text
              entering={FadeInDown.duration(1000).springify()}
              style={{
                fontSize: 40,
                fontWeight: "800",
                color: theme.colors.text,
              }}
            >
              {REGISTER_SCREEN4.title}
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
              {REGISTER_SCREEN4.description}
            </Animated.Text>
  
            <View style={{ alignItems: "center", gap: 16, marginTop: 32 }}>
              <Animated.View
                entering={FadeInDown.delay(200).duration(1000).springify()}
                style={{ position: "relative", width: "100%" }}
              >
                <TextInput
                  placeholder="Nacionalidade"
                  style={{
                    fontSize: 16,
                    fontWeight: "500",
                    color: theme.colors.text,
                    paddingLeft: 48,
                    paddingRight: 12,
                    height: 48,
                    borderRadius: 12,
                    backgroundColor: theme.colors.background,
                    width: "100%",
                  }}
                />
                <Icons
                  name="email"
                  size={24}
                  color={theme.colors.text}
                  style={{
                    position: "absolute",
                    left: 12,
                    top: 12,
                    opacity: 0.5,
                  }}
                />
              </Animated.View>

              <Animated.View
                entering={FadeInDown.delay(200).duration(1000).springify()}
                style={{ position: "relative", width: "100%" }}
              >
                <TextInput
                  placeholder="Numero de telefone"
                  style={{
                    fontSize: 16,
                    fontWeight: "500",
                    color: theme.colors.text,
                    paddingLeft: 48,
                    paddingRight: 12,
                    height: 48,
                    borderRadius: 12,
                    backgroundColor: theme.colors.background,
                    width: "100%",
                  }}
                />
                <Icons
                  name="email"
                  size={24}
                  color={theme.colors.text}
                  style={{
                    position: "absolute",
                    left: 12,
                    top: 12,
                    opacity: 0.5,
                  }}
                />
              </Animated.View>


              <Animated.View
                entering={FadeInDown.delay(600).duration(1000).springify()}
              >
                <PrimaryButton
                  label="Proximo"
                  onPress={() => navigation.navigate("Dashy")}                
                />
              </Animated.View>
            </View>
          </View>
        </SafeAreaView>
      </KeyboardAvoidingView>
    );
  };
  
  export default RegisterScreen2;
  
  // Thanks for watching 😃
  