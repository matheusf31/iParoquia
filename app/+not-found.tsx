import { Link, Stack } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: "Opa! Não encontrado",
        }}
      />
      <View style={styles.container}>
        <Link href="/" style={styles.button}>
          Voltar para o início
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e7f5ff",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#343a40",
  },
});
