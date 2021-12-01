import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {},
  headerImage: {
    width: 50,
    height: 50,
    elevation: 10,
  },
  headerImageSize: {
    width: 50,
    height: '100%',
    borderRadius: 50,
    borderColor: 'black',
    borderWidth: 1,
  },
  search: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  searchInput: {
    flex: 4,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 5,
  },
  searchIcon: {
    marginLeft: 10,
  },
  sectionButton: {
    flex: 1,
    alignItems: 'flex-end',
  },
  searchInputText: {
    flex: 1,
  },
  buttonFilter: {
    backgroundColor: 'blue',
    width: 40,
    height: 40,
    borderRadius: 10,
  },
});
