import {StyleSheet} from 'react-native';
import {theme} from '../../../../utils/constants/theme';

export default StyleSheet.create({
  container: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.primaryColor,
  },
  text: {
    fontSize: 19,
    color: 'white',
  },
});
