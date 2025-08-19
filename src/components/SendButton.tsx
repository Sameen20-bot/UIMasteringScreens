import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { SendIcon } from "../assets/Icons";
import { s } from "react-native-size-matters";

const SendButton = () => {
  return (
    <TouchableOpacity style={styles.send}>
      <SendIcon />
    </TouchableOpacity>
  );
};
export default SendButton;
const styles = StyleSheet.create({
  send: {
    backgroundColor: "#1077AF",
    height: s(46),
    width: s(46),
    borderRadius: s(23),
    alignItems: "center",
    justifyContent: "center",
  },
});
