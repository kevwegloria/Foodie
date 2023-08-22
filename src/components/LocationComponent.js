import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const locationOptions = [
  { label: 'Agege', value: 'agege' },
  { label: 'Ajeromi-Ifelodun', value: 'ajeromi' },
  { label: 'Alimosho', value: 'alimosho' },
  { label: 'Amuwo-Odofin', value: 'amuwo' },
  { label: 'Apapa', value: 'apapa' },
  { label: 'Badagry', value: 'badagry' },
  { label: 'Epe', value: 'epe' },
  { label: 'Eti-Osa', value: 'eti-osa' },
  { label: 'Ibeju-Lekki', value: 'ibeju-lekki' },
  { label: 'Ifako-Ijaiye', value: 'ifako-ijaiye' },
  { label: 'Ikeja', value: 'ikeja' },
  { label: 'Ikorodu', value: 'ikorodu' },
  { label: 'Kosofe', value: 'kosofe' },
  { label: 'Lagos Island', value: 'lagos-island' },
  { label: 'Lagos Mainland', value: 'lagos-mainland' },
  { label: 'Mushin', value: 'mushin' },
  { label: 'Ojo', value: 'ojo' },
  { label: 'Oshodi-Isolo', value: 'oshodi-isolo' },
  { label: 'Somolu', value: 'somolu' },
  { label: 'Surulere', value: 'surulere' },
  // Add more local government areas as needed
];




const LocationDropdown = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const onLocationChange = (value) => {
    setSelectedLocation(value);
  };

  return (
    <View style={styles.container}>
     
      <Picker
      style={styles.pick}
        selectedValue={selectedLocation}
        onValueChange={onLocationChange}
      >
        {locationOptions.map((option) => (
          
          <Picker.Item key={option.value} label={option.label} value={option.value}  />
        ))}
      </Picker>
      {/* {selectedLocation && (
        <Text>You selected: {locationOptions.find((option) => option.value === selectedLocation).label}</Text>
      )} */}
    </View>
  );
};

export default LocationDropdown;

const styles = StyleSheet.create ({
  container: {
  
    width: '90%',
    marginLeft: 16
   
  },
  pick: {
    color: '#ffa914',
    fontFamily: 'Montserrat'
  }
})