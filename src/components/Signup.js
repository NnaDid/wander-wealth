import { StyleSheet, Text, View ,useWindowDimensions} from 'react-native'
import React, { useState } from 'react'
import { ArrowLeftIcon, Box, Button, ButtonText, Center, Heading, Icon, Input, InputField, VStack, 
  KeyboardAvoidingView, InputSlot, EyeIcon, EyeOffIcon, InputIcon, FormControlHelper, FormControlHelperText, 
  AlertCircleIcon, FormControlErrorText, FormControl, FormControlError, FormControlErrorIcon,
  ScrollView,Image, HStack
} from '@gluestack-ui/themed';

import { Logo, COLORS } from '../utils/Accets';
 

const Signup = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(false)
  const handleState = () => setShowPassword(!showPassword)
  
  const { height, width }  = useWindowDimensions();  
  return (
      <>
          <KeyboardAvoidingView  behavior={Platform.OS === "ios" ? "height" : "height"}  style={{ flex: 1, zIndex: 999 }}>
              <ScrollView>
                  <Box p='$5'
                      borderColor='$backgroundDark700' 
                      borderRadius='$lg' 
                      width={width} height={height} 
                      sx={{ _dark:{  borderColor:'$backgroundDark700' } }}
                  >
                  <VStack space='xs' pb='$0' alignItems='center'>
                    <Heading lineHeight={30} fontSize={20} textAlign='center'> Create Account  </Heading>
                    <HStack justifyContent='space-between' alignItems='center' bg='$orange400' p={5} borderRadius={4} mb={14}>
                      <Box width={'80%'} >
                        <Text fontSize='$sm' textAlign='justify' style={{ color:'#fff', fontWeight:800, paddingHorizontal:20}} >
                          You are just a step away from enjoying the world of hassle-free crossboarder trasactions.
                        </Text>
                      </Box>
                      <Box width={'20%'}>
                        <Image source={Logo} alt="logo" style={{resizeMode:'contain'}}/>
                      </Box>
                    </HStack>
                  
                  </VStack>
                  <VStack space='md'>

                  <FormControl>
                    <Input  size="xl">
                      <InputField  placeholder="Your fullname" fontSize={12} />
                    </Input>
                    <FormControlHelper>
                      <FormControlHelperText fontSize={10}>
                        Legal name as it would appear in your documents
                      </FormControlHelperText>
                    </FormControlHelper> 
                  </FormControl>

                    <FormControl> 
                            <Input  size="xl">
                              <InputField  placeholder="Email" fontSize={12}/>
                            </Input>
                            <FormControlHelper>
                              <FormControlHelperText fontSize={10}>
                                Your functional email address. Eg. damina@gmail.com
                              </FormControlHelperText>
                            </FormControlHelper>
                    </FormControl>

                    <FormControl> 
                            <Input  size="xl">
                            <InputField  placeholder="Phone Number" fontSize={12}/>
                            </Input>
                            <FormControlHelper>
                              <FormControlHelperText fontSize={10}>
                                Your Active Phone Number . Eg. +234901xxxxxxx
                              </FormControlHelperText>
                            </FormControlHelper>
                    </FormControl> 


                    <FormControl>
                              <Input  size="xl">
                              <InputField  placeholder="Choose password" type={showPassword ? "text" : "password"}  fontSize={12}/>
                              <InputSlot pr="$3" onPress={handleState}>
                                  {/* EyeIcon, EyeOffIcon are both imported from 'lucide-react-native' */}
                                  <InputIcon   as={showPassword ? EyeIcon : EyeOffIcon} color={COLORS.primaryvariantbg} />
                                </InputSlot>
                            </Input>
                              <FormControlHelper>
                                <FormControlHelperText fontSize={10}>
                                  Choose your password
                                </FormControlHelperText>
                              </FormControlHelper>
                              <FormControlError>
                                <FormControlErrorIcon as={AlertCircleIcon} />
                                <FormControlErrorText>
                                  Atleast 6 characters are required.
                                </FormControlErrorText>
                              </FormControlError>
                    </FormControl>

                <FormControl>
                          <Input  size="xl">
                          <InputField  placeholder="Confirm password" type={showPassword ? "text" : "password"} fontSize={12} maxLength={6}/>
                          <InputSlot pr="$3" onPress={handleState}> 
                              <InputIcon  as={showPassword ? EyeIcon : EyeOffIcon}  color={COLORS.primaryvariantbg}/>
                          </InputSlot>
                        </Input>
                        <FormControlHelper>
                          <FormControlHelperText fontSize={10}>
                            Confirm password
                          </FormControlHelperText>
                        </FormControlHelper>
                        <FormControlError>
                          <FormControlErrorIcon as={AlertCircleIcon} />
                          <FormControlErrorText>
                            Atleast 6 characters are required.
                          </FormControlErrorText>
                        </FormControlError>
                </FormControl>

                  </VStack>
                  <VStack space='lg' pt='$4'>
                    <Button  size='xl' bg='$orange500' sx={{
                            ":hover": {
                              bg: COLORS.primaryvariantbg,
                            },
                            ":active": {
                              bg: COLORS.primaryvariant2bg,
                            },
                          }}>
                      <ButtonText> Create Account </ButtonText>
                    </Button>
                    <Box flexDirection='row'>
                      <Button variant='link' p='$0' size='sm' onPress={()=> navigation.navigate('Login')}> 
                        <Icon size='md' mr='$1' as={ArrowLeftIcon} />
                        <ButtonText> Back to Login  </ButtonText>
                      </Button>
                    </Box>
                  </VStack>
                </Box>

            </ScrollView>
          </KeyboardAvoidingView>
      </>
  )
}

export default Signup

const styles = StyleSheet.create({})