import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import {Button, Card} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import {getDataMovie} from '../stores/actions/movie';
import * as color from '../styles/colorStyles';

function CardMovieNow({navigation}) {
  const dispatch = useDispatch();
  const movie = useSelector(state => state.movie);

  const [movies, setMovies] = useState(movie.data);
  const [month] = useState(
    new Date().toISOString().split('T')[0].split('-')[1],
  );

  const getShowingMovie = async () => {
    try {
      const response = await dispatch(getDataMovie(month, '', '', '', '', 5));
      setMovies(response.value.data.data);
    } catch (error) {
      Error(error.response);
    }
  };

  const handleDetail = () => {
    navigation.navigate('MovieDetail');
  };

  useEffect(() => {
    getShowingMovie();
  }, []);

  return (
    <>
      {movies.length > 0 ? (
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={movies}
          renderItem={({item}) => (
            <Card containerStyle={styles.cardMovie}>
              <View style={styles.movieImageSection}>
                <Card.Image
                  source={
                    item.image
                      ? {
                          uri: `http://192.168.1.5:3001/uploads/movie/${item.image}`,
                        }
                      : require('../assets/img/defaultMovie.jpg')
                  }
                  style={styles.movieImage}
                />
              </View>
              <Text
                style={styles.movieName}
                numberOfLines={1}
                ellipsizeMode="tail">
                {item.name}
              </Text>
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={styles.movieGenre}>
                {item.category}
              </Text>
              <Button
                title="Details"
                buttonStyle={styles.buttonDetail}
                titleStyle={styles.buttonDetailTitle}
                onPress={handleDetail}
              />
            </Card>
          )}
        />
      ) : (
        <Text style={styles.noMovie}>No showing movie</Text>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  cardMovie: {
    marginTop: 30,
    borderRadius: 8,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    width: 160,
  },
  movieImageSection: {
    alignItems: 'center',
  },
  movieImage: {
    width: 122,
    height: 185,
    borderRadius: 6,
  },
  movieName: {
    marginTop: 10,
    textAlign: 'center',
    fontWeight: '600',
    color: color.textTitle,
  },
  movieGenre: {
    marginVertical: 10,
    textAlign: 'center',
    fontSize: 11,
    color: color.placeholder,
  },
  buttonDetail: {
    marginTop: 20,
    backgroundColor: color.white,
    borderColor: color.primary,
    borderWidth: 1,
    borderRadius: 4,
  },
  buttonDetailTitle: {
    color: color.primary,
    fontSize: 10,
    fontWeight: '300',
  },
  noMovie: {
    marginTop: 30,
    fontWeight: '700',
    fontSize: 30,
    color: color.primary,
    textAlign: 'center',
  },
});

export default CardMovieNow;
