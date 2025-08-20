import { FlatList, StyleSheet, Text, View } from "react-native";
import { s, vs } from "react-native-size-matters";
import TabsButton from "../components/TabsButton";
import LiveImage from "../components/LiveImage";
import { dummyData } from "../data/data";

const MediateScreen = () => {
  return (
    <View style={{ paddingTop: vs(50), paddingHorizontal: s(17) }}>
      <Text
        style={{
          fontSize: s(20),
          fontWeight: "600",
          marginBottom: vs(6),
        }}
      >
        MediateScreen
      </Text>
      <Text style={{ fontSize: s(16) }}>Lorem Ipsum is simply dummy text</Text>
      <TabsButton />

      <FlatList
        data={dummyData}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <LiveImage imageURL={item.image} date={item.date}/>}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        columnWrapperStyle={{
          marginBottom: vs(16),
          justifyContent: 'space-between',
        }}
        contentContainerStyle={{
          paddingBottom: vs(150),
          paddingTop: s(24),
        }}
      />
    </View>
  );
};
export default MediateScreen;
const styles = StyleSheet.create({});
