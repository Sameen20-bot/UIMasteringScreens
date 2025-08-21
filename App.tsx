import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import StylishScreen from "./src/screens/StylishScreen";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StylishScreen/>
    </SafeAreaView>
  );
}
