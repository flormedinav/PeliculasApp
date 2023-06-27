import {StackScreenProps} from '@react-navigation/stack';
import {Text, View} from 'react-native';

import {RootStackParamList} from '../navigation/Navigation';

interface Props extends StackScreenProps<RootStackParamList, 'DetailScreen'> {}

export const DetailScreen = ({route}: Props) => {
  //En route.params tengo la información que me viene por las props.
  const movie = route.params;

  return (
    <View>
      <Text>Detail Screen</Text>
    </View>
  );
};
