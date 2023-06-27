import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import currencyFormatter from 'currency-formatter';

import {MovieFull} from '../interfaces/movieInterface';
import {Cast} from '../interfaces/creditsInterface';

interface Props {
  movieFull: MovieFull;
  cast: Cast[];
}

export const MovieDetails = ({movieFull, cast}: Props) => {
  return (
    <>
      <View style={{marginHorizontal: 20}}>
        <View style={{flexDirection: 'row'}}>
          <Icon name="star-outline" color="grey" size={16} />
          <Text> {movieFull.vote_average}</Text>

          <Text style={{marginLeft: 5}}>
            - {movieFull.genres.map(genre => genre.name).join(', ')}
          </Text>
        </View>

        {/* Historia */}
        <Text style={styles.title}>Historia</Text>
        <Text style={styles.description}>{movieFull.overview}</Text>

        {/* Presupuesto */}
        <Text style={styles.title}>Presupuesto</Text>
        <Text style={styles.description}>
          {currencyFormatter.format(movieFull.budget, {code: 'USD'})}
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    marginTop: 10,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
  },
});
