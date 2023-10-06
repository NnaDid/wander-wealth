import { StyleSheet, Text, useWindowDimensions } from 'react-native'
import React ,{ useState }from 'react'
import { 
  ArrowLeftIcon, Box, Button, ButtonText, Center, 
  Heading, Icon, Input, InputField, VStack, KeyboardAvoidingView, 
  ScrollView, HStack, Image, FormControl, FormControlHelper, FormControlHelperText, InputSlot, InputIcon, 
  EyeOffIcon, EyeIcon, FormControlError, FormControlErrorIcon, FormControlErrorText, AlertCircleIcon, ArrowRightIcon,
} from '@gluestack-ui/themed';

import { Logo, COLORS } from '../../../utils/Accets';

const BankDeposit = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(false)
  const handleState = () => setShowPassword(!showPassword)
  
  const { height, width }  = useWindowDimensions();  

  return ( 
    <KeyboardAvoidingView  behavior={Platform.OS === "ios" ? "height" : "height"}  style={{ flex: 1, zIndex: 999 }}>
      <Center>
      <ScrollView>
                  <Box p='$5'
                      borderColor='$backgroundDark700' 
                      borderRadius='$lg' 
                      width={width} height={height} 
                      sx={{ _dark:{  borderColor:'$backgroundDark700' } }}
                  >
                  <VStack space='xs' pb='$0' alignItems='center'>
                    <Text lineHeight={30} style={{fontSize:12,fontWeight:500, textAlign:'justify'}} textAlign='center' p={10}> 
                         To fund your account using this method, make a bank transfer to any of the following  bank accounts
                         and your wallet will be credited with the same. This usually takes a few minutes.
                    </Text>
                    <HStack justifyContent='space-between' alignItems='center' borderWidth ={1} 
                           borderColor={COLORS.ornagebg} borderRadius={4} mb={14}
                           height={80}
                           > 
                      <Box width={'20%'} alignItems='center' bg={COLORS.ornagebg} p={5} height={80}>
                        <Image source={Logo} alt="logo" style={{resizeMode:'contain'}} />
                      </Box>
                      <VStack width={'80%'} p={10}>
                            <Text style={{fontSize:18,fontWeight:'bold', textAlign:'justify'}}>John Makrn Hyniu </Text>
                            <HStack> 
                                <Text style={{fontSize:12,fontWeight:500, textAlign:'justify'}}>Account Number:</Text>
                                <Text style={{fontSize:12,fontWeight:500, textAlign:'justify'}}>209876109 </Text>
                            </HStack>
                            <HStack> 
                                <Text style={{fontSize:12,fontWeight:500, textAlign:'justify'}}>Bank:</Text>
                                <Text style={{fontSize:12,fontWeight:500, textAlign:'justify'}}>Barclays</Text>
                            </HStack>
                      </VStack>
                    </HStack>
                    <HStack justifyContent='space-between' alignItems='center' borderWidth ={1} 
                           borderColor={COLORS.ornagebg} borderRadius={4} mb={14}
                           height={80}
                           > 
                      <Box width={'20%'} alignItems='center' bg={COLORS.ornagebg} p={5} height={80}>
                        <Image source={Logo} alt="logo" style={{resizeMode:'contain'}} />
                      </Box>
                      <VStack width={'80%'} p={10}>
                            <Text style={{fontSize:18,fontWeight:'bold', textAlign:'justify'}}>John Makrn Hyniu </Text>
                            <HStack> 
                                <Text style={{fontSize:12,fontWeight:500, textAlign:'justify'}}>Account Number:</Text>
                                <Text style={{fontSize:12,fontWeight:500, textAlign:'justify'}}>209876109 </Text>
                            </HStack>
                            <HStack> 
                                <Text style={{fontSize:12,fontWeight:500, textAlign:'justify'}}>Bank:</Text>
                                <Text style={{fontSize:12,fontWeight:500, textAlign:'justify'}}>Barclays</Text>
                            </HStack>
                      </VStack>
                    </HStack>
                    <HStack justifyContent='space-between' alignItems='center' borderWidth ={1} 
                           borderColor={COLORS.ornagebg} borderRadius={4} mb={14}
                           height={80}
                           > 
                      <Box width={'20%'} alignItems='center' bg={COLORS.ornagebg} p={5} height={80}>
                        <Image source={Logo} alt="logo" style={{resizeMode:'contain'}} />
                      </Box>
                      <VStack width={'80%'} p={10}>
                            <Text style={{fontSize:18,fontWeight:'bold', textAlign:'justify'}}>John Makrn Hyniu </Text>
                            <HStack> 
                                <Text style={{fontSize:12,fontWeight:500, textAlign:'justify'}}>Account Number:</Text>
                                <Text style={{fontSize:12,fontWeight:500, textAlign:'justify'}}>209876109 </Text>
                            </HStack>
                            <HStack> 
                                <Text style={{fontSize:12,fontWeight:500, textAlign:'justify'}}>Bank:</Text>
                                <Text style={{fontSize:12,fontWeight:500, textAlign:'justify'}}>Barclays</Text>
                            </HStack>
                      </VStack>
                    </HStack>
                    <HStack justifyContent='space-between' alignItems='center' borderWidth ={1} 
                           borderColor={COLORS.ornagebg} borderRadius={4} mb={14}
                           height={80}
                           > 
                      <Box width={'20%'} alignItems='center' bg={COLORS.ornagebg} p={5} height={80}>
                        <Image source={Logo} alt="logo" style={{resizeMode:'contain'}} />
                      </Box>
                      <VStack width={'80%'} p={10}>
                            <Text style={{fontSize:18,fontWeight:'bold', textAlign:'justify'}}>John Makrn Hyniu </Text>
                            <HStack> 
                                <Text style={{fontSize:12,fontWeight:500, textAlign:'justify'}}>Account Number:</Text>
                                <Text style={{fontSize:12,fontWeight:500, textAlign:'justify'}}>209876109 </Text>
                            </HStack>
                            <HStack> 
                                <Text style={{fontSize:12,fontWeight:500, textAlign:'justify'}}>Bank:</Text>
                                <Text style={{fontSize:12,fontWeight:500, textAlign:'justify'}}>Barclays</Text>
                            </HStack>
                      </VStack>
                    </HStack>
                  </VStack>
                  <VStack space='md'>  

                  </VStack> 
                </Box>

            </ScrollView>
    </Center>
  </KeyboardAvoidingView>
  )
}

export default BankDeposit;

const styles = StyleSheet.create({})