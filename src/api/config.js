import axios from "axios"
import {ElMessage} from 'element-plus'


axios.defaults.headers.common["Content-Type"] = "application/json; charset=UTF-8"
axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*"

// 环境切换
if (process.env.NODE_ENV == 'development') {
    axios.defaults.baseURL = '/api'
} else if (process.env.NODE_ENV == 'production'){
    axios.defaults.baseURL = 'https://api.com/'
}else {
    axios.defaults.baseURL = ''
}
axios.defaults.timeout = 10000






// 请求拦截器 添加token
    axios.interceptors.request.use(
        config => {
            // 添加token
            // const  token = store.state.token;
            // token && (config.headers.Authorization = token);
            return config
        },
        error => {
            return Promise.reject(error)
        }
    )

// 响应拦截器即异常处理
axios.interceptors.response.use(
    response => {
        return response
    },
    error => {
        // 添加响应状态反应
        ElMessage({
            message: error.message,
            type: "error",
            duration: 5000,
        })
        return Promise.resolve(error)
    }
)

export default {
    // get请求
    get(url, param) {
        return new Promise((resolve, reject) => {
            axios({
                method: "get",
                url,
                params: param,
            })
                .then(res => {
                    resolve(res)
                })
                .catch(error => {
                    ElMessage({
                        message: error,
                        type: "error",
                        duration: 5000,
                    })
                    reject(error)
                })
        })
    },
    // post请求
    post(url, param) {
        return new Promise((resolve, reject) => {
            axios({
                method: "post",
                url,
                data: param,
            })
                .then(res => {
                    resolve(res)
                })
                .catch(error => {
                    ElMessage({
                        message: error,
                        type: "error",
                        duration: 5000,
                    })
                    reject(error)
                })
        })
    },
    // all get
    allGet(fnArr) {
        return axios.all(fnArr)
    },
}