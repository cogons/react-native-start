import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Links'
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Settings</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff'
  }
});
