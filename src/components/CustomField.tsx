import { StyleSheet, Text, TextInput, View } from "react-native";
import { s, vs } from "react-native-size-matters";
import Feather from '@expo/vector-icons/Feather';

const CustomField = ({secure, label,icon, icon2}) => {
  return (
    <View style={styles.container}>
      {icon}
      <TextInput placeholder={label} placeholderTextColor={"#676767"} style={styles.textinput} secureTextEntry={secure}/>
      {icon2}
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
    marginBottom: s(30),
  },
  textinput: {
    fontSize: s(15),
    fontWeight: "500",
    color: "black",
    marginStart: s(5),
  },
});
