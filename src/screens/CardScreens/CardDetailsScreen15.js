import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Text, Image, Button, TouchableOpacity, FlatList  } from 'react-native';


const CardDetailsScreen15= ({navigation}) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const [cartItems, setCartItems] = useState([]);

 
  const handleAddToCart = () => {
    const newItem = { id: Date.now(), quantity, selectedImage, productName, productPrice };
    const existingItemIndex = cartItems.findIndex(item => item.productName === productName);

    if (existingItemIndex !== -1) {
      // Update quantity if item already exists
      const updatedCart = cartItems.map((item, index) =>
        index === existingItemIndex ? { ...item, quantity: item.quantity + quantity } : item
      );
      setCartItems(updatedCart);
    } else {
      // Add new item to cart
      setCartItems([...cartItems, newItem]);
    }

    setQuantity(1);
  };
  
  
  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
   
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      
    }
  };

  const images = [
    { id: '1', url: require('../CardScreens/images/pizza1.jpg') },
    { id: '2', url: require('../CardScreens/images/pizza3a.jpg') },
    { id: '3', url: require('../CardScreens/images/pizza1.jpg') },
    // Add more image objects as needed
  ];

  
  useEffect(() => {
    setSelectedImage(images[0]); 
  }, []);

  const handleImageSelect = (image) => {
    setSelectedImage(image);
  };

  const totalCartItemQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  const [productName, setProductName] = useState('Olive and Sausage Pizza'); 

  const [productPrice, setProductPrice] = useState(55);

  return (
   <SafeAreaView style={{flex: 1, paddingTop: 40, backgroundColor: 'white'}}>
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
    <Icon
          name="arrow-left"
          size={20}
          onPress={() => navigation.goBack()}
          style={{fontSize: 22, marginTop:13, marginLeft: 20,  color: '#036db0', }}
        />
        <TouchableOpacity onPress={() => navigation.navigate('Cart', { cartItems })}>
  <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 25, marginTop: 13 }}>
    <Icon name="shopping-cart" size={20} color="#036db0" />
    <Text style={{ fontSize: 16, marginLeft: 5, fontFamily: 'LondrinaSolid-Regular' }}>
      {totalCartItemQuantity}
    </Text>
  </View>
</TouchableOpacity>
    </View>
     
     
    

      <View style={{ alignItems: 'center', marginTop: 20, }}>
        {selectedImage && (
          <Image
            source={selectedImage.url}
            style={{ width: 270, height: 270, marginBottom: 30 }}
            resizeMode="contain"
          />
        )}
      </View>
      <FlatList
        data={images}
        keyExtractor={(item) => item.id}
        horizontal
        
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleImageSelect(item)} style={{marginLeft: 10}}>
            <Image
              source={item.url}
              style={{ width: 70, height: 70, marginLeft: 20 }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      />
       <View style={{ marginBottom:60, paddingLeft: 30}}>
     <Text style={{ fontFamily: 'Montserrat', fontSize: 20,  fontWeight: 'bold'}}>Olive and Sausage Pizza </Text>
      <Text style={{fontFamily: 'LondrinaSolid-Regular', color: '#ffa914', fontSize: 15, marginBottom: 10}}>Price: $55.00</Text>
      <Text style={{maxWidth: 330, alignItems: 'center', justifyContent: 'center', marginBottom: 15, fontFamily: 'Montserrat',  fontSize: 12}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
     <View style={{flexDirection: 'row', marginBottom: 15}}>
     <TouchableOpacity onPress={handleIncreaseQuantity}>
        <Icon
          name="plus"
          size={20}
          style={{fontSize: 15,   color: '#036db0', marginRight: 15, borderWidth: 1, borderRadius: 8, padding: 8}}
        />
      </TouchableOpacity>
      <Text style={{fontFamily: 'LondrinaSolid-Regular', fontSize: 20}}>{quantity}</Text>
      <TouchableOpacity onPress={handleDecreaseQuantity}>
      <Icon
          name="minus"
          size={20}
          style={{fontSize: 15,   color: '#036db0', marginLeft: 15, borderWidth: 1, borderRadius: 8, padding: 8}}
        />
      </TouchableOpacity>
     </View>
      <View style={{flexDirection: 'row', gap: 20}}>
      
      <TouchableOpacity onPress={handleAddToCart} style={{borderWidth: 1, width: 110, paddingLeft: 10, paddingTop: 10, paddingBottom: 10, backgroundColor: '#036db0', borderColor: 'white'}}>
      <Text 
       style={{fontFamily: 'LondrinaSolid-Regular', fontSize: 16,color: 'white' }}
       >Add to Basket</Text>
      </TouchableOpacity>
       


       <TouchableOpacity onPress={() => navigation.navigate('Cart', { cartItems })}  style={{borderWidth: 1, width:80, paddingLeft: 10, paddingTop: 10, paddingBottom: 10, backgroundColor: '#ffa914', borderColor: 'white'}}>
  <Text
  style={{fontFamily: 'LondrinaSolid-Regular', fontSize: 16,color: 'black' }}
  >View Cart</Text>
</TouchableOpacity>
      </View>

     </View>
    
   </SafeAreaView>
  );
};
  
  
  
  export default CardDetailsScreen15