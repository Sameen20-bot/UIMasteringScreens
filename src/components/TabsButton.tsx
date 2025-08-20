import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { s, vs } from "react-native-size-matters";

const ACTIVE_COLOR = "#75563B";
const ACTIVE_TEXT = "#fff";
const INACTIVE_TEXT = "black";

const TabsButton = () => {
  const tabs = ["Live", "Recorded"];
  const [active, setActive] = useState("Live");

  return (
    <View style={styles.container}>
      {tabs.map((tabname, ind) => {
        return (
          <TouchableOpacity key={ind}
            onPress={() => setActive(tabname)}
            style={[
              styles.tabBtn,
              active === tabname && { backgroundColor: ACTIVE_COLOR },
            ]}
          >
            <Text
              style={
                active === tabname ? styles.activeText : styles.inactiveText
              }
            >
              {tabname}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
export default TabsButton;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F5F4",
    flexDirection: "row",
    borderRadius: s(12),
    marginTop: vs(10),
    height: s(40),
    padding: s(4),
  },
  tabBtn: {
    flex: 1,
    height: s(32),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: s(12),
  },
  activeText: {
    fontSize: s(14),
    color: ACTIVE_TEXT,
    fontWeight: "600",
  },
  inactiveText: {
    fontSize: s(14),
    color: INACTIVE_TEXT,
  },
});
