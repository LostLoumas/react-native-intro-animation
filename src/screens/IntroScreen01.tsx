import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { RootStackScreenProps } from "../navigators/RootNavigator";
import { SafeAreaView } from "react-native-safe-area-context";
import { INTRO_SCREEN_01 } from "../utils/constants";
import Artwork01 from "../components/artworks/Artwork01";
import { useTheme } from "@react-navigation/native";
import ScreenIndicators from "../components/ScreenIndicators";
import PrimaryButton from "../components/PrimaryButton";
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";

const AnimatedText = Animated.createAnimatedComponent(Text);

const IntroScreen01 = ({
  navigation,
}: RootStackScreenProps<"IntroScreen01">) => {
  
  const theme = useTheme();

  return (
    <SafeAreaView style={{ backgroundColor: theme.colors.card, flex: 1 }}>
      <Animated.View
        entering={FadeInUp.duration(1000).springify()}
        style={{ alignItems: "center", flex: 1, justifyContent: "center" }}
      >
        <Artwork01 width={300} height={300} />
      </Animated.View>
      <View style={{ padding: 24 }}>
        <AnimatedText
          entering={FadeInDown.duration(1000).springify()}
          style={{ fontSize: 40, fontWeight: "800", color: theme.colors.text }}
        >
          {INTRO_SCREEN_01.title}
        </AnimatedText>
        <AnimatedText
          entering={FadeInDown.delay(100).duration(1000).springify()}
          style={{
            marginTop: 16,
            fontSize: 16,
            color: theme.colors.text,
          }}
        >
          {INTRO_SCREEN_01.description}
        </AnimatedText>
        <Animated.View
          entering={FadeInDown.delay(200).duration(1000).springify()}
        >
          <ScreenIndicators count={2} activeIndex={0} />
        </Animated.View>
        <Animated.View
          entering={FadeInDown.delay(400).duration(1000).springify()}
          style={{ alignItems: "center" }}
        >
          <PrimaryButton
            label="Next"
            onPress={() => navigation.replace("IntroScreen02")}
          />
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};

export default IntroScreen01;
