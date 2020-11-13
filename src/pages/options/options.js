import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  Dimensions,
  TouchableOpacity,
  Switch,
  ImageBackground,
  Linking,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

import Footer from "../components/footer";
import Miniheader from "../components/miniheader";

import Dark from "../../varD";
import { Separator } from "native-base";

const Home = () => {
  const navigation = useNavigation();

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
    Dark(isEnabled);
  };

  function handleComposeFace() {
    Linking.openURL(`facebook://`);
  }

  return (
    <>
      <Miniheader />
      <View style={isEnabled ? styles.bodyD : styles.body}>
        <View style={styles.options}>
          <Text style={isEnabled ? styles.optionstextD : styles.optionstext}>
            Modo Noturno
          </Text>
          <Switch
            trackColor={{ false: "#767577", true: "#FFF" }}
            thumbColor={isEnabled ? "#AFAFAF" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={Dark}
            style={styles.optionsswitch}
          />
        </View>
        <View style={isEnabled ? styles.redesociaisD : styles.redesociais}>
          <TouchableOpacity onPress={handleComposeFace}>
            <ImageBackground
              style={styles.imgrede}
              source={require("../../images/Circle.png")}
            >
              <Image source={require("../../images/face.png")} />
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity>
            <ImageBackground
              style={styles.imgrede}
              source={require("../../images/Circle.png")}
            >
              <Image source={require("../../images/insta.png")} />
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity>
            <ImageBackground
              style={styles.imgrede}
              source={require("../../images/Circle.png")}
            >
              <Image source={require("../../images/email.png")} />
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity>
            <ImageBackground
              style={styles.imgrede}
              source={require("../../images/Circle.png")}
            >
              <Image source={require("../../images/twiter.png")} />
            </ImageBackground>
          </TouchableOpacity>
        </View>
      </View>
      <Footer />
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 0.15,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },

  body: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#DBDBDB",
  },
  bodyD: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#313131",
  },
  text: {
    paddingTop: "15%",
  },
  textbody: {
    paddingTop: "50%",
  },
  textheader: {
    alignItems: "center",
    flex: 1,
    fontSize: 90,
    color: "#31B800",
    display: "flex",
    fontFamily: "Ubuntu_700Bold",
    marginTop: "5%",
  },
  headerimg: {
    paddingLeft: "20%",
    alignItems: "center",
    flex: 0.2,
    display: "flex",
    marginTop: "5%",
  },
  options: {
    flexDirection: "row",
  },
  optionstext: {
    fontFamily: "Ubuntu_700Bold",
    color: "#000",
    fontSize: 20,
    top: 20,
    right: 80,
  },
  optionstextD: {
    fontFamily: "Ubuntu_700Bold",
    color: "#FFF",
    fontSize: 20,
    top: 20,
    right: 80,
  },
  optionsswitch: {
    top: 20,
    left: 60,
  },
  redesociais: {
    flex: 0.1,
    top: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#C0c0c0c0",
    borderWidth: 1,
    width: 400,
    backgroundColor: "#DBDBDB",
  },
  redesociaisD: {
    flex: 0.1,
    top: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#C0c0c0c0",
    borderWidth: 1,
    width: 400,
    backgroundColor: "#313131",
  },
  imgrede: {
    marginLeft: 4,
    marginRight: 4,
    width: 40,
    height: 40,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
