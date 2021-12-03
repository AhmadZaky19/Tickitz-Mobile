import {StyleSheet} from 'react-native';
import * as color from '../../styles/colorStyles';

export default StyleSheet.create({
  container: {
    backgroundColor: color.white,
  },
  movieImage: {
    alignItems: 'center',
    marginVertical: 30,
    marginHorizontal: 90,
    paddingVertical: 30,
    borderWidth: 1,
    borderColor: color.border,
    borderRadius: 8,
  },
  movieImageItem: {
    resizeMode: 'contain',
    width: 159,
    height: 244,
  },
  movieDesc: {
    alignItems: 'center',
  },
  movieDescTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000000',
  },
  movieDescGenre: {
    fontSize: 16,
    color: color.textBody1,
    marginVertical: 10,
  },
  movieDescItem: {
    marginTop: 20,
    marginHorizontal: 30,
    marginBottom: 20,
    paddingBottom: 30,
    borderBottomWidth: 0.5,
    borderColor: color.background1,
  },
  movieDescItemList: {
    marginVertical: 10,
  },
  itemListTitle: {
    fontSize: 13,
    color: '#8692A6',
    paddingBottom: 7,
  },
  itemListDesc: {
    fontSize: 16,
    color: '#121212',
  },
  movieSynopsis: {
    marginHorizontal: 30,
  },
  movieSynopsisTitle: {
    fontWeight: '600',
    fontSize: 16,
    color: color.textTitle,
    marginBottom: 16,
  },
  movieSynopsisDesc: {
    fontSize: 13,
    lineHeight: 22,
    color: color.textBody1,
    marginBottom: 50,
  },
  schedule: {
    paddingVertical: 30,
    backgroundColor: color.background2,
  },
  scheduleTitle: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
  },
});
