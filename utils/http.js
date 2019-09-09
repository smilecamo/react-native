const base = 'http://47.100.31.2/pjsys';
import axios from 'axios';
import Toast from './Toast';
axios.interceptors.request.use(
  config => {
    return config;
  },
  err => {
    Toast('请求超时!');
    return Promise.resolve(err);
  },
);
axios.interceptors.response.use(
  data => {
    if (data.status && data.status == 200 && data.data.status == 'error') {
      Toast('请求超时!');
      return;
    }
    return data;
  },
  err => {
    if (err.response.status == 504 || err.response.status == 404) {
      Toast('服务器被吃了⊙﹏⊙∥');
    } else if (err.response.status == 403) {
      Toast('权限不足,请联系管理员!');
    } else {
      Toast('未知错误!');
    }
    return Promise.resolve(err);
  },
);

export const postRequest = (url, params) => {
  return axios({
    method: 'post',
    url: `${base}${url}`,
    params: params,
  });
};
export const deleteRequest = url => {
  return axios({
    method: 'delete',
    url: `${base}${url}`,
  });
};
export const getRequest = url => {
  return axios({
    method: 'get',
    url: `${base}${url}`,
  });
};
// // import router from './router';
// axios.defaults.headers.post['Content-Type'] = 'application/json';

// // 设置过期时间
// const service = axios.create({
//   // 设置超时时间
//   timeout: 60000,
// });
// // 请求拦截
// service.interceptors.request.use(
//   config => {
//     // 加载动画
//     return config;
//   },
//   error => Promise.reject(error),
// );

// // 响应拦截
// service.interceptors.response.use(
//   config => {
//     // 结束loading
//     return config;
//   },
//   error => {
//     // 结束loading
//     // 提示错误
//     return Promise.reject(error);
//   },
// );

// export default BaseUrl;
