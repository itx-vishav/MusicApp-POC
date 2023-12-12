import {StyleSheet} from 'react-native';
import {theme} from '../../../../../../utils/constants/theme';

export default StyleSheet.create({
  container: {
    marginBottom: 20,
    paddingVertical: 20,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
  headerContainer: {
    paddingVertical: 10,
    paddingLeft: 10,
    backgroundColor: theme.secondary,
  },
  albumContainer: {
    padding: 10,
    marginHorizontal: 10,
    backgroundColor: theme.third,
    marginBottom: 10,
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  albumText: {
    width: '80%',
    color: theme.primaryColor,
  },
  minusImage: {height: 20, width: 20, tintColor: '#b62f2f'},
});
