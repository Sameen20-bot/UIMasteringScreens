import { FlatList, StyleSheet, Text, View } from "react-native";
import { Watch1, Watch2, Watch3, Watch4 } from "../assets/Icons";
import { s, vs } from "react-native-size-matters";
import ProductCard from "./ProductCard";

const ProductCardList = () => {
  const products = [
    { label: "Redmi Note 4", icon: <Watch1 /> },
    { label: "Apple Watch - series 6", icon: <Watch2 /> },
    { label: "Redmi Note 6", icon: <Watch3 /> },
    { label: "Apple Watch - series 4", icon: <Watch4 /> },
  ];
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.label}
        renderItem={({ item }) => (
          <ProductCard title={item.label} icon={item.icon} />
        )}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={{
          marginBottom: vs(16),
          justifyContent: "space-between",
        }}
        contentContainerStyle={{
          paddingBottom: vs(20), 
          paddingTop: s(24),
        }}
      />
    </View>
  );
};
export default ProductCardList;
const styles = StyleSheet.create({});
