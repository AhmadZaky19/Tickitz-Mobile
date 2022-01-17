import React from 'react';
import {Text, View, ScrollView, Image} from 'react-native';
import {Input, Button} from 'react-native-elements';
import styles from './style';
import Toast from 'react-native-simple-toast';
import CardMovieNow from '../../components/CardMovieNow';
import CardMovieUpcoming from '../../components/CardMovieUpcoming';
import Footer from '../../components/Footer';

function Home(props) {
  const comingSoon = () => {
    Toast.show('Coming soon');
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.header1}>Nearest Cinema, Newest Movie,</Text>
        <Text style={styles.header2}>Find out now!</Text>
      </View>
      <View style={styles.jumbotron}>
        <Image
          source={require('../../assets/img/groupMovie.png')}
          style={styles.jumbotronImage}
        />
      </View>
      <View style={styles.movieList}>
        <View style={styles.movieListHeader}>
          <Text style={styles.movieListHeaderLeft}>Now Showing</Text>
          <Text style={styles.movieListHeaderRight} onPress={comingSoon}>
            view all
          </Text>
        </View>
        <CardMovieNow navigation={props.navigation} />
      </View>
      <View style={styles.movieList}>
        <View style={styles.movieListHeader}>
          <Text style={styles.movieListHeaderLeft}>Upcoming Movies</Text>
          <Text style={styles.movieListHeaderRight} onPress={comingSoon}>
            view all
          </Text>
        </View>
        <CardMovieUpcoming navigation={props.navigation} />
      </View>
      <View>
        <View style={styles.join}>
          <View style={styles.joinTextTop}>
            <Text style={styles.joinTextTop1}>Be the vanguard of the</Text>
            <Text style={styles.joinTextTop2}>Moviegoers</Text>
          </View>
          <Input
            placeholder="Type your email"
            keyboardType="email-address"
            inputContainerStyle={styles.input}
          />
          <Button title="Join now" buttonStyle={styles.button} />
          <Text style={styles.joinTextBottom}>
            By joining you as a Tickitz member, {'\n'} we will always send you
            the {'\n'} latest updates via email.
          </Text>
        </View>
      </View>
      <Footer />
    </ScrollView>
  );
}

export default Home;
