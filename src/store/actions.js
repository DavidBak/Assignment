import {
    fetchList,
    fetchCategory,
    fetchAds,
    fetchDetail
} from '../api/index.js'

export default {
    FETCH_LIST(context){
        fetchList()
        .then((res)=>context.commit('SET_LIST', res.data))
        .catch(err => console.log(error));
    },
    FETCH_CATEGORY(context){
        fetchCategory()
        .then((res)=>context.commit('SET_CATEGORY', res.data))
        .catch(err => console.log(error));
    },
    FETCH_ADS(context){
        fetchAds()
        .then((res)=>context.commit('SET_ADS', res.data))
        .catch(err => console.log(error));
    },
    FETCH_DETAIL(context){
        fetchDetail()
        .then((res)=>context.commit('SET_DETAIL', res.data))
        .catch(err => console.log(error));
    }
}