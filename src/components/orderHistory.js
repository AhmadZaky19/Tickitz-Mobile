import React, {useState} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {Button, Card} from 'react-native-elements';
import * as color from '../styles/colorStyles';

function OrderHistory() {
  return (
    <View style={styles.container}>
      <Card containerStyle={styles.info}>
        <View style={styles.order}>
          <View style={styles.image}>
            <Image
              source={require('../assets/img/cineone.png')}
              style={styles.cinemaImage}
            />
          </View>
          <Text style={styles.date}>Tuesday, 07 July 2020 - 04:30pm</Text>
          <Text style={styles.movie}>The Lion King</Text>
        </View>
        <Card.Divider />
        <Button title="Ticket in active" buttonStyle={styles.button1} />
      </Card>
      <Card containerStyle={styles.info}>
        <View style={styles.order}>
          <View style={styles.image}>
            <Image
              source={require('../assets/img/ebuid.png')}
              style={styles.cinemaImage}
            />
          </View>
          <Text style={styles.date}>Tuesday, 07 July 2020 - 04:30pm</Text>
          <Text style={styles.movie}>Spider-man: Homecoming</Text>
        </View>
        <Card.Divider />
        <Button title="Ticket used" buttonStyle={styles.button2} />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.background2,
    paddingTop: 30,
    paddingBottom: 80,
  },
  info: {
    padding: 0,
    borderRadius: 8,
    marginBottom: 10,
    paddingBottom: 30,
  },
  order: {
    marginHorizontal: 30,
    marginTop: 20,
    marginBottom: 40,
  },
  image: {},
  cinemaImage: {
    resizeMode: 'contain',
    width: 160,
  },
  date: {
    marginTop: 10,
  },
  movie: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: '600',
    color: '#000000',
  },
  button1: {
    backgroundColor: color.success,
    paddingVertical: 12,
    borderRadius: 4,
    marginTop: 20,
    marginHorizontal: 30,
  },
  button2: {
    backgroundColor: color.textLabel,
    paddingVertical: 12,
    borderRadius: 4,
    marginTop: 20,
    marginHorizontal: 30,
  },
});

export default OrderHistory;
