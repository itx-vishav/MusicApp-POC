import React, {useState} from 'react';
import {View, Image, ActivityIndicator, StyleSheet} from 'react-native';
import {theme} from '../../../../utils/constants/theme';

interface Props {
  imageURL: string;
}

const ImageWithLoadingIndicator: React.FC<Props> = ({imageURL}) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{uri: imageURL}}
        onLoadStart={() => setIsLoading(true)} // Show the activity indicator when the image starts loading
        onLoad={() => setIsLoading(false)} // Hide the activity indicator when the image is loaded
      />

      {isLoading && (
        <ActivityIndicator
          style={styles.activityIndicator}
          size="large"
          color={theme.primaryColor}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activityIndicator: {
    position: 'absolute',
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
});

export default ImageWithLoadingIndicator;
