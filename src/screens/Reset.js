import React from "react";
import { SafeAreaView, Text, View,TouchableOpacity,Image } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';


export default function Reset ({navigation}) {
    return (
        <SafeAreaView style={{flex:1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', paddingLeft: 30, paddingRight: 30}}>
             <Image 
            source={require('../images/check.png')}
            />
        <Text style={{fontFamily: 'LondrinaSolid-Regular', fontSize: 16.2, marginBottom: 20}}>Your Password has been sent to your registered email, click the link provided to reset your password</Text>

        <View>
    <TouchableOpacity style={{flexDirection: 'row', gap: 10, marginBottom: 10}}  onPress={() => navigation.navigate('Home')}>
    <Icon
          name="home"
          size={20}
          style={{fontSize: 28,  color: '#036db0', }}
        />
        <Text style={{color: '#036db0', fontFamily: 'Montserrat', marginTop: 7}}>Go Home</Text>
    </TouchableOpacity>
    </View>
        </SafeAreaView>
    )
}