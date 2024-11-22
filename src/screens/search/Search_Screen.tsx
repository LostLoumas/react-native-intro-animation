import React from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  useWindowDimensions,
  ImageBackground,
  StyleSheet,
  SafeAreaView
} from "react-native";
import { RootStackScreenProps } from "../../navigators/RootNavigator";
import { useTheme } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import Animated from 'react-native-reanimated';

const Search = ({ navigation }: RootStackScreenProps<"Search">) => {
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

      <View
        style={[
          styles.container,
          { backgroundColor: theme.colors.card, minHeight: dimensions.height },
        ]}
      >
        {/* Background Map Image */}
        <ImageBackground
          source={require("../../../assets/images/map.png")} // Replace with your image path
          style={[styles.backgroundImage, { width: dimensions.width, height: dimensions.height }]}
          resizeMode="cover"
        >
          {/* Back Button */}
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
            accessibilityLabel="Go back"
          >
            <Ionicons name="arrow-back" size={24} color={theme.dark ? "#63F92D" : "#63F92D"} />
          </TouchableOpacity>

          {/* Search Bar */}
          <View style={styles.searchBarContainer}>
            <Ionicons name="search" size={20} color="#63F92D" style={styles.searchIcon} />
            <TextInput
              placeholder="Search..."
              placeholderTextColor={theme.colors.text}
              style={[styles.searchInput, { color: theme.colors.text }]}
            />
          </View>
        </ImageBackground>
      </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
  },
  backButton: {
    marginTop: 40, // Adjust for your app's safe area
    marginLeft: 20,
    padding: 10,
    //backgroundColor: "rgba(255, 255, 255, 0.7)",
    borderRadius: 50,
  },
  searchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    marginHorizontal: 20,
    marginTop: 20,
    padding: 10,
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5, // For Android shadow
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
});
