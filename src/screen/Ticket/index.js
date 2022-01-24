import React, {useState, useEffect} from 'react';
import {ScrollView, View, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import {Button} from 'react-native-elements';
import QRCode from 'react-native-qrcode-svg';
import {getDataBookingByBookingId} from '../../stores/actions/booking';
import styles from './style';
import {API_HOST} from '@env';

import Footer from '../../components/Footer';

function Ticket({navigation, route}) {
  const dispatch = useDispatch();

  const ticketId = route.params.params;
  const ticketData = route.params.sendData;

  const [ticket, setTicket] = useState({});

  const getTicket = async () => {
    try {
      const response = await dispatch(
        getDataBookingByBookingId(ticketId.idTicket),
      );
      setTicket(response.value.data.data);
    } catch (error) {
      Error(error.response);
    }
  };

  const handleToHome = () => {
    navigation.navigate('Home');
  };

  useEffect(() => {
    getTicket();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.ticketInfo}>
          <View style={styles.barcodeArea}>
            <QRCode
              value={`${API_HOST}booking/use-ticket/${
                ticket.id ? ticket.id : ticketId.idTicket
              }`}
              size={200}
            />
          </View>
          <View style={styles.wrapperTicketInfo}>
            <View style={styles.left}>
              <Text style={styles.lable}>Movie</Text>
              <Text
                style={[styles.value]}
                numberOfLines={1}
                ellipsizeMode="tail">
                {ticketData.movie}
              </Text>
              <Text style={[styles.lable]}>Date</Text>
              <Text style={styles.value}>
                {ticket.dateBooking
                  ? new Date(ticket.dateBooking).toDateString()
                  : new Date(ticketData.dateBooking).toDateString()}
              </Text>
              <Text style={[styles.lable]}>Count</Text>
              <Text style={styles.value}>
                {ticket.seat ? ticket.seat.length : ticketData.seat.length} pcs
              </Text>
            </View>
            <View style={styles.right}>
              <Text style={styles.lable}>Time</Text>
              <Text style={styles.value}>
                {ticket.timeBooking
                  ? ticket.timeBooking.substring(0, 5)
                  : ticketData.timeBooking}
              </Text>
              <Text style={[styles.lable]}>Seats</Text>
              <Text style={styles.value}>
                {ticket.seat
                  ? ticket.seat.join(', ')
                  : ticketData.seat.join(', ')}
              </Text>
            </View>
          </View>
          <View style={styles.totalArea}>
            <View style={styles.totalWrapper}>
              <Text style={styles.textTotal}>Total</Text>
              <Text style={styles.textTotal}>
                $
                {ticket.totalPayment
                  ? ticket.totalPayment
                  : ticketData.totalPayment}
                .00
              </Text>
            </View>
            <Button
              title="Back to home"
              buttonStyle={styles.button}
              onPress={handleToHome}
            />
          </View>
        </View>
      </View>
      <Footer />
    </ScrollView>
  );
}

export default Ticket;
