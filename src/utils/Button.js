import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { Button, ButtonText } from '@gluestack-ui/themed';

const WanderButton = ( { bgColor, size, text} ) => {
  return ( 
        <Button bg={bgColor} width={size}> 
            <ButtonText>{text}</ButtonText>
        </Button> 
  )
}

export default WanderButton

const styles = StyleSheet.create({})