import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import VirtualCard from './VirtualCard';
import PhysicalCard from './PhysicalCard';

const Tab = createMaterialTopTabNavigator();

const Cards = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Virtual Card" component={VirtualCard} />
      <Tab.Screen name="Physical Card" component={PhysicalCard} /> 
    </Tab.Navigator>
  )
}

export default Cards
