import React from 'react'
import { StyleSheet, View, useWindowDimensions} from 'react-native';
import {Box, Text, Image, VStack, HStack,Icon, Heading, Button, ButtonText} from '@gluestack-ui/themed';
import { CreditCardIcon, ZapIcon,ShieldCheckIcon, GlobeIcon } from 'lucide-react-native';

const wvcard = require('../../../../assets/wvcard.png');

import { COLORS } from '../../../utils/Accets';

const VirtualCard = () => {
  const { width, height} = useWindowDimensions();
  const twenty5percent  = width/4;
  const seventy5percent  = width - width/4;
  return (
    <Box py="$2" 
         sx={{ '_dark': { borderColor: '$trueGray100',},   '@base': {pl: 0, pr: 0,},  '@sm': {  pl: '$4',pr: '$5',},}}
         width={width}  
         height={height/1.4}    
  > 
      <VStack space="lg">
          <Image source={wvcard} alt="document"  height={height/3.9}  style={{width, resizeMode:'contain'}} />
          <Box space="sm" width={width}>

            <HStack alignItems="center" display="flex"  py="$1" width={width} >
              <Box space="sm" alignItems="center" px="$1" width={twenty5percent}>
                  <Icon  as={ZapIcon}  color={COLORS.primarybg} size={40} />
              </Box>
              <Box space="sm" alignItems="flex-start" display="flex" flexDirection="column" px="$1" width={seventy5percent}>
                <Heading style={{ fontSize:16}}> Instant Access </Heading>
                <Text style={{ fontSize:12}}> Apply and Acivate  instantly </Text>
              </Box>
            </HStack>

            <HStack alignItems="center" display="flex" py="$1" width={width} >
              <Box space="sm" alignItems="center" px="$1" width={twenty5percent}>
                  <Icon  as={CreditCardIcon}  color={COLORS.primarybg} size={40} />
              </Box>
              <Box space="sm" alignItems="flex-start" display="flex" flexDirection="column" px="$1" width={seventy5percent}>
                <Heading style={{ fontSize:16}}> Saftety </Heading>
                <Text style={{ fontSize:12}}> No Physical Handling, No Risk or loss</Text>
              </Box>
            </HStack>

            <HStack alignItems="center" display="flex" py="$1" width={width} >
              <Box space="sm" alignItems="center" px="$1" width={twenty5percent} >
                  <Icon  as={ShieldCheckIcon}  color={COLORS.primarybg} size={40} />
              </Box>
              <Box space="sm" alignItems="flex-start" display="flex" flexDirection="column" px="$1" width={seventy5percent} >
                <Heading style={{ fontSize:16}}> Security </Heading>
                <Text style={{ fontSize:12}}> Licensed and insured </Text>
              </Box>
            </HStack>
            
            <HStack alignItems="center" display="flex" py="$1" width={width} >
              <Box space="sm" alignItems="center" px="$1" width={twenty5percent} >
                  <Icon  as={GlobeIcon}  color={COLORS.primarybg} size={40} />
              </Box>
              <Box space="sm" alignItems="flex-start" display="flex" flexDirection="column" px="$1" width={seventy5percent}>
                <Heading style={{ fontSize:16}}> Globally Acceptable </Heading>
                <Text style={{ fontSize:12}}> Apply and Acivate  instantly </Text>
              </Box>
            </HStack>

            <VStack alignItems="center" display="flex" py="$1" width={width} >
               <Button bgColor={COLORS.ornagebg} 
                       width={width/1.25} 
                       size='lg' 
                       sx={{
                            ":hover": { bg: COLORS.primaryvariantbg,},
                            ":active":{ bg: COLORS.primaryvariant2bg,},
                          }}
                >
                    <ButtonText> Get it Now </ButtonText>
               </Button>
            </VStack>

           
          </Box>
      </VStack>
    
    </Box>
  )
}

export default VirtualCard

const styles = StyleSheet.create({})