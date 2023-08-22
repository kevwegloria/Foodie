import React, { useState } from 'react';
import { View, Text, Image, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const CartScreen = ({ route, navigation }) => {
  const { cartItems } = route.params;

  const [cartItemsState, setCartItemsState] = useState(cartItems);

  const totalCartPrice = cartItemsState.reduce((total, item) => total + item.quantity * item.productPrice, 0);

  const handleIncreaseCartItem = (itemId) => {
    const updatedCartItems = cartItemsState.map(item => {
      if (item.id === itemId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });

    setCartItemsState(updatedCartItems);
  };

  const handleDecreaseCartItem = (itemId) => {
    const updatedCartItems = cartItemsState.map(item => {
      if (item.id === itemId && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });

    setCartItemsState(updatedCartItems);
  };

  const handleDeleteCartItem = (itemId) => {
    const updatedCartItems = cartItemsState.filter(item => item.id !== itemId);
    setCartItemsState(updatedCartItems);
  };
  return (
    <SafeAreaView style={{ paddingTop: 50, flex: 1 }}>
      <View>
        <View style={{ alignItems: 'center' }}>
          <Text style={{ fontSize: 30, fontFamily: 'LondrinaSolid-Regular', marginBottom: 10 }}>Cart</Text>
        </View>
        <FlatList
          data={cartItemsState}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10, marginLeft: 20, marginBottom: 30 }}>
              <Image source={item.selectedImage.url} style={{ width: 90, height: 90, marginRight: 10 }} resizeMode="contain" />
              <View>
                <Text style={{ fontFamily: 'Montserrat', fontSize: 16, fontWeight: 'bold' }}>{item.quantity} x {item.productName}</Text>
                <Text style={{ fontFamily: 'LondrinaSolid-Regular', fontSize: 15, color: '#ffa914' }}>Price: ${item.productPrice.toFixed(2)}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <TouchableOpacity onPress={() => handleDecreaseCartItem(item.id)}>
                    <Icon name="minus" size={20}   style={{fontSize: 15,   color: '#036db0', marginLeft: 3,marginTop: 20,marginRight: 10, borderWidth: 1, borderRadius: 8, padding: 8}} />
                  </TouchableOpacity>
                  <Text style={{ fontFamily: 'Montserrat', fontSize: 25, fontWeight: 'bold', marginTop: 20 }}>{item.quantity}</Text>
                  <TouchableOpacity onPress={() => handleIncreaseCartItem(item.id)}>
                    <Icon name="plus" size={20} style={{fontSize: 15,   color: '#036db0', marginLeft: 10,marginTop: 20,marginRight: 10, borderWidth: 1, borderRadius: 8, padding: 8}} />
                  </TouchableOpacity>
                </View>
              </View>
              <TouchableOpacity onPress={() => handleDeleteCartItem(item.id)}>
              <Icon name="times" size={20}   style={{fontSize: 25,   color: '#036db0', marginLeft: 70,marginTop: 20 }} />
              </TouchableOpacity>
              
            </View>
          )}
        />
        <View style={{ borderTopWidth: 1, paddingTop: 15 }}>
          <Text style={{ fontFamily: 'Montserrat', fontSize: 18, fontWeight: 'bold', textAlign: 'center' }}>
            Total Price: ${totalCartPrice.toFixed(2)}
          </Text>
        </View>
        <TouchableOpacity style={{alignItems:'center', padding: 12, marginTop: 10 ,borderRadius: 10, backgroundColor: '#ffa914', marginLeft: 20, marginRight: 20,}} onPress={() => navigation.navigate('Checkout')}>
          <Text style={{fontSize: 20,  fontFamily: 'LondrinaSolid-Regular'}}>Proceed to Checkout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CartScreen;
