import React, {useState} from 'react';
import {ScrollView, View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {Input, Button} from 'react-native-elements';
import styles from './style';

import Footer from '../../components/Footer';

function MovieDetail(props) {
  // const handleBook = () => {
  //   props.navigation.navigate('Order');
  // };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.movieImage}>
        <Image
          source={require('../../assets/img/Lionking.png')}
          style={styles.movieImageItem}
        />
      </View>
      <View style={styles.movieDesc}>
        <Text style={styles.movieDescTitle}>The Lion King</Text>
        <Text style={styles.movieDescGenre}>Adventure, Slice of Life</Text>
      </View>
      <View style={styles.movieDescItem}>
        <View style={styles.movieDescItemList}>
          <Text style={styles.itemListTitle}>Release Date</Text>
          <Text style={styles.itemListDesc}>July 17, 2019</Text>
        </View>
        <View style={styles.movieDescItemList}>
          <Text style={styles.itemListTitle}>Directed by</Text>
          <Text style={styles.itemListDesc}>Jon Favreau</Text>
        </View>
        <View style={styles.movieDescItemList}>
          <Text style={styles.itemListTitle}>Duration</Text>
          <Text style={styles.itemListDesc}>1 hrs 58 min</Text>
        </View>
        <View style={styles.movieDescItemList}>
          <Text style={styles.itemListTitle}>Casts</Text>
          <Text style={styles.itemListDesc}>Donald Glover, Beyonce, etc.</Text>
        </View>
      </View>
      <View style={styles.movieSynopsis}>
        <Text style={styles.movieSynopsisTitle}>Synopsis</Text>
        <Text style={styles.movieSynopsisDesc}>
          Simba, a young lion who is to succeed his father, Mufasa, as King of
          the Pride Lands. however, after Simba's paternal uncle Scar murders
          Mufasa to seize the throne, Simba is manipulated into thinking he was
          responsible and flees into exile. After growing up in the company of
          the carefree outcasts Timon and Pumbaa, Simba receives valuable
          perspective from his childhood friend, Nala, and his shaman, Rafiki,
          before returning to challenge Scar to end his tyranny and take his
          place in the Circle of Life as the rightful King.
        </Text>
      </View>
      <View style={styles.schedule}>
        <Text style={styles.scheduleTitle}>Showtime and Tickets</Text>
      </View>
      <Footer />
    </ScrollView>
  );
}

export default MovieDetail;
