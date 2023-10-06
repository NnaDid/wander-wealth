import React, {useState, useRef} from 'react'
import {Box, Text, Image, FlatList} from '@gluestack-ui/themed';
import OnboardingItem from './OnboardingItem';
import Paginator from './Paginator';
import {TogglerButton} from './TogglerButton';
import {Animated } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Slides = [
  {
      id:'1',
      title:'Easily Send Money',
      desc:'Easily send, spend and convert FX at the best current market rates without having to go through the banks bureaucracy, losing your money to dishonest exchanges, expensive vendors or even worst getting your money stolen as a result of keeping cash',
      src: require('../../assets/onboarding/convert.png')
  },
  {
      id:'2',
      title:'Get Vitual Card',
      desc:'Get virtual card be able to spend internationally pay utility and so much more',
      src: require('../../assets/onboarding/creditcard.png') 
  },
  {
      id:'3',
      title:'Convert Crypto To Fiat',
      desc:'Convert your local currency into stable cryptocurrency and send money globally using the best current market rates that is you\'ll be getting your dollar equivalent in crypto making foreign exchange a work in the park',
      src: require('../../assets/onboarding/crypto.png')
  },

];

export default Onboarding = ( { navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollX = useRef(new Animated.Value(0)).current;

  const viewableItemsChanged = useRef( ( { viewableItems }) =>{
      setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef( { viewAreaCoveragePercentThreshold:50 }).current;

  const slidesRef = useRef(null);


  const scrollTo = async ()=>{
     if ( currentIndex < Slides.length - 1 ){
      slidesRef.current.scrollToIndex({ index: currentIndex + 1})
     }else{
       console.log("Slides Ended")
       try {
           await AsyncStorage.setItem('@visited','yes');
           navigation.navigate('Home');
       } catch (error) {
         console.log('Error Setting Async Storage Item',error)
       }
     }
  }


  return ( 
    <Box alignItems="center" display="flex">
          <FlatList
            data={Slides}
            renderItem={({ item }) => ( <OnboardingItem  item={item}/>)}
            keyExtractor={(item) => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            bounces={false}
            onScroll ={Animated.event([{nativeEvent: {contentOffset:{x: scrollX}}}],{
              useNativeDriver:false
            })}
            scrollEventThrottle={32}
            onViewableItemsChanged={viewableItemsChanged}
            viewabilityConfig={viewConfig}
            ref={slidesRef}
          /> 
          <Paginator data ={Slides} scrollX ={scrollX}/>
          <TogglerButton scrollTo ={scrollTo} percentage={(currentIndex + 1) * (100 / 4)}/>

    </Box>

  )
}
