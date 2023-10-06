import { StyleSheet, Text, useWindowDimensions } from 'react-native'
import React ,{ useState }from 'react'
import { 
  ArrowLeftIcon, Box, Button, ButtonText, Center, 
  Heading, Icon, Input, InputField, VStack, KeyboardAvoidingView, 
  ScrollView, HStack, Image, FormControl, FormControlHelper, FormControlHelperText, InputSlot, InputIcon, 
  EyeOffIcon, EyeIcon, FormControlError, FormControlErrorIcon, FormControlErrorText, AlertCircleIcon, ArrowRightIcon,
} from '@gluestack-ui/themed';

import { Logo, COLORS } from '../utils/Accets';

const Login = ({ navigation }) => {
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
                    <Heading lineHeight={30} fontSize={20} textAlign='center'>  Account Login  </Heading>
                    <HStack justifyContent='space-between' alignItems='center' bg={COLORS.ornagebg} p={15} borderRadius={4} mb={14}> 
                      <Box width={'100%'} alignItems='center'>
                        <Image source={Logo} alt="logo" style={{resizeMode:'contain'}}/>
                      </Box>
                    </HStack>
                  </VStack>
                  <VStack space='md'>


                    <FormControl> 
                            <Input  size="xl">
                              <InputField  placeholder="Email/Phone Number" fontSize={12}/>
                            </Input>
                            <FormControlHelper>
                              <FormControlHelperText fontSize={10}>
                                Email/Phone Number
                              </FormControlHelperText>
                            </FormControlHelper>
                    </FormControl>

                    <FormControl>
                              <Input  size="xl">
                              <InputField  placeholder="Choose password" type={showPassword ? "text" : "password"}  fontSize={12}/>
                              <InputSlot pr="$3" onPress={handleState}>
                                  {/* EyeIcon, EyeOffIcon are both imported from 'lucide-react-native' */}
                                  <InputIcon   as={showPassword ? EyeIcon : EyeOffIcon} color={COLORS.ornagebg} />
                                </InputSlot>
                            </Input>
                              <FormControlHelper>
                                <FormControlHelperText fontSize={10}>
                                 Enter your password
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
                    <Button  size='xl' bg={COLORS.ornagebg} sx={{
                            ":hover": {
                              bg: COLORS.primaryvariantbg,
                            },
                            ":active": {
                              bg: COLORS.primaryvariant2bg,
                            },
                          }}
                          onPress={()=> navigation.navigate('Dashboard')}
                          >
                      <ButtonText>Login</ButtonText>
                    </Button>
                    <HStack justifyContent='space-between'>
                        <Box flexDirection='row'>
                          <Button variant='link' p='$0' size='sm' onPress={()=> navigation.navigate('Login')}> 
                          <Icon size='md' mr='$1' as={ArrowLeftIcon} />
                          <ButtonText> Back to Signup  </ButtonText>
                        </Button>
                      </Box>

                        <Box flexDirection='row'>
                          <Button variant='link' p='$0' size='sm' onPress={()=> navigation.navigate('ForgotPassword')}> 
                          <ButtonText> Forgot password?  </ButtonText>
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

export default Login;

const styles = StyleSheet.create({})