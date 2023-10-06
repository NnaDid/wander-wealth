import { SafeAreaView,  StatusBar,  useColorScheme } from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {GluestackUIProvider, Box} from '@gluestack-ui/themed';
import Container from './src/containers/Container';
import Onboarding from './src/components/Onboarding';

const Links = ()=>{

};
function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    // height: '100%',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar   barStyle={isDarkMode ? 'light-content' : 'dark-content'}  backgroundColor={backgroundStyle.backgroundColor}  />
      <GluestackUIProvider>
        <Box style={{ backgroundColor: isDarkMode ? Colors.black : Colors.white,}} px="$15"  >
          <Onboarding />

        </Box>
      </GluestackUIProvider>
    </SafeAreaView>
  );
}

export default App;
