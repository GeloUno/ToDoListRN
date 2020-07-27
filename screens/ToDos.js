import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {globalStyles} from './../global/globalStyles';
import Card from '../shared/card';
import {imagesSrcRaiting} from './../global/imagesSrcRaiting';

const ToDos = ({route}) => {
  const ratingStars = route.params.rating;

  return (
    <View>
      <Card>
        <Text style={globalStyles.listGlobal}>
          Id: {route.params.key + '\n'}
        </Text>
        <Text style={globalStyles.listGlobal}>
          Name: {route.params.name + '\n'}
        </Text>
        <Text style={globalStyles.listGlobal}>
          Description: {route.params.body + '\n'}
        </Text>

        <Text style={globalStyles.listGlobal}>Range of Heroes: {'\n'}</Text>
        <Image
          style={styles.imagesRating}
          source={imagesSrcRaiting.raiting[ratingStars]}
        />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  imagesRating: {
    margin: 25,
  },
});

export default ToDos;
