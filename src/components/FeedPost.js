import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { Entypo } from "@expo/vector-icons";
import {
  AntDesign,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import like from "../../assets/images/like.png";
import { useNavigation } from "@react-navigation/native";

const FeedPost = ({ post }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.post}>
      <Pressable
        onPress={() => navigation.navigate("Profile", { id: post.User.id })}
      >
        <View style={styles.header}>
          <Image
            source={{ uri: post.User.image }}
            style={styles.profileImage}
          />

          <View>
            <Text style={styles.name}>{post.User.name}</Text>
            <Text style={styles.subtitle}>{post.createdAt}</Text>
          </View>
          <Entypo
            name="dots-three-horizontal"
            size={18}
            color="gray"
            style={styles.icon}
          />
        </View>
      </Pressable>

      {post.description && (
        <Text style={styles.description}>{post.description}</Text>
      )}
      {post.image && (
        <Image source={{ uri: post.image }} style={styles.image} />
      )}

      <View style={styles.footer}>
        <View style={styles.statsRow}>
          <Image source={like} style={styles.likeIcon} />
          <Text style={styles.likedBy}>
            Elon Musk and {post.numberOfLikes} others
          </Text>
          <Text style={styles.shares}>{post.numberOfShares} shares</Text>
        </View>

        <View style={styles.buttonsRow}>
          <View style={styles.iconButton}>
            <AntDesign name="like2" size={18} color="gray" />
            <Text style={styles.iconButttonText}>Like</Text>
          </View>
          <View style={styles.iconButton}>
            <FontAwesome5 name="comment-alt" size={18} color="gray" />
            <Text style={styles.iconButttonText}>Comment</Text>
          </View>
          <View style={styles.iconButton}>
            <MaterialCommunityIcons
              name="share-outline"
              size={18}
              color="gray"
            />
            <Text style={styles.iconButttonText}>Share</Text>
          </View>
        </View>
      </View>
      <View style={styles.border}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  post: {
    width: "100%",
    margrinVertical: 10,
    backgroundColor: "white",
  },
  header: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  press: {},
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  name: {
    fontWeight: "500",
  },
  subtitle: {
    color: "gray",
  },
  icon: {
    marginLeft: "auto",
  },
  description: {
    paddingHorizontal: 10,
    lineHeight: 20,
    letterSpacing: 0.3,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
    marginTop: 10,
  },
  footer: {
    paddingHorizontal: 10,
  },
  likeIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  statsRow: {
    flexDirection: "row",
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingVertical: 10,
    borderColor: "lightgray",
  },
  shares: {
    marginLeft: "auto",
    color: "gray",
  },
  likedBy: {
    color: "gray",
  },
  buttonsRow: {
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  border: {
    height: 7,
    width: "100%",
    backgroundColor: "lightgray",
  },
  iconButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconButttonText: {
    marginLeft: 5,
    color: "gray",
    fontWeight: "500",
  },
});
export default FeedPost;
