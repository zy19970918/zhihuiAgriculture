import axios from "axios";
import {
  Message
} from "element-ui";

//1.创建新的axios实例
const reqest = axios.create({
  baseURL: "http://192.168.101.13:8803/",
  timeout: 3 * 1000 //超时时间3秒
});
//2.请求拦截器
reqest.interceptors.request.use(
  config => {
    //发送请求前做的一些处理 ,数据转化、配置请求头、设置token 设置lodingdeng
    //  const userid = ;  //注意使用的时候需要引入cookie方法，js-cookie
    config.data = JSON.stringify(config.data);
    config.headers = {
      "Content-Type": "application/json"
    };
    if (JSON.parse(localStorage.getItem("user"))) {
      config.params.userid = JSON.parse(localStorage.getItem("user")).userid
    }
    return config;
  },
  error => {
    Message({
      showClose: true,
      message: error.message,
      type: "error"
    });
    return Promise.reject(error);
  }
);

reqest.interceptors.response.use(
  response => {
    //接收到响应数据并成功后的一些共有的处理，关闭loading等

    return response;
  },
  error => {
    /***** 接收到异常响应的处理开始 *****/
    if (error && error.response) {
      // 1.公共错误处理
      // 2.根据响应码具体处理
      switch (error.response.status) {
        case 400:
          error.message = "错误请求";
          break;
        case 401:
          error.message = "未授权，请重新登录";
          break;
        case 403:
          error.message = "拒绝访问";
          break;
        case 404:
          error.message = "请求错误,未找到该资源";
          window.location.href = "/NotFound";
          break;
        case 405:
          error.message = "请求方法未允许";
          break;
        case 408:
          error.message = "请求超时";
          break;
        case 500:
          error.message = "服务器端出错";
          break;
        case 501:
          error.message = "网络未实现";
          break;
        case 502:
          error.message = "网络错误";
          break;
        case 503:
          error.message = "服务不可用";
          break;
        case 504:
          error.message = "网络超时";
          break;
        case 505:
          error.message = "http版本不支持该请求";
          break;
        default:
          error.message = `连接错误${error.response.status}`;
      }
    } else {
      // 超时处理
      if (JSON.stringify(error).includes("timeout")) {
        Message.error("服务器响应超时，请刷新当前页");
      }
    }
    console.log(error);
    // Message.error(err.message);
    /***** 处理结束 *****/
    //如果不需要错误处理，以上的处理过程都可省略
    return Promise.resolve(error.response);
  }
);
//4.导出文件
export default reqest;
