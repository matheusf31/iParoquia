import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home screen</Text>
      <Link href="/announcement" style={styles.button}>
        Avisos
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e7f5ff",
  },
  text: {
    color: "#343a40",
  },
  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#343a40",
  },
});
