import React from 'react';
import {
  Image,
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {globalStyles} from './../global/globalStyles';
import Icon from 'react-native-vector-icons/FontAwesome';

const imageUriLego = {uri: 'https://randomuser.me/api/portraits/lego/6.jpg'};

const CustomDrawerContent = ({navigation}) => {
  const homeIcon = <Icon name="home" style={styles.iconsDrawer} />;
  const aboutIcon = <Icon name="address-card" style={styles.iconsDrawer} />;
  const userIcon = <Icon name="user" style={styles.iconsDrawer} />;
  const settingsIcon = <Icon name="cog" style={styles.iconsDrawer} />;

  TouchableOpacity.defaultProps = {activeOpacity: 0.8};
  return (
    <View style={styles.container}>
      <View style={styles.imageView}>
        <Image source={imageUriLego} style={styles.image} />
      </View>
      <TouchableOpacity
        style={styles.buttonDrawer}
        activeOpacity={0.8}
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <Text style={styles.textButtonDrawer}>{homeIcon} Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonDrawer}
        activeOpacity={0.8}
        onPress={() => {
          navigation.navigate('Profile');
        }}>
        <Text style={styles.textButtonDrawer}>{userIcon} Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonDrawer}
        activeOpacity={0.8}
        onPress={() => {
          navigation.navigate('Settings');
        }}>
        <Text style={styles.textButtonDrawer}>{settingsIcon} Setting</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonDrawer}
        activeOpacity={0.8}
        onPress={() => {
          navigation.navigate('About');
        }}>
        <Text style={styles.textButtonDrawer}>{aboutIcon} About</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  imageView: {
    alignItems: 'center',
  },
  image: {
    marginTop: 50,
    marginBottom: 50,
    width: 120,
    height: 120,
    borderRadius: 50,
  },
  buttonDrawer: {
    backgroundColor: '#4c9c27',
    marginTop: 10,
    borderTopLeftRadius: 60,
    borderBottomRightRadius: 60,
  },
  textButtonDrawer: {
    textTransform: 'uppercase',
    padding: 10,
    fontSize: 16,
    paddingLeft: 30,
    color: '#fff',
  },
  iconButtonDrawer: {
    color: '#fff',
  },
  iconsDrawer: {
    fontSize: 20,
  },
});

export default CustomDrawerContent;
