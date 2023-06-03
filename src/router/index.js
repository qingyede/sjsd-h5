import Vue from 'vue'
import VueRouter from 'vue-router'
import Detailarea from '@/views/detailarea/detail-area'
import Index from '@/views/index/index-page'
import First from '@/views/first/first-page'
import Searchpage from '@/views/serarch/search-page'
import Mainu from '@/views/mainu/mainu-page'
import Mypage from '@/views/my/my-page'
import Home from '@/views/home/home-page'
import Slider from '@/components/slider/slider-page'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Index, name: 'index' },
  { path: '/area', component: Detailarea, name: 'area' },
  {
    path: '/first',
    component: First,
    name: 'first',
    children: [
      { path: 'home', component: Home },
      { path: 'search', component: Searchpage },
      { path: 'mainu', component: Mainu },
      { path: 'my', component: Mypage }
    ]
  },
  { path: '/slider', component: Slider, name: 'slider' }
]

const router = new VueRouter({
  routes
})

export default router
