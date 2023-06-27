import {Text, View, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="ir detalle"
        onPress={() => navigation.navigate('DetailScreen')}
      />
    </View>
  );
};
