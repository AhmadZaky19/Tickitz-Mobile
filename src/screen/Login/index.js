import React, {useState} from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {Input, Button} from 'react-native-elements';
import Toast from 'react-native-simple-toast';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {connect} from 'react-redux';
import {login} from '../../stores/actions/auth';

import styles from './style';

function Login(props) {
  const [form, setForm] = useState({email: '', password: ''});

  const handleLogin = async () => {
    try {
      const result = await props.login(form);
      await AsyncStorage.setItem('token', result.value.data.data.token);
      await AsyncStorage.setItem(
        'refreshToken',
        result.value.data.data.refreshToken,
      );
      Toast.show(result.value.data.msg);
      props.navigation.navigate('AppScreen', {
        screen: 'Home',
      });
    } catch (error) {
      Toast.show(error.response.data.msg);
    }
  };

  const handleInput = (text, name) => {
    setForm({...form, [name]: text});
  };

  const handleForgotPassword = () => {
    props.navigation.navigate('Forgot Password');
  };

  const [showPassword, setShowPassword] = useState(true);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/img/tickitzPurple.png')}
        style={styles.logoImage}
      />
      <Text style={styles.authTitle}>Sign In</Text>
      <Input
        label="Email"
        placeholder="Write your email"
        keyboardType="email-address"
        inputContainerStyle={styles.input}
        onChangeText={text => handleInput(text, 'email')}
      />
      <Input
        label="Password"
        placeholder="Write your password"
        inputContainerStyle={styles.input}
        rightIcon={
          <Icon
            onPress={handleShowPassword}
            name={showPassword ? 'eye-off' : 'eye'}
            size={20}
          />
        }
        onChangeText={text => handleInput(text, 'password')}
        secureTextEntry={showPassword}
      />
      <Button
        title="Sign In"
        buttonStyle={styles.button}
        onPress={handleLogin}
      />
      <View style={styles.forgotPass}>
        <Text style={styles.forgotPassText}>Forgot your password?</Text>
        <Pressable>
          <Text
            style={styles.forgotPassTextLink}
            onPress={handleForgotPassword}>
            Reset now
          </Text>
        </Pressable>
      </View>
      <View style={styles.sectionOr}>
        <View style={styles.orLine} />
        <View>
          <Text style={styles.orText}>Or</Text>
        </View>
        <View style={styles.orLine} />
      </View>
      <View style={styles.sectionBottom}>
        <View style={styles.logoBox}>
          <Image
            source={require('../../assets/img/google.png')}
            style={styles.logoBottom}
          />
        </View>
        <View style={styles.logoBox}>
          <Image
            source={require('../../assets/img/facebook.png')}
            style={styles.logoBottom}
          />
        </View>
      </View>
    </View>
  );
}

const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = {login};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
