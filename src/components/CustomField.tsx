import {
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import { s, vs } from "react-native-size-matters";
import Feather from "@expo/vector-icons/Feather";
import { FC, ReactNode, useState } from "react";

interface FieldTypes {
  secure?: boolean;
  label: string;
  icon: ReactNode;
  icon2: ReactNode;
  value: any;
  onChangeText: any;
}

const CustomField: FC<FieldTypes> = ({
  secure,
  label,
  icon,
  icon2,
  value,
  onChangeText,
}) => {
  return (
    <View style={styles.container}>
      {icon}
      <TextInput
        placeholder={label}
        placeholderTextColor={"#676767"}
        style={styles.textinput}
        secureTextEntry={secure}
        value={value}
        onChangeText={onChangeText}
      />
      <TouchableOpacity>{icon2}</TouchableOpacity>
    </View>
  );
};
export default CustomField;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F3F3F3",
    borderRadius: s(16),
    width: s(300),
    height: vs(55),
    borderColor: "#A8A8A9",
    borderWidth: s(1),
    alignItems: "center",
    flexDirection: "row",
  },
  textinput: {
    fontSize: s(15),
    fontWeight: "500",
    color: "black",
    marginStart: s(5),
  },
});
