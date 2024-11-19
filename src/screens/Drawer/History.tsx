import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  useWindowDimensions,
} from "react-native";
import { RootStackScreenProps } from "../../navigators/RootNavigator";
import { useTheme } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

const History = ({ navigation }: RootStackScreenProps<"History">) => {
  const theme = useTheme();
  const dimensions = useWindowDimensions();

  return (
    <KeyboardAvoidingView behavior="position" style={{ flex: 1 }}>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: theme.colors.background,
          minHeight: dimensions.height,
        }}
      >
        {/* Header with Back Button */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            padding: 16,
            justifyContent:'space-between'
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              marginRight: 16,
            }}
          >
            <Ionicons
              name="arrow-back"
              size={24}
              color={theme.dark ? "#63F92D" : "#63F92D"}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
              color: theme.colors.text,
            }}
          >
            History
          </Text>
        </View>

        {/* Content */}
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: theme.colors.text, fontSize: 16 }}>
            No history available yet.
          </Text>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default History;
