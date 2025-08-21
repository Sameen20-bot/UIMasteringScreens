import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { s, vs } from "react-native-size-matters";
import AntDesign from "@expo/vector-icons/AntDesign";

const AddButton = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <AntDesign name="plus" size={24} color="#FF7622" />
        <Text
          style={{
            color: "#FF7622",
            fontSize: s(14),
            fontWeight: "700",
            marginStart: s(6),
          }}
        >
          ADD NEW
        </Text>
      </View>
    </TouchableOpacity>
  );
};
export default AddButton;
const styles = StyleSheet.create({
  container: {
    width: s(327),
    height: vs(62),
    borderRadius: s(16),
    borderWidth: 2,
    borderColor: "#f7f8f9",
    marginTop: vs(10),
    alignItems: "center",
    justifyContent: "center",
  },
});
