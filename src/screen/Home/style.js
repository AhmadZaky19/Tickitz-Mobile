import {StyleSheet} from 'react-native';
import * as color from '../../styles/colorStyles';

export default StyleSheet.create({
  container: {
    backgroundColor: color.white,
  },
  header: {
    marginTop: 40,
    marginBottom: 20,
    marginHorizontal: 25,
  },
  header1: {
    fontSize: 15,
    color: color.placeholder,
  },
  header2: {
    fontSize: 40,
    color: color.primary,
    fontWeight: '700',
  },
  jumbotron: {
    alignItems: 'center',
  },
  jumbotronImage: {
    resizeMode: 'contain',
    width: 400,
  },
  movieList: {
    marginVertical: 30,
    marginHorizontal: 25,
  },
  movieListHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  movieListHeaderLeft: {
    fontSize: 18,
    fontWeight: '700',
    color: color.textTitle,
  },
  movieListHeaderRight: {
    fontSize: 16,
    fontWeight: '600',
    color: color.primary,
  },
  join: {
    marginVertical: 40,
    marginHorizontal: 20,
    paddingVertical: 30,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: 'rgba(186, 186, 186, 0.15)',
    // elevation: 1,
    // shadowOffset: {width: 0, height: 0},
    // shadowOpacity: 51.1,
    // shadowRadius: 5,
  },
  joinTextTop: {
    alignItems: 'center',
  },
  joinTextTop1: {
    fontSize: 14,
    fontWeight: '400',
    color: color.textBody1,
  },
  joinTextTop2: {
    fontSize: 32,
    fontWeight: '700',
    color: color.primary,
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
    paddingVertical: 16,
    borderRadius: 4,
    marginBottom: 30,
    marginHorizontal: 10,
  },
  joinTextBottom: {
    textAlign: 'center',
    lineHeight: 23,
  },
});
