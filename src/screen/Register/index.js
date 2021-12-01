import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

function Register(props) {
  // const handleLogin = () => {
  //   props.navigation.navigate('AppScreen', {
  //     screen: 'Home',
  //     params: {
  //       nama: 'Ahmad Zaky',
  //     },
  //   });
  // };
  return (
    <View style={styles.container}>
      <Text>Register Screen</Text>
      <Button title="Register" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Register;
