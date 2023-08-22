import React from "react";
import { View, Text, SafeAreaView, StyleSheet, Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import HorizontalFlatList from "../components/HorizontalFlatlist";

export default function ProductsScreen({ navigation }) {
    return (
       <SafeAreaView style={styles.container} >
         <View style={styles.titlecontainer}>
         <Icon
          name="arrow-left"
          size={20}
          onPress={() => navigation.goBack()}
          style={{fontSize: 25, marginTop:13, marginLeft: 20,  color: '#036db0', }}
        />
    
            <Text style= {styles.title}>
                Menu
            </Text>
         </View>

         <View>

         </View>
         <HorizontalFlatList />
       </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
      paddingTop: 60
    },
    title: {
        fontFamily: 'LondrinaSolid-Regular',
        color: '#036db0',
        fontSize: 40,
        marginLeft: 30
    },
    titlecontainer: {
        flexDirection: 'row',
        
    }
    
    
})

