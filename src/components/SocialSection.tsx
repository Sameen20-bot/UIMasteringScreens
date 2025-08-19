import { StyleSheet, Text, View } from "react-native";
import SendButton from "./SendButton";
import { s, vs } from "react-native-size-matters";

const SocialSection = ({ title, icon }) => {
  return (
    <View style={styles.container}>
      <View style={styles.socialIcon}>{icon}</View>
      <Text style={styles.text}>{title}</Text>
      <SendButton />
    </View>
  );
};
export default SocialSection;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#E4E6E8",
    paddingVertical: vs(14),
  },
  socialIcon: {
    backgroundColor: "#f8f8fb",
    borderColor: "#ecedef",
    borderWidth: s(1),
    height: s(46),
    width: s(46),
    borderRadius: s(23),
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: s(16),
    color: "#8083A3",
    marginLeft: s(14),
    flex: 1,
  },
});
