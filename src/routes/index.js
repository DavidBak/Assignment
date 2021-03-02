import Vue from 'vue';
import VueRouter from 'vue-router';
import FeedList from '../components/FeedList.vue'
import FeedDetail from '../components/FeedDetail.vue'    

Vue.use(VueRouter);
export const router = new VueRouter({
    mode:'history',
    routes:[
        {
            path: '/',
            redirect: 'list'
        },
        {
            path: '/list',
            name: 'list',
            component:FeedList
        },
        {
            path: '/detail',
            name: 'detail',
            component:FeedDetail
        }
    ]
})


