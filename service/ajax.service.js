import axios from 'axios'
const config = {
    'development': {
        devUrl: 'https://xapp.zone/api'
    },
    'production': {
        devUrl: 'https://xapp.zone/api'
    }
}

const devUrl = config[process.env.NODE_ENV].devUrl || config['production'].devUrl
const isProd = process.env.NODE_ENV === 'production'
const ajaxService = {
    axios,
    getRecommendList () {
        return require('@/mockdata/recommendlist.json')
    },
    getTopList () {
        return require('@/mockdata/toplist.json')
    },
    getAppListByType (type) {
        return require('@/mockdata/getAppListByType.json')
    },
    getAppById (id) {
        return require(`@/mockdata/app/${id}.json`)
    },
    announcements () {
        return require('@/mockdata/recommendlist.json')
    },
    feedback (param = {}) {
        return axios.post(`${devUrl}/feedback`, param)
    },
    submitApp (param = {}) {
        return axios.post(`${devUrl}/submitApp`, param)
    }

}

export default ajaxService

