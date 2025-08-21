import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import LoginCircle from "./LoginCircle";
import { GoogleIcon, AppleIcon, FacebookIcon } from "../assets/Icons";
import { s, vs } from "react-native-size-matters";

const LoginsSocials = () => {
  return (
    <View>
      <Text style={{
        fontSize: s(15),
        color: '#575757',
        fontWeight: '500',
        textAlign: 'center',
        marginTop: vs(50),
        marginBottom: vs(15),
      }}>-OR Continue with-</Text>
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
      <Text>
        Create An Account
        <TouchableOpacity>
          <Text>Sign Up</Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
};
export default LoginsSocials;
const styles = StyleSheet.create({});
