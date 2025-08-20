import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CashIcon } from "../assets/Icons";
import { s, vs } from "react-native-size-matters";
import { Circle } from "react-native-svg";
import AntDesign from "@expo/vector-icons/AntDesign";
import { FC, ReactNode } from "react";

interface PaymentTypes {
  isSelected?: boolean;
  title: string;
  icon: ReactNode;
}

const PaymentMethod: FC<PaymentTypes> = ({
  isSelected = false,
  title,
  icon,
  onPress
}) => {
  return (
    <TouchableOpacity style={{ width: s(85) }} onPress={onPress}>
      {isSelected && (
        <View style={styles.circle}>
          <AntDesign name="check" size={18} color="white" />
        </View>
      )}
      <View style={[styles.card, isSelected && styles.active]}>{icon}</View>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};
export default PaymentMethod;
const styles = StyleSheet.create({
  card: {
    height: vs(72),
    width: s(85),
    backgroundColor: "#F0F5FA",
    borderRadius: s(16),
    alignItems: "center",
    justifyContent: "center",
    marginTop: vs(15),
  },
  text: {
    textAlign: "center",
    color: "#464E57",
    fontSize: s(14),
    fontWeight: "400",
    marginTop: s(7),
  },
  active: {
    borderWidth: s(2),
    borderColor: "#FF7622",
  },
  circle: {
    backgroundColor: "#FF7622",
    width: s(24),
    height: s(24),
    borderRadius: s(30),
    position: "absolute",
    zIndex: 1,
    right: s(2),
    top: s(10),
    borderColor: "white",
    borderWidth: s(2),
    alignItems: "center",
    justifyContent: "center",
  },
});
