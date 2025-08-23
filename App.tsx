import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import ProductScreen from "./src/screens/ProductScreen";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ProductScreen />
    </SafeAreaView>
  );
}
