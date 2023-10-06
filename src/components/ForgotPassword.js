import { StyleSheet, Text, useWindowDimensions } from 'react-native'
import React ,{ useState }from 'react'
import { 
  ArrowLeftIcon, Box, Button, ButtonText, Center, 
  Heading, Icon, Input, InputField, VStack, KeyboardAvoidingView, 
  ScrollView, HStack, Image, FormControl, FormControlHelper, FormControlHelperText, InputSlot, InputIcon, 
  EyeOffIcon, EyeIcon, FormControlError, FormControlErrorIcon, FormControlErrorText, AlertCircleIcon, ArrowRightIcon,
} from '@gluestack-ui/themed';

import { Logo , COLORS} from '../utils/Accets';

const ForgotPassword = ({ navigation }) => {
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
                  <VStack space='xs' pb='$0' alignItems='center' bg={COLORS.ornagebg} p={5} borderRadius={4} mb={15} >
                    <Heading lineHeight={30} fontSize={20} textAlign='center'>  Password Recovery </Heading>
                    <HStack justifyContent='space-between' alignItems='center' p={15}  mb={14}> 
                      <Box width={'100%'} alignItems='center' >
                        <Image source={Logo} alt="logo" style={{resizeMode:'contain'}}/>
                      </Box>
                    </HStack> 
                  </VStack>
                  <VStack space='md'> 
                    <FormControl> 
                            <Input  size="xl">
                              <InputField  placeholder="Enter your email" fontSize={12}/>
                            </Input>
                            <FormControlHelper>
                              <FormControlHelperText fontSize={10}>
                                The email address used during account creation.
                              </FormControlHelperText>
                            </FormControlHelper>
                    </FormControl> 

                  </VStack>
                  <VStack space='lg' pt='$4'>
                    <Button  size='xl' bg='$orange400' sx={{
                            ":hover": {
                              bg: "#FF970070",
                            },
                            ":active": {
                              bg: "#FF970080",
                            },
                          }}>
                      <ButtonText>Submit</ButtonText>
                    </Button>
                    <HStack justifyContent='space-between'>
                        <Box flexDirection='row'>
                          <Button variant='link' p='$0' size='sm' onPress={()=> navigation.navigate('Signup')}> 
                          <Icon size='md' mr='$1' as={ArrowLeftIcon} />
                          <ButtonText> Back to Signup  </ButtonText>
                        </Button>
                      </Box>

                        <Box flexDirection='row'>
                          <Button variant='link' p='$0' size='sm' onPress={()=> navigation.navigate('Login')}> 
                          <ButtonText> Back to Login  </ButtonText>
                          <Icon size='md' mr='$1' as={ArrowRightIcon} />
                        </Button>
                      </Box>
                    </HStack>
                   
                  </VStack>
                </Box>

            </ScrollView>
    </Center>
  </KeyboardAvoidingView>
  )
}

export default ForgotPassword;

const styles = StyleSheet.create({})