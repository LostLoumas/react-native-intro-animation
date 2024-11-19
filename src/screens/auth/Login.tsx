import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import React from "react";
import { RootStackScreenProps } from "../../navigators/RootNavigator";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "@react-navigation/native";
import Artwork03 from "../../components/artworks/Artwork03";
import { LOG_IN } from "../../utils/constants";
import PrimaryButton from "../../components/PrimaryButton";
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";

const LogInScreen = ({ navigation }: RootStackScreenProps<"Login">) => {
  const theme = useTheme();
  const dimensions = useWindowDimensions();

  return (
    <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: theme.colors.card,
          minHeight: dimensions.height,
        }}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
        >
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
              {LOG_IN.title}
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
              {LOG_IN.description}
            </Animated.Text>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: 32,
                gap: 16,
              }}
            >
              {/* Synchronized Animations for Buttons */}
              <Animated.View
                entering={FadeInDown.delay(600).duration(1000).springify()}
                style={{ flex: 1 }}
              >
                <PrimaryButton
                  label="Criar Conta"
                  onPress={() => navigation.navigate("IntroScreen01")}
                  accessible
                  accessibilityLabel="Create an account button"
                />
              </Animated.View>

              <Animated.View
                entering={FadeInDown.delay(600).duration(1000).springify()}
                style={{ flex: 1 }}
              >
                <PrimaryButton
                  label="Iniciar Seccao"
                  onPress={() => navigation.navigate("Home")} // Adjust the target screen here
                  accessible
                  accessibilityLabel="Log in button"
                />
              </Animated.View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default LogInScreen;
