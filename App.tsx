import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import LogInScreen from "./src/screens/LogInScreen";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LogInScreen/>
    </SafeAreaView>
  );
}
