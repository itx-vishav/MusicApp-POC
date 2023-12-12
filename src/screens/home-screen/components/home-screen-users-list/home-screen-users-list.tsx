import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import React, {useEffect} from 'react';
import {useGetAllUsersQuery} from '../../../../redux/queries/users';
import {useAppDispatch, useAppSelector} from '../../../../redux/hooks';
import {setUsers} from '../../../../redux/reducers-slices/user-slice';
import {User} from '../../../../utils/types/userTypes';
import styles from './home-screen-users-list.styles';
import UserItem from './components/user-item';
import {theme} from '../../../../utils/constants/theme';

const HomeScreenUsersList = () => {
  const {data, error, isLoading} = useGetAllUsersQuery();
  const {users} = useAppSelector(state => state.usersReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!isLoading) {
      getAllUsers();
    }
  }, [isLoading]);

  const getAllUsers = async () => {
    if (data) dispatch(setUsers(data));
  };

  return (
    <View style={styles.container}>
      {isLoading && (
        <ActivityIndicator
          style={styles.loader}
          size="large"
          color={theme.primaryColor}
        />
      )}
      <FlatList
        ListHeaderComponent={() => {
          return <View style={{height: 10}} />;
        }}
        ListFooterComponent={() => {
          return <View style={{height: 60}} />;
        }}
        data={users}
        keyExtractor={item => item.id.toString()}
        renderItem={({item, index}) => {
          return <UserItem user={item} />;
        }}
      />
    </View>
  );
};

export default HomeScreenUsersList;
