import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import HomeScreenHeader from './components/home-screen-header';
import HomeScreenUsersList from './components/home-screen-users-list';
import styles from './home-screen.styles';


const HomeScreen = () => {
  useEffect(() => {}, []);

  return (
    <SafeAreaView style={styles.container}>
      <HomeScreenHeader />
      <HomeScreenUsersList />
    </SafeAreaView>
  );
};

export default HomeScreen;
