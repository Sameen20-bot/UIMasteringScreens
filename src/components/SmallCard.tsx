import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CashIcon } from "../assets/Icons";
import { s, vs } from "react-native-size-matters";
import { Circle } from "react-native-svg";
import AntDesign from "@expo/vector-icons/AntDesign";
import { FC, ReactNode } from "react";

interface PaymentTypes {
  isSelected?: boolean;
  icon: ReactNode;
}

const SmallCard: FC<PaymentTypes> = ({ isSelected = false, icon, onPress }) => {
  return (
    <TouchableOpacity style={{ width: s(64) }} onPress={onPress}>
      <View style={[styles.card, isSelected && styles.active]}>{icon}</View>
    </TouchableOpacity>
  );
};
export default SmallCard;

const styles = StyleSheet.create({
  card: {
    height: vs(64),
    width: s(64),
    backgroundColor: "#F0F5FA",
    borderRadius: s(16),
    alignItems: "center",
    justifyContent: "center",
    marginTop: vs(15),
    borderWidth: s(1.5),
    borderColor: '#D8D3D380',
  },
  active: {
    backgroundColor: "#FF7622",
  },
});
