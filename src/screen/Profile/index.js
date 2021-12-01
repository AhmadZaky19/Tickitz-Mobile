import React from 'react';
import {
  View,
  Text,
  Button,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import styles from './style';
import {Icon} from 'react-native-vector-icons/Feather';

function Profile(props) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerText}>
          <Text>Hello,</Text>
          <Text>Jonathan!</Text>
        </View>
        <View style={styles.headerImage}>
          <Image
            source={require('../../assets/unsri.png')}
            style={styles.headerImageSize}
          />
        </View>
      </View>
      <View style={styles.search}>
        <View style={styles.searchInput}>
          <Icon name="search" size={25} styles={styles.searchIcon} />
          <TextInput styles={styles.searchInputText} />
        </View>
        <View style={styles.sectionButton}>
          <TouchableOpacity style={styles.buttonFilter}>
            <Text>F</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

export default Profile;
