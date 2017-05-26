import Qs from 'qs'
import Store from 'store'
export default{

  url: '/route',
  baseURL: 'http://www.yyxx100.com/yyxx/',
  method: 'POST',

  transformRequest: [function (data) {
    //为了避免qs格式化时对内层对象的格式化先把内层的对象转为
    //data.CustData = JSON.stringify(data.CustData);
    //由于使用的form-data传数据所以要格式化
    data = Qs.stringify(data);
    return data;
  }],


  transformResponse: [function (data) {

    return data;
  }],

  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },


  params: {
    eid: 8484662,
    openid: Store.get('__YYXXAPP_OPENID__') || '',
    pubacckey: '',
    timestamp: '',
    nonce: '',
    pubaccid: '',
  },


  paramsSerializer: function (params) {
    return Qs.stringify(params)
  },


  data: {

  },


  timeout: 1000,


  withCredentials: false, // default


  responseType: 'json', // default


  onUploadProgress: function (progressEvent) {
    // Do whatever you want with the native progress event
  },


  onDownloadProgress: function (progressEvent) {
    // Do whatever you want with the native progress event
  },


  maxContentLength: 2000,


  validateStatus: function (status) {
    return status >= 200 && status < 300; // default
  },


  maxRedirects: 5, // default
}
