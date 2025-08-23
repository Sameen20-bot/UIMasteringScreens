import { StyleSheet, Text, View } from "react-native";
import { s, vs } from "react-native-size-matters";
import BackButton from "../components/BackButton";
import UserImage from "../components/UserImage";
import SocialSection from "../components/SocialSection";
import { Entypo, FontAwesome, FontAwesome6 } from "@expo/vector-icons";

const ContactUsScreen = () => {
  return (
    <View style={{ marginTop: s(50), paddingHorizontal: s(17) }}>
      <View style={styles.container}>
        <BackButton
          icon={<Entypo name="chevron-left" size={s(20)} color="black" />}
        />
        <UserImage />
      </View>
      <Text style={styles.contactTitle}>Contact Us</Text>
      <View style={styles.socialSection}>
        <Text style={styles.socialTitle}>Social Media Platforms</Text>
        <SocialSection
          icon={<FontAwesome name="whatsapp" size={s(27)} color="#178AD9" />}
          title="WhatsApp"
        />
        <SocialSection
          icon={<FontAwesome6 name="xmark" size={27} color="#178AD9" />}
          title="X"
        />
        <SocialSection
          icon={<Entypo name="instagram" size={27} color="#178AD9" />}
          title="Instagram"
        />
        <SocialSection
          icon={<FontAwesome name="snapchat-ghost" size={27} color="#178AD9" />}
          title="Snapchat"
        />
        <SocialSection
          icon={<FontAwesome6 name="tiktok" size={27} color="#178AD9" />}
          title="Tik Tok"
        />
      </View>
    </View>
  );
};

export default ContactUsScreen;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  socialSection: {
    backgroundColor: "#f8f8fb",
    borderRadius: s(10),
    paddingHorizontal: vs(15),
    paddingVertical: s(20),
  },
  socialTitle: {
    fontSize: s(18),
    fontWeight: "600",
  },
  contactTitle: {
    fontSize: s(30),
    fontWeight: "600",
    marginLeft: s(15),
    marginTop: s(30),
    marginBottom: s(20),
  },
});
