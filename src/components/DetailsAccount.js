import React, {useState} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {Button, Card, Avatar, Input} from 'react-native-elements';
import * as Progress from 'react-native-progress';
import Icon from 'react-native-vector-icons/Feather';
import * as color from '../styles/colorStyles';

function DetailsAccount() {
  const [showPassword, setShowPassword] = useState(true);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <View style={styles.container}>
      <Card containerStyle={styles.info}>
        <View style={styles.infoHeader}>
          <Text style={styles.infoText}>INFO</Text>
          <Image
            source={require('../assets/img/dot_3.png')}
            style={styles.dotImage}
          />
        </View>
        <View style={styles.avatar}>
          <Avatar
            size={140}
            rounded
            source={require('../assets/img/AhmadZaky.jpg')}>
            <Avatar.Accessory size={35} />
          </Avatar>
        </View>
        <Text style={styles.userName}>Ahmad Zaky</Text>
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
          label="Full Name"
          placeholder="Write your full name"
          inputContainerStyle={styles.input}
        />
        <Input
          label="E-mail"
          placeholder="Write your email adress"
          keyboardType="email-address"
          inputContainerStyle={styles.input}
        />
        <Input
          label="Phone Number"
          placeholder="Write your phone number"
          inputContainerStyle={styles.input}
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
        />
        <Button title="Update changes" buttonStyle={styles.button} />
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
    marginTop: 20,
    marginHorizontal: 10,
  },
});

export default DetailsAccount;
