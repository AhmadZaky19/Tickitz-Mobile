import React, {useState, useEffect, createRef} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  PermissionsAndroid,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Button, Card, Avatar, Input} from 'react-native-elements';
import Toast from 'react-native-simple-toast';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import ActionSheet from 'react-native-actions-sheet';
import * as Progress from 'react-native-progress';
import Icon from 'react-native-vector-icons/Feather';
import {
  getDataUser,
  updateDataUser,
  updatePassword,
  updateUserImage,
} from '../stores/actions/user';
import * as color from '../styles/colorStyles';
import {API_HOST} from '@env';

const actionSheetRef = createRef();

function DetailsAccount(props) {
  const dispatch = useDispatch();
  const authData = useSelector(state => state.auth);
  const userData = useSelector(state => state.user);
  const [getUser, setGetUser] = useState({
    firstName: userData.dataUser.firstName,
    lastName: userData.dataUser.lastName,
    email: userData.dataUser.email,
    phoneNumber: userData.dataUser.phoneNumber,
    image: userData.dataUser.image,
  });

  const [newPass, setNewPass] = useState({
    newPassword: '',
    confirmPassword: '',
  });

  const [showPassword, setShowPassword] = useState(true);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleUpdateInformation = async () => {
    try {
      const response = await dispatch(updateDataUser(getUser));
      Toast.show(`${response.value.data.msg}`);
    } catch (error) {
      Toast.show(`${error.response.data.msg}`);
    }
  };

  const changeText = (text, name) => {
    setGetUser({...getUser, [name]: text});
    setNewPass({...newPass, [name]: text});
  };

  const handleUpdatePassword = async () => {
    try {
      const response = await dispatch(updatePassword(newPass));
      Toast.show(`${response.value.data.msg}`);
      handleReset();
    } catch (error) {
      error.response.data.msg && Toast.show(`${error.response.data.msg}`);
    }
  };

  const handleUpdateImage = setData => {
    const formData = new FormData();
    formData.append('image', setData.image);
    dispatch(updateUserImage(formData))
      .then(res => {
        Toast.show('Success update image');
        dispatch(getDataUser(authData.idUser));
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleTakeCamera = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: 'App Camera Permission',
        message: 'App needs access to your camera ',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      try {
        const result = await launchCamera();
        if (result.didCancel) {
        } else {
          const setData = {
            image: {
              uri: result.assets[0].uri,
              name: result.assets[0].fileName,
              type: result.assets[0].type,
            },
          };
          setTimeout(() => {
            handleUpdateImage(setData);
          }, 1000);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log('Camera permission denied');
    }
  };

  const handleChooseGallery = async () => {
    try {
      const result = await launchImageLibrary();
      const setData = {
        image: {
          uri: result.assets[0].uri,
          name: result.assets[0].fileName,
          type: result.assets[0].type,
        },
      };
      setTimeout(() => {
        handleUpdateImage(setData);
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };

  const handleReset = () => {
    setNewPass({newPassword: '', confirmPassword: ''});
  };

  useEffect(() => {
    dispatch(getDataUser(authData.idUser));
  }, [userData.data]);

  return (
    <View style={styles.container}>
      <Card containerStyle={styles.info}>
        <View style={styles.infoHeader}>
          <Text style={styles.infoText}>INFO</Text>
        </View>
        <View style={styles.avatar}>
          <Avatar
            size={140}
            rounded
            source={
              userData.dataUser.image
                ? {
                    uri: `${API_HOST}uploads/user/${userData.dataUser.image}`,
                  }
                : require('../assets/img/user_icon.png')
            }>
            <Avatar.Accessory
              size={35}
              onPress={() => actionSheetRef.current?.setModalVisible()}
            />
          </Avatar>
          <ActionSheet ref={actionSheetRef}>
            <View style={styles.actionSheet}>
              <TouchableOpacity
                onPress={handleTakeCamera}
                style={styles.actionSheetLeft}>
                <View style={styles.actionSheetIcon}>
                  <Icon name="camera" size={24} color="#000" />
                </View>
                <View>
                  <Text style={styles.actionSheetText}>Take a photo</Text>
                </View>
              </TouchableOpacity>

              <View style={styles.actionSheetRight}>
                <TouchableOpacity onPress={handleChooseGallery}>
                  <View style={styles.actionSheetIcon}>
                    <Icon name="image" size={24} color="#000" />
                  </View>
                  <View>
                    <Text style={styles.actionSheetText}>
                      Choose from gallery
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </ActionSheet>
        </View>
        <Text
          style={
            styles.userName
          }>{`${getUser.firstName} ${getUser.lastName}`}</Text>
        <Text style={styles.userStatus}>Moviegoers</Text>
        <Card.Divider />
        <Text style={styles.userLoyalty}>Loyalty Points</Text>
        <View style={styles.membership}>
          <Image
            source={require('../assets/img/loyaltyCard.png')}
            style={styles.memberCard}
          />
        </View>
        <Image
          source={require('../assets/img/star.png')}
          style={styles.starCard}
        />
        <View style={styles.cardText}>
          <Text style={styles.cardText1}>Moviegoers</Text>
          <View style={styles.cardText2}>
            <Text style={styles.cardPoint1}>320</Text>
            <Text style={styles.cardPoint2}>points</Text>
          </View>
        </View>
        <Text style={styles.pointCount}>180 points become a master</Text>
        <View style={styles.progressBar}>
          <Progress.Bar
            progress={0.5}
            width={300}
            height={16}
            borderRadius={8}
            color={color.primary}
          />
        </View>
      </Card>
      <Text style={styles.settingHeader}>Account Settings</Text>
      <Card containerStyle={styles.detailsInfo}>
        <View style={styles.section1}>
          <Text style={styles.detailsInfoText}>Details Information</Text>
          <Card.Divider />
        </View>
        <Input
          label="First Name"
          placeholder="Write your first name"
          inputContainerStyle={styles.input}
          defaultValue={getUser.firstName}
          onChangeText={text => changeText(text, 'firstName')}
        />
        <Input
          label="Last Name"
          placeholder="Write your last name"
          inputContainerStyle={styles.input}
          defaultValue={getUser.lastName}
          onChangeText={text => changeText(text, 'lastName')}
        />
        <Input
          label="E-mail"
          placeholder="Write your email adress"
          keyboardType="email-address"
          inputContainerStyle={styles.input}
          defaultValue={getUser.email}
          onChangeText={text => changeText(text, 'email')}
        />
        <Input
          label="Phone Number"
          placeholder="Write your phone number"
          inputContainerStyle={styles.input}
          defaultValue={getUser.phoneNumber}
          onChangeText={text => changeText(text, 'phoneNumber')}
        />
        <Button
          title="Update changes"
          buttonStyle={styles.button}
          onPress={handleUpdateInformation}
        />
        <View style={styles.section2}>
          <Text style={styles.detailsInfoText}>Account and Privacy</Text>
          <Card.Divider />
        </View>
        <Input
          label="New Password"
          placeholder="Write your new password"
          inputContainerStyle={styles.input}
          rightIcon={
            <Icon
              onPress={handleShowPassword}
              name={showPassword ? 'eye-off' : 'eye'}
              size={20}
            />
          }
          secureTextEntry={showPassword}
          defaultValue={newPass.newPassword}
          onChangeText={text => changeText(text, 'newPassword')}
        />
        <Input
          label="Confirm"
          placeholder="Confirm your new password"
          inputContainerStyle={styles.input}
          rightIcon={
            <Icon
              onPress={handleShowPassword}
              name={showPassword ? 'eye-off' : 'eye'}
              size={20}
            />
          }
          secureTextEntry={showPassword}
          defaultValue={newPass.confirmPassword}
          onChangeText={text => changeText(text, 'confirmPassword')}
        />
        <Button
          title="Update password"
          buttonStyle={styles.button}
          onPress={handleUpdatePassword}
        />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.background2,
  },
  info: {
    padding: 0,
    borderRadius: 8,
    marginTop: 50,
    marginBottom: 30,
    paddingBottom: 120,
  },
  infoHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
    marginHorizontal: 30,
  },
  infoText: {
    fontSize: 16,
    color: color.textBody1,
  },
  dotImage: {
    resizeMode: 'contain',
    width: 30,
  },
  avatar: {
    alignItems: 'center',
  },
  userName: {
    fontWeight: '600',
    fontSize: 20,
    color: color.textTitle,
    textAlign: 'center',
    marginTop: 30,
  },
  userStatus: {
    color: color.textBody1,
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 40,
  },
  userLoyalty: {
    marginHorizontal: 30,
    fontWeight: '600',
    fontSize: 20,
    color: color.textBody1,
    paddingBottom: 20,
    marginTop: 20,
  },
  membership: {
    alignItems: 'center',
  },
  memberCard: {
    position: 'absolute',
    resizeMode: 'cover',
    height: 218,
    width: 320,
  },
  starCard: {
    position: 'relative',
    marginLeft: 280,
    marginTop: 14,
  },
  cardText: {
    position: 'absolute',
    marginTop: 430,
    marginLeft: 55,
  },
  cardText1: {
    fontWeight: '700',
    fontSize: 22,
    color: color.white,
  },
  cardText2: {
    flexDirection: 'row',
    marginTop: 40,
  },
  cardPoint1: {
    fontSize: 26,
    fontWeight: '600',
    color: color.white,
  },
  cardPoint2: {
    fontSize: 12,
    color: color.white,
    paddingTop: 14,
    paddingLeft: 2,
  },
  pointCount: {
    textAlign: 'center',
    paddingTop: 140,
    fontSize: 18,
    color: color.textBody1,
  },
  progressBar: {
    alignItems: 'center',
    marginTop: 15,
  },
  settingHeader: {
    fontSize: 18,
    fontWeight: '600',
    color: color.textTitle,
    marginHorizontal: 20,
  },
  detailsInfo: {
    borderRadius: 8,
    marginBottom: 70,
    paddingTop: 30,
    paddingBottom: 50,
  },
  section1: {
    marginHorizontal: 10,
    marginBottom: 20,
  },
  section2: {
    marginHorizontal: 10,
    marginTop: 40,
    marginBottom: 20,
  },
  detailsInfoText: {
    fontSize: 16,
    color: color.textTitle,
    paddingBottom: 10,
  },
  input: {
    borderColor: color.border,
    borderWidth: 1,
    backgroundColor: color.inputBg,
    borderBottomWidth: 0,
    borderRadius: 4,
    paddingHorizontal: 20,
    marginTop: 15,
  },
  button: {
    backgroundColor: color.primary,
    paddingVertical: 12,
    borderRadius: 4,
    marginTop: 10,
    marginHorizontal: 10,
  },
  actionSheet: {
    height: 180,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 22,
    paddingHorizontal: 22,
    marginHorizontal: 2,
  },
  actionSheetLeft: {
    width: '50%',
    display: 'flex',
    justifyContent: 'center',
  },
  actionSheetRight: {
    marginHorizontal: 2,
    width: '50%',
    display: 'flex',
    justifyContent: 'center',
  },
  actionSheetIcon: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  actionSheetText: {
    textAlign: 'center',
    marginTop: 22,
  },
});

export default DetailsAccount;
