import React, {useEffect} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as color from '../../styles/colorStyles';

function SplashScreen(props) {
  const checkToken = async () => {
    const token = await AsyncStorage.getItem('token');
    setTimeout(() => {
      if (token) {
        props.navigation.navigate('AppScreen');
      } else {
        props.navigation.navigate('AuthScreen');
      }
    }, 3000);
  };

  useEffect(() => {
    checkToken();
  });

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/img/tickitzWhite.png')}
        style={styles.logoImage}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  logoImage: {
    resizeMode: 'contain',
    width: 200,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.primary,
  },
});

export default SplashScreen;
