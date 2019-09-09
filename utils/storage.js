import AsyncStorage from '@react-native-community/async-storage';

/**
 * 获取存储的数据
 * @param {*} key
 */
exports.getItem = async key => {
  let item = await AsyncStorage.getItem(key);
  if (!item) {
    return null;
  }
  return item || null;
};
/**
 * 存入数据
 * @param {*} key
 * @param {*} value
 */
exports.setItem = (key, value) => AsyncStorage.setItem(key, value);

/**
 * 删除已经存在的数据
 * @param {*} key
 */
exports.removeItem = key => AsyncStorage.removeItem(key);

/**
 * 清除所有
 */
exports.clear = () => AsyncStorage.clear();

/**
 * 获取所有的key
 */
exports.getAllKeys = () => AsyncStorage.getAllKeys();
