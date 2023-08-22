import React, { useRef, useState } from 'react';
import { View, FlatList, Image, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

const imageList = [
  { id: '1', imageUrl: require('../images/carousel1.jpg'), text1: 'SAVE UP TO 20%', text2: 'DELICIOUS FAST FOOD' },
  { id: '2', imageUrl: require('../images/carousel2.jpg'), text1: 'FAST DELIVERY', text2: 'TASTY FRIED CHICKEN' },
  { id: '3', imageUrl: require('../images/carousel3.jpg'), text1: 'POPULAR FAST FOOD', text2: 'YUMMY CREAMY DONUTS ' },
  // Add more image URLs, text, and image data as needed
];

const windowWidth = Dimensions.get('window').width;

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      flatListRef.current.scrollToIndex({ index: currentIndex - 1 });
    }
  };

  const handleNext = () => {
    if (currentIndex < imageList.length - 1) {
      setCurrentIndex(currentIndex + 1);
      flatListRef.current.scrollToIndex({ index: currentIndex + 1 });
    }
  };

  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.imageContainer}>
        <Image source={item.imageUrl} style={styles.image} resizeMode="cover" />
        <View style={styles.textContainer}>
          <Text style={styles.text1}>{item.text1}</Text>
          <Text style={styles.text2}>{item.text2}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={imageList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        snapToInterval={windowWidth}
        decelerationRate="fast"
        onMomentumScrollEnd={(event) => {
          const newIndex = event.nativeEvent.contentOffset.x / windowWidth;
          setCurrentIndex(Math.round(newIndex));
        }}
      />
      <TouchableOpacity style={[styles.arrowButton, { left: 16 }]} onPress={handlePrevious}>
        <Text style={styles.arrowText}>◄</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.arrowButton, { right: 16 }]} onPress={handleNext}>
        <Text style={styles.arrowText}>►</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  imageContainer: {
    flex:1,
    width: windowWidth,
    backgroundColor: 'white',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: windowWidth ,
    height: 100,
   
  },
  textContainer: {
    position: 'absolute',
    bottom: 20,
    left: 60,
    right: 16,
    padding: 5,
    borderRadius: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    width: 176
  },
  text1: {
    color: 'white',
    fontSize: 9,
    fontWeight: 'bold',
    marginBottom: 6,
    fontFamily: 'Montserrat'
  },
  text2: {
    color: 'white',
    fontSize: 15,
    fontFamily: 'LondrinaSolid-Regular'
  },
  arrowButton: {
    position: 'absolute',
    top: '40%',
    zIndex: 1,
    paddingLeft: 7,
    paddingRight: 7,
    paddingTop: 1,
    paddingBottom: 3,
    borderRadius:50,
    backgroundColor: 'black',
  },
  arrowText: {
    fontSize: 24,
    color: '#ffa914',
  },
});

export default Carousel;
