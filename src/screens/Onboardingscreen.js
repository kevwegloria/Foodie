import React from "react";
import { View, Text, StyleSheet, FlatList,  Animated } from 'react-native'
import slides  from "../components/slides";
import OnboardingItem from "../components/OnboardingItem";
import { useState, useRef } from "react";
import Paginator from "../ExternalData/Paginator";
import NextButton from "../components/NextButton";


export default function OnboardingScreen({ navigation }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current; 
    const slidesRef = useRef(null);

    const viewableItemsChanged = useRef(({ viewableItems }) => {
        setCurrentIndex(viewableItems[0].index)
    }).current

    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

    const scrollTo = () => {
        if (currentIndex < slides.length - 1) {
            slidesRef.current.scrollToIndex({ index: currentIndex + 1 });
        } else {
            navigation.navigate('Signup')
        }
    }

    
    return (
       <View style={styles.container}>
        <View style={{ flex:3, }}>
        <FlatList data={slides} 
          renderItem={({item}) => <OnboardingItem item={item} /> } 
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={(item) => item.id  }
          onScroll={Animated.event([{ nativeEvent: {contentOffset: {x: scrollX  }}}], {useNativeDriver: false,})}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
          /> 
        </View>
 
        <Paginator data={slides} scrollX={scrollX} />
        <NextButton scrollTo={scrollTo} percentage={(currentIndex + 1) * (100 / slides.length)} />
       </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#28a1ce',
        paddingBottom:5,
        paddingTop:10
        
        

    },
   
})