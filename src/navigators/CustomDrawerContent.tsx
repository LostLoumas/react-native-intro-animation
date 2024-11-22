import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { DrawerContentScrollView, DrawerItemList, DrawerContentComponentProps } from "@react-navigation/drawer";

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView {...props}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.greeting}>Hello,</Text>
        <Text style={styles.name}>User Name</Text> 
      </View>

      {/* Drawer Items */}
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 20,

  },
  greeting: {
    fontSize: 20,
    color: "#A3A2A2",
    marginBottom: 5,
  },
  name: {
    fontSize: 18,
    color: "#63F92D",
    fontWeight: "bold",
  },
  footer: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  footerLink: {
    fontSize: 16,
    marginVertical: 10,
    textDecorationLine: "underline",
  },
});

export default CustomDrawerContent;
