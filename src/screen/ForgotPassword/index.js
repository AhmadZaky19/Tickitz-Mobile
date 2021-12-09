import React from 'react';
import {View, Text, Image} from 'react-native';
import {Input, Button} from 'react-native-elements';
import styles from './style';

function ForgotPassword(props) {
  const handleForgotPassword = () => {
    props.navigation.navigate('Confirm Password');
  };
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/img/tickitzPurple.png')}
        style={styles.logoImage}
      />
      <Text style={styles.authTitle}>Forgot Password</Text>
      <Text style={styles.authDesc}>
        we'll send a link to your email shortly
      </Text>
      <Input
        label="Email"
        placeholder="Write your email"
        keyboardType="email-address"
        inputContainerStyle={styles.input}
      />
      <Button
        title="Activate now"
        buttonStyle={styles.button}
        onPress={handleForgotPassword}
      />
    </View>
  );
}

export default ForgotPassword;
