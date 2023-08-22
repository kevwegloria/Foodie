import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Homescreen from "../screens/Homescreen";
import Signupscreen from "../screens/Signupscreen";
import OnboardingScreen from "../screens/Onboardingscreen";
import TermsScreen from "../screens/TermsScreen";
import Loginscreen from "../screens/Loginscreen";
import Lost from "../screens/Lost";
import Reset from "../screens/Reset";
import Profilescreen from "../screens/Profilescreen";
import Searchscreen from "../screens/Searchscreen";
import ProductsScreen from "../screens/ProductsScreen";
import { StyleSheet,Image } from "react-native";
import CardDetailsScreen1 from "../screens/CardScreens/CardDetailsScreen1";
import CardDetailsScreen2 from "../screens/CardScreens/CardDetailsScreen2";
import CardDetailsScreen3 from "../screens/CardScreens/CardDetailsScreen3";
import CardDetailsScreen4 from "../screens/CardScreens/CardDetailsScreen4";
import CardDetailsScreen5 from "../screens/CardScreens/CardDetailsScreen5";
import CardDetailsScreen6 from "../screens/CardScreens/CardDetailsScreen6";
import CardDetailsScreen7 from "../screens/CardScreens/CardDetailsScreen7";
import CardDetailsScreen8 from "../screens/CardScreens/CardDetailsScreen8";
import CardDetailsScreen9 from "../screens/CardScreens/CardDetailsScreen9";
import CardDetailsScreen10 from "../screens/CardScreens/CardDetailsScreen10";
import CardDetailsScreen11 from "../screens/CardScreens/CardDetailsScreen11";
import CardDetailsScreen12 from "../screens/CardScreens/CardDetailsScreen12";
import CardDetailsScreen13 from "../screens/CardScreens/CardDetailsScreen13";
import CardDetailsScreen14 from "../screens/CardScreens/CardDetailsScreen14";
import CardDetailsScreen15 from "../screens/CardScreens/CardDetailsScreen15";
import CardDetailsScreen16 from "../screens/CardScreens/CardDetailsScreen16";
import CardDetailsScreen17 from "../screens/CardScreens/CardDetailsScreen17";
import CardDetailsScreen18 from "../screens/CardScreens/CardDetailsScreen18";
import CardDetailsScreen19 from "../screens/CardScreens/CardDetailsScreen19";
import CardDetailsScreen20 from "../screens/CardScreens/CardDetailsScreen20";
import CardDetailsScreen21 from "../screens/CardScreens/CardDetailsScreen21";
import CardDetailsScreen22 from "../screens/CardScreens/CardDetailsScreen22";
import CardDetailsScreen23 from "../screens/CardScreens/CardDetailsScreen23";
import CardDetailsScreen24 from "../screens/CardScreens/CardDetailsScreen24";
import CardDetailsScreen25 from "../screens/CardScreens/CardDetailsScreen25";
import HorizontalFlatList from "../components/HorizontalFlatlist";
import ImageFlatList from "../components/ImageFlatlist";
import ImageFlatList1 from "../components/ImageFlatlist1";
import ImageFlatList2 from "../components/ImageFlatlist2";
import CartScreen from "../screens/CartScreen";


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


function BottomTabs () {
    return (
        <Tab.Navigator screenOptions={{headerShown: false,
        tabBarActiveBackgroundColor: '#ffa914',
        tabBarStyle:{
          height:50,
        },
        tabBarItemStyle:{
          paddingBottom: 10,
          paddingTop:25
        }
      }}
        >
        <Tab.Screen name="Main" 
        component={Homescreen} 
        options={{
          tabBarLabel: '',
          tabBarIcon: () => (
            <Image 
            style={styles.bottomTabsIcon}
            source={require('../images/Home.png')}
            />
          )
        }}
        />


        <Tab.Screen name="Products"
         component={ProductsScreen} 
         options={{
          tabBarLabel: '',
          tabBarIcon: () => (
            <Image 
            style={styles.bottomTabsIcon}
            source={require('../images/Product.png')}
            />
          )
        }} />
        {/* <Tab.Screen name="Cart"
         component={CartScreen}
         options={{
          tabBarLabel: '',
          tabBarIcon: () => (
            <Image 
            style={styles.bottomTabsIcon}
            source={require('../images/Cart.png')}
            />
          )
        }}  /> */}
        <Tab.Screen name="Search"
         component={Searchscreen} 
         options={{
          tabBarLabel: '',
          tabBarIcon: () => (
            <Image 
            style={styles.bottomTabsIcon}
            source={require('../images/Search.png')}
            />
          )
        }} />
        <Tab.Screen name="Profile"
         component={Profilescreen}
         options={{
          tabBarLabel: '',
          tabBarIcon: () => (
            <Image 
            style={styles.bottomTabsIcon}
            source={require('../images/Profile.png')}
            />
          )
        }} />
        
       
      </Tab.Navigator>
    )
}



