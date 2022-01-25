import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import {Avatar} from 'react-native-elements';
import {getDataUser} from '../stores/actions/user';
import axios from '../utils/axios';
import {API_HOST} from '@env';

import Icon from 'react-native-vector-icons/Feather';

function DrawerContent(props) {
  const dispatch = useDispatch();

  const authData = useSelector(state => state.auth);
  const user = useSelector(state => state.user.dataUser);

  const [getUser, setGetUser] = useState({});

  const getUserData = async () => {
    try {
      const response = await dispatch(getDataUser(authData.idUser));
      setGetUser(response.value.data.data[0]);
    } catch (error) {
      Error(error.response);
    }
  };

  const handleSignout = async () => {
    try {
      await axios.post('auth/logout');
      await AsyncStorage.clear();
      props.navigation.navigate('AuthScreen', {screen: 'Login'});
    } catch (err) {
      console.log(err);
    }
    alert('Signed out');
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={styles.containerProfile}>
          <Avatar
            size={40}
            rounded
            source={
              user.image
                ? {
                    uri: `${API_HOST}uploads/user/${user.image}`,
                  }
                : require('../assets/img/user_icon.png')
            }
          />
          <View style={styles.biodata}>
            <Text
              style={styles.title}>{`${user.firstName} ${user.lastName}`}</Text>
            <Text style={styles.caption}>Moviegoers</Text>
          </View>
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View style={styles.containerSection}>
        <DrawerItem
          label="Sign Out"
          icon={({color, size}) => (
            <Icon color={color} size={size} name="log-out" />
          )}
          onPress={handleSignout}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerProfile: {
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 40,
    backgroundColor: 'gray',
  },
  biodata: {
    marginLeft: 15,
  },
  title: {
    fontSize: 16,
    marginBottom: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  containerSection: {
    marginBottom: 5,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 2,
  },
});

export default DrawerContent;
