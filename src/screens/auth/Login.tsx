import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  useWindowDimensions,
  Platform,
} from "react-native";
import React from "react";
import { RootStackScreenProps } from "../../navigators/RootNavigator";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "@react-navigation/native";
import Icons from "@expo/vector-icons/MaterialIcons";
import Artwork03 from "../../components/artworks/Artwork03";
import { LOG_IN_SCREEN } from "../../utils/constants";
import PrimaryButton from "../../components/PrimaryButton";
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";

const Login = ({ navigation }: RootStackScreenProps<"Login">) => {
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
          {/* Header */}
          <Animated.View
            entering={FadeInUp.duration(1000).springify()}
            style={{
              paddingHorizontal: 24,
              height: 52,
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.replace("LandingPage1")}
              accessible
              accessibilityLabel="Go back button"
            >
              <Icons name="arrow-back-ios" size={24} color={theme.colors.text} />
            </TouchableOpacity>
          </Animated.View>

          {/* Artwork */}
          <Animated.View
            entering={FadeInUp.delay(200).duration(1000).springify()}
            style={{
              alignItems: "center",
              flex: 1,
              justifyContent: "center",
            }}
          >
            <Artwork03
              width={dimensions.width * 0.6}
              height={dimensions.width * 0.6}
            />
          </Animated.View>

          {/* Content */}
          <View style={{ padding: 24 }}>
            {/* Title */}
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
                {LOG_IN_SCREEN.title || "Login"}
              </Text>
            </Animated.View>

            {/* Description */}
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
                {LOG_IN_SCREEN.description || "Access your account to continue."}
              </Text>
            </Animated.View>

            {/* Input Fields and Button */}
            <View style={{ alignItems: "center", gap: 16, marginTop: 32 }}>
              {/* Email Input */}
              <Animated.View
                entering={FadeInDown.delay(200).duration(1000).springify()}
                style={{ position: "relative", width: "100%" }}
              >
                <TextInput
                  placeholder="Seu Email"
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
                  accessible
                  accessibilityLabel="Email input field"
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

              {/* Password Input */}
              <Animated.View
                entering={FadeInDown.delay(400).duration(1000).springify()}
                style={{ position: "relative", width: "100%" }}
              >
                <TextInput
                  placeholder="Sua Password"
                  secureTextEntry
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
                  accessible
                  accessibilityLabel="Password input field"
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

              {/* Log In Button */}
              <Animated.View
                entering={FadeInDown.delay(600).duration(1000).springify()}
              >
                <PrimaryButton
                  label="Log In"
                  onPress={() =>
                    navigation.navigate("DrawerNavigator", { screen: "Dashy" })
                  }
                  accessible
                  accessibilityLabel="Log in button"
                />
              </Animated.View>
            </View>
          </View>
        </SafeAreaView>
      </Animated.View>
    </KeyboardAvoidingView>
  );
};

export default Login;
