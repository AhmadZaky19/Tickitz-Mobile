import React, {useEffect} from 'react';
import {Text, View, ScrollView, Image, FlatList} from 'react-native';
import {Input, Button} from 'react-native-elements';
import styles from './style';

import CardMovieNow from '../../components/CardMovieNow';
import MonthFilter from '../../components/MonthFilter';
import CardMovieUpcoming from '../../components/CardMovieUpcoming';
import Footer from '../../components/Footer';

function Home(props) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
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
          <Text style={styles.movieListHeaderRight}>view all</Text>
        </View>
        <ScrollView horizontal>
          <CardMovieNow />
        </ScrollView>
      </View>
      <View style={styles.movieList}>
        <View style={styles.movieListHeader}>
          <Text style={styles.movieListHeaderLeft}>Upcoming Movies</Text>
          <Text style={styles.movieListHeaderRight}>view all</Text>
        </View>
        <View>
          <ScrollView horizontal>
            <MonthFilter />
          </ScrollView>
        </View>
        <ScrollView horizontal>
          <CardMovieUpcoming />
        </ScrollView>
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
