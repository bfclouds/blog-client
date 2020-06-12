import axios from "axios"

axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.withCredentials = true; // 跨域允许携带cookie
axios.defaults.headers.post["content-type"] = "application/x-www-from-urlencoded"; // 设置post请求格式

export default axios;