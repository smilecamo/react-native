import React from 'react';
import {Button, View, Text, FlatList, ScrollView} from 'react-native';
import {postRequest} from '../utils/http';
import {getItem} from '../utils/storage';
class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      store: '',
    };
  }
  // 获取最新三条消息
  // async componentDidMount() {
  //   await this.setUser();
  //   await postRequest('/pjsys/queryFirstThreeByImessage', {
  //     user_id: this.state.store,
  //   })
  //     .then(res => console.log(res.data))
  //     .catch(e => console.log(e));
  // }
  setUser = async () => {
    await getItem('userId').then(res => {
      console.log('res' + res);
      this.setState({store: res});
    });
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
        <Text> this is page</Text>
      </ScrollView>
    );
  }
}
export default Info;
