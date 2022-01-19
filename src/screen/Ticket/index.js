import React, {useState} from 'react';
import {ScrollView, View, Text, Image, Pressable} from 'react-native';
import {Card, Button, Input} from 'react-native-elements';
import styles from './style';

import Footer from '../../components/Footer';

// import ebvid from '../../assets/img/ebuid.png';
// import cineone from '../../assets/img/cineone.png';
// import hiflix from '../../assets/img/hiflix.png';

function Ticket(props) {
  const handlePayment = () => {
    props.navigation.navigate('Home');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.paymentScreen}>
        <Text>Ticket screen</Text>
      </View>
      <Footer />
    </ScrollView>
  );
}

export default Ticket;
