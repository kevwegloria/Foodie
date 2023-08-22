import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { View, FlatList, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';



const initialData = [
  {
    id: '1',
    color: 'black',
    title: 'Donuts',
    content: [
      {
        id: 'card1',
        image: require('../images/donut1.jpg'), 
        text: '$40.00',
        subtext: 'Box of 4 Mixed Donuts',
      },
      {
        id: 'card2',
        image: require('../images/donut2.jpg'), 
        text: '$70.00',
        subtext: 'Box of 7 Mixed Donuts',
      },
      {
        id: 'card3',
        image: require('../images/donut3.jpg'), 
        text: '$50.00',
        subtext: 'Box of 5 Mixed Donuts',
      },
      {
        id: 'card4',
        image: require('../images/donut4.jpg'), 
        text: '$40.00',
        subtext: 'Box of 4 Pink Donuts',
      },
      {
        id: 'card5',
        image: require('../images/donut5.jpg'), // Replace with actual image path
        text: '$60.00',
        subtext: 'Box of Chocolate Donuts',
      },
      {
        id: 'card6',
        image: require('../images/donut6.jpg'), // Replace with actual image path
        text: '$120.00',
        subtext: 'Box of Sugar Donuts',
      },
      {
        id: 'card7',
        image: require('../images/donut7.jpg'), // Replace with actual image path
        text: '$120.00',
        subtext: 'Box of 9 Chocolate Donuts',
      },
      {
        id: 'card8',
        image: require('../images/donut8.jpg'), // Replace with actual image path
        text: '$20.00',
        subtext: 'Pack of 2 Chocolate Donuts',
      },
    ],
  },
  {
    id: '2',
    color: 'black',
    title: 'Pizza',
    content: [
      {
        id: 'card9',
        image: require('../images/pizza.jpg'),
        text: '$55.00',
        subtext: 'Mozarella Pizza',
      },
      {
        id: 'card10',
        image: require('../images/pizza2.jpg'), 
        text: '$57.00',
        subtext: 'Hawaiian Pizza',
      },
      {
        id: 'card11',
        image: require('../images/pizza3.jpg'), 
        text: '$55.00',
        subtext: 'Pizza with Bell Peppers',
      },
      {
        id: 'card12',
        image: require('../images/pizza4.jpg'), 
        text: '$57.00',
        subtext: 'Flat Bread Pizza with Cheese',
      },
      {
        id: 'card13',
        image: require('../images/pizza5.jpg'), 
        text: '$62.00',
        subtext: 'Pizza with Extra Cheese',
      },
      {
        id: 'card14',
        image: require('../images/pizza6.jpg'), 
        text: '$55.00',
        subtext: 'Pizza with Meat Stuffing and Tomato Slices',
      },
      {
        id: 'card15',
        image: require('../images/pizza1.jpg'), 
        text: '$55.00',
        subtext: 'Olive and Sausage Pizza',
      },
      {
        id: 'card16',
        image: require('../images/pizza8.jpg'), 
        text: '$55.00',
        subtext: 'Pizza with Mixed Toppings',
      },
  
    ],
  },
  {
    id: '3',
    color: 'black',
    title: 'Noodles',
    content: [
      {
        id: 'card17',
        image: require('../images/noodles1.jpg'), // Replace with actual image path
        text: '$40.20',
        subtext: 'Delicious Japanese Ramen',
      },
      {
        id: 'card18',
        image: require('../images/noodles2.jpg'), // Replace with actual image path
        text: '$45.00',
        subtext: 'Bean Paste Korean Ramyeon',
      },
      
    ],
  },
  {
    id: '4',
    color: 'black',
    title: 'Fries',
    content: [
      {
        id: 'card19',
        image: require('../images/combo.jpg'), 
        text: '$80.00',
        subtext: 'Burger, Fries and Chips Combo',
      },
      {
        id: 'card20',
        image: require('../images/fries1.jpg'), // Replace with actual image path
        text: '$20.00',
        subtext: 'Fries and Ketchup',
      },
     
    ],
  },
  {
    id: '5',
    color: 'black',
    title: 'Sandwich',
    content: [
      {
        id: 'card21',
        image: require('../images/sandwich2.jpg'), 
        text: '$15.00',
        subtext: 'Ham Sandwich',
      },
      {
        id: 'card22',
        image: require('../images/sandwich1.jpg'), 
        text: '$25.00',
        subtext: '2 Egg and Ham Sandwiches',
      },
    ],
  },
  {
    id: '6',
    color: 'black',
    title: 'Burgers',
    content: [
      {
        id: 'card23',
        image: require('../images/burger.jpg'), // Replace with actual image path
        text: '$40.00',
        subtext: 'King Size Burger',
      },
      {
        id: 'card24',
        image: require('../images/combo.jpg'), // Replace with actual image path
        text: '$80.00',
        subtext: 'Burger, Fries and Chips Combo',
      },
    
    ],
  },
  {
    id: '7',
    color: 'black',
    title: 'IceCream',
    content: [
      {
        id: 'card25',
        image: require('../images/icecream.jpg'), // Replace with actual image path
        text: '$30.35',
        subtext: 'Nutty Ice Cream',
      },
     
    ],
  },
 
  // Add more items as needed
];

const generateAllContent = () => {
  const allCardContent = [];

  initialData.forEach((item) => {
    item.content.forEach((card) => {
      allCardContent.push(card);
    });
  });

  return allCardContent;
};

const HorizontalFlatList =() => {
  const navigation = useNavigation();

  const [selected, setSelected] = useState(initialData[0]);

 
  const handleCardPress = (cardId) => {
    // Determine which screen to navigate to based on cardId
    if (cardId === 'card1') {
      navigation.navigate('CardDetails1'); 
    } else if (cardId === 'card2') {
      navigation.navigate('CardDetails2'); 
    } else if (cardId === 'card3') {
      navigation.navigate('CardDetails3'); 
    } else if (cardId === 'card4') {
      navigation.navigate('CardDetails4'); 
    } else if (cardId === 'card5') {
      navigation.navigate('CardDetails5'); 
    } else if (cardId === 'card6') {
      navigation.navigate('CardDetails6'); 
    } else if (cardId === 'card7') {
      navigation.navigate('CardDetails7'); 
    } else if (cardId === 'card8') {
      navigation.navigate('CardDetails8'); 
    } else if (cardId === 'card9') {
      navigation.navigate('CardDetails9')
    } else if (cardId === 'card10') {
      navigation.navigate('CardDetails10')
    } else if (cardId === 'card11') {
      navigation.navigate('CardDetails11')
    } else if (cardId === 'card12') {
      navigation.navigate('CardDetails12')
    } else if (cardId === 'card13') {
      navigation.navigate('CardDetails13')
    } else if (cardId === 'card14') {
      navigation.navigate('CardDetails14')
    } else if (cardId === 'card15') {
      navigation.navigate('CardDetails15')
    } else if (cardId === 'card16') {
      navigation.navigate('CardDetails16')
    } else if (cardId === 'card17') {
      navigation.navigate('CardDetails17')
    } else if (cardId === 'card18') {
      navigation.navigate('CardDetails18')
    } else if (cardId === 'card19') {
      navigation.navigate('CardDetails19')
    } else if (cardId === 'card20') {
      navigation.navigate('CardDetails20')
    } else if (cardId === 'card21') {
      navigation.navigate('CardDetails21')
    } else if (cardId === 'card22') {
      navigation.navigate('CardDetails22')
    } else if (cardId === 'card23') {
      navigation.navigate('CardDetails23')
    } else if (cardId === 'card24') {
      navigation.navigate('CardDetails24')
    } else if (cardId === 'card25') {
      navigation.navigate('CardDetails25')
    }
    // Add more conditions for other card IDs as needed
  };


  const data = [ { id: 'allContent', title: 'All', color: 'black', content: generateAllContent() }, ...initialData];

  const renderCardContent = ({ id, image, text, subtext }) => (
    <TouchableOpacity
      key={id}
      style={styles.card}
      onPress={() => handleCardPress(id)} // Make sure id is passed correctly
    >
      <Image source={image} style={styles.cardImage} />
      <Text style={styles.cardText}>{text}</Text>
      <Text style={styles.cardSubtext}>{subtext}</Text>
    </TouchableOpacity>
  );
 
  

  const renderItem = ({ item }) => (
   <ScrollView style={styles.topcontain}>
     <TouchableOpacity
      style={[styles.item, { backgroundColor: item.color }]}
      onPress={() => setSelected(item)}
    >
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
   </ScrollView>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        snapToInterval={300} // Width of each item
        snapToAlignment="center"
        decelerationRate="fast"
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />

<ScrollView style={styles.componentContainer}>
  {selected && (
    <View style={styles.selectedContent}>
      {selected.title === 'All Content' ? (
        selected.content.map((card) => renderCardContent(card))
      ) : (
        selected.content.map((card) => renderCardContent(card))
      )}
    </View>
  )}
</ScrollView>

    </View>
  
  );
};

const styles = StyleSheet.create({
  topcontain: {
    marginTop: 20,
    marginBottom: 20,
    height: 40
    
  },
  item: {
    width: 75,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 8,
   
   
  },
  title: {
    fontSize: 18,
    color: 'white',
    fontFamily: 'LondrinaSolid-Regular'
  },
  componentContainer: {
  
   
  },
  selectedContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingBottom: 200,
    paddingLeft: 25,
    paddingRight: 20,
    backgroundColor: 'white',
    borderRadius: 8,
    elevation: 3,
  },
  card: {
    alignItems: 'center',
    marginTop: 20,
    
    width: 170
  },
  cardImage: {
    width: 150,
    height: 150,
    borderRadius: 8,
  },
  cardText: {
    marginTop: 10,
    fontSize: 18,
    color: '#ffa914',
    fontFamily: 'LondrinaSolid-Regular',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  cardSubtext: {
    marginTop: 5,
    fontSize: 14,
    color: 'black',
    fontFamily: 'Montserrat',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});

export default HorizontalFlatList;
