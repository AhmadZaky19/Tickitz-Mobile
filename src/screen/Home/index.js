import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome';

function Home(props) {
  // useEffect(() => {
  //   console.log(props.route.params.nama);
  // });
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{backgroundColor: 'yellow', flex: 1}}>
          <Text>Left Side</Text>
        </View>
        <View style={{backgroundColor: 'red', flex: 1}}>
          <Text>Left Side</Text>
        </View>
      </View>
      <View style={styles.main}>
        <Text>Main</Text>
        <Icon name="facebook" size={35} color="blue" />
      </View>
      <View style={styles.footer}>
        <Text>Footer</Text>
      </View>
      {/* <Text style={styles.textMedium}>Home Screen</Text> */}
    </View>
  );
}

export default Home;
