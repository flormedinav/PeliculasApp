import {useRef} from 'react';
import {Animated} from 'react-native';

export const useFade = () => {
  //Aquí creamos una nueva referencia como una nueva animación de valor 0 y accedemos a la propiedad de current de las referencias.
  const opacity = useRef(new Animated.Value(0)).current;

  const fadeIn = (callback?: Function) => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start(() => (callback ? callback() : null));
  };

  const fadeOut = (duration: number = 300) => {
    Animated.timing(opacity, {
      toValue: 0,
      duration,
      useNativeDriver: true,
    }).start();
  };

  return {
    opacity,
    fadeIn,
    fadeOut,
  };
};
