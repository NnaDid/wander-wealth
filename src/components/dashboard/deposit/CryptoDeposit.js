import { StyleSheet, Text, useWindowDimensions } from 'react-native'
import React ,{ useState }from 'react'
import { 
  ArrowLeftIcon, Box, Button, ButtonText, Center, 
  Heading, Icon, Input, InputField, VStack, KeyboardAvoidingView, 
  ScrollView, HStack, Fab, FabIcon, FabLabel, AddIcon, Modal, ModalBackdrop,
   ModalContent, ModalHeader, ModalCloseButton, CloseIcon, ModalBody, Toast, ToastTitle, ToastDescription,
   useToast,
   ModalFooter
} from '@gluestack-ui/themed';

import { Logo, COLORS } from '../../../utils/Accets';

const CryptoDeposit = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(false)
  const handleState = () => setShowPassword(!showPassword)
  const [showModal, setShowModal] = useState(false)
  const ref = React.useRef(null);
  
  const { height, width }  = useWindowDimensions();  
  const toast = useToast();

//   const [wallets, setWallet] = useState([]);



  const ToastFunction =()=>{
    setShowModal(false); 
    toast.show({
        placement: "top",
        render: ({ id }) => {
          return (
            <Toast nativeId={id} action="success">
              <VStack space="xs">
                <ToastTitle>{'Successful'}</ToastTitle>
                <ToastDescription>
                  {'Your Receive wallet was successfully created'}
                </ToastDescription>
              </VStack>
            </Toast>
          )
        },
      })
  }
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
                      <Text style={{fontSize:12,fontWeight:'bold', 
                                    textAlign:'justify', 
                                    backgroundColor:COLORS.primaryvariant2bg,
                                    paddingVertical:5,
                                    paddingHorizontal:10,
                                }} > 
                         To fund your account using this method, create a crypto wallet here, 
                         then make a transfer to the crypto wallet that you have created.
                         This method is pretty faster - fiat equivalent will be credited to your wallet
                     </Text>
                  </VStack>
                  <VStack space='md'>
                        
                        <Box  h={30}   w={320}  bg="$backgroundLight50"
                                sx={{  "_dark": {   bg: "$backgroundDark900"  }   }}
                                borderRadius="$md"
                        >
                        <Fab size="sm"  bg="$emerald400" placement="top right" isHovered={false} isDisabled={false} isPressed={false} onPress={() => { setShowModal(true) }} >
                            <FabIcon as={AddIcon} mr="$1"/>
                            <FabLabel> Create wallet </FabLabel>
                        </Fab>
                        </Box>
      


              <Modal  isOpen={showModal}   onClose={() => { setShowModal(false) }} finalFocusRef={ref} >
                    <ModalBackdrop />
                    <ModalContent>
                    <ModalHeader>
                        <Heading size="md">Choose receive wallet type</Heading>
                        <ModalCloseButton>
                           <Icon as={CloseIcon} />
                        </ModalCloseButton>
                    </ModalHeader>
                    <ModalBody height={height/2}>   
                    
                            <VStack>
                                  <Button mb={5} onPress={ToastFunction}> 
                                       <ButtonText style={{fontSize:12 }} > BTC - Bitcoin Testnet 3 </ButtonText>
                                 </Button>
                                  <Button mb={5} onPress={ToastFunction}> 
                                       <ButtonText style={{fontSize:12 }} > BTC - Lightning Network Testnet </ButtonText>
                                 </Button>

                                  <Button mb={5} onPress={ToastFunction}> 
                                       <ButtonText style={{fontSize:12 }} > ETH - Goerli </ButtonText>
                                 </Button>

                                  <Button mb={5} onPress={ToastFunction}> 
                                       <ButtonText style={{fontSize:12 }} > USDT - Goerli </ButtonText>
                                 </Button>

                                  <Button mb={5} onPress={ToastFunction}> 
                                       <ButtonText style={{fontSize:12 }} > USDC - Goerli </ButtonText>
                                 </Button>

                                  <Button mb={5} onPress={ToastFunction}> 
                                       <ButtonText style={{fontSize:12 }} > BUSD - BSC Testnet </ButtonText>
                                 </Button>

                                  <Button mb={5} onPress={ToastFunction}> 
                                       <ButtonText style={{fontSize:12 }} > BUSD - BSC Testnet </ButtonText>
                                 </Button>
                            </VStack>
                         
                    </ModalBody>
                    <ModalFooter>
                        <Button variant="outline" size="lg" action="secondary" mr="$3" onPress={() => { setShowModal(false) }}>
                            <ButtonText>Cancel</ButtonText>
                        </Button>
                    </ModalFooter>
                    </ModalContent>
                </Modal>

                  </VStack> 
                </Box>

            </ScrollView>
    </Center>
  </KeyboardAvoidingView>
  )
}

export default CryptoDeposit;

const styles = StyleSheet.create({})