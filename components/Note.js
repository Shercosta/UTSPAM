import * as React from "react";
import { useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Pressable,
  View,
  Text,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Task from "./Task";

const Note = () => {
  const [text, onChangeText] = useState(null);
  const [task, setTask] = useState(null);
  const [arry, setArry] = useState([]);
  useEffect(() => {
    console.log(arry);
  }, [arry]);

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        // onChangeText={onChangeText}
        value={text}
        onChangeText={(value) => onChangeText(value)}
        placeholder="New Task"
      />
      <Pressable
        style={styles.add}
        onPress={() => {
          setArry((oldArray) => [...oldArray, text]);
          onChangeText("");
        }}
      >
        <Ionicons name="add-circle" size={40} color="#F2F7F2" />
      </Pressable>
      <View style={styles.task}>
        {arry.map((value) => {
          return <Task items={value} />;
        })}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  add: {
    alignSelf: "center",
  },
  task: {
    flexWrap: "wrap",
    flexDirection: "row",
  },
});

export default Note;
