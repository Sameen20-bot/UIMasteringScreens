import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { s, vs } from "react-native-size-matters";
import CustomField from "../components/CustomField";
import { Entypo, FontAwesome, Feather } from "@expo/vector-icons/";
import LoginButton from "../components/LoginButton";
import { useState } from "react";
import LoginsSocials from "../components/LoginsSocials";

const LogInScreen = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleInput = (names: string, values: any) => {
    setData({ ...data, [names]: values });
  };
  return (
    <View style={{ paddingHorizontal: s(32) }}>
      <Text style={styles.title}>Welcome Back!</Text>
      <CustomField
        label={"Username or Email"}
        value={data.email}
        onChangeText={(text: string) => handleInput("email", text)}
        icon={
          <FontAwesome
            name="user"
            size={24}
            color="#676767"
            style={{ marginStart: s(14) }}
          />
        }
      />
      <View style={{ marginBottom: s(30) }} />
      <CustomField
        secure={true}
        label={"Password"}
        onChangeText={(text: string) => handleInput("password", text)}
        value={data.password}
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
            style={{ position: "relative", left: 170 }}
          />
        }
      />
      <View style={{ alignItems: "flex-end", marginTop: s(10) }}>
        <TouchableOpacity>
          <Text
            style={{ color: "#F83758", fontSize: s(14), fontWeight: "400" }}
          >
            Forgot Password?
          </Text>
        </TouchableOpacity>
      </View>
      <LoginButton title={"Login"}/>
      <LoginsSocials />
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
