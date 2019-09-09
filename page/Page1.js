import React from 'react';

import {Button, View, Text} from 'react-native';

class Page1 extends React.Component {
  static navigationOptions = {
    title: 'HomePage',
    headerBackTitle: 'this is back',
  };
  render() {
    const {navigation} = this.props;
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Page1 Screen</Text>
      </View>
    );
  }
}
export default Page1;