const MainStack = () => {
  const [isFirstTimeLoad, setIsFirstTimeLoad] = useState(true);
  const [checkedFirstLaunch, setCheckedFirstLaunch] = useState(false);

  useEffect(() => {
    checkFirstLaunch();
  }, []);

  const checkFirstLaunch = async () => {
    try {
      const isFirstLaunch = await AsyncStorage.getItem("alreadyLaunched");

      if (isFirstLaunch === null) {
        await AsyncStorage.setItem("alreadyLaunched", "true");
        setIsFirstTimeLoad(true);
      } else {
        setIsFirstTimeLoad(false);
      }
      setCheckedFirstLaunch(true);
    } catch (error) {
      console.log("Error checking first launch:", error);
    }
  };

  
  if (!checkedFirstLaunch) {
    return null;
  }

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isFirstTimeLoad ? (
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      ) : (
        <Stack.Screen name="Signup" component={Signupscreen} />
      )}
      <Stack.Screen name="Home" component={BottomTabs} />
      <Stack.Screen name="Terms" component={TermsScreen}/>
      <Stack.Screen name="Login" component={Loginscreen}/>
      <Stack.Screen name="Lost" component={Lost}/>
      <Stack.Screen name="Reset" component={Reset}/>
      <Stack.Screen name="Profile" component={Profilescreen}/>
      <Stack.Screen name="CardDetails1" component={CardDetailsScreen1} />
      <Stack.Screen name="CardDetails2" component={CardDetailsScreen2} />
      <Stack.Screen name="CardDetails3" component={CardDetailsScreen3} />
      <Stack.Screen name="CardDetails4" component={CardDetailsScreen4} />
      <Stack.Screen name="CardDetails5" component={CardDetailsScreen5} />
      <Stack.Screen name="CardDetails6" component={CardDetailsScreen6} />
      <Stack.Screen name="CardDetails7" component={CardDetailsScreen7} />
      <Stack.Screen name="CardDetails8" component={CardDetailsScreen8} />
      <Stack.Screen name="CardDetails9" component={CardDetailsScreen9} />
      <Stack.Screen name="CardDetails10" component={CardDetailsScreen10} />
      <Stack.Screen name="CardDetails11" component={CardDetailsScreen11} />
      <Stack.Screen name="CardDetails12" component={CardDetailsScreen12} />
      <Stack.Screen name="CardDetails13" component={CardDetailsScreen13} />
      <Stack.Screen name="CardDetails14" component={CardDetailsScreen14} />
      <Stack.Screen name="CardDetails15" component={CardDetailsScreen15} />
      <Stack.Screen name="CardDetails16" component={CardDetailsScreen16} />
      <Stack.Screen name="CardDetails17" component={CardDetailsScreen17} />
      <Stack.Screen name="CardDetails18" component={CardDetailsScreen18} />
      <Stack.Screen name="CardDetails19" component={CardDetailsScreen19} />
      <Stack.Screen name="CardDetails20" component={CardDetailsScreen20} />
      <Stack.Screen name="CardDetails21" component={CardDetailsScreen21} />
      <Stack.Screen name="CardDetails22" component={CardDetailsScreen22} />
      <Stack.Screen name="CardDetails23" component={CardDetailsScreen23} />
      <Stack.Screen name="CardDetails24" component={CardDetailsScreen24} />
      <Stack.Screen name="CardDetails25" component={CardDetailsScreen25} />
      <Stack.Screen name="Horizontal" component={HorizontalFlatList} />
      <Stack.Screen name="ImageFlatList" component={ImageFlatList} />
      <Stack.Screen name="ImageFlatList1" component={ImageFlatList1} />
      <Stack.Screen name="ImageFlatList2" component={ImageFlatList2} />
      <Stack.Screen name="Cart" component={CartScreen} />
    
    </Stack.Navigator>
  );
};

export default MainStack;


const styles = StyleSheet.create({
    bottomTabsIcon: {
       height:30,
       width:30
    }
  })