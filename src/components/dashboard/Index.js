import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-ionicons';
import Home from './Home';
import Cards from './Card/Index';  /// Cards Home page
import Profile from './Profile/Profile';
import Booking from './PaymentBookings/Booking';

const Tab = createBottomTabNavigator();

const Wicon = ({ name, size, color }) => {
  return <Ionicons name={name} size={size} color={color} />;
};

const Index = () => {
  return (
    <Tab.Navigator screenOptions ={{
       showLabel:false,
    }}>
      <Tab.Screen name="Home" component={Home}  options={{ 
          headerShown: false, 
          tabBarIcon: ({ size, color }) => (
            <Wicon name="home-sharp" size={size} color={color} />
          ),
        }} />
      <Tab.Screen name="Cards" component={Cards} 
       options={{ 
        headerShown: false, 
        tabBarIcon: ({ size, color }) => (
          <Wicon name="card-sharp" size={size} color={color} />
        ),
      }}
      />
      <Tab.Screen name="Booking" component={Booking} 
        options={{ 
          headerShown: false, 
          tabBarIcon: ({ size, color }) => (
            <Wicon name="home-sharp" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen name="Profile" component={Profile} 
        options={{ 
          headerShown: false, 
          tabBarIcon: ({ size, color }) => (
            <Wicon name="person-circle-sharp" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default Index
