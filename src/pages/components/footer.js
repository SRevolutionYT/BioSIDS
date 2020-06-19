import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image, Dimensions, TouchableOpacity} from 'react-native';

import { Entypo, AntDesign} from '@expo/vector-icons'; 


import { useNavigation } from '@react-navigation/native';

const footer = () => {
    
    
    const navigation = useNavigation();
    
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    
    function handleNavigateToOptions(){
        navigation.navigate('Options');
    }
    function handleNavigateToHome(){
        navigation.navigate('Home');
    }
    function handleNavigateToCamera(){
        navigation.navigate('Camera');
    }
    
return(
        
<>
<View style={windowWidth >= 380? styles.footer : styles.footer2 }>

<TouchableOpacity style={styles.btn} activeOpacity={0.4} onPress={handleNavigateToHome}>
  <Entypo style={styles.home} name="home" size={35} color="white"/> 
  <Text style={windowWidth >= 380 ? styles.Newsletter : styles.Newsletter2}>News</Text>
</TouchableOpacity>

<TouchableOpacity style={windowWidth >= 380 ? styles.fcam : styles.fcam2} activeOpacity={0.4} onPress={handleNavigateToCamera}>
  <Entypo style={windowWidth >= 380 ? styles.cam : styles.cam2} name="camera" size={35} color="white" />
 </TouchableOpacity>

 <TouchableOpacity style={styles.btnopt} activeOpacity={0.4} onPress={handleNavigateToOptions}>
  <AntDesign style={styles.opt} name="ellipsis1" size={35} color="white" />
  <Text style={styles.options}>Options</Text>
 </TouchableOpacity>
</View>

<View style={styles.textfooter}>
</View>
</>
);
}

const styles = StyleSheet.create({
    
    footer:{
        flex:0.1,
        flexDirection:'row',
        alignItems: 'center',
        backgroundColor:'#344955',
        
    },
    footer2:{
        flex:0.15,
        flexDirection:'row',
        alignItems: 'center',
        backgroundColor:'#344955',
        
    },
    
    opt:{
        left:'0%',
    },
    cam:{
        // left:'260%',
        //marginTop:'0%',
     marginTop:'20%',

//      shadowColor: "#0000",
// shadowOffset: {
//     width: 20,
//     height: 35,
// },
//     shadowOpacity: 0.97,
//     shadowRadius: 7.65,
//     elevation: 5,


},
cam2:{
    // left:'260%',
     //marginTop:'0%',
     
     marginTop:'23%',
},
home:{
    left:'0%',
},
textfooter:{
    flexDirection:'row',
},
Newsletter:{
    flex:1,
    marginLeft:'8%',
    color:'white',
},
Newsletter2:{
    flex:1,
    marginLeft:'-1%',
    color:'white',
},
options:{
    flex:.25,
    color:'white',
},
fcam:{
    left:'41%',
    position:'absolute',
    alignItems:'center',
    backgroundColor:'green',
    height:70,
    width:70,
    borderRadius:700,
    bottom:'35%',
},
fcam2:{
    left:'39%',
    position:'absolute',
    alignItems:'center',
    backgroundColor:'green',
    height:35,
    width:70,
    borderRadius:700,
    marginBottom:'15%',
    bottom:'-20%',
},
btn:{
    position:'absolute',
    left:'8%',
    alignItems:'center',
    flex:.28,
},
btnopt:{
    position:'absolute',
    right:'8%',
    alignItems:'center',
    flex:.29,
},
})

export default footer; 
