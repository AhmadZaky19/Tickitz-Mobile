import React, {useState} from 'react';
import {ScrollView, View, Text, Image, Pressable} from 'react-native';
import {Card, Button, Input} from 'react-native-elements';
import styles from './style';

import Footer from '../../components/Footer';

// import ebvid from '../../assets/img/ebuid.png';
// import cineone from '../../assets/img/cineone.png';
// import hiflix from '../../assets/img/hiflix.png';

function Payment(props) {
  const handlePayment = () => {
    props.navigation.navigate('Ticket');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.paymentScreen}>
        <View>
          <View style={styles.totalPayment}>
            <Text style={styles.paymentDesc}>Total Payment</Text>
            <Text style={styles.paymentAmount}>$30.00</Text>
          </View>
          <Text style={styles.titleSection}>Payment Method</Text>
          <Card containerStyle={styles.paymentSection}>
            <View style={styles.payment}>
              <Pressable style={styles.paymentItem}>
                <Image
                  source={require('../../assets/img/Gpay.png')}
                  style={styles.paymentImage1}
                />
              </Pressable>
              <Pressable style={styles.paymentItem}>
                <Image
                  source={require('../../assets/img/visa.png')}
                  style={styles.paymentImage2}
                />
              </Pressable>
              <Pressable style={styles.paymentItem}>
                <Image
                  source={require('../../assets/img/GoPay.png')}
                  style={styles.paymentImage3}
                />
              </Pressable>
            </View>
            <View style={styles.payment}>
              <Pressable style={styles.paymentItem}>
                <Image
                  source={require('../../assets/img/paypal.png')}
                  style={styles.paymentImage4}
                />
              </Pressable>
              <Pressable style={styles.paymentItem}>
                <Image
                  source={require('../../assets/img/ovo.png')}
                  style={styles.paymentImage5}
                />
              </Pressable>
              <Pressable style={styles.paymentItem}>
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
            />
            <Input
              label="Email"
              placeholder="Write your email adress"
              keyboardType="email-address"
              inputContainerStyle={styles.input}
            />
            <Input
              label="Phone Number"
              placeholder="Write your phone number"
              inputContainerStyle={styles.input}
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
