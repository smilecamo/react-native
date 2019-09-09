import {createStackNavigator} from 'react-navigation-stack';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import HomePage from '../page/HomePage';
import Login from '../page/Login';
import Info from '../page/Info';
// 顶部导航
const AppTopNav = createMaterialTopTabNavigator(
  {
    ClassInfo: {
      screen: Info,
      navigationOptions: {
        tabBarLabel: '班级消息',
      },
    },
    Info: {
      screen: Info,
      navigationOptions: {
        tabBarLabel: '最新消息',
      },
    },
  },
  {
    // 样式设置
    tabBarOptions: {
      upperCaseLabel: false, //是否大写
      scrollEnabled: true, //滑动切换tab
      style: {
        backgroundColor: '#000',
      },
      labelStyle: {
        fontSize: 13,
        color: '#fff',
      },
    },
  },
);
// 界面导航
export const appStackNavigator = createStackNavigator({
  // 主导航页
  HomePage: {
    screen: HomePage,
  },
  Login: {
    screen: Login,
    navigationOptions: () => ({
      header: null,
    }),
  },
  info: {
    screen: AppTopNav,
    navigationOptions: {
      //定义导航属性
      title: '消息界面',
    },
  },
});
