import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Shercosta from "./Shercosta";

const Header = ({ navigation }) => {
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const today = new Date().getDay();
  // console.log(today);
  // const day = new Date().getDay;

  return (
    <View style={styles.container}>
      <Text style={styles.navbar}>{days[today]}</Text>
      <Pressable
        style={styles.navbar}
        onPress={() => navigation.navigate("Shercosta")}
      >
        <FontAwesome name="user" size={18} color="#25292e" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  navbar: {
    marginHorizontal: 10,
  },
});

export default Header;
