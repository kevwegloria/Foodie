import React from "react";
import { useState } from "react";
import { View, Text, SafeAreaView, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import Terms from "../components/Terms";
import { useUserContext } from '../components/UserContext';

export default function Signupscreen({ navigation }) {
  const { updateUser } = useUserContext();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
  
    const handleEmailChange = (text) => {
      setEmail(text);
    };
  
    const handlePasswordChange = (text) => {
      setPassword(text);
    };
    const handlePhoneChange = (text) => {
      setPhone(text);
    };
    const handleAddressChange = (text) => {
      setAddress(text);
    };

    const handleSignup = () => {
      const userData = { email, password, phone, address };
      updateUser(userData);
      navigation.navigate('Profile');
    };
  
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.main1}>
            <Image 
            source={require('../images/register.jpg')}
            style={styles.image}/>
            
                <Text style={styles.register} >SIGN UP</Text>
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
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={phone}
        onChangeText={handlePhoneChange}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Address"
        value={address}
        onChangeText={handleAddressChange}
        
      />
      
        </View>
         
        
         <Terms navigation={navigation}/>
        <View style={styles.button}>
        <TouchableOpacity onPress={handleSignup}>
        <Text style={styles.submit} >SIGN UP</Text>
       
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
      <Text style={styles.login} >LOG IN</Text>
      </TouchableOpacity>
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

     register: {
        fontWeight: '700',
        fontSize: 18,
        marginLeft: 30,
        top: 130,
        position: 'absolute',
        color: 'white',
        letterSpacing: 5,
        fontFamily: 'Montserrat',
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
        fontFamily: 'Montserrat',
        
    },
    input: {
        width: '88%',
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
      
        paddingLeft: 10,
        borderRadius:30,
        fontFamily: 'Montserrat',
      },
      textcontainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 25
      },
      submit: {
        width: '88%',
       backgroundColor: '#036aad',
       color: 'white',
      height: 50,
      paddingLeft: 130,
      paddingRight: 130,
       borderRadius: 30,
       paddingTop: 15,
       fontSize: 19,
       fontFamily: 'Montserrat',
      },
      login: {
       backgroundColor: '#ffa914',
       color: 'white',
       height: 50,
      paddingLeft: 140,
      paddingRight: 140,
       marginTop: 25,
       borderRadius: 30,
       fontSize: 19,
       fontFamily: 'Montserrat',
       paddingTop: 15,
       
      },
      button: {
        alignItems: 'center',

      }
})


// import React, { useState } from 'react';
// import { View, TextInput, Button } from 'react-native';













// import React, { useState } from 'react';
// import { View, TextInput, Button } from 'react-native';
// import { useUserContext } from '../components/UserContext';

// const SignupScreen1 = ({ navigation }) => {
//   const { updateUser } = useUserContext();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSignup = () => {
//     // Call an API to sign up the user with email and password
//     // After successful signup, update user context and navigate to the profile screen
//     const userData = { email, password };
//     updateUser(userData);
//     navigation.navigate('Profile');
//   };

//   return (
//     <View style={{paddingTop: 60}}>
//       <TextInput
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//       />
//       <TextInput
//         placeholder="Password"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//       />
//       <Button title="Sign Up" onPress={handleSignup} />
//     </View>
//   );
// };

// export default SignupScreen1;
