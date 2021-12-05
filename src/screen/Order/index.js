import React, {useState} from 'react';
import {ScrollView, View, Text, Image} from 'react-native';
import {Card, Button} from 'react-native-elements';
import styles from './style';

import Footer from '../../components/Footer';

// import ebvid from '../../assets/img/ebuid.png';
import cineone from '../../assets/img/cineone.png';
// import hiflix from '../../assets/img/hiflix.png';

function Order(props) {
  const handleOrder = () => {
    props.navigation.navigate('Payment');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.orderScreen}>
        <View>
          <Text style={styles.titleSection}>Choose Your Seat</Text>
          <Card containerStyle={styles.seatOrder}>
            <View style={styles.screenLine} />
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
              <Image source={cineone} style={styles.cinemaImage} />
            </View>
            <Text style={styles.cinemaName}>CineOne 21 Cinema</Text>
            <Text style={styles.movieTitle}>The Lion King</Text>
            <View style={styles.summary}>
              <View style={styles.summaryItem}>
                <Text style={styles.summaryLeft}>Tuesday, 07 July 2020</Text>
                <Text style={styles.summaryRight}>02:00pm</Text>
              </View>
              <View style={styles.summaryItem}>
                <Text style={styles.summaryLeft}>One ticket price</Text>
                <Text style={styles.summaryRight}>$10</Text>
              </View>
              <View style={styles.summaryItem}>
                <Text style={styles.summaryLeft}>Seat choosed</Text>
                <Text style={styles.summaryRight}>C4, C5, C6</Text>
              </View>
            </View>
            <Card.Divider />
            <View style={styles.summaryPrice}>
              <Text style={styles.summaryDesc}>Total Payment</Text>
              <Text style={styles.summaryTotalPrice}>$30</Text>
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
