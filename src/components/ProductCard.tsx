import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { s, vs } from "react-native-size-matters";
import { Heart, Lines, Lines1, Watch1 } from "../assets/Icons";
import { FC } from "react";

const PhoneWidth = Dimensions.get("window").width;
const CardWidth = (PhoneWidth - s(16) * 3) / 2;

interface CardTypes {
  title: string;
  icon: any;
}


const ProductCard: FC<CardTypes> = ({ title, icon }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginHorizontal: s(10),
        }}
      >
        <View style={styles.discount}>
          <Text style={styles.tagOffer}>50% OFF</Text>
        </View>
        <TouchableOpacity>
          <Heart />
        </TouchableOpacity>
      </View>
      <View style={{ alignSelf: "center" }}>{icon}</View>
      <View>
        <Text style={styles.text}>{title}</Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: s(10),
            paddingHorizontal: s(7),
          }}
        >
          <Lines />
          <Text style={styles.price}>45,000</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: s(10),
            paddingHorizontal: s(7),
          }}
        >
          <Lines1 />
          <Text style={styles.price1}>45,000</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default ProductCard;
const styles = StyleSheet.create({
  container: {
    width: CardWidth,
    height: s(210),
    borderRadius: s(16),
    backgroundColor: "#F8F8F8",
    justifyContent: "center",
    marginTop: s(30),
  },
  discount: {
    backgroundColor: "white",
    width: s(60),
    height: s(20),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: s(16),
  },
  tagOffer: {
    fontWeight: "600",
    fontSize: s(12),
  },
  text: {
    color: "black",
    fontSize: s(16),
    fontWeight: "500",
    paddingHorizontal: s(7),
    marginTop: s(10),
  },
  priceTag: {
    textDecorationStyle: "double",
    textDecorationLine: "line-through",
    fontSize: s(20),
  },
  price: {
    fontSize: s(14),
    fontWeight: "700",
  },
  price1: {
    fontSize: s(12),
    fontWeight: "700",
    color: "#AFAFAF",
  },
});
