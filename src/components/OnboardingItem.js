import {useWindowDimensions} from 'react-native';
import {Box, Text, Image, VStack,} from '@gluestack-ui/themed';

export default OnboardingItem = ( { item } ) => { 
  const { width, height} = useWindowDimensions();
  return (  
        <Box 
          sx={{ '_dark': { borderColor: '$trueGray100',},   '@base': {pl: 0, pr: 0,},  '@sm': {  pl: '$4',pr: '$5',},}}
          py="$10"    width={width}  height={height/1.4} alignItems="center" display="flex" flexDirection="row"   
        >
          <VStack space="lg">
            <Image source={item.src} alt="document"  height={200}  style={{width, resizeMode:'contain'}}/>
            <Box space="sm" alignItems="center" display="flex" flexDirection="column" px="$5" >
              <Text color="$coolGray800" textTransform="uppercase" textAlign="right" fontWeight="$bold" fontSize="$xl" sx={{ _dark: { color: '$warmGray100', }, }}>
                {item.title}
              </Text>
              <Text  color="$coolGray600" textAlign="justify" sx={{ _dark: {color: '$warmGray200',   }, }}>
                {item.desc}
              </Text>
            </Box> 
          </VStack>
        </Box> 
  )
}
