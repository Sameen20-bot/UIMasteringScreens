import { FlatList, StyleSheet, Text, View } from "react-native";
import {
  BagIcon,
  ClothIcon,
  GlassesIcon,
  ShoeIcon,
  WatchIcon,
} from "../assets/Icons";
import { s, vs } from "react-native-size-matters";
import { useState } from "react";
import SmallCard from "./SmallCard";

const cardMethods = [
  { id: "1", icon: <WatchIcon /> },
  { id: "2", icon: <ClothIcon /> },
  { id: "3", icon: <BagIcon /> },
  { id: "4", icon: <ShoeIcon /> },
  { id: "5", icon: <GlassesIcon /> },
];

const SmallCardList = () => {
  const [select, setSelect] = useState("");
  return (
    <View>
      <FlatList
        data={cardMethods}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <SmallCard
            icon={item.icon}
            onPress={() => setSelect(item.id)}
            isSelected={select === item.id}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: s(12), paddingHorizontal: vs(20) }}
      />
    </View>
  );
};
export default SmallCardList;
const styles = StyleSheet.create({});
