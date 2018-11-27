// 登录功能发送axios请求--先npm 下载安装
import axios from 'axios'
const MyHttpServer={}
MyHttpServer.install=(Vue)=>{
    axios.defaults.baseURL='http://localhost:8888/api/private/v1/'
    // 添加实例方法
    Vue.prototype.$http=axios
}
export default MyHttpServer