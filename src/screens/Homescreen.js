import React from "react";
import { View, Text, SafeAreaView, StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import LocationDropdown from "../components/LocationComponent";
import { Ionicons } from '@expo/vector-icons'; 
import ImageFlatList from "../components/ImageFlatlist";
import Carousel from "../components/Carousel";
import ImageFlatList1 from "../components/ImageFlatlist1";
import ImageFlatList2 from "../components/ImageFlatlist2";
import Banner from "../components/Banner";

export default function Homescreen({navigation}) {
  
    return (
      <SafeAreaView style={styles.container}>
    
     <View>
     <Text style={styles.delivery}>Delivery to</Text>

    </View>
     <LocationDropdown />

     <View style={styles.searchContainer}>
     <TouchableOpacity onPress={() => navigation.navigate('Search')}>
          <Ionicons name="search" size={20} color="#999" style={styles.searchIcon} />
        </TouchableOpacity>
        <TextInput
          style={styles.searchInput}
          placeholder="What do you want to eat today?"
          placeholderTextColor="#999"
          onEndEditing={() => navigation.navigate('Search')}
        />
  
 </View>
<ScrollView>


   
 <ImageFlatList  />
 
    <View style={styles.bestcontainer}>
    <Text style={styles.best}>Our Best Sellers</Text>
    <Text style={styles.see} onPress={() => navigation.navigate('Products')}>See All</Text>
    </View>
 <ImageFlatList1 navigation={navigation}/>


    <Carousel />
   
   <Text style={styles.newto}>New to Foodie</Text>
    <ImageFlatList2 navigation={navigation}/>

    <Banner navigation={navigation}
    
/>
    
     </ScrollView>
   </SafeAreaView>
    )
}

const styles = StyleSheet.create({
 container: {
    flex:1,
   backgroundColor: 'white',
 
   
 },
 delivery: {
  color: 'black',
  marginLeft: 30,
  marginTop: 60,
  marginBottom: 1,
  fontSize:13.5,
  fontFamily: 'Montserrat',
  fontWeight: '700'
 },
 searchContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: 'white',
  borderColor: 'grey',
  borderWidth: 1,
  borderRadius: 20,
  paddingVertical: 8,
  paddingHorizontal: 20,
  marginLeft: 20,
  marginTop: 5,
  width: '90%',
  marginBottom: 5
},
searchIcon: {
  marginRight: 8,
  
},
searchInput: {
  flex: 1,
  fontSize: 13,
  color: '#333',
  fontFamily:'Montserrat'
}, 
bestcontainer: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginLeft: 15,
  marginRight: 15,
  marginTop: 15
  
},
best: {
  fontFamily: 'LondrinaSolid-Regular',
  fontSize: 20
},
see: {
  fontFamily: 'LondrinaSolid-Regular',
  fontSize: 20,
  color: '#ffa914'
},
newto: {
  fontFamily: 'LondrinaSolid-Regular',
  fontSize: 20,
  marginTop: 30,
  marginLeft: 15
}
})