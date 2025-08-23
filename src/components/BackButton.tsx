import { StyleSheet, TouchableOpacity} from "react-native";
import { s } from "react-native-size-matters";
import Entypo from "@expo/vector-icons/Entypo";
import { FC } from "react";

interface BackBtnTypes{
  icon: any,
}

const BackButton:FC<BackBtnTypes> = ({icon}) => {
  return (
    <TouchableOpacity style={styles.backBtn}>
      {icon}
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
