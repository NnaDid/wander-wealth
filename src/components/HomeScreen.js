import { StyleSheet, Text, View, useWindowDimensions } from 'react-native' 
import {Box, Image,VStack, Button,ButtonText, Center } from '@gluestack-ui/themed';
import { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Logo , Loading, COLORS} from '../utils/Accets';  

import Onboarding from './Onboarding'; 


const HomeScreen = ( { navigation }) => {
    const { height, width }                  = useWindowDimensions();  
    const [loading, setLoading]              = useState(true);
    const [viewOboarding, setViewOnboarding] = useState(false);
  
    const checkOnboarded = async ()=>{
      try{
        const val = await AsyncStorage.getItem('@visited');
        if(val !==null){
          setViewOnboarding(true)
        }
      }catch(err){
        console.log('Error getting Item',err);
      } finally{
        setLoading(false);
      }
    }
  
  
    useEffect( () =>{
       checkOnboarded();
    },[]);


  return (
    <Box bg={ viewOboarding ? COLORS.primarybg : COLORS.primaryWhite }> 
     {loading ? <Loading  width={width} height={height} /> : viewOboarding ? (
      <Center > 
         <Box>
           <View alignItems="center" display="flex" flexDirection="column" justifyContent='center' width={width} height={height/2}>
            <Image source={Logo} alt="logo"  height={height/5} width={width/5} style={{resizeMode:'contain'}}/>
            <Text style={styles.txt}>Welcome to Wander Wealth</Text> 
           </View>

        <Box space="sm" alignItems="center" display="flex" flexDirection="column" px="$5" width={width} height={height/4} > 
            <Text  color="$coolGray600" textAlign="justify" sx={{ _dark: {color: '$warmGray200',   }, }}>
                Transaction Made Easy
            </Text>
       </Box>  
       
       <Box space="lg" alignItems="center" display="flex" flexDirection="column" px="$5" width={width} height={height/4} > 
            <VStack space="4xl" reversed={false} justifyContent='space-between' >
                    
                <Button size="xl" w={width/1.4} variant="outline" 
                        action="primary" 
                        borderColor="#fff" 
                        color="#FFF" 
                        sx={{
                            ":hover": {
                              bg: COLORS.primaryTextBlack,
                              color:COLORS.primaryTextBlack,
                            },
                            ":active": {
                              bg: COLORS.primaryTextBlack,
                              color:COLORS.primaryTextBlack,
                            },
                          }}
                          onPress={() => navigation.navigate('Signup') }
                        >
                    <ButtonText color="#fff" fontWeight={900}> Create Account </ButtonText> 
                </Button>

                <Button size="xl" w={width/1.4} variant="outline"  borderColor="#fff" action='positive'
                        sx={{
                            ":hover": {
                              bg: COLORS.primaryTextBlack,
                              color:COLORS.primaryTextBlack,
                            },
                            ":active": {
                              bg: COLORS.primaryTextBlack,
                              color:COLORS.primaryTextBlack,
                            },
                          }}
                          onPress={() => navigation.navigate('Login') }
                        >
                     <ButtonText color={COLORS.primaryWhite} fontWeight={900}> Login </ButtonText> 
                </Button>
       
            </VStack>
       </Box>

      </Box>  
      </Center>):<Onboarding/>}      
    </Box>

  )
}

export default HomeScreen;

const styles = StyleSheet.create({
      txt:{
        color:'#000',
        fontWeight:'800',
        fontSize:24
      }
})