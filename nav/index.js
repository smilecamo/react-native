import {createStackNavigator} from 'react-navigation-stack';
import HomePage from '../page/HomePage';
import Login from '../page/Login';
import Page1 from '../page/Page1';
// 界面导航
export const appStackNavigator = createStackNavigator({
  // 主导航页
  HomePage: {
    screen: HomePage,
  },
  Page1: {
    screen: Page1,
  },
  Login: {
    screen: Login,
    navigationOptions: () => ({
      header: null,
    }),
  },
});
// export const createSwitch = createSwitchNavigator(
//   {
//     Auth: AuthStack,
//     App: appStackNavigator,
//   },
//   {
//     initialRouteName: 'HomePage',
//   },
// );
