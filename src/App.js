import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from './components/common';

class App extends Component {
  render() {
      return (
        <View>
          <Header headerText="Teachers" />
        <Text>Teachers Login</Text>
        </View>
      );
    }
};

export default App;