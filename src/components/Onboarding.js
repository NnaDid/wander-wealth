import {Box, Text, Image, FlatList} from '@gluestack-ui/themed';
import OnboardingItem from './OnboardingItem';

const Slides = [
  {
      id:'1',
      title:'Easily Send Money',
      desc:'Easily send, spend and convert FX at the best current market rates without having to go through the banks bureaucracy, losing your money to dishonest exchanges, expensive vendors or even worst getting your money stolen as a result of keeping cash',
      src: require('../../assets/onboarding/convert.png')
  },
  {
      id:'2',
      title:'Hello',
      desc:'Get virtual card be able to spend internationally pay utility and so much more',
      src: require('../../assets/onboarding/creditcard.png') 
  },
  {
      id:'3',
      title:'Convert Crypto To Fiat',
      desc:'Convert your local currency into stable cryptocurrency and send money globally using the best current market rates that is you\'ll be getting your dollar equivalent in crypto making foreign exchange a work in the park',
      src: require('../../assets/onboarding/crypto.png')
  },

];

export default Onboarding = () => {
  return ( 
    <FlatList
      data={Slides}
      renderItem={({ item }) => ( <OnboardingItem  item={item}/>)}
      keyExtractor={(item) => item.id}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      pagingEnabled={false}
      bounces={false}
    /> 
  )
}
