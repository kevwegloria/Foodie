import React from "react";
import { useState } from "react";
import { useUserContext } from '../components/UserContext';
import { View, Text, SafeAreaView, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'

export default function Loginscreen({ navigation }) {
  const { updateUser } = useUserContext();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleEmailChange = (text) => {
      setEmail(text);
    };
  
    const handlePasswordChange = (text) => {
      setPassword(text);
    };

    const handleLogin = () => {
      const userData = { email, password };
      updateUser(userData);
      navigation.navigate('Profile');
    };
  
    return (
        <SafeAreaView style={styles.container}>
        <View style={styles.main}>
       <View style={styles.main1}>
           <Image 
           source={require('../images/register.jpg')}
           style={styles.image}/>
           
               <Text style={styles.sign} >LOG IN</Text>
               <Text style={styles.skip} onPress={() => navigation.navigate('Home')}>SKIP</Text>
               
       </View>

       <View style={styles.textcontainer}>
       <TextInput
       style={styles.input}
       placeholder="Email"
       value={email}
       onChangeText={handleEmailChange}
       keyboardType="email-address"
     />
     <TextInput
       style={styles.input}
       placeholder="Password"
       value={password}
       onChangeText={handlePasswordChange}
       secureTextEntry
     />

     <Text style={styles.lost} onPress={() => navigation.navigate('Lost')}>Lost your Password?</Text>
     
     <TouchableOpacity onPress={handleLogin} >
       <Text style={styles.submit} >LOG IN</Text>
      
     </TouchableOpacity>
     <TouchableOpacity  onPress={() => navigation.navigate('Signup')}>
     <Text style={styles.signup}>SIGN UP</Text>
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
        paddingTop: 30
        
        
    },
   
    main1: {
        position: 'relative'
    },

     sign: {
        fontWeight: '700',
        fontSize: 18,
        marginLeft: 30,
        top: 130,
        position: 'absolute',
        color: 'white',
        letterSpacing: 5,
        fontFamily: 'Montserrat'
    },
     skip: {
        fontWeight: '700',
        fontSize: 18,
        marginLeft: 30,
        top: 20,
        left: 270,
        position: 'absolute',
        color: 'white',
        letterSpacing: 5,
        fontFamily: 'Montserrat'
        
    },
    input: {
        width: '88%',
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingLeft: 10,
        borderRadius:30
      },
      textcontainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50
      },
      submit: {
    
      
       backgroundColor: '#036aad',
       color: 'white',
       paddingLeft: 147,
       paddingRight: 147,
       paddingTop: 15,
       paddingBottom: 15,
       marginTop: 25,
       borderRadius: 30,
       fontSize: 19,
       fontFamily: 'Montserrat'
       
      },
      signup: {
    
       
       backgroundColor: '#ffa914',
       color: 'white',
       paddingLeft: 143,
       paddingRight: 140,
       paddingTop: 15,
       paddingBottom: 15,
       marginTop: 25,
       borderRadius: 30,
       fontSize: 19,
       fontFamily: 'Montserrat'
       
      },
      lost: {
        fontSize: 18,
        fontFamily: 'Montserrat',
        color: '#ffa914'
      }
})





















