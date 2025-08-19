import { Image, StyleSheet } from "react-native";
import { s } from "react-native-size-matters";

const UserImage = () => {
  return (
    <Image
      source={{
        uri: "https://m.media-amazon.com/images/M/MV5BMzZkOTU2MTMtZWRhZS00Y2JkLWFhNGEtYzFkNzZiZDM1NmUxXkEyXkFqcGdeQWFybm8@._V1_.jpg",
      }}
      style={styles.avatar}
    />
  );
};
export default UserImage;
const styles = StyleSheet.create({
  avatar: {
    height: s(32),
    width: s(32),
    borderRadius: s(16),
  },
});
