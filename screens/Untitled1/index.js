import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled1 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><View style={styles.KkqrAZPJ}></View></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%',
    backgroundColor: "#FAF9FF"
  },
  KkqrAZPJ: {
    height: 46,
    width: 230,
    backgroundColor: "#BBB2E9",
    borderRadius: 50,
    color: "#777777",
    left: 129,
    top: 350
  }
});
export default Untitled1;