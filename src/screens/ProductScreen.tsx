import {
  ScrollView,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import { s, vs } from "react-native-size-matters";
import AntDesign from "@expo/vector-icons/AntDesign";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import BackButton from "../components/BackButton";
import { HandIcon } from "../assets/Icons";
import SalesCard from "../components/SalesCard";
import { Colors } from "react-native/Libraries/NewAppScreen";

const ProductScreen = () => {
  return (
    <View style={{ marginTop: s(50) }}>
      <View style={styles.container}>
        <BackButton
          icon={<EvilIcons name="navicon" size={24} color="black" />}
        />
        <BackButton
          icon={<AntDesign name="search1" size={20} color="black" />}
        />
      </View>
      <View style={{ marginTop: vs(20), paddingHorizontal: s(17) }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={styles.title}>Hello Fola</Text>
          <HandIcon />
        </View>
        <Text style={styles.text}>Let’s start shopping!</Text>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: s(20), paddingHorizontal: s(17) }}
      >
        <SalesCard bgColor={"#F17547"} bg2Color={"white"} color={"#F17547"} />
        <SalesCard bgColor={"#1383F1"} bg2Color={"#50D63B"} color={"white"} />
      </ScrollView>
      <View style={[styles.container, {marginTop: s(25)}]}>
        <Text style={styles.categoryText}>Top Categories</Text>
        <TouchableOpacity>
          <Text style={styles.seeAllText}>See All</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default ProductScreen;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: s(17),
    alignItems: "center",
  },
  title: {
    fontSize: s(24),
    color: "black",
    fontWeight: "600",
    marginEnd: s(5),
  },
  text: {
    color: "#51515180",
    fontSize: s(16),
    fontWeight: "600",
  },
  categoryText: {
    color: "black",
    fontSize: s(20),
    fontWeight: "600",
  },
  seeAllText: {
    color: "#F17547",
    fontWeight: "500",
    fontSize: s(16),
  },
});
