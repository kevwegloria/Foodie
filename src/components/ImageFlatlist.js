import React from "react";
import { FlatList } from "react-native";
import { StyleSheet, View, Image, Text } from "react-native";


const imageList = [
    { id: '1', imageUrl:require('../images/Donut.png'), title: 'Donut'},
    { id: '2', imageUrl: require('../images/Pizza.png'), title: 'Pizza' },
    { id: '3', imageUrl: require('../images/Ramen.png'),  title: 'Noodles' },
    { id: '4', imageUrl: require('../images/Fries.png'), title: 'Fries' },
    { id: '5', imageUrl: require('../images/Sandwich.png'), title: 'Sandwich' },
    { id: '6', imageUrl: require('../images/Burger.png'), title: 'Burger' },
    { id: '7', imageUrl: require('../images/IceCream.png'), title: 'Ice Cream' },
    { id: '8', imageUrl: require('../images/Hotdog.png'), title: 'Hot Dog' },
    // Add more image URLs and background colors as needed
  ];

  const ImageFlatList = () => {
  



    const renderImageItem = ({ item }) => (
      <View style={[styles.imageItem, { backgroundColor: item.backgroundColor }]}>
        <Image source={item.imageUrl} style={styles.image} resizeMode="cover" />
        <Text  style={styles.title}>{item.title}</Text>
      </View>
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
  
  export default ImageFlatList;

  const styles = StyleSheet.create({
    container: {
      
      padding: 8,
     
    },
    imageItem: {
      width: 70,
      height: 70,
      margin: 4,
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      width: 40,
      height: 40,
      borderRadius: 8,
    },
    title: {
        fontFamily: 'Montserrat',
        fontWeight: '700',
        marginTop: 5
    }
  });
  