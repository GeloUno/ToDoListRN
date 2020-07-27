import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Header = ({titleMenuBar}) => {
  const backIcon = <Icon name="chevron-left" style={styles.backIcon} />;
  const menuIcon = <Icon name="bars" style={styles.menuIcon} />;
  return (
    <View style={styles.headerView}>
      <Text style={styles.headerText}> {backIcon}</Text>
      <Text style={styles.headerText}>{titleMenuBar}</Text>
      <Text style={styles.headerText}>{menuIcon}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerView: {
    flexDirection: 'row',
    backgroundColor: '#a7ba81',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    padding: 15,
    color: '#fff',
    alignItems: 'center',
  },
  backIcon: {
    padding: 10,
    fontSize: 18,
  },
  menuIcon: {
    padding: 10,
    fontSize: 18,
  },
});

Header.defaultProps = {
  titleMenuBar: 'To Do List',
};

export default Header;
