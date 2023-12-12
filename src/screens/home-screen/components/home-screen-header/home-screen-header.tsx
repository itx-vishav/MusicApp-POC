import React from 'react';
import {StatusBar, Text, View} from 'react-native';
import styles from './home-screen-header.styles';
import {theme} from '../../../../utils/constants/theme';

const HomeScreenHeader = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        animated
        barStyle="light-content"
        backgroundColor={theme.primaryColor}
      />
      <Text style={styles.text}>Users</Text>
    </View>
  );
};

export default HomeScreenHeader;
