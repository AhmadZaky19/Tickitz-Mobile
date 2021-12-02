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
  // -------------------------
  footer: {
    marginVertical: 30,
    marginHorizontal: 20,
  },
  logoImage: {
    resizeMode: 'contain',
    width: 141.71,
  },
  footerText: {
    lineHeight: 20,
  },
  footerSection: {
    marginTop: 38,
    marginRight: 30,
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
  },
  sectionItem: {
    color: color.textLabel,
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sectionLogo1: {
    resizeMode: 'contain',
    width: 80.3,
    height: 29.52,
  },
  sectionLogo2: {
    resizeMode: 'contain',
    width: 105.57,
    height: 16.25,
    marginTop: 10,
  },
  sectionLogo3: {
    resizeMode: 'contain',
    width: 76.24,
    height: 23.78,
    marginTop: 5,
  },
  sectionVector: {
    color: color.textLabel,
    marginTop: 15,
    flexDirection: 'row',
  },
  sectionItemVector: {
    marginRight: 45,
  },
  footerEnd: {
    color: color.textLabel,
    marginTop: 50,
    marginBottom: 30,
  },
});
