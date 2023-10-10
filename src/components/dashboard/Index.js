import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';  
import { UserCircleIcon, CreditCardIcon, LayoutGridIcon, PlaneTakeoffIcon} from 'lucide-react-native';
import { Icon, Button, ButtonText, Box } from '@gluestack-ui/themed';

import Home from './Home';
import Cards from './Card/Index';  /// Cards Home page
import Profile from './Profile/Profile';
import Booking from './PaymentBookings/Booking';
import { COLORS } from '../../utils/Accets';

const Tab = createBottomTabNavigator();

const Index = ( { navigation } ) => {
  return (
    <Tab.Navigator  
         screenOptions ={{ 
          tabBarShowLabel:false, 
          tabBarStyle:{
            position:'absolute', 
            bottom: 5,
            marginHorizontal:10,
            height:70,
            borderRadius:10,
            backgroundColor:COLORS.primaryWhite,
            shadowColor:'#000',
            shadowOpacity:0.6,
            shadowOffset:{
              width:20,
              height:20
            }

          }
         }} >

      <Tab.Screen name="Home" component={Home}  options={{ 
          headerShown: false, 
          tabBarIcon: ({ focused  }) => ( <Icon as={LayoutGridIcon}   size={40}  color={focused ? COLORS.primarybg : 'grey'} />   ), }} 
     />

      <Tab.Screen name="Cards" component={Cards} 
        options={{ 
          headerShown: true,  
          headerRight:()=>(  
                  <Button action='primary' variant='outline' onPress={ ()=>{ navigation.navigate('Signup')}} size='sm' mr='$2'> 
                      <ButtonText> Q&A </ButtonText>  
                  </Button> 
            ),
          tabBarIcon: ({ focused }) => ( <Icon as={CreditCardIcon} size={40}  color={ focused ? COLORS.primarybg : 'grey' }/>   ), }}
      />

      <Tab.Screen name="Booking" component={Booking} 
          options={{ 
            headerShown: false, 
            tabBarIcon: ({ focused }) => (  <Icon as={PlaneTakeoffIcon} size={40}  color={focused ? COLORS.primarybg : 'grey'} />    ),  }}
      />

      <Tab.Screen name="Profile" component={Profile} 
          options={{ 
            headerShown: false, 
            tabBarIcon: ({ focused }) => (   <Icon as={UserCircleIcon}  size={40}  color={focused ? COLORS.primarybg : 'grey' } />     ),   }}
      />
    </Tab.Navigator>
  )
}

export default Index
