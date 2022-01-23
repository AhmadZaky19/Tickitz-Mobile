import {StyleSheet} from 'react-native';
import * as color from '../../styles/colorStyles';

export default StyleSheet.create({
  container: {
    backgroundColor: color.white,
  },
  wrapper: {
    paddingVertical: 28,
    paddingHorizontal: 24,
    backgroundColor: color.primary,
  },
  barcodeArea: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.white,
    borderRadius: 8,
    height: 300,
  },
  barcode: {
    backgroundColor: 'grey',
    width: 200,
    height: 200,
  },
  ticketInfo: {
    marginVertical: 12,
    backgroundColor: color.white,
    borderRadius: 8,
  },
  wrapperTicketInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    marginLeft: 20,
    height: 220,
  },
  left: {
    width: '50%',
    height: '100%',
    paddingLeft: 22,
  },
  right: {
    width: '50%',
    height: '100%',
    paddingLeft: 50,
  },
  lable: {
    color: '#AAAAAA',
    fontSize: 14,
    marginTop: 18,
  },
  value: {
    fontSize: 16,
    color: '#14142B',
    fontWeight: '500',
  },
  totalArea: {
    paddingVertical: 18,
    paddingHorizontal: 28,

    height: 200,
  },
  totalWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#DEDEDE',
    height: 50,
    borderRadius: 6,
  },
  textTotal: {
    width: '50%',
    textAlign: 'center',
    fontSize: 18,
    color: '#000000',
    fontWeight: '600',
  },
  button: {
    backgroundColor: color.primary,
    paddingVertical: 12,
    borderRadius: 4,
    marginTop: 40,
  },
});
