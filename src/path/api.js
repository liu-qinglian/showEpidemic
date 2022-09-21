// 请求接口的方法
import axios from 'axios'
import base from './base'

const api = {
    // 获取病毒信息
    // getWholeData() {
    //     return axios.get(base.host + base.covInfo)

    // },
    getWholeDataTest() {
        return axios.get(base.host + base.covInfo)
    },

    getWholeWorldDataTest() {
        return axios.get(base.host2 + base.covInfo2)
    },

    getChinaData() {
        return axios.get(base.chinaInter + base.ChinaParam)
    },

    getChinaCityData() {
        return axios.get(base.baseUrl)
    }
}

export default api;