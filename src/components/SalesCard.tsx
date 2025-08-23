import { FC } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { s, vs } from "react-native-size-matters";

interface SalesCardTypes {
  bgColor: string;
  bg2Color: string;
  color: string,
}

const SalesCard: FC<SalesCardTypes> = ({ bgColor, bg2Color, color }) => {
  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <Text
        style={{
          color: "white",
          fontSize: s(18),
          fontWeight: "700",
          textAlign: "justify",
          width: s(181),
        }}
      >
        20% OFF DURING THE WEEKEND
      </Text>
      <TouchableOpacity style={[styles.btn, { backgroundColor: bg2Color, }]}>
        <Text style={{fontSize: s(12), fontWeight: "700" ,color: color }}>
          Get Now
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default SalesCard;
const styles = StyleSheet.create({
  container: {
    width: s(285),
    height: s(130),
    borderRadius: s(16),
    paddingTop: s(24),
    paddingHorizontal: vs(19),
    marginTop: s(20),
  },
  btn: {
    backgroundColor: "white",
    width: s(80),
    height: s(34),
    borderRadius: s(18),
    alignItems: "center",
    justifyContent: "center",
    marginTop: s(10),
  },
});
