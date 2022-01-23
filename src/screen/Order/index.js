import React, {useState, useEffect} from 'react';
import {ScrollView, View, Text, Image, FlatList} from 'react-native';
import {Card, Button} from 'react-native-elements';
import {useDispatch} from 'react-redux';
import Toast from 'react-native-simple-toast';
import {getDataMovieById} from '../../stores/actions/movie';
import {getSeatBooking} from '../../stores/actions/booking';

import styles from './style';

import Seat from '../../components/Seat';
import Footer from '../../components/Footer';

import ebvid from '../../assets/img/ebuid.png';
import cineone from '../../assets/img/cineone.png';
import hiflix from '../../assets/img/hiflix.png';

function Order({navigation, route}) {
  const dispatch = useDispatch();

  const [dataMovie, setDataMovie] = useState([]);
  const [selectedSeat, setSelectedSeat] = useState([]);
  console.log(selectedSeat);
  const [reservedSeat, setReservedSeat] = useState([]);

  const listSeat = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

  const [data] = useState(route.params);

  const getMovieById = () => {
    dispatch(getDataMovieById(data.movieId)).then(res => {
      setDataMovie(res.value.data.data[0]);
    });
  };

  const getSeatBooked = () => {
    dispatch(
      getSeatBooking(
        data.id_schedule,
        data.movieId,
        data.dateBooking,
        data.time,
      ),
    ).then(res => {
      const seatBooked = res.value.data.data.map(item => {
        return item.seat;
      });
      setReservedSeat(seatBooked);
    });
  };

  const handleSelectedSeat = data => {
    if (selectedSeat.includes(data)) {
      const deleteSeat = selectedSeat.filter(el => {
        return el !== data;
      });
      setSelectedSeat(deleteSeat);
    } else {
      setSelectedSeat([...selectedSeat, data]);
    }
  };

  const handleOrder = () => {
    selectedSeat.length > 0
      ? navigation.navigate('Payment', {
          sendData: {
            date: data.date,
            dateBooking: data.dateBooking,
            time: data.time,
            movieId: data.movieId,
            id_schedule: data.id_schedule,
            seat: selectedSeat,
            totalPrice: selectedSeat.length * data.price,
            movieName: dataMovie.name,
          },
        })
      : Toast.show('Choose seat first');
  };

  useEffect(() => {
    getMovieById();
    getSeatBooked();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.orderScreen}>
        <View>
          <Text style={styles.titleSection}>Choose Your Seat</Text>
          <Card containerStyle={styles.seatOrder}>
            <View>
              <View style={styles.screenLine} />
              <FlatList
                data={listSeat}
                keyExtractor={item => item}
                renderItem={({item}) => (
                  <Seat
                    seatAlphabhet={item}
                    reserved={reservedSeat}
                    selected={selectedSeat}
                    selectSeat={handleSelectedSeat}
                  />
                )}
              />
            </View>
            <Text style={styles.seatDesc}>Seating key</Text>
            <View style={styles.seatDescItem}>
              <View style={styles.seatDescItem1}>
                <View style={styles.seatDescItemLeft}>
                  <Image source={require('../../assets/img/arrow.png')} />
                  <Text style={styles.seatDescItemText}>A - G</Text>
                </View>
                <View style={styles.seatDescItemRight}>
                  <Image
                    source={require('../../assets/img/arrow.png')}
                    style={styles.rotateImage}
                  />
                  <Text style={styles.seatDescItemText}>1 - 14</Text>
                </View>
              </View>
              <View style={styles.seatDescItem2}>
                <View style={styles.seatDescItemLeft}>
                  <Image source={require('../../assets/img/greyBox.png')} />
                  <Text style={styles.seatDescItemText}>Available</Text>
                </View>
                <View style={styles.seatDescItemRight}>
                  <Image source={require('../../assets/img/purpleBox.png')} />
                  <Text style={styles.seatDescItemText}>Selected</Text>
                </View>
              </View>
              <View style={styles.seatDescItem1}>
                <View style={styles.seatDescItemLeft}>
                  <Image source={require('../../assets/img/darkGreyBox.png')} />
                  <Text style={styles.seatDescItemText}>Sold</Text>
                </View>
              </View>
            </View>
          </Card>
        </View>
        <View>
          <Text style={styles.titleSection}>Order Info</Text>
          <Card containerStyle={styles.summaryOrder}>
            <View style={styles.summaryImage}>
              <Image
                source={
                  data.premiere === 'ebu.id'
                    ? ebvid
                    : data.premiere === 'hiflix'
                    ? hiflix
                    : cineone
                }
                style={styles.cinemaImage}
              />
            </View>
            <Text style={styles.cinemaName}>{data.premiere} Cinema</Text>
            <Text style={styles.movieTitle}>{dataMovie.name}</Text>
            <View style={styles.summary}>
              <View style={styles.summaryItem}>
                <Text style={styles.summaryLeft}>{data.date}</Text>
                <Text style={styles.summaryRight}>{data.time}</Text>
              </View>
              <View style={styles.summaryItem}>
                <Text style={styles.summaryLeft}>One ticket price</Text>
                <Text style={styles.summaryRight}>${data.price}</Text>
              </View>
              <View style={styles.summaryItem}>
                <Text style={styles.summaryLeft}>Seat choosed</Text>
                <Text style={styles.summaryRight}>
                  {selectedSeat.length > 0 ? selectedSeat.join(', ') : null}
                </Text>
              </View>
            </View>
            <Card.Divider />
            <View style={styles.summaryPrice}>
              <Text style={styles.summaryDesc}>Total Payment</Text>
              <Text style={styles.summaryTotalPrice}>{`$${
                data.price * selectedSeat.length
              }`}</Text>
            </View>
          </Card>
        </View>
        <Button
          title="Checkout now"
          buttonStyle={styles.button}
          onPress={handleOrder}
        />
      </View>
      <Footer />
    </ScrollView>
  );
}

export default Order;
