import React, {useState, useEffect} from 'react';
import {ScrollView, View, Text, Image, Pressable} from 'react-native';
import {Card, Button, Input} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import Toast from 'react-native-simple-toast';
import {getDataUser} from '../../stores/actions/user';
import {postBooking} from '../../stores/actions/booking';
import styles from './style';

import Footer from '../../components/Footer';

function Payment({navigation, route}) {
  const dispatch = useDispatch();
  const authData = useSelector(state => state.auth);
  const userData = useSelector(state => state.user);

  const [getUser] = useState({
    firstName: userData.dataUser.firstName,
    lastName: userData.dataUser.lastName,
    email: userData.dataUser.email,
    phoneNumber: userData.dataUser.phoneNumber,
  });
  const [data] = useState(route.params.sendData);

  const [payment, setPayment] = useState('');

  const fullName = `${userData.dataUser.firstName} ${userData.dataUser.lastName}`;

  const handlePayment = async () => {
    if (payment !== '') {
      try {
        const sendData = {
          userId: userData.dataUser.id,
          scheduleId: data.id_schedule,
          movieId: data.movieId,
          movie: data.movieName,
          dateBooking: data.dateBooking,
          timeBooking: data.time,
          totalPayment: data.totalPrice,
          paymentMethod: payment,
          statusPayment: 'success',
          seat: data.seat,
        };
        const response = await dispatch(postBooking(sendData));
        Toast.show(`${response.value.data.msg}`);
        navigation.navigate('Ticket', {
          sendData,
          params: {idTicket: response.value.data.data.id},
        });
      } catch (error) {
        Toast.show(`${error.response.data.msg}`);
      }
    } else {
      Toast.show('Select your payment method');
    }
  };

  const changePayment = event => {
    setPayment(event);
  };

  useEffect(() => {
    dispatch(getDataUser(authData.idUser));
  }, [userData.data]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.paymentScreen}>
        <View>
          <View style={styles.totalPayment}>
            <Text style={styles.paymentDesc}>Total Payment</Text>
            <Text style={styles.paymentAmount}>${data.totalPrice}.00</Text>
          </View>
          <Text style={styles.titleSection}>Payment Method</Text>
          <Card containerStyle={styles.paymentSection}>
            <View style={styles.payment}>
              <Pressable
                style={
                  payment === 'gpay'
                    ? styles.paymentItemSelect
                    : styles.paymentItem
                }
                onPress={() => changePayment('gpay')}>
                <Image
                  source={require('../../assets/img/Gpay.png')}
                  style={styles.paymentImage1}
                />
              </Pressable>
              <Pressable
                style={
                  payment === 'visa'
                    ? styles.paymentItemSelect
                    : styles.paymentItem
                }
                onPress={() => changePayment('visa')}>
                <Image
                  source={require('../../assets/img/visa.png')}
                  style={styles.paymentImage2}
                />
              </Pressable>
              <Pressable
                style={
                  payment === 'gopay'
                    ? styles.paymentItemSelect
                    : styles.paymentItem
                }
                onPress={() => changePayment('gopay')}>
                <Image
                  source={require('../../assets/img/GoPay.png')}
                  style={styles.paymentImage3}
                />
              </Pressable>
            </View>
            <View style={styles.payment}>
              <Pressable
                style={
                  payment === 'paypal'
                    ? styles.paymentItemSelect
                    : styles.paymentItem
                }
                onPress={() => changePayment('paypal')}>
                <Image
                  source={require('../../assets/img/paypal.png')}
                  style={styles.paymentImage4}
                />
              </Pressable>
              <Pressable
                style={
                  payment === 'ovo'
                    ? styles.paymentItemSelect
                    : styles.paymentItem
                }
                onPress={() => changePayment('ovo')}>
                <Image
                  source={require('../../assets/img/ovo.png')}
                  style={styles.paymentImage5}
                />
              </Pressable>
              <Pressable
                style={
                  payment === 'dana'
                    ? styles.paymentItemSelect
                    : styles.paymentItem
                }
                onPress={() => changePayment('dana')}>
                <Image
                  source={require('../../assets/img/dana.png')}
                  style={styles.paymentImage6}
                />
              </Pressable>
            </View>
            <View style={styles.sectionOr}>
              <View style={styles.orLine} />
              <View>
                <Text style={styles.orText}>Or</Text>
              </View>
              <View style={styles.orLine} />
            </View>
            <View style={styles.paymentText}>
              <Text style={styles.paymentText1}>Pay via cash.</Text>
              <Text style={styles.paymentText2}> See how it work</Text>
            </View>
          </Card>
        </View>
        <View>
          <Text style={styles.titleSection}>Personal Info</Text>
          <Card containerStyle={styles.personalInfo}>
            <Input
              label="Full Name"
              placeholder="Write your full name"
              inputContainerStyle={styles.input}
              defaultValue={fullName}
              disabled
            />
            <Input
              label="Email"
              placeholder="Write your email adress"
              keyboardType="email-address"
              inputContainerStyle={styles.input}
              defaultValue={getUser.email}
              disabled
            />
            <Input
              label="Phone Number"
              placeholder="Write your phone number"
              inputContainerStyle={styles.input}
              defaultValue={getUser.phoneNumber}
              disabled
            />
            <View style={styles.warningMsg}>
              <Image
                source={require('../../assets/img/warning.png')}
                style={styles.warningImage}
              />
              <Text style={styles.warningText}>Fill your data correctly.</Text>
            </View>
          </Card>
        </View>

        <Button
          title="Pay your order"
          buttonStyle={styles.button}
          onPress={handlePayment}
        />
      </View>
      <Footer />
    </ScrollView>
  );
}

export default Payment;
