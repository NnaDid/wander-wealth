import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import VirtualCard from './VirtualCard';
import PhysicalCard from './PhysicalCard';

const Tab = createMaterialTopTabNavigator();
 
const Cards = () => {
  return (
    <Tab.Navigator
    screenOptions={{
      tabBarStyle : {
        backgroundColor: 'white', 
        height: 50,
        elevation: 0, 
        marginHorizontal:10, 
        borderRadius:10, 
        shadowColor:'#000',
        marginTop:10,
        shadowOpacity:0.9,
        shadowOffset:{
          width:20,
          height:20
        }, 
      }, 
      tabBarActiveTintColor: 'orange',
      tabBarInactiveTintColor: '#000',

      tabBarLabelStyle: {
        textAlign: 'center',
        fontSize: 14,
        fontWeight:'bold',
      },
      tabBarIndicatorStyle: {
        borderBottomColor: 'orange',
        borderBottomWidth: 4,
         borderBottomLeftRadius:10, 
         borderBottomRightRadius:10,
      }, 
    }}
    >
      <Tab.Screen name="Virtual Card" component={VirtualCard} />
      <Tab.Screen name="Physical Card" component={PhysicalCard} /> 
    </Tab.Navigator>
  )
}

export default Cards
