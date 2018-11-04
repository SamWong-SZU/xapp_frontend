import axios from 'axios'
const config = {
    'development': {
        devUrl: '//xapp.zone/api'
    },
    'production': {
        devUrl: '/api'
    }
}

const devUrl = config[process.env.NODE_ENV].devUrl || config['production'].devUrl
const isProd = process.env.NODE_ENV === 'production'
const ajaxService = {
    getRecommendList () {
        return axios.get(`${devUrl}/getRecommendList`)
    },
    getTopList () {
        return axios.get(`${devUrl}/getTopList`)
    },
    getAppListByType (type) {
        return axios.get(`${devUrl}/getAppListByType/${type}`)
    },
    getAppById (id) {
        return axios.get(`${devUrl}/getAppById/${id}`)
    },
    announcements () {
        return axios.get(`${devUrl}/getAnnouncements`)
    },
    feedback (param = {}) {
        return axios.post(`${devUrl}/feedback`, param)
    }

}

export default ajaxService

