import { View, Text, StyleSheet } from "react-native";
import FoodLogo from "../assets/FoodLogo";
import SunLogo from "../assets/SunLogo";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  sunImage: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
});

const IntroScreen = () => {
  return (
    <View style={styles.container}>
      <FoodLogo />
      <SunLogo style={styles.sunImage} />
    </View>
  );
};
export default IntroScreen;
