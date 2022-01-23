import {StyleSheet} from 'react-native';
import * as color from '../../styles/colorStyles';

export default StyleSheet.create({
  container: {
    backgroundColor: color.white,
  },
  paymentScreen: {
    backgroundColor: color.background2,
  },
  totalPayment: {
    backgroundColor: color.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 20,
    elevation: 1,
  },
  paymentDesc: {
    fontSize: 16,
    color: color.textBody2,
  },
  paymentAmount: {
    fontSize: 20,
    fontWeight: '600',
    color: color.textTitle,
  },
  titleSection: {
    fontWeight: '600',
    fontSize: 18,
    color: color.textTitle,
    marginHorizontal: 20,
    marginTop: 30,
  },
  paymentSection: {
    borderRadius: 8,
    marginHorizontal: 20,
  },
  payment: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    marginVertical: 20,
  },
  paymentItem: {
    borderWidth: 2,
    borderRadius: 4,
    borderColor: color.border,
    paddingVertical: 10,
    width: 90,
    alignItems: 'center',
  },
  paymentItemSelect: {
    borderWidth: 2,
    borderRadius: 4,
    borderColor: color.primary,
    paddingVertical: 10,
    width: 90,
    alignItems: 'center',
  },
  paymentImage1: {
    resizeMode: 'contain',
    width: 35,
    height: 14,
  },
  paymentImage2: {
    resizeMode: 'contain',
    width: 38,
    height: 11.95,
  },
  paymentImage3: {
    resizeMode: 'contain',
    width: 50,
    height: 16,
  },
  paymentImage4: {
    resizeMode: 'contain',
    width: 15,
    height: 18,
  },
  paymentImage5: {
    resizeMode: 'contain',
    width: 43,
    height: 14,
  },
  paymentImage6: {
    resizeMode: 'contain',
    width: 51,
    height: 14,
  },
  sectionOr: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 14,
  },
  orLine: {
    flex: 1,
    height: 1,
    backgroundColor: color.border,
  },
  orText: {
    width: 50,
    textAlign: 'center',
  },
  paymentText: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  paymentText1: {
    color: color.textLabel,
  },
  paymentText2: {
    color: color.primary,
    fontWeight: '600',
  },
  personalInfo: {
    elevation: 5,
    borderRadius: 6,
    marginHorizontal: 20,
    paddingTop: 40,
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
  warningMsg: {
    flexDirection: 'row',
    backgroundColor: '#F4B7404D',
    marginHorizontal: 10,
    marginVertical: 10,
    justifyContent: 'center',
    borderRadius: 4,
    paddingVertical: 15,
  },
  warningImage: {
    resizeMode: 'contain',
    width: 27.82,
    height: 26.36,
    marginRight: 20,
  },
  warningText: {
    color: color.textBody1,
    fontSize: 18,
  },
  button: {
    backgroundColor: color.primary,
    paddingVertical: 16,
    borderRadius: 4,
    marginHorizontal: 20,
    marginVertical: 50,
  },
});
