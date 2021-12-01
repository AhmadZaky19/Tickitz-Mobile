import React, {useState} from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {Input, Button} from 'react-native-elements';
import styles from './style';
import style from './style';

function Login(props) {
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
      />
      <Button title="Sign In" buttonStyle={styles.button} />
      <View style={styles.forgotPass}>
        <Text style={styles.forgotPassText}>Forgot your password?</Text>
        <Pressable>
          <Text style={styles.forgotPassTextLink}>Reset now</Text>
        </Pressable>
      </View>
      <View style={style.sectionOr}>
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

export default Login;
