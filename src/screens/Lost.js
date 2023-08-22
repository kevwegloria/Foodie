import React from "react";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { SafeAreaView, View, Text, StyleSheet, TextInput, Image } from "react-native";

export default function Lost ({navigation}) {
    const [email, setEmail] = useState('');

    const handleEmailChange = (text) => {
        setEmail(text);
      };
    
   return (
    <SafeAreaView style={styles.container}>
    <View >
    <Image 
           source={require('../images/register.jpg')}
           style={styles.image}/>
           
      <View style={styles.user}>
      <Text style={styles.lost}>Lost Your Password?</Text>
        <Text style={styles.long}> Please enter your username or email address. You will receive a link to create a new password via email.</Text>
      </View>
        <View style={styles.main}>
            <Text style={styles.username}>Email</Text>
           
            <TextInput
       style={styles.input}
       placeholder="Email"
       value={email}
       onChangeText={handleEmailChange}
       keyboardType="email-address"
     />


          <TouchableOpacity>
          <Text style={styles.submit} onPress={() => navigation.navigate('Reset')}>Reset Password</Text>
          </TouchableOpacity>
        </View>
    </View>
</SafeAreaView>
   )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
       paddingTop: 60
        
        
    },
    image: {
        marginBottom: 30
    },
    user: {
        alignItems: 'center',
        justifyContent: 'center'
    },

    lost: {
        fontSize: 25,
        fontWeight:'700',
        marginBottom: 10,
        fontFamily: 'Montserrat'


    },

    long: {
        width: 340,
        fontSize: 16,
        marginBottom: 20,
        fontFamily: 'Montserrat'
       
    },

    username: {
     fontSize: 17,
     marginBottom: 10,
     fontWeight: '600',
     fontFamily: 'Montserrat'
    },

    main: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        width: '90%',
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingLeft: 10,
        borderRadius:30,
        fontFamily: 'Montserrat'
      },
      submit: {
    
    
        backgroundColor: '#036aad',
        color: 'white',
        paddingLeft: 100,
        paddingRight: 100,
        paddingTop: 15,
        paddingBottom: 15,
        marginTop: 20,
        borderRadius: 30,
        fontSize: 19,
        fontFamily: 'Montserrat'
        
       },

})