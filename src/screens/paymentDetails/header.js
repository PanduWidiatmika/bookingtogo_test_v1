import React from 'react';
import { View, Text, Platform, TouchableOpacity, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const Header = () => {
  return (
    <View style={styles.headerViewStyle}>
      <SafeAreaView style={styles.safeAreaContainer}>
        <TouchableOpacity>
          <FontAwesome5 name="arrow-left" size={20} color="#FFF" />
        </TouchableOpacity>
        <View style={styles.textPlacement}>
          <Text style={styles.textStyle}>Payment Details</Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  safeAreaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 16,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  headerViewStyle: {
    backgroundColor: '#385c95'
  },
  textPlacement: {
    flex: 1,
    alignItems: 'center',
  },
  textStyle: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  }
})

export default Header;
