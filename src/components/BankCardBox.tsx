import { StyleSheet, Text, View } from "react-native";
import { BankCardIcon } from "../assets/Icons";
import LottieView from "lottie-react-native";
import { s, vs } from "react-native-size-matters";

const BankCardBox = () => {
  return (
    <View style={styles.container}>
      <LottieView
        autoPlay
        style={{
          width: 150,
          height: 150,
          // backgroundColor: "#eee",
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require("../assets/CreditCard.json")}
      />{" "}
      <Text
        style={{
          fontSize: s(16),
          fontWeight: "700",
          marginTop: s(10),
          color: "#32343E",
        }}
      >
        No master card added
      </Text>
      <Text
        style={{
          fontSize: s(15),
          fontWeight: "400",
          textAlign: "center",
          marginTop: s(10),
        }}
      >
        You can add a mastercard and save it for later
      </Text>
    </View>
  );
};
export default BankCardBox;
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: s(70),
    paddingVertical: s(17),
    width: s(327),
    borderRadius: s(10),
    backgroundColor: "#f7f8f9",
    alignItems: "center",
    justifyContent: "center",
  },
});
