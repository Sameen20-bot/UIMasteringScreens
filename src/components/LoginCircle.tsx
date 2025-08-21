import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { s, vs } from "react-native-size-matters";
import { GoogleIcon } from "../assets/Icons";
import { FC, ReactNode } from "react";

interface LoginTypes{
  icon: ReactNode
}

const LoginCircle: FC<LoginTypes> = ({icon}) => {
  return (
    <TouchableOpacity style={styles.circle}>
      {icon}
    </TouchableOpacity>
  );
};
export default LoginCircle;
const styles = StyleSheet.create({
  circle: {
    backgroundColor: "#FCF3F6",
    width: s(54),
    height: s(54),
    borderRadius: s(27),
    borderWidth: s(1),
    borderColor: "#F83758",
    alignItems: "center",
    justifyContent: "center",
  },
});
