import React, {useState} from 'react';
import {View, Text, Image, Pressable, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {Input, Button} from 'react-native-elements';
import {connect} from 'react-redux';
import Toast from 'react-native-simple-toast';
import {register} from '../../stores/actions/auth';
import styles from './style';

function Register(props) {
  const [showPassword, setShowPassword] = useState(true);
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleToLogin = () => {
    props.navigation.navigate('Login');
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleInput = (text, name) => {
    setForm({...form, [name]: text});
  };

  const handleRegister = async () => {
    try {
      await props.register(form);
      Toast.show('Success register, please verify your email before login');
      setForm({
        ...form,
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      });
      props.navigation.navigate('Login');
    } catch (error) {
      Toast.show(error.response.data.msg);
    }
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Image
        source={require('../../assets/img/tickitzPurple.png')}
        style={styles.logoImage}
      />
      <Text style={styles.authTitle}>Sign Up</Text>
      <Input
        label="First Name"
        placeholder="Write your first name"
        inputContainerStyle={styles.input}
        onChangeText={text => handleInput(text, 'firstName')}
        value={form.firstName}
      />
      <Input
        label="Last Name"
        placeholder="Write your last name"
        inputContainerStyle={styles.input}
        onChangeText={text => handleInput(text, 'lastName')}
        value={form.lastName}
      />
      <Input
        label="Email"
        placeholder="Write your email"
        keyboardType="email-address"
        inputContainerStyle={styles.input}
        onChangeText={text => handleInput(text, 'email')}
        value={form.email}
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
        secureTextEntry={showPassword}
        onChangeText={text => handleInput(text, 'password')}
        value={form.password}
      />
      <Button
        title="Join for free"
        buttonStyle={styles.button}
        onPress={handleRegister}
      />
      <View style={styles.forgotPass}>
        <Text style={styles.forgotPassText}>
          Do you already have an account?
        </Text>
        <Pressable onPress={handleToLogin}>
          <Text style={styles.forgotPassTextLink}>Sign in</Text>
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
    </ScrollView>
  );
}

const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = {register};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
