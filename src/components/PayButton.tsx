import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { s, vs } from "react-native-size-matters";

const PayButton = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text
        style={{
          fontSize: s(16),
          fontWeight: "700",
          textAlign: "center",
          color: "white",
        }}
      >
        PAY & CONFIRM
      </Text>
    </TouchableOpacity>
  );
};
export default PayButton;
const styles = StyleSheet.create({
  container: {
    height: vs(55),
    width: s(317),
    marginTop: s(30),
    backgroundColor: "#FF7622",
    borderRadius: s(16),
    alignItems: "center",
    justifyContent: "center",
  },
});
