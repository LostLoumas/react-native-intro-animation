import { View, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import { RootStackScreenProps } from "../../navigators/RootNavigator";
import { useTheme } from "@react-navigation/native";
import PrimaryButton from "../../components/PrimaryButton";
import ScreenIndicators from "../../components/ScreenIndicators";
import { BANK_SELECT } from "../../utils/constants";
import Icons from "@expo/vector-icons/MaterialIcons";
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";
import Artwork02 from "../../components/artworks/Artwork02";
import FlatList from "../../components/FlatList"

const BankSelect = ({
  navigation,
}: RootStackScreenProps<"BankSelect">) => {
  const theme = useTheme();
  return (
    <SafeAreaView style={{ backgroundColor: theme.colors.card, flex: 1 }}>
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

      <View style={{ padding: 24 }}>

        <Animated.Text
          entering={FadeInDown.duration(1000).springify()}
          style={{ fontSize: 40, fontWeight: "800", color: theme.colors.text }}
        >
          {BANK_SELECT.title}
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
          {BANK_SELECT.description}
        </Animated.Text>

        <Animated.View
        entering={FadeInUp.delay(200).duration(1000).springify()}
        style={{}}
      >
       <FlatList/>
      </Animated.View>
    
        <Animated.View
          entering={FadeInDown.delay(200).duration(1000).springify()}
        >
          <ScreenIndicators count={2} activeIndex={1} />
        </Animated.View>

        <Animated.View
          entering={FadeInDown.delay(400).duration(1000).springify()}
          style={{ alignItems: "center"}}
        >
          <PrimaryButton
            label="Proximo"
            onPress={() => navigation.replace("AccountType")}
          />
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};

export default BankSelect;
