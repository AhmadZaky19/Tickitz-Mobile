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
    // resizeMode: 'contain',
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
  citySchedule: {
    marginVertical: 20,
    marginHorizontal: 100,
  },
  formSelect: {
    color: '#000000',
    backgroundColor: '#EFF0F6',
  },
  cardSchedule: {
    borderRadius: 8,
    marginHorizontal: 40,
    marginBottom: 20,
  },
  scheduleImage: {
    alignItems: 'center',
    marginVertical: 10,
  },
  cinemaImage: {
    resizeMode: 'contain',
    width: 76.85,
    height: 28.89,
  },
  cinemaAddress: {
    textAlign: 'center',
    marginHorizontal: 40,
    marginVertical: 10,
    color: '#AAAAAA',
    fontSize: 13,
    lineHeight: 20,
  },
  scheduleTime: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  timeList: {
    marginBottom: 10,
    marginHorizontal: 22,
  },
  time: {
    fontSize: 12,
    color: color.textBody1,
  },
  schedulePrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
    marginHorizontal: 10,
  },
  seatDesc: {
    color: '#6B6B6B',
  },
  seatPrice: {
    fontWeight: '600',
    color: '#000000',
  },
  button: {
    backgroundColor: color.primary,
    marginHorizontal: 10,
    marginBottom: 10,
  },
  sectionMore: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 40,
    marginVertical: 40,
  },
  moreLine: {
    flex: 1,
    height: 1,
    backgroundColor: color.border,
  },
  moreText: {
    width: 100,
    textAlign: 'center',
    color: color.primary,
  },
  noSchedule: {
    marginTop: 30,
    fontWeight: '700',
    fontSize: 30,
    color: color.primary,
    textAlign: 'center',
  },
  schedulePagination_container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  schedulePagination_Active: {
    backgroundColor: color.primary,
    borderRadius: 8,
    elevation: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginHorizontal: 5,
    width: '10%',
    height: '100%',
  },
  schedulePagination_Default: {
    backgroundColor: color.white,
    borderWidth: 0.75,
    borderColor: color.border,
    borderRadius: 8,
    elevation: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    width: '10%',
    height: '100%',
    marginHorizontal: 8,
  },
  schedulePagination_title_Default: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '400',
    color: color.textBody1,
  },
  schedulePagination_title_active: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '400',
    color: color.white,
  },
});
