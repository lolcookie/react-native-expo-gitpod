import React, { useRef, useState, useEffect, Component } from "react";
import {
  Animated,
  Dimensions,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity
} from "react-native";
import {
  PanGestureHandler,
  Directions,
  State
} from "react-native-gesture-handler";
import YoutubePlayer from "react-native-youtube-iframe";

const colors = {
  primary: "#b19cd9"
};

const windowWidth = Dimensions.get("window").width;
const circleRadius = 30;

// const getVideoData = res => {
//   return R.map(R.map(R.prop('video')), R.groupBy(R.prop('length'), res.data.children
//     .filter(({ data }) => data.media && data.media.type === "youtube.com")
//     .map(({ data }) => ({
//       length: data.link_flair_text,
//       video: data.secure_media_embed.content.split("/embed/")[1].split("?")[0]
//     }))))

// };

const Home = ({ navigation }) => {
  const timeOptions = [
    "10-15 Minutes",
    "5-7 Minutes",
    "7-10 Minutes",
    "30 Minutes Plus",
    "15-30 Minutes"
  ];

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        backgroundColor: "black",
        height: Dimensions.get("window").height,
        width: Dimensions.get("window").width
      }}
    >
      <Text style={{ fontSize: 24, margin: 16, color: "white" }}>
        Select a time that suits you, swipe up to change video
      </Text>
      <View
        style={{
          flex: 1,
          flexWrap: "wrap",
          padding: 16,
          maxWidth: 700,
          backgroundColor: "black"
        }}
      >
        {timeOptions.map(t => (
          <TouchableOpacity
            key={t}
            style={{
              margin: 16,
              backgroundColor: colors.primary,
              boxShadow: "10px 5px 5px black",
              borderRadius: 4,
              paddingHorizontal: 10,
              paddingVertical: 10,
              alignItems: "center"
            }}
            onPress={() => {
              navigation.navigate("Video", { selectedTime: t });
            }}
            accessibilityLabel={`Search for ${t} videos`}
          >
            <Text style={{ color: "#1A1A1B", fontSize: 36 }}>{t}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  horizontalPan: {
    backgroundColor: "#f76f41",
    height: 300,
    justifyContent: "center",
    marginVertical: 10
  },
  circle: {
    backgroundColor: "#42a5f5",
    borderRadius: circleRadius,
    height: circleRadius * 2,
    width: circleRadius * 2
  }
});
