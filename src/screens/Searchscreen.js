import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, TextInput, FlatList, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

const SearchScreen = ({ route, navigation }) => {
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);
    

  const data = [
    { id: '1', title: 'Box of 4 Mixed Donuts', imageUrl: require('../images/donut1.jpg') },
    { id: '2', title: 'Box of 7 Mixed Donuts', imageUrl: require('../images/donut2.jpg') },
    { id: '3', title: 'Box of 5 Mixed Donuts', imageUrl: require('../images/donut3.jpg') },
    { id: '4', title: 'Box of 4 Pink Donuts', imageUrl: require('../images/donut4.jpg') },
    { id: '5', title: 'Box of Chocolate Donuts', imageUrl: require('../images/donut5.jpg') },
    { id: '6', title: 'Box of Sugar Donuts', imageUrl: require('../images/donut6.jpg') },
    { id: '7', title: 'Box of 9 Chocolate Donuts', imageUrl: require('../images/donut7.jpg') },
    { id: '8', title: 'Pack of 2 Chocolate Donuts', imageUrl: require('../images/donut8.jpg') },
    { id: '9', title: 'Mozarella Pizza', imageUrl: require('../images/pizza.jpg') },
    { id: '10', title: 'Hawaiian Pizza', imageUrl: require('../images/pizza2.jpg') },
    { id: '11', title: 'Pizza with Bell Peppers', imageUrl: require('../images/pizza3.jpg') },
    { id: '12', title: 'Flat Bread Pizza with Cheese', imageUrl: require('../images/pizza4.jpg') },
    { id: '13', title: 'Pizza with Extra Cheese', imageUrl: require('../images/pizza5.jpg') },
    { id: '14', title: 'Pizza with Meat Stuffing and Tomato Slices', imageUrl: require('../images/pizza6.jpg') },
    { id: '15', title: 'Olive and Sausage Pizza', imageUrl: require('../images/pizza1.jpg') },
    { id: '16', title: 'Pizza with Mixed Toppings', imageUrl: require('../images/pizza8.jpg') },
    { id: '17', title: 'Delicious Japanese Ramen', imageUrl: require('../images/noodles1.jpg') },
    { id: '18', title: 'Bean Paste Korean Ramyeon', imageUrl: require('../images/noodles2.jpg') },
    { id: '19', title: 'Burger, Fries and Chips Combo', imageUrl: require('../images/combo.jpg') },
    { id: '20', title: 'Fries and Ketchup', imageUrl: require('../images/fries1.jpg') },
    { id: '21', title: 'Ham Sandwich', imageUrl: require('../images/sandwich2.jpg') },
    { id: '22', title: '2 Egg and Ham Sandwiches', imageUrl: require('../images/sandwich1.jpg') },
    { id: '23', title: 'King Size Burger', imageUrl: require('../images/burger.jpg') },
    { id: '24', title: 'Burger, Fries and Chips Combo', imageUrl: require('../images/combo.jpg') },
    { id: '25', title: 'Nutty Ice Cream', imageUrl: require('../images/icecream.jpg') },
    // ... more data
  ];

  const handleSearch = () => {
    const filteredResults = data.filter(item =>
      item.title.toLowerCase().includes(searchInput.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  const navigateToDetail = (itemId) => {
    const screenMapping = {
      '1': 'CardDetails1',
      '2': 'CardDetails2',
      '3': 'CardDetails3',
      '4': 'CardDetails4',
      '5': 'CardDetails5',
      '6': 'CardDetails6',
      '7': 'CardDetails7',
      '8': 'CardDetails8',
      '9': 'CardDetails9',
      '10': 'CardDetails10',
      '11': 'CardDetails11',
      '12': 'CardDetails12',
      '13': 'CardDetails13',
      '14': 'CardDetails14',
      '15': 'CardDetails15',
      '16': 'CardDetails16',
      '17': 'CardDetails17',
      '18': 'CardDetails18',
      '19': 'CardDetails19',
      '20': 'CardDetails20',
      '21': 'CardDetails21',
      '22': 'CardDetails22',
      '23': 'CardDetails23',
      '24': 'CardDetails24',
      '25': 'CardDetails25',
     
      // ... Add more mappings as needed
    };

    const screenName = screenMapping[itemId];

    if (screenName) {
      navigation.navigate(screenName);
    }
  };

  const removeCard = (itemId) => {
    const updatedResults = searchResults.filter(item => item.id !== itemId);
    setSearchResults(updatedResults);
  };

  return (
   <SafeAreaView style={styles.container}>
     <View >
     <Icon
          name="arrow-left"
          size={20}
          onPress={() => navigation.goBack()}
          style={{fontSize: 22, marginTop:4, marginLeft: 20,  color: '#036db0', marginBottom: 20 }}
        />
      <TextInput
        placeholder="What do you want to eat today?"
        value={searchInput}
        onChangeText={text => setSearchInput(text)}
        onEndEditing={handleSearch}
        style={styles.input}
      />
     
      <Icon onPress={handleSearch} name="search" size={20} style={{ color: '#036db0', marginLeft: 10, position: 'absolute', left: 325, top: 55 }} />
      {searchResults.length === 0 ? (
        <Text style={styles.noResultsText}>Your search had no results.</Text>
      ) : (
        <FlatList
          data={searchResults}
          renderItem={({ item }) => (
            <View style={styles.cardContainer}>
              <TouchableOpacity style={styles.card} onPress={() => navigateToDetail(item.id)}>
                <Image source={item.imageUrl} style={styles.cardImage} resizeMode="cover" />
                <Text style={styles.cardTitle}>{item.title}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.removeButton} onPress={() => removeCard(item.id)}>
                
                <Icon name="times" size={20} style={{ color: 'white', marginLeft: 10 }} />
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={item => item.id}
        />
      )}
    </View>
   </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    backgroundColor: 'white'
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 5,
    width: 385
    
  },
  card: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'LondrinaSolid-Regular',
    width: 200
  },
  removeButton: {
    backgroundColor: '#036db0',
    borderRadius: 8,
    paddingLeft: 3,
    paddingRight: 15,
    paddingTop: 8,
    paddingBottom: 8,
  },
  removeButtonText: {
    color: 'white',
  },
  noResultsText: {
    marginTop: 16,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input : {
    borderWidth: 1,
    padding: 5,
    width: '90%',
    marginLeft: 20,
    borderRadius: 20, 
    paddingLeft: 15,
    marginBottom: 30,
    fontFamily: 'Montserrat'
    
  }
});

export default SearchScreen;
