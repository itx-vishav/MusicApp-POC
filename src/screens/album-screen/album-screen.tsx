import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  useGetAlbumsImagesByAlbumIdQuery,
  useGetAllImagesQuery,
} from '../../redux/queries/users';
import {Album, AlbumPhoto} from '../../utils/types/userTypes';
import styles from './album-screen.styles';
import {theme} from '../../utils/constants/theme';
import ImageWithLoadingIndicator from './components/image-with-loading-indicator';

const AlbumScreen = () => {
  const [starIconActive, setStarIconActive] = useState(false);
  const {
    data: allImagesData,
    error: allImagesError,
    isLoading: allImagesLoading,
  } = useGetAllImagesQuery();
  const navigation = useNavigation();
  const route = useRoute();
  const {album}: {album?: Album} = route.params || {};

  if (album?.id) {
    const {data, error, isLoading} = useGetAlbumsImagesByAlbumIdQuery(album.id);

    const renderItem = (photoItem: AlbumPhoto) => {
      return <ImageWithLoadingIndicator imageURL={photoItem.thumbnailUrl} />;
    };

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={navigation.goBack}>
            <Image
              style={styles.leftIcon}
              source={require('../../assets/left-chevron.png')}
            />
          </TouchableOpacity>
          <Text style={styles.headerText}>
            {starIconActive ? 'All Photos' : album.title}
          </Text>
          <TouchableOpacity onPress={() => setStarIconActive(!starIconActive)}>
            {starIconActive ? (
              <Image
                style={styles.leftIcon}
                source={require('../../assets/star.png')}
              />
            ) : (
              <Image
                style={styles.leftIcon}
                source={require('../../assets/white-star.png')}
              />
            )}
          </TouchableOpacity>
        </View>

        {isLoading && (
          <ActivityIndicator
            size={'large'}
            style={{marginTop: 20}}
            color={theme.primaryColor}
          />
        )}

        <FlatList
          data={starIconActive ? allImagesData : data}
          numColumns={3}
          keyExtractor={item => item.id.toString()}
          renderItem={({item, index}) => renderItem(item)}
        />
      </SafeAreaView>
    );
  } else navigation.goBack();
};

export default AlbumScreen;
