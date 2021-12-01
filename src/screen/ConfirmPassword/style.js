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
});
