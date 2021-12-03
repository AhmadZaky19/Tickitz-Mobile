import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Button, Card} from 'react-native-elements';
import * as color from '../styles/colorStyles';

function CardMovieNow({navigation}) {
  const handleDetail = () => {
    navigation.navigate('MovieDetail');
  };
  return (
    <>
      <Card containerStyle={styles.cardMovie}>
        <View style={styles.movieImageSection}>
          <Card.Image
            source={require('../assets/img/Lionking.png')}
            style={styles.movieImage}
          />
        </View>
        <Text style={styles.movieName}>The Lion King</Text>
        <Text style={styles.movieGenre}>Adventure, Slice of Life</Text>
        <Button
          title="Details"
          buttonStyle={styles.buttonDetail}
          titleStyle={styles.buttonDetailTitle}
          onPress={handleDetail}
        />
        <Button
          title="Book now"
          buttonStyle={styles.buttonBook}
          titleStyle={styles.buttonBookTitle}
        />
      </Card>
      <Card containerStyle={styles.cardMovie}>
        <View style={styles.movieImageSection}>
          <Card.Image
            source={require('../assets/img/Lionking.png')}
            style={styles.movieImage}
          />
        </View>
        <Text style={styles.movieName}>The Lion King</Text>
        <Text style={styles.movieGenre}>Adventure, Slice of Life</Text>
        <Button
          title="Details"
          buttonStyle={styles.buttonDetail}
          titleStyle={styles.buttonDetailTitle}
          onPress={handleDetail}
        />
        <Button
          title="Book now"
          buttonStyle={styles.buttonBook}
          titleStyle={styles.buttonBookTitle}
        />
      </Card>
      <Card containerStyle={styles.cardMovie}>
        <View style={styles.movieImageSection}>
          <Card.Image
            source={require('../assets/img/Lionking.png')}
            style={styles.movieImage}
          />
        </View>
        <Text style={styles.movieName}>The Lion King</Text>
        <Text style={styles.movieGenre}>Adventure, Slice of Life</Text>
        <Button
          title="Details"
          buttonStyle={styles.buttonDetail}
          titleStyle={styles.buttonDetailTitle}
          onPress={handleDetail}
        />
        <Button
          title="Book now"
          buttonStyle={styles.buttonBook}
          titleStyle={styles.buttonBookTitle}
        />
      </Card>
      <Card containerStyle={styles.cardMovie}>
        <View style={styles.movieImageSection}>
          <Card.Image
            source={require('../assets/img/Lionking.png')}
            style={styles.movieImage}
          />
        </View>
        <Text style={styles.movieName}>The Lion King</Text>
        <Text style={styles.movieGenre}>Adventure, Slice of Life</Text>
        <Button
          title="Details"
          buttonStyle={styles.buttonDetail}
          titleStyle={styles.buttonDetailTitle}
          onPress={handleDetail}
        />
        <Button
          title="Book now"
          buttonStyle={styles.buttonBook}
          titleStyle={styles.buttonBookTitle}
        />
      </Card>
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
  },
  movieImageSection: {
    alignItems: 'center',
  },
  movieImage: {
    resizeMode: 'contain',
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
  buttonBook: {
    marginTop: 10,
    backgroundColor: color.primary,
    borderColor: color.white,
    borderWidth: 1,
    borderRadius: 4,
  },
  buttonBookTitle: {
    color: color.white,
    fontSize: 10,
    fontWeight: '300',
  },
});

export default CardMovieNow;
