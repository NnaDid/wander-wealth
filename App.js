import { SafeAreaView,  StatusBar,  useColorScheme, View,} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {GluestackUIProvider, Box, } from '@gluestack-ui/themed'; 

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './src/components/Login';
import Signup from './src/components/Signup';  
import HomeScreen from './src/components/HomeScreen';
import ForgotPassword from './src/components/ForgotPassword'; 
import Dashboard from './src/components/dashboard/Index';

import BankDeposit from './src/components/dashboard/deposit/BankDeposit';
import CryptoDeposit from './src/components/dashboard/deposit/CryptoDeposit';


import { COLORS } from './src/utils/Accets';

const Stack = createStackNavigator();


function App() {
  const isDarkMode      = useColorScheme() === 'dark';
  const backgroundStyle = { backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,};
  return (
    <NavigationContainer> 
          <GluestackUIProvider style={backgroundStyle} px="$15">  
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'}  backgroundColor={COLORS.primarybg}  />   
                        <Stack.Navigator initialRouteName="Home" >
                          <Stack.Screen name="Home"   component={HomeScreen}  options={{ headerShown: false }} />
                          <Stack.Screen name="Login"  component={Login}       options={{ headerShown: false }}/>
                          <Stack.Screen name="Signup" component={Signup}      options={{ headerShown: false }}/>
                          <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ headerShown: false }}/>


                          <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }}/>

                          <Stack.Screen name="Bank Deposit"   component={BankDeposit} options={{ headerShown: true }}/>
                          <Stack.Screen name="Crypto Deposit" component={CryptoDeposit} options={{ headerShown: true }}/>

                        </Stack.Navigator>  
           
          </GluestackUIProvider>  
     </NavigationContainer>
  );
}

export default App;
