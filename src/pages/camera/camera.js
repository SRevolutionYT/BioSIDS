import React, { useState, useEffect, useRef } from 'react';
import { Text, View, TouchableOpacity, StyleSheet,Alert } from 'react-native';
import { Camera } from 'expo-camera';

import { useNavigation } from '@react-navigation/native';
import Axios from "axios";

import { MaterialCommunityIcons,Entypo } from '@expo/vector-icons';

import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";


export default function App() {
  const [imageUri, setImageUri] = useState(null);
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [CameraRef, setCameraRef] = useState();
  
  const navigation = useNavigation();

  async function imagePickerCall() {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== "granted") {
        Alert("Nós precisamos dessa permissão.");
        return;
      }
    }
    const data = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All
    });

    if (data.cancelled) {
      return;
    }

    if (!data.uri) {
      return;
    }
  }

    function handleNavigateToHome(){
    navigation.navigate('Home');
}


  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    imageUri ?
    <ImageBackground style={styles.preview} source={{ uri: imageUri }}>
    </ImageBackground>
    :
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} type={type} ref={ref => setCameraRef(ref)}>
          <TouchableOpacity style={{ 
              flex:1,
              alignItems:"center",
              alignSelf:'flex',
              top:'3%',
            }} 
            onPress={handleNavigateToHome}>
              <MaterialCommunityIcons name="arrow-left" size={45} color="white" />
          </TouchableOpacity>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            backgroundColor: 'transparent',
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            style={{
              flex: 0.2,
              alignSelf: 'flex-end',
              alignItems: 'center',
            }}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
              <MaterialCommunityIcons name="camera-retake" size={50} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={{
            flex: 0.2,
            alignSelf: 'flex-end',
            alignItems: 'center',
            bottom:'-1%',
            left:'24%',         
          }} onPress={async() => {
            if(CameraRef){
              let photo = await CameraRef.takePictureAsync();
              console.log('photo', photo);
            }
          }}
          >
            <MaterialCommunityIcons name="camera" size={50} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={{
            flex: 0.2,
            alignSelf: 'flex-end',
            alignItems: 'center',
            bottom:'-1%',
            left:'44%',         
          }} onPress={imagePickerCall}>
            <Entypo name="images" size={50} color="white" />
          </TouchableOpacity>    
        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
    footcam:{
      flexDirection:'row',
    },
    preview: {
      width: "100%",
      height: "100%",
      flex: 1,
    },
  });
 
