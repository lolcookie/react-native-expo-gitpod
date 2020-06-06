import React, { useRef, useState, useEffect, Component } from "react";
import { Animated, Dimensions, StyleSheet, Text, View } from "react-native";
import {
  FlingGestureHandler,
  Directions,
  State
} from "react-native-gesture-handler";
import YoutubePlayer from "react-native-youtube-iframe";

const windowWidth = Dimensions.get("window").width;
const circleRadius = 30;
const videoIds = [
  "zaD84DTGULo",
  "yMiO6fxrEE4",
  "uY9Yf26J4ZM",
  "MepXqkG5ES0",
  "7o9h0jZ9Ucc",
  "pmtPq6j7MRc",
  "_xmo533A8Q8",
  "3oPBtjGlIps",
  "TJTx9fPRIUU",
  "bsMUKJYlFRE",
  "Z36OznHFIt4",
  "jkN743vlfgU",
  "lUPGljku_kE",
  "-fjmCk72ojU",
  "5Cjd18b4JQ4",
  "A5YyTHyaNpo",
  "Gu4e61CwLaE",
  "X6NJkWbM1xk",
  "mqE319uNRV0",
  "yZ63Dy6uHGc",
  "jwFzThL9ULE",
  "oTE6G5MJw78",
  "hqxQRmPOMoY"
];

const videoWithTime = {
  "10-15 Minutes": [
    "hzsuYrptwKk",
    "H6sOTBtcCcA",
    "F3Kb9U6qFBA",
    "oJW1aJDE-As",
    "ZzaUGhhnlQ8",
    "-faJzihFlXY",
    "HpJGCrOR-RY",
    "fY4glPsOCjA",
    "fUJlZUCKPtA",
    "--BYw35AnPU"
  ],
  "5-7 Minutes": ["b3adCMeGssg", "pN7teddPymo"],
  "7-10 Minutes": [
    "4n-X2Dj01AE",
    "RYbe-35_BaA",
    "3L2513JFJsY",
    "8zv8kvqWLYM",
    "HUHk5qK01-U",
    "rMM_FUi1qhE",
    "Rlw3KijUSmM"
  ],
  "30 Minutes Plus": ["v7zlZJYTkws"],
  "15-30 Minutes": [
    "EhnLJwmEy_k",
    "Tj5Bgn065aY",
    "pEVoX-RwMJw",
    "PQejcZc4uFM",
    "O_6G9gab_f4"
  ]
};

// const getVideoData = res => {
//   return R.map(R.map(R.prop('video')), R.groupBy(R.prop('length'), res.data.children
//     .filter(({ data }) => data.media && data.media.type === "youtube.com")
//     .map(({ data }) => ({
//       length: data.link_flair_text,
//       video: data.secure_media_embed.content.split("/embed/")[1].split("?")[0]
//     }))))

// };

const Fling = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isUpdating, setIsUpdating] = useState(true);
  const playerRef = useRef(null);
  const [selectedTime, setSelectedTime] = useState("");

  const [playing, setPlaying] = useState(true);
  //   constructor(props) {
  //     super(props);
  //     this._touchX = new Animated.Value(windowWidth / 2 - circleRadius);
  //     this._translateX = Animated.add(
  //       this._touchX,
  //       new Animated.Value(-circleRadius)
  //     );
  //     this._translateY = new Animated.Value(0);
  //   }

  const nextVideo = () => {
    setIsUpdating(true);
    setPlaying(false);
    console.log(isUpdating);
    console.log(currentVideoIndex);

    if (!isUpdating) {
      setCurrentVideoIndex(currentVideoIndex + 1);
      console.log(currentVideoIndex);
    }
    // if (nativeEvent.oldState === State.ACTIVE) {
    //   Animated.spring(this._touchX, {
    //     toValue: this._touchX._value + offset,
    //     useNativeDriver: false
    //   }).start();
    // }
  };

  const _onVerticalFlingHandlerStateChange = ({ nativeEvent }) => {
      nextVideo()
    console.log("vertical");
    console.log(nativeEvent.absoluteY)
    // if (nativeEvent.oldState === State.ACTIVE) {
    //   Animated.spring(this._translateY, {
    //     toValue: this._translateY._value + 10,
    //     useNativeDriver: false
    //   }).start();
    // }
  };

  //    selectedTime === "" ? (
  //     <View>
  //       <Text style={styles.title}>
  //         The title and onPress handler are required. It is recommended to set
  //         accessibilityLabel to help make your app usable by everyone.
  //       </Text>
  //       <Button
  //         onPress={onPressLearnMore}
  //         title="Learn More"
  //         color="#841584"
  //         accessibilityLabel="Learn more about this purple button"
  //       />
  //       <Button
  //         onPress={onPressLearnMore}
  //         title="Learn More"
  //         color="#841584"
  //         accessibilityLabel="Learn more about this purple button"
  //       />
  //       <Button
  //         onPress={onPressLearnMore}
  //         title="Learn More"
  //         color="#841584"
  //         accessibilityLabel="Learn more about this purple button"
  //       />
  //       <Button
  //         onPress={onPressLearnMore}
  //         title="Learn More"
  //         color="#841584"
  //         accessibilityLabel="Learn more about this purple button"
  //       />
  //       <Button
  //         onPress={onPressLearnMore}
  //         title="Learn More"
  //         color="#841584"
  //         accessibilityLabel="Learn more about this purple button"
  //       />
  //     </View>
  //   ) :
  return (
    <FlingGestureHandler
      direction={Directions.UP}
      onHandlerStateChange={_onVerticalFlingHandlerStateChange}
    >
      <Animated.View
        style={[
          {
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "black"
            //   transform: [
            //     {
            //       translateX: this._translateX
            //     },
            //     {
            //       translateY: this._translateY
            //     }
            //   ]
          }
        ]}
      >
        <YoutubePlayer
          ref={playerRef}
          height={Dimensions.get("window").height}
          width={Dimensions.get("window").height * (16 / 9)}
          videoId={videoIds[currentVideoIndex]}
          play={playing}
          onChangeState={event => {
              console.log(event)
            if (event === "playing") {
              setIsUpdating(false);
            }
            if (event === "unstarted") {
              setPlaying(true);
            }

          }}
          forceAndroidAutoplay
          onReady={() => {
              setPlaying(true)
          }}
          onError={e => console.log(e)}
          onPlaybackQualityChange={q => console.log(q)}
          volume={50}
          playbackRate={1}
          playerParams={{
            autoplay: 1,
            cc_lang_pref: "us",
            preventFullScreen: true,
            showClosedCaptions: true
          }}
        />
      </Animated.View>
    </FlingGestureHandler>
  );
};

export default class Example extends Component {
  render() {
    return <Fling />;
  }
}

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
