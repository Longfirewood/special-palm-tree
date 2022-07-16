import {
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  Button,
  Alert,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";

export default function App() {
  const [text, onChangeText] = React.useState("Write Text");
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={{
          width: 200,
          height: 150,
          url: "https://gratisography.com/wp-content/uploads/2022/02/gratisography-car-in-field-free-stock-photo-800x525.jpg",
        }}
        style={styles.img}
      />
      <Text style={styles.textField}>Hello</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => Alert.alert("Simple Button pressed")}
      >
        <Text> Press me </Text>
      </TouchableOpacity>

      <TextInput
        onChangeText={onChangeText}
        value={text}
        style={styles.input}
      />

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    // backgroundColor: "#f194ff",
    borderWidth: 1,
    margin: 20,
    backgroundColor: "#DDDDDD",
    borderColor: "#fff",
    padding: 10,
    borderRadius: 15,
  },

  input: {
    height: 40,
    margin: 12,
    borderButtomWidth: 1,
    padding: 10,
    backgroundColor: "#f194ff",
  },
  textField: {
    borderWidth: 1,
    padding: 20,
  },
  img: {
    padding: 30,
    borderWidth: 5,
    borderRadius: 15,
    margin: 20,
  },
});
