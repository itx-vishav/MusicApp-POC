import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useAppDispatch} from '../../../../../../redux/hooks';
import {useGetAlbumsByUserIdQuery} from '../../../../../../redux/queries/users';
import {setUserAlbums} from '../../../../../../redux/reducers-slices/user-slice';
import {theme} from '../../../../../../utils/constants/theme';
import {Album, User} from '../../../../../../utils/types/userTypes';
import styles from './user-item.styles';
import {NavigationScreens} from '../../../../../../utils/constants/navigation';

interface Props {
  user: User;
}

const UserItem = ({user}: Props) => {
  const navigation = useNavigation();
  const {data, error, isLoading} = useGetAlbumsByUserIdQuery(user.id);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!isLoading && data) {
      dispatch(setUserAlbums({albums: data, userId: user.id}));
    }
  }, [isLoading]);

  const renderItem = (album: Album, index: Number) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate(NavigationScreens.albumScreen, {album: album})
        }>
        <View style={styles.albumContainer}>
          <Text style={styles.albumText}>{album.title}</Text>
          <TouchableOpacity
            onPress={() => {
              const updatedAlbums = user.albums.filter(
                item => item.id !== album.id,
              );
              dispatch(setUserAlbums({albums: updatedAlbums, userId: user.id}));
            }}>
            <Image
              style={styles.minusImage}
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/659/659892.png',
              }}
            />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.text}>{user.name}</Text>
      </View>
      {!isLoading && user.albums ? (
        <FlatList
          data={user.albums}
          keyExtractor={item => item.id.toString()}
          renderItem={({item, index}) => renderItem(item, index)}
        />
      ) : (
        <ActivityIndicator
          size={'large'}
          style={{marginTop: 20}}
          color={theme.primaryColor}
        />
      )}
    </View>
  );
};

export default UserItem;
