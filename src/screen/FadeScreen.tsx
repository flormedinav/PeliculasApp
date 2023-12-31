import {View, Animated, Button} from 'react-native';

import {useFade} from '../hooks/useFade';

export const FadeScreen = () => {
  const {opacity, fadeIn, fadeOut} = useFade();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {/* Usamos el Animated.View porque en View solamente no soporta la propiedad opacity de tipo Animated */}
      <Animated.View
        style={{
          backgroundColor: '#084F6A',
          width: 150,
          height: 150,
          borderColor: 'white',
          borderWidth: 10,
          opacity,
        }}
      />

      <Button title="fadeIn" onPress={() => fadeIn()} />
      <Button title="fadeOut" onPress={() => fadeOut(0)} />
    </View>
  );
};
