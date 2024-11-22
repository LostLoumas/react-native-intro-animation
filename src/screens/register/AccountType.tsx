import { View, SafeAreaView, TouchableOpacity, useWindowDimensions } from "react-native";
import React from "react";
import { RootStackScreenProps } from "../../navigators/RootNavigator";
import { useTheme } from "@react-navigation/native";
import PrimaryButton from "../../components/PrimaryButton";
import ScreenIndicators from "../../components/ScreenIndicators";
import { ACCOUNT_TYPE } from "../../utils/constants";
import Icons from "@expo/vector-icons/MaterialIcons";
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";
import Artwork02 from "../../components/artworks/Artwork02";
import Accounts from "../../components/Accounts";

const AccountType = ({ navigation }: RootStackScreenProps<"AccountType">) => {
  const theme = useTheme();
  const dimensions = useWindowDimensions();

  return (
    <SafeAreaView
      style={{
        backgroundColor: theme.colors.card,
        flex: 1,
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
          onPress={() => navigation.goBack()}
          accessible
          accessibilityLabel="Go back button"
        >
          <Icons name="arrow-back-ios" size={24} color={theme.colors.text} />
        </TouchableOpacity>
      </Animated.View>

      <View style={{ padding: 24, flex: 1 }}>
        {/* Title */}
        <Animated.View entering={FadeInDown.duration(1000).springify()}>
          <Animated.Text
            style={{
              fontSize: 40,
              fontWeight: "800",
              color: theme.colors.text,
            }}
            accessible
          >
            {ACCOUNT_TYPE.title || "Account Type"}
          </Animated.Text>
        </Animated.View>

        {/* Description */}
        <Animated.View
          entering={FadeInDown.delay(100).duration(1000).springify()}
        >
          <Animated.Text
            style={{
              opacity: 0.5,
              marginTop: 16,
              fontSize: 16,
              color: theme.colors.text,
            }}
            accessible
          >
            {ACCOUNT_TYPE.description || "Choose your account type."}
          </Animated.Text>
        </Animated.View>

        {/* Accounts Section */}
        <Animated.View
          entering={FadeInUp.delay(200).duration(1000).springify()}
          style={{ flex: 1, justifyContent: "center" }}
        >
          <Accounts />
        </Animated.View>

        {/* Screen Indicators */}
        <Animated.View
          entering={FadeInDown.delay(200).duration(1000).springify()}
        >
          <ScreenIndicators count={2} activeIndex={1} />
        </Animated.View>

        {/* Next Button */}
        <Animated.View
          entering={FadeInDown.delay(400).duration(1000).springify()}
          style={{ alignItems: "center", marginTop: 24 }}
        >
          <PrimaryButton
            label="Próximo"
            onPress={() => navigation.replace("LogInScreen")}
            accessible
            accessibilityLabel="Next button"
          />
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};

export default AccountType;
