import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  headerContainer: {
    borderWidth: 1,
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 19,
    maxWidth: '80%',
  },
  leftIcon: {
    resizeMode: 'stretch',
    height: 30,
    width: 30,
  },
  gridPhoto: {
    width: '33%',
    height: 100,
  },
});
