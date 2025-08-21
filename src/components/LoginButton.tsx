import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { s, vs } from "react-native-size-matters";

const LoginButton = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={{ fontSize: s(20), fontWeight: "600", color: "white" }}>
        Login
      </Text>
    </TouchableOpacity>
  );
};
export default LoginButton;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F83758",
    borderRadius: s(4),
    height: s(55),
    alignItems: "center",
    justifyContent: "center",
    marginTop: s(40),
    width: s(300),
  },
});
