import {Text, View, Button, ActivityIndicator, Dimensions} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import Carousel from 'react-native-snap-carousel';

import {useMovies} from '../hooks/useMovies';
import {MoviePoster} from '../components/MoviePoster';

const {width: windowWidth} = Dimensions.get('window');

export const HomeScreen = () => {
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
      {/* <MoviePoster movie={moviesInCinema[0]} /> */}

      <View style={{height: 440}}>
        <Carousel
          data={moviesInCinema}
          renderItem={({item}: any) => <MoviePoster movie={item} />}
          sliderWidth={windowWidth}
          itemWidth={300}
        />
      </View>
    </View>
  );
};
