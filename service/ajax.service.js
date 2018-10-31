import axios from 'axios'
const config = {
    'development': {
        devUrl: '/api'
    },
    'production': {
        devUrl: '/api'
    }
}

const devUrl = config[process.env.NODE_ENV].devUrl || config['production'].devUrl
const isProd = process.env.NODE_ENV === 'production' && false
const ajaxService = {
    getRecommendList () {
        return isProd ? axios.get(`${devUrl}/getRecommendList`) : require('@/mockdata/recommendlist.json')
    },
    getTopList () {
        return isProd ? axios.get(`${devUrl}/getTopList`) : require('@/mockdata/toplist.json')
    },
    getAppListByType (type) {
        return isProd ? axios.get(`${devUrl}/getAppListByType/${type}`) : require('@/mockdata/getAppListByType.json')
    },
    getAppById (id) {
        return isProd ? axios.get(`${devUrl}/getAppById`) : require('@/mockdata/getAppById.json')
    },
    announcements () {
        return isProd ? axios.get(`${devUrl}/getAnnouncements`) : require('@/mockdata/announcements.json')
    },
    feedback (param = {}) {
        return axios.post(`${devUrl}/feedback`, param)
    }

}

export default ajaxService

