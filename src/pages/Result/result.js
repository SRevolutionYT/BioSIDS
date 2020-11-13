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
  ScrollView,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import { useBackButton, useNavigation } from "@react-navigation/native";

import Footer from "../components/footer";
import Miniheader from "../components/miniheader";

import { Row, Separator } from "native-base";

const Result = () => {
  const navigation = useNavigation();

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
    Dark(isEnabled);
  };

  function handleNavigateToCamera() {
    navigation.navigate("Camera");
  }

  return (
    <>
      <TouchableOpacity>
        <Image
          style={styles.image}
          source={require("../../../assets/result.jpg")}
        ></Image>
      </TouchableOpacity>

      <Text style={styles.textbody}>Os nutrientes que estão em falta são:</Text>
      <Separator bordered style={styles.separator}>
        <View style={styles.viewtext}>
          <TouchableOpacity style={styles.circleimg}>
            <Image source="../../../images/Circle.png"></Image>
          </TouchableOpacity>
          <Text>Potássio</Text>
        </View>
      </Separator>
      <Separator bordered style={styles.separator2}>
        <View style={styles.text2}>
          <ScrollView>
            <Text>{`
                                        PRONTO ✅
    
    Por meio do mapeamento do lixo orgânico da sua localização (Brasil), encontramos o adubo ideal para sua planta e viável para você. Ele consiste em:
    
    Borra ou casca de café 
    Casca de ovo
    Cinza de madeira 
    Rocha fosfática
    Casca de banana
    Bagaço de cana 
    
    Todas as fontes alternativas foram testadas e podem ser utilizadas como adubação potássica complementar em sistemas orgânicos de produção.
    
    Lembrando que não existe uma proporção entre os elementos. Use-os de acordo com a sua disponibilidade de encontrá-los.
    
    Você estará fazendo um grande serviço para o meio ambiente retirando esses produtos dos lixos. 👏🏽
    
    Agora é com você! 
    
    Toda a equipe BioSIDs espera que sua planta se recupere. 🌱🍃
    
    Para saber mais, acesse “FONTES ALTERNATIVAS DE POTÁSSIO EM AGRICULTURA ORGÂNICA”
          `}</Text>
          </ScrollView>
        </View>
      </Separator>

      <TouchableOpacity style={styles.button}>
        <Ionicons
          name="md-arrow-back"
          style={styles.icon}
          size={45}
          color="white"
          onPress={handleNavigateToCamera}
        />
      </TouchableOpacity>
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
    bottom: "15%",
    fontFamily: "Ubuntu_700Bold",
    fontSize: 17,
  },
  image: {
    width: "70%",
    left: "15%",
    height: "50%",
    top: "11%",
    borderRadius: 20,
  },
  circleimg: {
    marginTop: 5,
    borderWidth: 1,
    height: 10,
    width: 10,
    borderRadius: 60,
    borderColor: "gray",
  },
  separator: {
    flexDirection: "row",
    alignContent: "flex-start",
    bottom: "25%",
    flex: 0.06,
  },
  separator2: {
    flexDirection: "row",
    alignContent: "flex-start",
    bottom: "25%",
    flex: 1,
    marginTop: 10,
  },
  viewtext: {
    display: "flex",
    flexDirection: "row",
    right: "43%",
  },
  viewtext2: {
    display: "flex",
    flexDirection: "row",
    right: "43%",
    top: 12,
  },
  button: {
    backgroundColor: "#38A013",
    flex: 0.2,
    left: "2%",
    bottom: "1%",
    width: "13%",
    borderRadius: 15,
  },
  icon: { alignSelf: "center", paddingTop: "5%" },
});

export default Result;
