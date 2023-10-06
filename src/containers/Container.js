import { ScrollView} from 'react-native'; 
import { Box, Text, Image} from '@gluestack-ui/themed';


const FeatureCard = ({iconSvg, name, desc}) => {
    return (
      <Box  flexDirection="column" borderWidth={1}  borderColor="$borderDark700"  flex={1}
        m="$2"   p="$4" rounded="$md">
        <Box alignItems="center" display="flex" flexDirection="row">
          <Image source={iconSvg} alt="document" width={38} height={38} />
          <Text fontSize={22} color="$white" fontWeight="500" ml="$2">
            {name}
          </Text>
        </Box>
        <Text color="$textDark300" mt="$5">
          {desc}
        </Text>
      </Box>
    );
  };
  
  const Container = () => { 
    const logo  = require("../../assets/logo.png");
    return (
      <Box flex={1} bg="$black" h="100%">
        <ScrollView contentInsetAdjustmentBehavior="automatic" >
          <Box
            position="absolute"
            sx={{
              '@base': {
                h: 500,
                w: 500,
              },
              '@lg': {
                h: 700,
                w: 700,
              },
            }}>
            {/* <Image source={logo} alt="Gradient" h="100%" w="100%" /> */}
          </Box>
          <Box  flex={1}  sx={{  '@base': {  my: '$16',  mx: '$5', },
                                 '@lg': {  my: '$24', mx: '$32', }, }}  alignItems="center">
            <Box  bg="#64748B33" py="$2"   px="$6"  rounded="$full" alignItems="center"
              sx={{ '@base': { flexDirection: 'column',  },
                    '@sm': {   flexDirection: 'row',   },
                    '@md': {   alignSelf: 'flex-start'}, }}>
              <Text color="$white" fontWeight="$normal">
                Get started by editing
              </Text>
            </Box>
            <Box  flex={1}  justifyContent="center"  alignItems="center"
              sx={{  '@base': {   h: 20,   w: 300,  },
                     '@lg': {  h: 160,   w: 400,   },
              }}>
             
            </Box>
            <Box  sx={{  '@base': {  flexDirection: 'column',  },
                         '@md': {  flexDirection: 'row',   },
              }}>
              <FeatureCard
                iconSvg={logo}
                name="Docs"
                desc="Find in-depth information about gluestack features and API."
              />
              <FeatureCard
                iconSvg={logo}
                name="Learn"
                desc="Learn about gluestack in an interactive course with quizzes!"
              />
              <FeatureCard
                iconSvg={logo}
                name="Deploy"
                desc="Instantly drop your gluestack site to a shareable URL with vercel."
              />
            </Box>
          </Box>
        </ScrollView>
      </Box>
    );
  };

  export default Container;