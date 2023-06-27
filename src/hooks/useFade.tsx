import {useRef} from 'react';
import {Animated} from 'react-native';

export const useFade = () => {
  //Aquí creamos una nueva referencia como una nueva animación de valor 0 y accedemos a la propiedad de current de las referencias.
  const opacity = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  return {
    opacity,
    fadeIn,
    fadeOut,
  };
};
