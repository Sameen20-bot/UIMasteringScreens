import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import ShopScreen from "./src/screens/ShopScreen";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ShopScreen />
    </SafeAreaView>
  );
}
