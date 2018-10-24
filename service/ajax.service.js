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
        return axios.get(`${devUrl}/www.baidu.com`)
    }
}

export default ajaxService

