import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Camera } from "expo-camera";

const sct = require("./../assets/me.jpeg");

const Shercosta = () => {
  return (
    <View>
      <View style={styles.middle}>
        <Text>Render this page as Shercosta</Text>
      </View>
      <Image source={sct} style={styles.image} />
      <View style={styles.leftScr}>
        <Text>Nama:</Text>
        <Text>Geizka Rozilia Ruicosta</Text>
      </View>
      <View style={styles.leftScr}>
        <Text>NIM:</Text>
        <Text>119140114</Text>
      </View>
    </View>
  );
};

export default Shercosta;

const styles = StyleSheet.create({
  leftScr: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 16,
  },
  middle: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "30%",
    height: "30%",
    borderRadius: 18,
    alignSelf: "center",
  },
});
