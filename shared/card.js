import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Card = props => {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Text>{props.children}</Text>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    borderRadius: 6,
    elevation: 3,
    // backgroundColor: '#fff',
    shadowOffset: {width: 1, height: 1},
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowRadius: 2,
    marginTop: 10,
    marginHorizontal: 10,
    marginVertical: 5,
    backgroundColor: '#ffefdb',
  },
  cardContent: {
    marginHorizontal: 18,
    marginVertical: 18,
  },
});
