import React, { useState, useCallback } from 'react';
import { View, FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native';

const angolanBanks = [
  "Banco Nacional de Angola (BNA)",
  "Banco Angolano de Investimentos (BAI)",
  "Banco de Fomento Angola (BFA)",
  "Banco Millennium Atlântico",
  "Banco Sol",
];

const BankList = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handlePress = useCallback((bankName) => {
    setSelectedItem(bankName);
    console.log("Selected bank:", bankName);
  }, []);

  const renderItem = useCallback(({ item }) => (
    <TouchableOpacity onPress={() => handlePress(item)}>
      <View style={[styles.item, selectedItem === item && styles.selectedItem]}>
        <Text style={styles.title}>{item}</Text>
      </View>
    </TouchableOpacity>
  ), [handlePress, selectedItem]);

  return (
    <View style={styles.container}>
      <FlatList
        data={angolanBanks}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        style={styles.flatList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  flatList: {
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  item: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  title: {
    fontSize: 16,
  },
  selectedItem: {
    backgroundColor: 'lightblue', // Change to any color you want for selected item
  },
});

export default BankList;
