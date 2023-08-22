import React from "react";
import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native";
import { View, Image, Text } from "react-native";

export default function Checkout ({navigation}) {
    return (
        <SafeAreaView style={{flex:1, marginTop: 60, justifyContent: 'center', alignItems: 'center'}}>
             <Image 
            source={require('../images/check.png')}
            style={{height: 400, width: 400}}
            />
            <Text style={{fontFamily:'Montserrat', fontWeight: 'bold', fontSize:18}}>Order Confirmed</Text>
        <Text style={{fontFamily: 'LondrinaSolid-Regular', fontSize: 16.2, marginBottom: 20}}>Thank you for your purchase!</Text>
        <TouchableOpacity style={{padding: 10, backgroundColor: '#036db0', }} onPress={() => navigation.navigate('Main')}>
            <Text style={{color: 'white', fontFamily:'LondrinaSolid-Regular'}}>Continue Shopping</Text>
        </TouchableOpacity>

        </SafeAreaView>
    )
}