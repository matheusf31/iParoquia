import { StyleSheet, Text, View } from "react-native";

export default function AnnouncementScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Avisos paroquiais</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e7f5ff",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#343a40",
  },
});
