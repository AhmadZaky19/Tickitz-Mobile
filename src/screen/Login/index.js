import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {Input} from 'react-native-elements';

function Login(props) {
  const [showPassword, setShowPassword] = useState(true);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/img/tickitzPurple.png')}
        style={{width: 200}}
      />
      <Text>Sign In</Text>
      <Input
        label="Email"
        placeholder="Write your email"
        keyboardType="email-address"
      />
      <Input
        label="Password"
        placeholder="Enter your password"
        rightIcon={
          <Icon
            onPress={handleShowPassword}
            name={showPassword ? 'eye-off' : 'eye'}
          />
        }
        secureTextEntry={showPassword}
      />
      <Button title="Login" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    margin: 10,
  },
});

export default Login;
