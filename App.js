
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './src/Navigation/ScreenStack';
import { AppRegistry } from 'react-native';
import * as Font from 'expo-font';
import { useState, useEffect } from "react";
import { UserProvider } from './src/components/UserContext';


export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);



  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        'LondrinaSolid-Regular': require('./assets/fonts/LondrinaSolid-Regular.ttf'),
        'Montserrat': require('./assets/fonts/Montserrat.ttf'),
       
      });
      setFontsLoaded(true);
    };

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null; 
  };


  return (
    <UserProvider>
   
   <NavigationContainer >
    <MainStack />
    
  </NavigationContainer>
 </UserProvider>
  );
}

AppRegistry.registerComponent('Foodie', () => App);
