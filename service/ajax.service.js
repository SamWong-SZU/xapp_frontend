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
const isProd = process.env.NODE_ENV === 'production' && false
const ajaxService = {
    getRecommendList () {
        return isProd ? axios.get(`${devUrl}/www.baidu.com`) : require('@/mockdata/recommendlist.json')
    },
    getTopList (a) {
        return isProd ? axios.get(`${devUrl}/www.baidu.com`) : require('@/mockdata/toplist.json')
    },
    getAppListByTools (type) {
        return isProd ? axios.get(`${devUrl}/www.baidu.com/type`) : require('@/mockdata/getAppListByTools.json')
    },
    getAppById (id) {
        return isProd ? axios.get(`${devUrl}/www.baidu.com`) : require('@/mockdata/getAppById.json')
    },
    announcements () {
        return isProd ? axios.get(`${devUrl}/www.baidu.com`) : require('@/mockdata/announcements.json')
    }
}

export default ajaxService

