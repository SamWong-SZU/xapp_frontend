import axios from 'axios'
const config = {
    'development': {
        devUrl: 'http://erp2.hwdev.pagoda.com.cn'
    },
    'production': {
        devUrl: 'http://erp2.hwdev.pagoda.com.cn'
    }
}

const devUrl = config[process.env.NODE_ENV].devUrl || config['production'].devUrl

const ajaxService = {
    getRecommendList () {
        return require('@/mockdata/recommendlist.json')
        // return axios.get(`${devUrl}/www.baidu.com`)
    },
    getTopList () {
        return require('@/mockdata/toplist.json')
        // return axios.get(`${devUrl}/www.baidu.com`)
    },
    getAppListByTools () {
        return require('@/mockdata/getAppListByTools.json')
        // return axios.get(`${devUrl}/www.baidu.com`)
    },
    getAppById () {
        return require('@/mockdata/getAppById.json')
        // return axios.get(`${devUrl}/www.baidu.com`)
    },
    announcements () {
        return require('@/mockdata/announcements.json')
        // return axios.get(`${devUrl}/www.baidu.com`)
    }
}

export default ajaxService

