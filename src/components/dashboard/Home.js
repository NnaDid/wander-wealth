import { StyleSheet, Text, View ,useWindowDimensions} from 'react-native'
import React, { useState } from 'react'
import { ArrowLeftIcon, Box, Button, ButtonText, Center, Heading, Icon, Input, InputField, VStack, 
  KeyboardAvoidingView, InputSlot, EyeIcon, EyeOffIcon, InputIcon, FormControlHelper, FormControlHelperText, 
  AlertCircleIcon, FormControlErrorText, FormControl, FormControlError, FormControlErrorIcon,
  ScrollView,Image, HStack, ThreeDotsIcon, ChevronsUpDownIcon, StarIcon, SettingsIcon, ArrowRightIcon, 
  Actionsheet, ActionsheetBackdrop, ActionsheetContent, ActionsheetDragIndicator, 
  ActionsheetDragIndicatorWrapper, FormControlLabel, FormControlLabelText, ModalBody, 
  CloseIcon, ModalHeader, ModalBackdrop, Modal, ModalContent, ModalCloseButton, 
  ModalFooter, Menu, MenuItem, MenuItemLabel, GlobeIcon, useToast, Toast, ToastTitle, ToastDescription
} from '@gluestack-ui/themed';

import { COLORS , Services} from '../../utils/Accets';
import { PaintBucket, PuzzleIcon } from 'lucide-react-native';

