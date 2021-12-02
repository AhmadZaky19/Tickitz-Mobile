import React, {useEffect} from 'react';
import {Text, View, ScrollView, Image, FlatList} from 'react-native';
import {Input, Button} from 'react-native-elements';
import styles from './style';

function Home(props) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.header1}>Nearest Cinema, Newest Movie,</Text>
        <Text style={styles.header2}>Find out now!</Text>
      </View>
      <View style={styles.jumbotron}>
        <Image
          source={require('../../assets/img/groupMovie.png')}
          style={styles.jumbotronImage}
        />
      </View>
      <View style={styles.movieList}>
        <View style={styles.movieListHeader}>
          <Text style={styles.movieListHeaderLeft}>Now Showing</Text>
          <Text style={styles.movieListHeaderRight}>view all</Text>
        </View>
        <View>
          <FlatList />
        </View>
      </View>
      <View style={styles.movieList}>
        <View style={styles.movieListHeader}>
          <Text style={styles.movieListHeaderLeft}>Upcoming Movies</Text>
          <Text style={styles.movieListHeaderRight}>view all</Text>
        </View>
        <View>
          <FlatList />
        </View>
      </View>
      <View>
        <View style={styles.join}>
          <View style={styles.joinTextTop}>
            <Text style={styles.joinTextTop1}>Be the vanguard of the</Text>
            <Text style={styles.joinTextTop2}>Moviegoers</Text>
          </View>
          <Input
            placeholder="Type your email"
            keyboardType="email-address"
            inputContainerStyle={styles.input}
          />
          <Button title="Join now" buttonStyle={styles.button} />
          <Text style={styles.joinTextBottom}>
            By joining you as a Tickitz member, {'\n'} we will always send you
            the {'\n'} latest updates via email.
          </Text>
        </View>
      </View>
      {/* ---------------------- */}
      <View style={styles.footer}>
        <Image
          source={require('../../assets/img/tickitzPurple.png')}
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
              source={require('../../assets/img/ebuid.png')}
              style={styles.sectionLogo1}
            />
            <Image
              source={require('../../assets/img/cineone.png')}
              style={styles.sectionLogo2}
            />
            <Image
              source={require('../../assets/img/hiflix.png')}
              style={styles.sectionLogo3}
            />
          </View>
        </View>
        <View style={styles.footerSection}>
          <Text style={styles.sectionHeader}>Follow us</Text>
          <View style={styles.sectionVector}>
            <Image
              source={require('../../assets/img/v-facebook.png')}
              style={styles.sectionItemVector}
            />
            <Image
              source={require('../../assets/img/v-instagram.png')}
              style={styles.sectionItemVector}
            />
            <Image
              source={require('../../assets/img/v-twitter.png')}
              style={styles.sectionItemVector}
            />
            <Image
              source={require('../../assets/img/v-youtube.png')}
              style={styles.sectionItemVector}
            />
          </View>
        </View>
        <Text style={styles.footerEnd}>
          © 2020 Tickitz. All Rights Reserved.
        </Text>
      </View>
    </ScrollView>
  );
}

export default Home;
