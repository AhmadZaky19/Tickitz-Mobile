import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, ScrollView, FlatList} from 'react-native';
import {Button, Card} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import {getDataMovie} from '../stores/actions/movie';
import * as color from '../styles/colorStyles';
import {API_HOST} from '@env';

function CardMovieUpcoming() {
  const dispatch = useDispatch();
  const movie = useSelector(state => state.movie);

  const [movies, setMovies] = useState(movie.data);
  const [month, setMonth] = useState('');

  const getUpcomingMovie = async () => {
    try {
      const response = await dispatch(getDataMovie(month, '', '', '', '', 5));
      setMovies(response.value.data.data);
    } catch (error) {
      Error(error.response);
    }
  };

  const changeMonth = event => {
    setMonth(event);
  };

  useEffect(() => {
    getUpcomingMovie();
  }, [month]);

  return (
    <>
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Button
            title="January"
            onPress={() => changeMonth(1)}
            buttonStyle={
              month === 1 ? styles.buttonDateActive : styles.buttonDate
            }
            titleStyle={
              month === 1
                ? styles.buttonDateTitleActive
                : styles.buttonDateTitle
            }
          />
          <Button
            title="February"
            onPress={() => changeMonth(2)}
            buttonStyle={
              month === 2 ? styles.buttonDateActive : styles.buttonDate
            }
            titleStyle={
              month === 2
                ? styles.buttonDateTitleActive
                : styles.buttonDateTitle
            }
          />
          <Button
            title="March"
            onPress={() => changeMonth(3)}
            buttonStyle={
              month === 3 ? styles.buttonDateActive : styles.buttonDate
            }
            titleStyle={
              month === 3
                ? styles.buttonDateTitleActive
                : styles.buttonDateTitle
            }
          />
          <Button
            title="April"
            onPress={() => changeMonth(4)}
            buttonStyle={
              month === 4 ? styles.buttonDateActive : styles.buttonDate
            }
            titleStyle={
              month === 4
                ? styles.buttonDateTitleActive
                : styles.buttonDateTitle
            }
          />
          <Button
            title="May"
            onPress={() => changeMonth(5)}
            buttonStyle={
              month === 5 ? styles.buttonDateActive : styles.buttonDate
            }
            titleStyle={
              month === 5
                ? styles.buttonDateTitleActive
                : styles.buttonDateTitle
            }
          />
          <Button
            title="June"
            onPress={() => changeMonth(6)}
            buttonStyle={
              month === 6 ? styles.buttonDateActive : styles.buttonDate
            }
            titleStyle={
              month === 6
                ? styles.buttonDateTitleActive
                : styles.buttonDateTitle
            }
          />
          <Button
            title="July"
            onPress={() => changeMonth(7)}
            buttonStyle={
              month === 7 ? styles.buttonDateActive : styles.buttonDate
            }
            titleStyle={
              month === 7
                ? styles.buttonDateTitleActive
                : styles.buttonDateTitle
            }
          />
          <Button
            title="August"
            onPress={() => changeMonth(8)}
            buttonStyle={
              month === 8 ? styles.buttonDateActive : styles.buttonDate
            }
            titleStyle={
              month === 8
                ? styles.buttonDateTitleActive
                : styles.buttonDateTitle
            }
          />
          <Button
            title="September"
            onPress={() => changeMonth(9)}
            buttonStyle={
              month === 9 ? styles.buttonDateActive : styles.buttonDate
            }
            titleStyle={
              month === 9
                ? styles.buttonDateTitleActive
                : styles.buttonDateTitle
            }
          />
          <Button
            title="October"
            onPress={() => changeMonth(10)}
            buttonStyle={
              month === 10 ? styles.buttonDateActive : styles.buttonDate
            }
            titleStyle={
              month === 10
                ? styles.buttonDateTitleActive
                : styles.buttonDateTitle
            }
          />
          <Button
            title="November"
            onPress={() => changeMonth(11)}
            buttonStyle={
              month === 11 ? styles.buttonDateActive : styles.buttonDate
            }
            titleStyle={
              month === 11
                ? styles.buttonDateTitleActive
                : styles.buttonDateTitle
            }
          />
          <Button
            title="December"
            onPress={() => changeMonth(12)}
            buttonStyle={
              month === 12 ? styles.buttonDateActive : styles.buttonDate
            }
            titleStyle={
              month === 12
                ? styles.buttonDateTitleActive
                : styles.buttonDateTitle
            }
          />
        </ScrollView>
      </View>

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
                          uri: `${API_HOST}uploads/movie/${item.image}`,
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
            </Card>
          )}
        />
      ) : (
        <Text style={styles.noMovie}>No movie this month</Text>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  buttonDate: {
    width: 90,
    marginTop: 20,
    marginRight: 20,
    backgroundColor: color.white,
    borderColor: color.primary,
    borderWidth: 1,
    borderRadius: 4,
  },
  buttonDateTitle: {
    color: color.primary,
    fontSize: 10,
    fontWeight: '300',
  },
  buttonDateActive: {
    width: 90,
    marginTop: 20,
    marginRight: 20,
    backgroundColor: color.primary,
    borderColor: color.primary,
    borderWidth: 1,
    borderRadius: 4,
  },
  buttonDateTitleActive: {
    color: color.white,
    fontSize: 10,
    fontWeight: '300',
  },
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

export default CardMovieUpcoming;
