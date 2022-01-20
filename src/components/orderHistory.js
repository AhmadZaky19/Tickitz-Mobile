import React, {useState, useEffect} from 'react';
import moment from 'moment';
import {useDispatch, useSelector} from 'react-redux';
import {Text, View, StyleSheet, Image} from 'react-native';
import {Button, Card} from 'react-native-elements';
import {getDataBookingByUserId} from '../stores/actions/booking';
import * as color from '../styles/colorStyles';

import ebvid from '../assets/img/ebuid.png';
import cineone from '../assets/img/cineone.png';
import hiflix from '../assets/img/hiflix.png';

function OrderHistory() {
  const dispatch = useDispatch();
  const authData = useSelector(state => state.auth);
  const orderData = useSelector(state => state.booking);
  // console.log(orderData);

  const [data, setData] = useState(orderData.data);
  console.log(data);

  const getBookingByUserId = () => {
    dispatch(getDataBookingByUserId(authData.idUser)).then(res => {
      setData(res.value.data.data);
    });
  };

  useEffect(() => {
    getBookingByUserId();
  }, []);

  return (
    <View style={styles.container}>
      {data.length > 0 ? (
        data.map(item => (
          <Card containerStyle={styles.info} key={item.id}>
            <View style={styles.order}>
              <View style={styles.image}>
                <Image
                  source={
                    item.premiere === 'ebu.id'
                      ? ebvid
                      : item.premiere === 'hiflix'
                      ? hiflix
                      : cineone
                  }
                  style={styles.cinemaImage}
                />
              </View>
              <Text style={styles.date}>
                {moment(item.dateBooking).format('dddd, MMMM Do YYYY')} -
                {item.timeBooking.substring(0, 5)}
              </Text>
              <Text style={styles.movie}>{item.name}</Text>
            </View>
            <Card.Divider />
            {item.statusUsed === 'active' ? (
              <Button title="Ticket in active" buttonStyle={styles.button1} />
            ) : (
              <Button
                title="Ticket used"
                disabledTitleStyle={{color: 'white'}}
                disabledStyle={styles.button2}
                disabled
              />
            )}
          </Card>
        ))
      ) : (
        <Text style={styles.noBooking}>No order history</Text>
      )}
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
    marginVertical: 20,
  },
  cinemaImage: {
    resizeMode: 'contain',
    height: 40,
    width: 120,
  },
  date: {
    marginTop: 20,
  },
  movie: {
    marginTop: 10,
    fontSize: 22,
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
  noBooking: {
    marginTop: 30,
    fontWeight: '700',
    fontSize: 30,
    color: color.primary,
    textAlign: 'center',
  },
});

export default OrderHistory;
