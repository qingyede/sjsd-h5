import http from '@/api/index'
import axios from 'axios'
export default {
  namespaced: true,
  actions: {
    //得到推荐菜单
    async getmenus(context, value) {
      const res = await http.get('/v2/index_entry')
      value = res
      context.commit('GETMENUS', value)
    },
    //得到附近店铺
    async nearshop(context, value) {
      const res = await axios.get(
        `https://elm.cangdu.org/shopping/restaurants?latitude=${value.latitude}&longitude=${value.longitude}`
      )
      value = res.data
      context.commit('NEARSHOP', value)
    },
    //得到下拉菜单的数据
    async getsliderdownmsg(context, value) {
      const res = await axios.get(
        'https://elm.cangdu.org/shopping/v2/restaurant/category'
      )
      value = res.data
      context.commit('GETSLIDERDOWNMSG0', value)
    }
  },
  mutations: {
    //得到推荐菜单
    GETMENUS(state, value) {
      state.menusdata = value
    },
    //得到附近店铺
    NEARSHOP(state, value) {
      state.nearshoplist = value
    },
    //存储现在是下拉菜单中的哪一个
    GETKEY(state, value) {
      state.key = value
    },
    //跳转到slider页面需要的数据
    TOLSIDERMSG(state, value) {
      state.slidermsg = value
    },
    //得到下拉菜单的数据
    GETSLIDERDOWNMSG0(state, value) {
      state.slidermainu = value
    },
    //用户点击的菜单列表数据
    SHOWMENU(state, value) {
      state.clickmenulist = value.sub_categories
    }
  },
  getters: {},
  state: {
    //菜单列表的数据
    menusdata: [],
    //得到附近店铺
    nearshoplist: [],
    //存储现在是下拉菜单中的哪一个
    key: 0,
    //跳转到slider页面需要的数据
    slidermsg: [],
    //下拉菜单的数据
    slidermainu: [],
    //用户点击的菜单列表数据
    clickmenulist: []
  }
}
