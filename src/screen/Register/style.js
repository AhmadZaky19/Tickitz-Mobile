import {StyleSheet} from 'react-native';
import * as color from '../../styles/colorStyles';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: color.white,
  },
  logoImage: {
    resizeMode: 'contain',
    width: 100,
    marginHorizontal: 10,
  },
  authTitle: {
    fontSize: 30,
    fontWeight: '600',
    color: color.textTitle,
    marginBottom: 30,
    marginHorizontal: 10,
  },
  input: {
    borderColor: color.border,
    borderWidth: 1,
    backgroundColor: color.inputBg,
    borderBottomWidth: 0,
    borderRadius: 12,
    paddingHorizontal: 20,
    marginTop: 15,
  },
  button: {
    backgroundColor: color.primary,
    paddingVertical: 16,
    borderRadius: 12,
    marginTop: 10,
    marginHorizontal: 10,
  },
  forgotPass: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 30,
  },
  forgotPassText: {
    fontSize: 16,
  },
  forgotPassTextLink: {
    fontSize: 16,
    color: color.primary,
    marginLeft: 5,
    borderBottomWidth: 1,
    borderBottomColor: color.primary,
  },
  sectionOr: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 12,
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
  sectionBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 120,
    marginTop: 30,
    marginBottom: 50,
  },
  logoBox: {
    borderWidth: 1,
    borderColor: color.white,
    backgroundColor: color.white,
    borderRadius: 12,
    elevation: 5,
    padding: 10,
  },
  logoBottom: {
    resizeMode: 'contain',
    height: 25,
    width: 25,
  },
});