const Home = ( { navigation } ) => {
    const { height, width }  = useWindowDimensions();  

    const [showActionsheet, setShowActionsheet] = useState(false);
    const [showModal, setShowModal] = useState(false)
  
    const handleClose = () => setShowActionsheet(!showActionsheet);
    const ref = React.useRef(null);
  
    const toast = useToast();
  
    return (
        <>
            <KeyboardAvoidingView  behavior={Platform.OS === "ios" ? "height" : "height"}  style={{ flex: 1, zIndex: 999 }}>            
  
                   <Box bg={COLORS.primarybg} h={height/5}>
                      <Box p={20}>
                          <HStack justifyContent='space-between'>
                               <Heading>Weclome  Lorenzo!</Heading>
                               <HStack>
                                   <Button variant='link' onPress={()=> navigation.navigate('My Profile')} >
                                          <Icon as={SettingsIcon} m="$2" w="$6" h="$6"  />
                                   </Button>
                                   <Button variant='link' onPress={()=> navigation.navigate('My Profile')} >
                                          <Icon as={ThreeDotsIcon} m="$2" w="$6" h="$6"  />
                                   </Button>
                               </HStack> 
                          </HStack>
                          <VStack justifyContent='space-between'>
                               <Heading color={COLORS.primaryWhite}>Your Balance</Heading> 
                              <HStack>
                                  <Heading color={COLORS.primaryTextBlack}>$890,000.00</Heading> 
                                  <Button variant='link'  onPress={()=> navigation.navigate('My Profile')}> 
                                       <Icon as={ChevronsUpDownIcon} m="$2" w="$4" h="$4"  />
                                  </Button> 
                              </HStack>
                          </VStack> 
                      </Box>                    
                   </Box>
                   {/* Body of the dashboard */}
                   <ScrollView>
                      <Box p={20} mt={4}>   
                          <HStack justifyContent='space-between' alignItems='center'>
                                  <Box h={100} px={10} mb={4} width={'49%'} onPress={handleClose}>
                                      <Button variant='outline'  onPress={handleClose} height={100}>
                                              <HStack justifyContent='space-between' alignItems='center'>
                                                  <VStack>
                                                      <Heading fontSize={13} color={COLORS.primaryvariant2bg} fontWeight={'bold'} textTransform='uppercase' style={{ ...COLORS.textshadow }}> Fund Wallet </Heading>
                                                      <Button variant='link' onPress={handleClose} >
                                                              <Text size="$xs"> Add money to your wallet.</Text>
                                                      </Button>
                                                  </VStack>
                                                  <Button variant='link' onPress={()=> navigation.navigate('My Profile')} >
                                                          <Icon as={ArrowRightIcon} mr="$2" w="$4" h="$4" />
                                                  </Button>
                                              </HStack>  
                                      </Button> 
                                  </Box> 
                                  <Box h={100} px={10} mb={4} width={'49%'}>
                                  <Button variant='outline' onPress={() => setShowModal(true)} ref={ref} height={100}>
                                      <HStack justifyContent='space-between' alignItems='center'>
                                          <VStack>
                                              <Heading fontSize={13} color={COLORS.primaryvariant2bg} fontWeight={'bold'} textTransform='uppercase' style={{ ...COLORS.textshadow }} >Send Money </Heading>
                                              <Text size="$xs"> Send money to wihout borders - fast and easy. </Text>
                                          </VStack>
                                          <Button variant='link' onPress={() => setShowModal(true)} ref={ref}>
                                              <Icon as={ArrowRightIcon} mr="$2" w="$4" h="$4" />
                                          </Button>
                                      </HStack> 
                                      </Button>
                                  </Box> 
                          </HStack>
  
                          <HStack justifyContent='space-between' alignItems='center'>
                                  <Box h={100} px={10} borderWidth={1} borderColor={COLORS.primaryvariant2bg} mb={4} width={'49%'}>
                                      <HStack justifyContent='space-between' alignItems='center'>
                                          <VStack>
                                              <Heading fontSize={13} color={COLORS.primaryvariant2bg} fontWeight={'bold'} textTransform='uppercase' style={{ ...COLORS.textshadow }}>Get Vitual Card  </Heading>
                                              <Text size="$xs"> Get virtual card be able to spend internationally ...</Text>
                                          </VStack>
                                          <Button variant='link' onPress={()=> navigation.navigate('My Profile')} >
                                                  <Icon as={ArrowRightIcon} mr="$2" w="$4" h="$4" />
                                          </Button>
                                      </HStack> 
                                  </Box> 
                                  <Box h={100} px={10} borderWidth={1} borderColor={COLORS.primaryvariant2bg} mb={4} width={'49%'}  opacity={0.5}>
                                      <HStack justifyContent='space-between' alignItems='center'>
                                          <VStack>
                                              <Heading fontSize={13} color={COLORS.primaryvariant2bg} fontWeight={'bold'} textTransform='uppercase'>Airtime topup </Heading>
                                              <Text size="$xs"> Global Airtime top up </Text>
                                          </VStack>
                                          <Button variant='link' onPress={()=> navigation.navigate('My Profile')} >
                                              <Icon as={ArrowRightIcon} mr="$2" w="$4" h="$4" />
                                          </Button>
                                      </HStack> 
                                  </Box> 
                          </HStack>
  
                          <HStack justifyContent='space-between' alignItems='center'>
                                  <Box h={100} px={10} borderWidth={1} borderColor={COLORS.primaryvariant2bg} mb={4} width={'49%'} borderRadius={6} opacity={0.5}>
                                      <HStack justifyContent='space-between' alignItems='center'>
                                          <VStack>
                                              <Heading fontSize={13} color={COLORS.primaryvariant2bg} fontWeight={'bold'} textTransform='uppercase'>Tours and hotels</Heading>
                                              <Text size="$xs"> Easily book your favourite hotels/appartment </Text>
                                          </VStack>
                                          <Button variant='link' onPress={()=> navigation.navigate('My Profile')} >
                                                  <Icon as={ArrowRightIcon} mr="$2" w="$4" h="$4" />
                                          </Button>
                                      </HStack> 
                                  </Box> 
                                  <Box h={100} px={10} borderWidth={1} borderColor={COLORS.primaryvariant2bg} mb={4} width={'49%'} opacity={0.5}>
                                      <HStack justifyContent='space-between' alignItems='center'>
                                          <VStack>
                                              <Heading fontSize={13} color={COLORS.primaryvariant2bg} fontWeight={'bold'} textTransform='uppercase'> Car rentals </Heading>
                                              <Text size="$xs"> For all your car rental needs</Text>
                                          </VStack>
                                          <Button variant='link' onPress={()=> navigation.navigate('My Profile')} >
                                              <Icon as={ArrowRightIcon} mr="$2" w="$4" h="$4" />
                                          </Button>
                                      </HStack> 
                                  </Box> 
                          </HStack>
                          <HStack justifyContent='space-between' alignItems='center'>
                                  <Box h={100} px={10} borderWidth={1} borderColor={COLORS.primaryvariant2bg} mb={4} width={'49%'} opacity={0.5}>
                                      <HStack justifyContent='space-between' alignItems='center'>
                                          <VStack>
                                              <Heading fontSize={13} color={COLORS.primaryvariant2bg} fontWeight={'bold'} textTransform='uppercase'>Buy Gift cards</Heading>
                                              <Text size="$xs"> Buy and resell gift cards </Text>
                                          </VStack>
                                          <Button variant='link' onPress={()=> navigation.navigate('My Profile')} >
                                                  <Icon as={ArrowRightIcon} mr="$2" w="$4" h="$4" />
                                          </Button>
                                      </HStack> 
                                  </Box> 
                                   
                          </HStack>
                     </Box>
                   </ScrollView>
  
                   {/* Action sheet for funding options*/}
                   <Actionsheet isOpen={showActionsheet} onClose={handleClose} >
                      <ActionsheetBackdrop />
                      <ActionsheetContent height={height}>
                      <ActionsheetDragIndicatorWrapper>
                          <ActionsheetDragIndicator />
                      </ActionsheetDragIndicatorWrapper>
                      <VStack w="$full" p={20}> 
                          <FormControl mt={20}>
                              <Button  onPress={()=>{handleClose(); navigation.navigate('Bank Deposit') }} mt={20} h ={75}  bg={COLORS.primarybg} sx={{
                                              ":hover": {  bg: COLORS.primaryTextBlack, color:COLORS.primaryTextBlack, },
                                              ":active":{ bg: COLORS.primaryTextBlack, color:COLORS.primaryTextBlack, },
                                          }} >
                                  <ButtonText>BANK DEPOSIT</ButtonText>
                              </Button>
                          </FormControl>
                          <FormControl mt={10}>
                              <Button  onPress={()=>{handleClose(); navigation.navigate('Crypto Deposit') }} mt={20} h ={75}  bg={COLORS.primaryTextBlack} sx={{
                                              ":hover": {bg: COLORS.primaryTextBlack, color:COLORS.primaryTextBlack },
                                              ":active": {bg: COLORS.primaryTextBlack, color:COLORS.primaryTextBlack }, }} >
                                  <ButtonText>CRYPTO DEPOSIT</ButtonText>
                              </Button>
                          </FormControl>
                      </VStack>
                      </ActionsheetContent>
                  </Actionsheet>
  
  
  
                  {/* MODAL FOR SENDING FUND */}
                  <Modal  isOpen={showModal}   onClose={() => { setShowModal(false) }} finalFocusRef={ref} >
                      <ModalBackdrop />
                      <ModalContent>
                      <ModalHeader>
                          <Heading size="lg">Send Momey</Heading>
                          <ModalCloseButton>
                          <Icon as={CloseIcon} />
                          </ModalCloseButton>
                      </ModalHeader>
                      <ModalBody height={height/2}> 
                          
                          <Menu placement="top"
                              trigger={({ ...triggerProps }) => {
                                  return (
                                  <Button {...triggerProps} mb={15} bg={COLORS.primarybg}>
                                      <ButtonText>From ...</ButtonText>
                                  </Button>
                                  );
                              }}
                              >
                              <MenuItem key="Belgium" textValue="Belgium"> 
                                  <MenuItemLabel size='sm'>
                                      Belgium
                                  </MenuItemLabel>
                              </MenuItem>
  
                              <MenuItem key="Finland" textValue="Finland"> 
                                  <MenuItemLabel size='sm'>
                                      Finland
                                  </MenuItemLabel>
                              </MenuItem>
                              <MenuItem key="Poland" textValue="Poland"> 
                                  <MenuItemLabel size='sm'>
                                      Poland
                                  </MenuItemLabel>
                              </MenuItem>
                         </Menu>
                          
                          <Menu
                              placement="top" 
                              trigger={({ ...triggerProps }) => {
                                  return (
                                  <Button {...triggerProps} bg={COLORS.primarybg}>
                                      <ButtonText>To ...</ButtonText>
                                  </Button>
                                  );
                              }}
                              >
                                  <MenuItem key="Romania" textValue="Romania"> 
                                      <MenuItemLabel size='sm'>
                                               Romania
                                      </MenuItemLabel>
                                  </MenuItem>
  
                                  <MenuItem key="Netherlands" textValue="Netherlands"> 
                                      <MenuItemLabel size='sm'>
                                          Netherlands
                                      </MenuItemLabel>
                                  </MenuItem>
                                <MenuItem key="Slovakia" textValue="Slovakia"> 
                                  <MenuItemLabel size='sm'>
                                      Slovakia
                                  </MenuItemLabel>
                              </MenuItem>
                                <MenuItem key="Bulgaria" textValue="Bulgaria"> 
                                  <MenuItemLabel size='sm'>
                                      Bulgaria
                                  </MenuItemLabel>
                              </MenuItem>
                                <MenuItem key="Denmark" textValue="Denmark"> 
                                  <MenuItemLabel size='sm'>
                                      Denmark
                                  </MenuItemLabel>
                              </MenuItem>
                         </Menu>
  
                          <FormControl mt={10}> 
                              <Input  size="xl">
                                <InputField  placeholder="Amount to send" type ="number" fontSize={12}/>
                              </Input>
                              <FormControlHelper>
                                <FormControlHelperText fontSize={10}>
                                  Amount to send
                                </FormControlHelperText>
                              </FormControlHelper>
                      </FormControl>
                      </ModalBody>
                      <ModalFooter>
                          <Button variant="outline" size="lg" action="secondary" mr="$3" onPress={() => { setShowModal(false) }}>
                          <ButtonText>Cancel</ButtonText>
                          </Button>
                          <Button  size="lg" variant="solid" action="positive" borderWidth="$0" 
                                   onPress={() => { 
                                      setShowModal(false); 
                                      toast.show({
                                          placement: "top",
                                          render: ({ id }) => {
                                            return (
                                              <Toast nativeId={id} action="success">
                                                <VStack space="xs">
                                                  <ToastTitle>{'Successful'}</ToastTitle>
                                                  <ToastDescription>
                                                    {'Your transaction was successful'}
                                                  </ToastDescription>
                                                </VStack>
                                              </Toast>
                                            )
                                          },
                                        })
                                    }} >
                              <ButtonText>Send</ButtonText>
                          </Button>
                      </ModalFooter>
                      </ModalContent>
                  </Modal>
  
          </KeyboardAvoidingView>
        </>
    )
}

export default Home

const styles = StyleSheet.create({})