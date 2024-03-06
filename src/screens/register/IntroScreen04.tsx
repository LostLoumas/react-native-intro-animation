import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    KeyboardAvoidingView,
    useWindowDimensions,
  } from "react-native";
  import React, { useState } from 'react'
  import { RootStackScreenProps } from "../../navigators/RootNavigator";
  import { SafeAreaView } from "react-native-safe-area-context";
  import { useTheme } from "@react-navigation/native";
  import Icons from "@expo/vector-icons/MaterialIcons";
  import Artwork03 from "../../components/artworks/Artwork03";
  import { REGISTER_SCREEN3 } from "../../utils/constants";
  import PrimaryButton from "../../components/PrimaryButton";
  import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";
  import DatePicker from 'react-native-date-picker'
  
  
  const RegisterScreen2 = ({ navigation }: RootStackScreenProps<"IntroScreen04">) => {
    const theme = useTheme();
    const dimensions = useWindowDimensions();
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
          {/* It Works! */}
          <Animated.View
            entering={FadeInUp.duration(1000).springify()}
            style={{
              paddingHorizontal: 24,
              height: 52,
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
            <Artwork03 width={240} height={240} />
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
              {REGISTER_SCREEN3.title}
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
              {REGISTER_SCREEN3.description}
            </Animated.Text>
  
            <View style={{ alignItems: "center", gap: 16, marginTop: 32 }}>
              <Animated.View
                entering={FadeInDown.delay(200).duration(1000).springify()}
                style={{ position: "relative", width: "100%" }}
              >
                <TextInput
                  placeholder="Residencia"
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
                entering={FadeInDown.delay(400).duration(1000).springify()}
                style={{ position: "relative", width: "100%" }}
              >
                
                <TextInput
                  placeholder="Natural de"
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
                  name="lock"
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
                entering={FadeInDown.delay(400).duration(1000).springify()}
                style={{ position: "relative", width: "100%" }}
              >
                
                <TextInput
                  placeholder="Provincia"
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
                  name="lock"
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
                  onPress={() => navigation.navigate("IntroScreen05")}
                  
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
  