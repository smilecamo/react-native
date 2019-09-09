import React from 'react';
import axios from 'axios';
import BaseUrl from '../utils/http';
import AsyncStorage from '@react-native-community/async-storage';
import {Button, View, Text, FlatList, ScrollView} from 'react-native';
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
  async componentDidMount() {
    await this.setUser();
    axios
      .post(`${BaseUrl}/pjsys/queryFirstThreeByImessage`, {
        params: {
          user_id: this.state.store,
        },
      })
      .then(res => console.log('susse' + res, this.state.store))
      .catch(err => console.log('err' + err));
  }
  setUser = async () => {
    try {
      let store = await AsyncStorage.getItem('userId');
      this.setState({store: Number(store)});
    } catch (e) {
      this.props.navigation.navigate('HomePage');
    }
  };
  _renderItem(item) {
    return (
      <View>
        <Text>{item.data}</Text>
      </View>
    );
  }
  render() {
    const {navigation} = this.props;
    return (
      <ScrollView>
        <Text>HomePage Screen</Text>
        <View>
          <FlatList
            data={this.state.data}
            renderItem={({item}) => this._renderItem(item)}
          />
        </View>
        <Button
          title="go Page1"
          onPress={() => {
            navigation.navigate('Page1');
          }}
        />
        <Button
          title="go Login"
          onPress={() => {
            navigation.navigate('Login');
          }}
        />
      </ScrollView>
    );
  }
}
export default HomePage;
