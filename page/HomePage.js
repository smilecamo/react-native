import React from 'react';
import {Button, View, Text, FlatList, ScrollView} from 'react-native';
import {postRequest} from '../utils/http';
import {getItem} from '../utils/storage';
class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      store: '',
    };
  }
  static navigationOptions = {
    title: '主页',
  };
  render() {
    const {navigation} = this.props;
    return (
      <ScrollView>
        <Text>HomePage Screen</Text>
        <View />
        <Button
          title="go Page1"
          onPress={() => {
            navigation.navigate('Page1');
          }}
        />
        <Button
          title="登录"
          onPress={() => {
            navigation.navigate('Login');
          }}
        />
        <Button
          title="消息界面"
          onPress={() => {
            navigation.navigate('info');
          }}
        />
      </ScrollView>
    );
  }
}
export default HomePage;
