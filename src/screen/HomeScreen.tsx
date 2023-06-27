import {Text, View, Button, ActivityIndicator} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {useMovies} from '../hooks/useMovies';
import {MoviePoster} from '../components/MoviePoster';

export const HomeScreen = () => {
  const navigation = useNavigation();
  const {moviesInCinema, isLoading} = useMovies();
  const {top} = useSafeAreaInsets();

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <ActivityIndicator color="red" size={30} />
      </View>
    );
  }

  return (
    <View style={{marginTop: top + 20}}>
      <MoviePoster />
    </View>
  );
};
