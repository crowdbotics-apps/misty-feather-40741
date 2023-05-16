import { Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled1 = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><Pressable onPress={() => {
        navigation.navigate("Untitled2", {});
      }}><View style={styles.KkqrAZPJ}><Text style={styles.itcTkWXJ}>{"ENGLISH"}</Text></View></Pressable></ScrollView>
    <View style={styles.WicIGGDP}></View></SafeAreaView>;
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
  },
  WicIGGDP: {
    height: 46,
    width: 230,
    backgroundColor: "#BBB2E9",
    borderRadius: 50,
    color: "#777777",
    left: 129,
    top: 350
  },
  itcTkWXJ: {
    width: 229,
    height: 46,
    lineHeight: 14,
    fontSize: 18,
    borderRadius: 0,
    textAlign: "center",
    alignItems: "stretch",
    position: "relative",
    top: 0,
    fontFamily: "Open Sans",
    flexWrap: "no-wrap",
    justifyContent: "space-between",
    left: 0.5
  }
});
export default Untitled1;