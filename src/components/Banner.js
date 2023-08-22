import React from 'react';

import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Banner = ({navigation}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('CardDetails6')}>
      <Image source={require('../images/carousel3.jpg')} style={styles.bannerImage} resizeMode="cover" />

     <View style={styles.contain}>
     <View style={styles.logoContainer}>
        <Image source={require('../images/logo.png')} style={styles.logo} resizeMode="contain" />
      </View>

      <Text style={{fontSize: 17, fontFamily: 'LondrinaSolid-Regular', color:'#036db0', width: 150, right: 105}}>Our Best Selling Sugar Donuts</Text>

    
     </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
    fontFamily: 'LondrinaSolid-Regular',
    height: 100
  },
  bannerImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  logoContainer: {
    position: 'absolute',
    
    fontFamily: 'LondrinaSolid-Regular',
   
  },
  logo: {
    width: 120,
    height: 150,
    bottom: 90,
    right: 140
  },
  // text: {
  //   color:'#036db0',
  //   fontSize:17,
  //   width: 150,
  //  top:40,
  //   fontWeight: 'bold',
  //   right: 105,
  //   fontFamily: 'LondrinaSolid-Regular',
  // },
  
  // orderButtonText: {
  //   color: '#036db0',
  //   fontSize: 14,
  //   fontWeight: 'bold',
  //   fontFamily: 'LondrinaSolid-Regular',
  // },
  contain: {
    flexDirection: 'column',
    fontFamily: 'LondrinaSolid-Regular',
  }
});

export default Banner;
