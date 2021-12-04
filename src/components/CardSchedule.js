import React from 'react';
import {Text, View, StyleSheet, Pressable, Image} from 'react-native';
import {Button, Card} from 'react-native-elements';
import * as color from '../styles/colorStyles';

import ebvid from '../assets/img/ebuid.png';
// import cineone from '../assets/img/cineone.png';
// import hiflix from '../assets/img/hiflix.png';

function CardSchedule({navigation}) {
  // const handleDetail = () => {
  //   navigation.navigate('MovieDetail');
  // };
  return (
    <>
      <Card containerStyle={styles.cardSchedule}>
        <View style={styles.scheduleImage}>
          <Image source={ebvid} style={styles.cinemaImage} />
        </View>
        <Text style={styles.cinemaAddress}>
          Whatever street No.12, South Purwokerto
        </Text>
        <Card.Divider />
        <View style={styles.scheduleTime}>
          <Pressable style={styles.timeList}>
            <Text style={styles.time}>08:30am</Text>
          </Pressable>
          <Pressable style={styles.timeList}>
            <Text style={styles.time}>08:30am</Text>
          </Pressable>
          <Pressable style={styles.timeList}>
            <Text style={styles.time}>08:30am</Text>
          </Pressable>
          <Pressable style={styles.timeList}>
            <Text style={styles.time}>08:30am</Text>
          </Pressable>
        </View>
        <View style={styles.scheduleTime}>
          <Pressable style={styles.timeList}>
            <Text style={styles.time}>08:30am</Text>
          </Pressable>
          <Pressable style={styles.timeList}>
            <Text style={styles.time}>08:30am</Text>
          </Pressable>
          <Pressable style={styles.timeList}>
            <Text style={styles.time}>08:30am</Text>
          </Pressable>
          <Pressable style={styles.timeList}>
            <Text style={styles.time}>08:30am</Text>
          </Pressable>
        </View>
        <View style={styles.schedulePrice}>
          <Text style={styles.seatDesc}>Price</Text>
          <Text style={styles.seatPrice}>$10.00/seat</Text>
        </View>
        <Button title="Book now" buttonStyle={styles.button} />
      </Card>
      <Card containerStyle={styles.cardSchedule}>
        <View style={styles.scheduleImage}>
          <Image source={ebvid} style={styles.cinemaImage} />
        </View>
        <Text style={styles.cinemaAddress}>
          Whatever street No.12, South Purwokerto
        </Text>
        <Card.Divider />
        <View style={styles.scheduleTime}>
          <Pressable style={styles.timeList}>
            <Text style={styles.time}>08:30am</Text>
          </Pressable>
          <Pressable style={styles.timeList}>
            <Text style={styles.time}>08:30am</Text>
          </Pressable>
          <Pressable style={styles.timeList}>
            <Text style={styles.time}>08:30am</Text>
          </Pressable>
          <Pressable style={styles.timeList}>
            <Text style={styles.time}>08:30am</Text>
          </Pressable>
        </View>
        <View style={styles.scheduleTime}>
          <Pressable style={styles.timeList}>
            <Text style={styles.time}>08:30am</Text>
          </Pressable>
          <Pressable style={styles.timeList}>
            <Text style={styles.time}>08:30am</Text>
          </Pressable>
          <Pressable style={styles.timeList}>
            <Text style={styles.time}>08:30am</Text>
          </Pressable>
          <Pressable style={styles.timeList}>
            <Text style={styles.time}>08:30am</Text>
          </Pressable>
        </View>
        <View style={styles.schedulePrice}>
          <Text style={styles.seatDesc}>Price</Text>
          <Text style={styles.seatPrice}>$10.00/seat</Text>
        </View>
        <Button title="Book now" buttonStyle={styles.button} />
      </Card>
      <View style={styles.sectionMore}>
        <View style={styles.moreLine} />
        <Pressable>
          <Text style={styles.moreText}>view more</Text>
        </Pressable>
        <View style={styles.moreLine} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  cardSchedule: {
    borderRadius: 8,
    marginHorizontal: 40,
    marginBottom: 20,
  },
  scheduleImage: {
    alignItems: 'center',
    marginVertical: 10,
  },
  cinemaImage: {
    resizeMode: 'contain',
    width: 76.85,
    height: 28.89,
  },
  cinemaAddress: {
    textAlign: 'center',
    marginHorizontal: 40,
    marginVertical: 10,
    color: '#AAAAAA',
    fontSize: 13,
    lineHeight: 20,
  },
  scheduleTime: {
    flexDirection: 'row',
    marginTop: 10,
  },
  timeList: {
    paddingRight: 10,
    marginHorizontal: 10,
  },
  time: {
    fontSize: 12,
    color: color.textBody1,
  },
  schedulePrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
    marginHorizontal: 10,
  },
  seatDesc: {
    color: '#6B6B6B',
  },
  seatPrice: {
    fontWeight: '600',
    color: '#000000',
  },
  button: {
    backgroundColor: color.primary,
    marginHorizontal: 10,
    marginBottom: 10,
  },
  sectionMore: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 40,
    marginVertical: 40,
  },
  moreLine: {
    flex: 1,
    height: 1,
    backgroundColor: color.border,
  },
  moreText: {
    width: 100,
    textAlign: 'center',
    color: color.primary,
  },
});

export default CardSchedule;
