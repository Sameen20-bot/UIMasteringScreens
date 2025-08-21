import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import LoginCircle from "./LoginCircle";
import { GoogleIcon, AppleIcon, FacebookIcon } from "../assets/Icons";
import { s, vs } from "react-native-size-matters";

const LoginsSocials = () => {
  return (
    <View>
      <Text
        style={{
          fontSize: s(15),
          color: "#575757",
          fontWeight: "500",
          textAlign: "center",
          marginTop: vs(50),
          marginBottom: vs(15),
        }}
      >
        -OR Continue with-
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: s(10),
        }}
      >
        <LoginCircle icon={<GoogleIcon />} />
        <LoginCircle icon={<AppleIcon />} />
        <LoginCircle icon={<FacebookIcon />} />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginTop: s(20),
        }}
      >
        <Text style={{ fontSize: s(15), color: "#575757", fontWeight: "400" }}>
          {" "}
          Create An Account{" "}
        </Text>
        <TouchableOpacity>
          <Text style={styles.signup}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default LoginsSocials;
const styles = StyleSheet.create({
  signup: {
    color: "#F83758",
    fontSize: s(15),
    fontWeight: "600",
    textDecorationLine: "underline",
  },
});
