import { StyleSheet, Text, View } from "react-native";
import { s, vs } from "react-native-size-matters";
import BackButton from "../components/BackButton";
import PaymentList from "../components/PaymentList";

const PaymentScreen = () => {
  return (
    <View style={{ paddingTop: vs(50) }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginBottom: vs(10),
          paddingHorizontal: vs(20),
        }}
      >
        <BackButton />
        <Text
          style={{ marginStart: s(15), fontSize: s(17), fontWeight: "400" }}
        >
          Payment
        </Text>
      </View>
      <PaymentList />
    </View>
  );
};
export default PaymentScreen;
const styles = StyleSheet.create({});
