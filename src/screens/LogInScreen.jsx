import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { s, vs } from "react-native-size-matters";
import CustomField from "../components/CustomField";
import { Entypo, FontAwesome, Feather } from "@expo/vector-icons/";

const LogInScreen = () => {
  return (
    <View style={{ paddingHorizontal: s(32) }}>
      <Text style={styles.title}>Welcome Back!</Text>
      <CustomField
        label={"Username or Email"}
        icon={
          <FontAwesome
            name="user"
            size={24}
            color="#676767"
            style={{ marginStart: s(14) }}
          />
        }
      />
      <CustomField
        secure={true}
        label={"Password"}
        icon={
          <Entypo
            name="lock"
            size={24}
            color="#676767"
            style={{ marginStart: s(14) }}
          />
        }
        icon2={
          <Feather
            name="eye"
            size={24}
            color="#676767"
            style={{ position: "absolute", right: 15 }}
          />
        }
      />
      <TouchableOpacity
        style={{
          position: "absolute",
          bottom: s(-3),
          right: s(20),
        }}
      >
        <Text style={{ color: "#F83758", fontSize: s(14), fontWeight: "400" }}>
          Forgot Password?
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default LogInScreen;
const styles = StyleSheet.create({
  title: {
    fontSize: s(36),
    fontWeight: "700",
    color: "#000000",
    textAlign: "justify",
    marginTop: s(63),
    width: s(185),
    height: vs(83),
    marginBottom: vs(36),
  },
});
