import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  useWindowDimensions,
  ImageBackground,
  StyleSheet,
} from "react-native";
import { useNavigation, useTheme } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { DrawerParamList } from "../navigators/RootNavigator"; // Adjust the path based on your project structure

// Type for navigation prop
type DashyNavigationProp = DrawerNavigationProp<DrawerParamList, "Dashy">;

const Dashy = () => {
  const theme = useTheme();
  const dimensions = useWindowDimensions();
  const navigation = useNavigation<DashyNavigationProp>();

  return (
    <View>
      <View
        style={{
          flex: 1,
          backgroundColor: theme.colors.card,
          minHeight: dimensions.height,
        }}
      >
        {/* Map Background */}
        <ImageBackground
          source={require("../../assets/images/map.png")} // Replace with your image path
          style={{
            flex: 1,
            width: dimensions.width,
            height: dimensions.height,
          }}
          resizeMode="cover"
        >
          {/* Floating Navigation Buttons */}
          <View
            style={[
              styles.floatingButtonContainer,
              {
                backgroundColor: theme.dark ? "#333" : "#fff", // Adjust background color for dark mode
              },
            ]}
          >
            {/* Heart Button */}
            <TouchableOpacity
              onPress={() => navigation.navigate('Favorite')}
              accessibilityLabel="Like"
              accessible={true}
            >
              <Ionicons
                name="heart-outline"
                size={30}
                color={theme.dark ? "#63F92D" : "#63F92D"} // Change icon color based on theme
              />
            </TouchableOpacity>

            {/* Profile Button */}
            <TouchableOpacity
              onPress={() => navigation.navigate('Profile')}
              accessibilityLabel="Go to Profile"
              accessible={true}
            >
              <Ionicons
                name="person-outline"
                size={30}
                color={theme.dark ? "#63F92D" : "#63F92D"} // Change icon color based on theme
              />
            </TouchableOpacity>
          </View>

          {/* Drawer Button */}
         <TouchableOpacity
         style={[
           styles.drawerButton, // Your existing styles
           {
             backgroundColor: theme.dark ? "#333" : "#fff", // Adjust background color for dark mode
           },
         ]}
         onPress={() => {
           if (navigation.openDrawer) {
             navigation.openDrawer();
           } else {
             console.error("Drawer navigation is not available.");
           }
         }}
         accessibilityLabel="Open Drawer"
         accessible={true}
       >
         <Ionicons
           name="menu"
           size={30}
           color={theme.dark ? "#63F92D" : "#63F92D"} // Change drawer icon color if needed
         />
       </TouchableOpacity>
        </ImageBackground>
      </View>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  floatingButtonContainer: {
    position: "absolute",
    bottom: 50,
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: "60%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  drawerButton: {
    position: "absolute",
    top: 50,
    left: 20,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default Dashy;
