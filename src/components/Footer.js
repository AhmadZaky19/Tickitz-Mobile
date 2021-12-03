import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import * as color from '../styles/colorStyles';

function Footer() {
  return (
    <View style={styles.footer}>
      <Image
        source={require('../assets/img/tickitzPurple.png')}
        style={styles.logoImage}
      />
      <Text style={styles.footerText}>
        Stop waiting in line. Buy tickets {'\n'}conveniently, watch movies
        quietly.
      </Text>
      <View style={styles.footerSection}>
        <Text style={styles.sectionHeader}>Explore</Text>
        <View style={styles.sectionItem}>
          <Text>Cinemas</Text>
          <Text>Movies List</Text>
          <Text>Notification</Text>
        </View>
        <Text style={styles.sectionItem}>My Ticket</Text>
      </View>
      <View style={styles.footerSection}>
        <Text style={styles.sectionHeader}>Our Sponsor</Text>
        <View style={styles.sectionItem}>
          <Image
            source={require('../assets/img/ebuid.png')}
            style={styles.sectionLogo1}
          />
          <Image
            source={require('../assets/img/cineone.png')}
            style={styles.sectionLogo2}
          />
          <Image
            source={require('../assets/img/hiflix.png')}
            style={styles.sectionLogo3}
          />
        </View>
      </View>
      <View style={styles.footerSection}>
        <Text style={styles.sectionHeader}>Follow us</Text>
        <View style={styles.sectionVector}>
          <Image
            source={require('../assets/img/v-facebook.png')}
            style={styles.sectionItemVector}
          />
          <Image
            source={require('../assets/img/v-instagram.png')}
            style={styles.sectionItemVector}
          />
          <Image
            source={require('../assets/img/v-twitter.png')}
            style={styles.sectionItemVector}
          />
          <Image
            source={require('../assets/img/v-youtube.png')}
            style={styles.sectionItemVector}
          />
        </View>
      </View>
      <Text style={styles.footerEnd}>© 2020 Tickitz. All Rights Reserved.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    marginVertical: 30,
    marginHorizontal: 20,
  },
  logoImage: {
    resizeMode: 'contain',
    width: 141.71,
  },
  footerText: {
    lineHeight: 20,
  },
  footerSection: {
    marginTop: 38,
    marginRight: 30,
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
  },
  sectionItem: {
    color: color.textLabel,
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sectionLogo1: {
    resizeMode: 'contain',
    width: 80.3,
    height: 29.52,
  },
  sectionLogo2: {
    resizeMode: 'contain',
    width: 105.57,
    height: 16.25,
    marginTop: 10,
  },
  sectionLogo3: {
    resizeMode: 'contain',
    width: 76.24,
    height: 23.78,
    marginTop: 5,
  },
  sectionVector: {
    color: color.textLabel,
    marginTop: 15,
    flexDirection: 'row',
  },
  sectionItemVector: {
    marginRight: 45,
  },
  footerEnd: {
    color: color.textLabel,
    marginTop: 50,
    marginBottom: 30,
  },
});

export default Footer;
