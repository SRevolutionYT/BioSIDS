import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image, Dimensions, TouchableOpacity} from 'react-native';

import { Entypo } from '@expo/vector-icons'; 

const miniheader = () => {
    return(
        <>
        <View style={styles.miniheader}>
            <Entypo name="leaf" size={25} color="white" />
            <Text style={styles.font}>BioSid's</Text>
        </View>
        </>
    );
    
};
    const styles = StyleSheet.create({
        miniheader:{
            alignItems:'center',
            paddingTop:'5%',
            flex:.06,
            flexDirection:'row',
            backgroundColor:"#38A013",
        },
        font:{
           flex:1,
           color:'white',
           fontSize:20,
        },
    });


export default miniheader;