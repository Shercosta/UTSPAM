import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";

const bgColors = [
  "#6B717E",
  "#EFAAC4",
  "#FFC4D1",
  "#61FF7E",
  "#D4DCCD",
  "#A6EBC9",
  "#5EEB5B",
  "#62AB37",
];

const Task = ({ items }) => {
  const number = Math.floor(Math.random() * bgColors.length);

  const color = bgColors[number];

  //   console.log(bgColors[number]);

  return (
    <View style={[styles.task, { backgroundColor: color }]}>
      <Text>{items}</Text>
    </View>
  );
};

export default Task;

const styles = StyleSheet.create({
  task: {
    // backgroundColor: "#E7E247",
    margin: 5,
    padding: 4,
    borderRadius: 10,
  },
});
