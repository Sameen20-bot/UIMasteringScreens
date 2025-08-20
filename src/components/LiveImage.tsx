import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { s, vs } from "react-native-size-matters";
import { CameraIcon } from "../assets/Icons";

const PhoneWidth = Dimensions.get("window").width;
const CardWidth = (PhoneWidth - s(16) * 3) / 2;

interface MediationCardProps {
  imageURL: String;
  date: String;
}

const LiveImage: FC<MediationCardProps> = ({ imageURL, date }) => {
  return (
    <ImageBackground
      source={{
        uri: imageURL,
      }}
      style={styles.imageContainer}
      imageStyle={styles.image}
    >
      <View style={styles.overlay} />
      <View style={styles.live}>
        <Text style={{ color: "white", fontSize: s(12), fontWeight: "600" }}>
          Live
        </Text>
      </View>
      <Text style={styles.title}>Meditations</Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          position: "absolute",
          left: s(10),
          bottom: s(6),
        }}
      >
        <CameraIcon />
        <Text style={styles.text}>{date}</Text>
      </View>
    </ImageBackground>
  );
};
export default LiveImage;
const styles = StyleSheet.create({
  imageContainer: {
    width: CardWidth,
    height: vs(140),
    borderRadius: s(15),
    overflow: "hidden",
  },
  image: {
    height: "100%",
    width: "100%",
    opacity: 0.7,
    resizeMode: "cover",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.45)",
  },
  title: {
    position: "absolute",
    bottom: s(23),
    left: s(10),
    color: "white",
    fontSize: s(14),
    fontWeight: "600",
  },
  text: {
    color: "white",
    fontSize: s(12),
    marginLeft: s(10),
  },
  live: {
    backgroundColor: "#E41111",
    height: vs(22),
    width: s(39),
    borderRadius: s(10),
    position: "absolute",
    top: s(6),
    right: s(8),
    alignItems: "center",
    justifyContent: "center",
  },
});
