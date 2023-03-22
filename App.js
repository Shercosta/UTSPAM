import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "./components/Header";
import Note from "./components/Note";
import Shercosta from "./components/Shercosta";

const Stack = createNativeStackNavigator();

const HomeScreen = ({ navigation }) => {
  console.log(navigation);

  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <Note />

      {/* <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Shercosta")}
      /> */}
    </View>
  );
};

const Sherscreen = () => {
  return <Shercosta />;
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Shercosta" component={Sherscreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    padding: 30,
    backgroundColor: "#2AB7CA",
    alignItems: "center",
    justifyContent: "center",
  },
});
