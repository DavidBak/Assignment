import axios from "axios"

const config = {
    baseUrl: 'https://problem.comento.kr/'
}

function fetchList()  {
    return axios.get(`${config.baseUrl}api/list`)
}
function fetchCategory()  {
    return axios.get(`${config.baseUrl}api/category`)
}
function fetchAds()  {
    return axios.get(`${config.baseUrl}api/ads?page=1&limit=1`)
}
function fetchDetail()  {
    return axios.get(`${config.baseUrl}api/view?id=1`)
}

export {
    fetchList,
    fetchCategory,
    fetchAds,
    fetchDetail
}