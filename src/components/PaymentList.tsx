import { FlatList, StyleSheet, Text, View } from "react-native";
import {
  CashIcon,
  MasterCardIcon,
  PayPalIcon,
  VisaIcon,
} from "../assets/Icons";
import PaymentMethod from "./PaymentMethod";
import { s, vs } from "react-native-size-matters";
import { useState } from "react";

const paymentMethods = [
  { label: "Cash", icon: <CashIcon /> },
  { label: "Visa", icon: <VisaIcon /> },
  { label: "Master Card", icon: <MasterCardIcon /> },
  { label: "PayPal", icon: <PayPalIcon /> },
];

const PaymentList = () => {
  const [select, setSelect] = useState("");
  return (
    <View>
      <FlatList
        data={paymentMethods}
        keyExtractor={(item) => item.label}
        renderItem={({ item }) => (
          <PaymentMethod
            title={item.label}
            icon={item.icon}
            onPress={() => setSelect(item.label)}
            isSelected={select === item.label}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: s(12), paddingHorizontal: vs(20) }}
      />
    </View>
  );
};
export default PaymentList;
const styles = StyleSheet.create({});
