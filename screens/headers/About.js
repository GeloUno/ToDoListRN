import React from 'react';
import {View, Text, StyleSheet, Image, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

// const myIcon = <Icon name="navigate_before" size={30} color="#900" />;

const Header = ({navigation, title}) => {
  return (
    <ImageBackground
      source={require('../../assets/images/game_bg.png')}
      style={styles.header}>
      <Icon
        style={styles.iconHeader}
        onPress={() => navigation.openDrawer()}
        name="bars"
      />
      <View style={styles.imageHeartAndText}>
        <Image
          style={styles.imageHeartHeader}
          source={require('../../assets/images/heart_logo.png')}
        />
        <Text style={styles.textHeader}>{title}</Text>
      </View>
      <Icon
        style={styles.iconHeader}
        onPress={() => navigation.goBack()}
        name="chevron-left"
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    // backgroundColor: '#95b600',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textHeader: {
    color: '#000',
    fontSize: 23,
    textAlign: 'center',
  },
  iconHeader: {
    color: '#000',
    fontSize: 23,
    textAlign: 'center',
  },
  imageHeartAndText: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageHeartHeader: {
    marginLeft: -50,
    marginHorizontal: 25,
    // top: 10,
    right: 25,
    width: 35,
    height: 35,
  },
});

export default Header;
