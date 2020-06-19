import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image, Dimensions, TouchableOpacity, SafeAreaView} from 'react-native';
import { Entypo } from '@expo/vector-icons'; 

import Footer from '../components/footer';

const Home = () => {

      const windowWidth = Dimensions.get('window').width;
      const windowHeight = Dimensions.get('window').height;


 return(
     <>
    <View style={styles.header}>        
        <Entypo style={styles.headerimg} name="leaf" size={35} color="green" />
        <Text style={styles.textheader}>BioSid's</Text> 
    </View>

    <View style={styles.body}>
    </View>

    <Footer />
    </>
);
};

const styles = StyleSheet.create({
    header:{
        flex:0.15,
        flexDirection:'row',
        alignItems: 'center',
        backgroundColor:'#FFFFFF',
    },
    
    body:{
        flex:1,
        alignItems: 'center',
        backgroundColor:'#DBDBDB',
    },
    text:{
        paddingTop:'15%',
    },
    textbody:{
        paddingTop:'50%',
    },
    textheader:{
        alignItems:'center',
        flex:1,
        fontSize:40,
        color:'#31B800',
        display:'flex',
        fontFamily: 'Ubuntu_700Bold',
        marginTop:'5%',
    },
    headerimg:{
        paddingLeft:'20%',
        alignItems:'center',
        flex:0.20,
        display: 'flex',
        marginTop:'5%',
    },
});

export default Home;