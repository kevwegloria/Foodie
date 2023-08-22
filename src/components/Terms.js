import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useState } from 'react';
import Checkbox from 'expo-checkbox';


export default function Terms ({ navigation }) {

  const [isChecked, setChecked] = useState(false);


return (
    <View style={{paddingBottom: 20, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
       <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? '#ffa914' : undefined}
        />
      <Text>
        I have read the <Text onPress={() => navigation.navigate('Terms')} style={{ color: '#036db0' }}>
          terms and conditions
        </Text>
      </Text>
    </View>
  );
};


const styles = StyleSheet.create ({
 checkbox: {
  marginRight: 10
 }
})
