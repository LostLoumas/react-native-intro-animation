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

const SearchButton = ({
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
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: "#63F92D",
            width: 120,
            height: 120,
            borderRadius: 60,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.3,
            shadowRadius: 4,
            elevation: 5,
        },
        style,
      ]}
      onPress={onPress}
      accessible={accessible} // Pass accessible prop
      accessibilityLabel={accessibilityLabel} // Pass accessibilityLabel prop
    >
      <Text
        style={[
          {  fontSize: 18,
            color: 'white',
            fontWeight: 'bold',
        },
          labelStyle,
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default SearchButton;
