import {StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const GradientBackground = ({children}: Props) => {
  return (
    <View style={{flex: 1}}>
      <LinearGradient
        colors={['#084F6A', '#75CECB', 'white']}
        style={{...StyleSheet.absoluteFillObject}}

        //Con start y end podemos configurar donde queremos que arranque y donde queremos que termine el gradiente.
        start={{x: 0.1, y: 0.1}}
        end={{x: 0.5, y: 0.7}}
      />
      {children}
    </View>
  );
};
