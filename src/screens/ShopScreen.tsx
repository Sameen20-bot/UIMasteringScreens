import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { s, vs } from "react-native-size-matters";
import LoginButton from "../components/LoginButton";

const ShopScreen = () => {
  return (
    <ImageBackground
      source={require("../assets/cloth.jpg")}
      style={styles.container}
      imageStyle={styles.image}
    >
      <View style={styles.overlay} />
      <View
        style={{
          position: "absolute",
          bottom: s(50),
          paddingHorizontal: s(30),
        }}
      >
        <Text style={styles.title}>You want Authentic, here you go!</Text>
        <Text style={styles.text}>Find it here, buy it now!</Text>
        <LoginButton title={"Get Started"} />
      </View>
    </ImageBackground>
  );
};
export default ShopScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: "100%",
    width: "100%",
    opacity: 0.9,
    resizeMode: "cover",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.45)",
  },
  title: {
    fontSize: s(34),
    color: "white",
    fontWeight: "600",
    textAlign: "center",
  },
  text: {
    fontSize: s(14),
    color: "white",
    fontWeight: "400",
    textAlign: "center",
    marginTop: s(14),
  },
});
