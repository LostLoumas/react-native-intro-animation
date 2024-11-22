import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  useWindowDimensions,
  Platform,
} from "react-native";
import React from "react";
import { RootStackScreenProps } from "../../navigators/RootNavigator";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "@react-navigation/native";
import Artwork03 from "../../components/artworks/Artwork03";
import { LADING_PAGE1 } from "../../utils/constants";
import PrimaryButton from "../../components/PrimaryButton";
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";

const LandingPage1 = ({ navigation }: RootStackScreenProps<"LandingPage1">) => {
  const theme = useTheme();
  const dimensions = useWindowDimensions();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <Animated.View style={{ flex: 1, opacity: 1 }}>
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
              <Artwork03 width={dimensions.width * 0.6} height={dimensions.width * 0.6} />
            </Animated.View>

            <View style={{ padding: 24 }}>
              <Animated.View
                entering={FadeInDown.duration(1000).springify()}
              >
                <Text
                  style={{
                    fontSize: 40,
                    fontWeight: "800",
                    color: theme.colors.text,
                  }}
                  accessible
                >
                  {LADING_PAGE1.title || "Welcome!"}
                </Text>
              </Animated.View>

              <Animated.View
                entering={FadeInDown.delay(100).duration(1000).springify()}
              >
                <Text
                  style={{
                    opacity: 0.5,
                    marginTop: 16,
                    fontSize: 16,
                    color: theme.colors.text,
                  }}
                  accessible
                >
                  {LADING_PAGE1.description || "Discover more with us."}
                </Text>
              </Animated.View>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: 32,
                  gap: 16,
                }}
              >
                <Animated.View
                  entering={FadeInDown.delay(600).duration(1000).springify()}
                  style={{ flex: 1 }}
                >
                  <PrimaryButton
                    label="Criar Conta"
                    onPress={() => navigation.navigate("AccountType")}
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
                    onPress={() => navigation.replace("Login")}
                    accessible
                    accessibilityLabel="Log in button"
                  />
                </Animated.View>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </Animated.View>
    </KeyboardAvoidingView>
  );
};

export default LandingPage1;
