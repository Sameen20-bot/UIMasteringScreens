import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import ContactUsScreen from "./src/screens/ContactUsScreen";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ContactUsScreen />
    </SafeAreaView>
  );
}
