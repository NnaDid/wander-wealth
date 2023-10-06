import { StyleSheet, View, TouchableOpacity, Animated} from 'react-native'
import Svg, { G, Circle } from 'react-native-svg' 
import { Icon, ArrowRightIcon} from '@gluestack-ui/themed';
import {useEffect, useRef} from 'react'


export function TogglerButton( { percentage, scrollTo } ) {
    const size = 126;
    const strokeWidth = 2;
    const center = size/2 ;
    const radius = size/2 -  strokeWidth/2;
    const circumference = 2 * Math.PI * radius ;

    const progressAnimation = useRef(new Animated.Value(0)).current;
    const progressRef  = useRef(null);

    const animation = (toValue)=>{
        return Animated.timing(
            progressAnimation,{
                toValue,
                duration:250,
                useNativeDriver:true
            }
        ).start()
    };

    useEffect(() =>{
        animation(percentage);
    },[percentage]);

    useEffect(()=>{
        progressAnimation.addListener( ( value ) =>{
           const strokeDashoffset = circumference - ( circumference * value.value)/100;
           if(progressRef?.current){
                progressRef.current.setNativeProps({
                    strokeDashoffset
                });
             }
            },
            [percentage]
        );
        return ()=>{
            progressAnimation.removeAllListeners();
        };
    },[]);

  return (
    <View styles={styles.container}>
            <Svg width={size} height={size}>
                <G rotation="-90" origin={center}>
                    <Circle 
                        stroke="#E6E7E8"
                        cx={center}
                        cy={center}
                        r={radius}
                        strokeWidth={strokeWidth}
                    />

                 <Circle 
                    stroke="#FF9700"
                    cx={center}
                    cy={center}
                    r={radius}
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    // strokeDashoffset={circumference - ( circumference * 25 ) / 100}
                />
                </G>                
            </Svg>

            <TouchableOpacity style={styles.btn} activeOpacity={0.6} onPress={scrollTo}> 
                 <Icon as={ArrowRightIcon}  w="$50" h="$50" color="#fff"/> 
            </TouchableOpacity>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    textAlign:'center'
  },
  btn:{
    position:'absolute',
    borderRadius:100,
    padding:20,
    backgroundColor :"#FF9700",
    bottom:18,
    left:18
  }
})