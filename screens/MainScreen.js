import * as WebBrowser from "expo-web-browser";
import React, { useRef, useState, useEffect } from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  View
} from "react-native";

import YoutubePlayer from "react-native-youtube-iframe";
import {
  TapGestureHandler,
  RotationGestureHandler
} from "react-native-gesture-handler";
import {
  FlingGestureHandler,
  Directions,
  State
} from "react-native-gesture-handler";
import { MonoText } from "../components/StyledText";

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

const getVideoData = res => {
  return res.data.children
    .filter(({ data }) => data.media && data.media.type === "youtube.com")
    .map(({ data }) => ({
      length: data.link_flair_text,
      video: data.secure_media_embed.content.split("/embed/")[1].split("?")[0]
    }))[0];
};

export default function HomeScreen() {
  const playerRef = useRef(null);
  const [playing, setPlaying] = useState(true);
  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80
  };

  const onSwipeUp = gestureState => {
    console.log("You swiped up!");

    // this.setState({myText: 'You swiped up!'});
  };

  const onSwipeDown = gestureState => {
    console.log("You swiped down!");
  };

  const onSwipeLeft = gestureState => {
    console.log("You swiped left!");
  };

  const onSwipeRight = gestureState => {
    console.log("You swiped right!");
  };

  //   const onSwipe = (gestureName, gestureState) => {
  //     const { SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT } = swipeDirections;
  //     switch (gestureName) {
  //       case SWIPE_UP:
  //         this.setState({ backgroundColor: "red" });
  //         break;
  //       case SWIPE_DOWN:
  //         this.setState({ backgroundColor: "green" });
  //         break;
  //       case SWIPE_LEFT:
  //         this.setState({ backgroundColor: "blue" });
  //         break;
  //       case SWIPE_RIGHT:
  //         this.setState({ backgroundColor: "yellow" });
  //         break;
  //     }
  //   };
  return (
    <GestureRecognizer
      onSwipe={(direction, state) => {}}
      onSwipeUp={onSwipeUp}
      onSwipeDown={onSwipeDown}
      onSwipeLeft={onSwipeLeft}
      onSwipeRight={onSwipeRight}
      config={config}
      style={{
        flex: 1,
        backgroundColor: this.state.backgroundColor
      }}
    >
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "black"
        }}
      >
        <YoutubePlayer
          ref={playerRef}
          height={Dimensions.get("window").height}
          width={Dimensions.get("window").height * (16 / 9)}
          videoId={"AVAc1gYLZK0"}
          play={playing}
          onChangeState={event => console.log(event)}
          onReady={() => console.log("ready")}
          onError={e => console.log(e)}
          onPlaybackQualityChange={q => console.log(q)}
          volume={50}
          playbackRate={1}
          playerParams={{
            cc_lang_pref: "us",
            preventFullScreen: true,
            showClosedCaptions: true
          }}
        />
      </View>
    </GestureRecognizer>

    // <View style={styles.container}>

    //   <ScrollView
    //     style={styles.container}
    //     contentContainerStyle={styles.contentContainer}
    //   >
    //     <View style={styles.welcomeContainer}>
    //       <Image
    //         source={
    //           __DEV__
    //             ? require("../assets/images/robot-dev.png")
    //             : require("../assets/images/robot-prod.png")
    //         }
    //         style={styles.welcomeImage}
    //       />
    //     </View>

    //     <View style={styles.getStartedContainer}>
    //       <DevelopmentModeNotice />

    //       <Text style={styles.getStartedText}>Get started by opening</Text>

    //       <View
    //         style={[styles.codeHighlightContainer, styles.homeScreenFilename]}
    //       >
    //         <MonoText>screens/HomeScreen.js</MonoText>
    //       </View>

    //       <Text style={styles.getStartedText}>
    //         Change text and your app will automatically reload.
    //       </Text>
    //     </View>

    //     <View style={styles.helpContainer}>
    //       <TouchableOpacity onPress={handleHelpPress} style={styles.helpLink}>
    //         <Text style={styles.helpLinkText}>
    //           Help, it didn’t automatically reload!
    //         </Text>
    //       </TouchableOpacity>
    //     </View>
    //   </ScrollView>

    //   <View style={styles.tabBarInfoContainer}>
    //     <Text style={styles.tabBarInfoText}>
    //       This is a tab bar. You can edit it in:
    //     </Text>

    //     <View
    //       style={[styles.codeHighlightContainer, styles.navigationFilename]}
    //     >
    //       <MonoText style={styles.codeHighlightText}>
    //         navigation/MainTabNavigator.js
    //       </MonoText>
    //     </View>
    //   </View>
    // </View>
  );
}

HomeScreen.navigationOptions = {
  layout: {
    orientation: ["portrait"]
  },
  header: null
};

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use
        useful development tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync(
    "https://docs.expo.io/versions/latest/workflow/development-mode/"
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    "https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes"
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  developmentModeText: {
    marginBottom: 20,
    color: "rgba(0,0,0,0.4)",
    fontSize: 14,
    lineHeight: 19,
    textAlign: "center"
  },
  contentContainer: {
    paddingTop: 30
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: "contain",
    marginTop: 3,
    marginLeft: -10
  },
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50
  },
  homeScreenFilename: {
    marginVertical: 7
  },
  codeHighlightText: {
    color: "rgba(96,100,109, 0.8)"
  },
  codeHighlightContainer: {
    backgroundColor: "rgba(0,0,0,0.05)",
    borderRadius: 3,
    paddingHorizontal: 4
  },
  getStartedText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center"
  },
  tabBarInfoContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 20
      }
    }),
    alignItems: "center",
    backgroundColor: "#fbfbfb",
    paddingVertical: 20
  },
  tabBarInfoText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    textAlign: "center"
  },
  navigationFilename: {
    marginTop: 5
  },
  helpContainer: {
    marginTop: 15,
    alignItems: "center"
  },
  helpLink: {
    paddingVertical: 15
  },
  helpLinkText: {
    fontSize: 14,
    color: "#2e78b7"
  }
});
