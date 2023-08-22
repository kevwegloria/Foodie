import React from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { StyleSheet, View, Image, Text,  } from "react-native";


const imageList = [
    { id: '1', imageUrl:require('../images/burger.jpg'), title: '$40.00', description: 'King Size Burger'},
    { id: '2', imageUrl: require('../images/donut7.jpg'), title: '$120.00', description: 'Box of 9 Chocolate Donuts' },
    { id: '3', imageUrl: require('../images/combo.jpg'),  title: '$80.00',description: 'Combo Meal' },
    { id: '4', imageUrl: require('../images/icecream.jpg'), title: '$30.35', description: 'Nutty Ice-Cream' },
    { id: '5', imageUrl: require('../images/pizza.jpg'), title: '$55.00', description: 'Cheezy Pizza' },
    { id: '6', imageUrl: require('../images/noodles2.jpg'), title: '$45.00', description: 'Bean Paste Korean Ramyeon' },
    { id: '7', imageUrl: require('../images/sandwich1.jpg'), title: '$25.00', description: '2 Egg and Ham Sandwiches' },
    { id: '8', imageUrl: require('../images/fries1.jpg'), title: '$20.00', description: 'Fries and Ketchup' },
    { id: '9', imageUrl: require('../images/donut1.jpg'), title: '$40.00', description: 'Box of 4 Mixed Donuts' },
    // Add more image URLs and background colors as needed
  ];

  const ImageFlatList1 = ({navigation}) => {
    const navigateToDetail = (itemId) => {
      const screenMapping = {
        '1': 'CardDetails23',
        '2': 'CardDetails7',
        '3': 'CardDetails19',
        '4': 'CardDetails25',
        '5': 'CardDetails9',
        '6': 'CardDetails18',
        '7': 'CardDetails22',
        '8': 'CardDetails20',
        '9': 'CardDetails1',
        // ... Add more mappings as needed
      };
  
      const screenName = screenMapping[itemId];
  
      if (screenName) {
        navigation.navigate(screenName);
      }
    };


    const renderImageItem = ({ item }) => (
      <TouchableOpacity style={[styles.imageItem, { backgroundColor: item.backgroundColor }]}onPress={() => navigateToDetail(item.id)}>
        <Image source={item.imageUrl} style={styles.image} resizeMode="cover" />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </TouchableOpacity>
    );
  
    return (
      <View style={styles.container}>
        <FlatList
          data={imageList}
          renderItem={renderImageItem}
          keyExtractor={(item) => item.id}
          horizontal // Set the FlatList to scroll horizontally
          showsHorizontalScrollIndicator={false} // Hide the horizontal scroll indicator
        />
      </View>
    );
  };
  
  export default ImageFlatList1;

  const styles = StyleSheet.create({
    container: {
    marginBottom: 7,
      padding: 4,
      
      
     
    },
    imageItem: {
      width: 150,
      height: 150,
      margin: 8,
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      width: 100,
      height: 100,
      
    },
    title: {
        fontFamily: 'LondrinaSolid-Regular',
        fontWeight: '700',
        marginTop: 5,
        fontSize: 14,
        color: '#ffa914'
    },
    description: {
        fontFamily: 'LondrinaSolid-Regular',
        fontSize: 16
    }
  });
  