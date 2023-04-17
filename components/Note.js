import * as React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
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
import { add, selectCount } from "./workSlice";

const Note = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [jobsAmount, setJobsAmount] = useState("2");

  const [text, onChangeText] = useState(null);
  // const [task, setTask] = useState(null);
  // const [arry, setArry] = useState([]);
  useEffect(() => {
    console.log(arry);
  }, [arry]);

  const jobsValue = "fromNote";

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        // onChangeText={onChangeText}
        value={jobsAmount}
        // onChangeText={(value) => onChangeText(value)}
        onChange={(e) => setJobsAmount(e.target.value)}
        placeholder="New Task"
      />
      <Pressable
        style={styles.add}
        onPress={() => dispatch(add(jobsValue))}
      >
        <Ionicons name="add-circle" size={40} color="#F2F7F2" />
      </Pressable>
      <View style={styles.task}>
        {count.map((value) => {
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
