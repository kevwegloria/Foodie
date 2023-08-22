import React from "react";
import { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, useWindowDimensions } from "react-native";



export default function OnboardingItem ({item}) {
    const { width } = useWindowDimensions();

   
    
  
  return (
    <View style={[StyleSheet.container, {width}]}>
        <Image source={item.image} style={[styles.image, {width, resizeMode: 'cover'}]}  />

        <View style={{flex:0.3}}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description }</Text>
        </View>
    </View>
)

   
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
        
        
    

    },
    image: {
         flex: 0.7,
         justifyContent: 'center',
    marginTop: 30,
    

         
    },
    title: {
        fontWeight: '800',
        fontSize: 20,
        marginBottom: 10,
        marginTop:20,
        color: '#ffa914',
        textAlign: 'center',
        fontFamily: 'LondrinaSolid-Regular',

    },
    description: {
        fontWeight: '500',
        color: 'white',
        textAlign: 'center',
        paddingHorizontal:35,
        fontFamily: 'LondrinaSolid-Regular',
        fontSize: 28,
        marginBottom:30
    }
})