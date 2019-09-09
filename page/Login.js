import React from 'react';
import {Button, View, Text, TextInput, StyleSheet} from 'react-native';
import Toast from '../utils/Toast';
import {setItem} from '../utils/storage';
import {postRequest} from '../utils/http';
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobilephone: '',
      password: '',
    };
  }
  setUser = async data => {
    try {
      setItem('userId', data.toString());
      this.props.navigation.navigate('HomePage');
    } catch (e) {
      console.log(e);
      Toast('获取出错啦~');
    }
  };
  login() {
    postRequest('/pjsys/login.action', {
      mobilephone: this.state.mobilephone,
      password: this.state.password,
    })
      .then(res => {
        if (res.data == 0) {
          Toast('密码或账号错误');
        } else {
          this.setUser(res.data);
        }
      })
      .catch(e => console.log('login' + e), Toast('后台出错'));
  }
  register() {
    Toast('暂未开放该功能');
  }
  found() {
    Toast('暂未开放该功能');
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>教务系统</Text>
        <View>
          <TextInput
            style={styles.input}
            placeholder={'手机号'}
            onChangeText={mobilephone => {
              this.setState({mobilephone});
            }}
          />
        </View>
        <View>
          <TextInput
            style={styles.input}
            placeholder={'密码'}
            secureTextEntry={true}
            onChangeText={password => {
              this.setState({password});
            }}
          />
        </View>
        <View style={styles.LoginBtn}>
          <Button title={'登录'} onPress={() => this.login()} />
        </View>
        <View style={styles.footer}>
          <Text
            onPress={() => {
              this.register();
            }}>
            立即注册
          </Text>
          <Text
            onPress={() => {
              this.found();
            }}>
            找回密码
          </Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    textAlign: 'center',
    color: '#000',
    fontSize: 36,
    marginTop: 40,
    marginBottom: 40,
  },
  input: {
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    paddingTop: 20,
  },
  LoginBtn: {
    paddingTop: 40,
    paddingLeft: 50,
    paddingRight: 50,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 20,
    paddingLeft: 50,
    paddingRight: 50,
  },
});
export default Login;
