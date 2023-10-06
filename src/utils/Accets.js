import { View, ActivityIndicator, StyleSheet } from 'react-native' 

export const Logo = require('../../assets/logo.png');

const styles = StyleSheet.create({
  textWithShadow:{
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 1
}
})

export const Loading = ( { width, height} )=>(
    <View backgroundColor ="#FF9700" alignItems="center" display="flex" flexDirection="row" justifyContent='center' width={width} height={height}>
       <ActivityIndicator size={50} color="#fff"/>
   </View>
  )



  export const COLORS ={
    primarybg:'#FF9700',
    primaryvariantbg:'#FF970070',
    primaryvariant2bg:'#FF970080',
    ornagebg:'#fb923c',
    primaryWhite:'#FFF',
    primaryTextBlack:"#000",
    textshadow:{...styles.textWithShadow}
    
  }


  export const Services = [
    {
        id:'1',
        title:'Fund Wallet',
        desc:'Add money o your wallet and send fund globally',
        status: 'Active'
    },
    {
        id:'2',
        title:'Get Vitual Card',
        desc:'Get virtual card be able to spend internationally pay utility and so much more',
        src: 'Coming soon'
    },
    {
        id:'3',
        title:'Send Money',
        desc:'Send money to wihout borders - fast and easy',
        src: 'Active'
    },
    {
        id:'4',
        title:'Global airtime topup',
        desc:'Airtime & Data topup',
        src: 'Coming soon'
    },
    
    {
        id:'5',
        title:'Tours and hotels',
        desc:'Easily book your favourite hotels/appartment',
        src: 'Coming soon'
    },
    
    {
        id:'6',
        title:'Car rentals',
        desc:'For all your car rental needs',
        src: 'Coming soon'
    },
    {
        id:'7',
        title:'Buy Gift cards',
        desc:'Buy and resell gift cards',
        src: 'Coming soon'
    },
    
  
  ];
