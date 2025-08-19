import { StyleSheet, TouchableOpacity} from "react-native";
import { s } from "react-native-size-matters";
import Entypo from "@expo/vector-icons/Entypo";

const BackButton = () => {
  return (
    <TouchableOpacity style={styles.backBtn}>
      <Entypo name="chevron-left" size={s(20)} color="black" />
    </TouchableOpacity>
  );
};
export default BackButton;
const styles = StyleSheet.create({
  backBtn: {
    height: s(32),
    width: s(32),
    borderRadius: s(16),
    backgroundColor: "#ECF0F4",
    justifyContent: "center",
    alignItems: "center",
  },
});
