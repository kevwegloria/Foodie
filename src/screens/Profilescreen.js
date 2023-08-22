import React from 'react';
import { View, Text, Button, SafeAreaView, Image } from 'react-native';
import { useUserContext } from '../components/UserContext';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Profilescreen = ({ navigation }) => {
  const { user } = useUserContext();
  const handleLogout = () => {
    // Handle logout logic and navigate back to the login/signup screen
    navigation.navigate('Login');
  };

  return (
   <SafeAreaView style={{flex:1, paddingTop: 70, backgroundColor: 'white', alignItems: 'center', }}>
     <View>
    <TouchableOpacity style={{flexDirection: 'row', gap: 10, marginBottom: 10}}  onPress={() => navigation.navigate('Home')}>
    <Icon
          name="home"
          size={20}
          style={{fontSize: 28,  color: '#036db0', }}
        />
        <Text style={{color: '#036db0', fontFamily: 'Montserrat', marginTop: 7}}>Go Home</Text>
    </TouchableOpacity>
      <Text style={{fontSize: 40, fontFamily: 'LondrinaSolid-Regular', marginLeft:60, marginBottom:20}}>Your Profile</Text>
      <Image 
            source={require('../images/myprofile.jpg')}
            resizeMode='contain'
            style={{height:300, width: 300, marginBottom: 20}}
            />
      {user && (
        <View>
          <Text style={{fontSize: 20, fontFamily: 'Montserrat', marginBottom: 5}}>Your Email: {user.email}</Text>
          <Text style={{fontSize: 20, fontFamily: 'Montserrat', marginBottom: 5}}>Password: {user.password}</Text>
          <Text style={{fontSize: 20, fontFamily: 'Montserrat', marginBottom: 5}}>Phone Number: {user.phone}</Text>
          <Text style={{fontSize: 20, fontFamily: 'Montserrat', marginBottom: 20}}>Address: {user.address}</Text>
        </View>
      )}
    <TouchableOpacity style={{alignItems: 'center',  borderRadius: 10,backgroundColor: '#036db0', padding: 10}} onPress={handleLogout}>
    <Text style={{borderRadius: 10, color: 'white', fontSize: 18, fontFamily: 'LondrinaSolid-Regular'}} >Logout</Text>
    </TouchableOpacity>
     
    </View>
   </SafeAreaView>
  );
};

export default Profilescreen;
