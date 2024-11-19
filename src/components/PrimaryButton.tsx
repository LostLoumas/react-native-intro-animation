import {
  View,
  Text,
  TouchableOpacity,
  ViewStyle,
  StyleProp,
  TextStyle,
} from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";

const PrimaryButton = ({
  onPress,
  label,
  style,
  labelStyle,
  accessible, // Added accessible prop
  accessibilityLabel, // Added accessibilityLabel prop
}: {
  onPress?: () => void;
  label: string;
  style?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  accessible?: boolean; // Added to props
  accessibilityLabel?: string; // Added to props
}) => {
  const theme = useTheme();
  
  return (
    <TouchableOpacity
      style={[
        {
          backgroundColor: "#63F92D",
          paddingHorizontal: 32,
          height: 52,
          borderRadius: 100,
          alignItems: "center",
          justifyContent: "center",
        },
        style,
      ]}
      onPress={onPress}
      accessible={accessible} // Pass accessible prop
      accessibilityLabel={accessibilityLabel} // Pass accessibilityLabel prop
    >
      <Text
        style={[
          { fontSize: 16, fontWeight: "600", color: "black" },
          labelStyle,
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
