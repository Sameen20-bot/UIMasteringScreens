import { StyleSheet, Text, View } from "react-native";
import { s, vs } from "react-native-size-matters";
import BackButton from "../components/BackButton";
import PaymentList from "../components/PaymentList";
import BankCardBox from "../components/BankCardBox";
import AddButton from "../components/AddButton";
import PayButton from "../components/PayButton";

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
      <View
        style={{
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginVertical: vs(25),
          paddingHorizontal: vs(20),
        }}
      >
        <BankCardBox />
        <AddButton />
      </View>
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: vs(20),
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: s(14), fontWeight: "400", color: "#A0A5BA" }}>
          TOTAL:
        </Text>
        <Text
          style={{
            fontSize: s(30),
            fontWeight: "400",
            color: "#181C2E",
            marginStart: s(10),
          }}
        >
          $96
        </Text>
      </View>
      <View style={{ paddingHorizontal: vs(20) }}>
        <PayButton />
      </View>
    </View>
  );
};
export default PaymentScreen;
const styles = StyleSheet.create({});
