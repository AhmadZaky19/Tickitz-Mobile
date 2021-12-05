import {StyleSheet} from 'react-native';
import * as color from '../../styles/colorStyles';

export default StyleSheet.create({
  container: {
    backgroundColor: color.white,
  },
  orderScreen: {
    backgroundColor: color.background2,
  },
  titleSection: {
    fontWeight: '600',
    fontSize: 18,
    color: color.textTitle,
    marginHorizontal: 20,
    marginTop: 30,
  },
  seatOrder: {
    borderRadius: 8,
  },
  screenLine: {
    flex: 1,
    height: 3,
    backgroundColor: color.primary,
  },
  seatDesc: {
    fontWeight: '600',
    color: '#000000',
    fontSize: 16,
    marginVertical: 15,
  },
  seatDescItem: {
    marginBottom: 15,
  },
  seatDescItem1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
    marginRight: 150,
  },
  seatDescItem2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
    marginRight: 130,
  },
  seatDescItemLeft: {
    flexDirection: 'row',
  },
  seatDescItemRight: {
    flexDirection: 'row',
  },
  rotateImage: {
    transform: [{rotate: '270deg'}],
  },
  seatDescItemText: {
    paddingLeft: 10,
  },
  summaryOrder: {
    elevation: 5,
    borderRadius: 6,
    padding: 0,
    marginHorizontal: 20,
  },
  summaryImage: {
    alignItems: 'center',
    paddingTop: 30,
    paddingBottom: 10,
  },
  cinemaImage: {
    resizeMode: 'contain',
    width: 130.11,
    height: 20.71,
  },
  cinemaName: {
    fontWeight: '600',
    fontSize: 24,
    color: color.textTitle,
    textAlign: 'center',
    marginBottom: 8,
  },
  movieTitle: {
    fontWeight: '600',
    color: color.textTitle,
    textAlign: 'center',
  },
  summary: {
    marginVertical: 24,
  },
  summaryItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginBottom: 10,
  },
  summaryLeft: {
    color: '#6B6B6B',
  },
  summaryRight: {
    color: color.textTitle,
    fontWeight: '600',
  },
  summaryPrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 20,
  },
  summaryDesc: {
    color: '#000000',
    fontSize: 18,
    fontWeight: '600',
  },
  summaryTotalPrice: {
    color: color.primary,
    fontSize: 24,
    fontWeight: '700',
  },
  button: {
    backgroundColor: color.primary,
    paddingVertical: 16,
    borderRadius: 4,
    marginHorizontal: 20,
    marginVertical: 50,
  },
});
