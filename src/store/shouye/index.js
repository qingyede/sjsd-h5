import http from '@/api/index'
let timer = null
export default {
  namespaced: true,
  actions: {
    //发起得到热门城市的请求
    hotcity(context, value) {
      http
        .get('/v1/cities', {
          params: { type: 'hot' }
        })
        .then((res) => {
          value = res
          context.commit('HOTCITY', value)
        })
    },
    //发起得到全部城市的请求
    async allcity(context, value) {
      if (sessionStorage.getItem('localdata')) {
        value = JSON.parse(sessionStorage.getItem('localdata'))
        context.commit('ALLCITY', value)
      } else {
        const res = await http.get('/v1/cities', {
          params: { type: 'group' }
        })
        value = Object.fromEntries(Object.entries(res).sort())
        const localdata = JSON.stringify(
          Object.fromEntries(Object.entries(res).sort())
        )
        sessionStorage.setItem('localdata', localdata)
        context.commit('ALLCITY', value)
      }
    },
    //发起当前定位城市的请求
    positioncity(context, value) {
      http.get('/v1/cities', { params: { type: 'guess' } }).then((res) => {
        value = res
        context.commit('POSITIONCITY', value)
      })
    },
    //拿到当前指定城市的信息
    async getIdcity(context, value) {
      const res = await http.get(`/v1/cities/${value}`)
      value = res
      context.commit('GETIDCITY', value)
    },
    //搜索城市任务
    inputing(context, value) {
      if (value === '') {
        context.commit('INPUTING', value)
      }
      clearTimeout(timer)
      timer = setTimeout(async () => {
        const res = await http.get('/v1/pois', {
          params: { city_id: context.state.currentidcity.id, keyword: value }
        })
        value = res
        context.commit('INPUTING', value)
      }, 5)
    },
    //保存历史
    savecityhandler(context, value) {
      context.commit('SAVECITYHANDLER', value)
    }
  },
  mutations: {
    //修改热门城市的仓库
    HOTCITY(state, value) {
      state.hotcityList = value
    },
    //当前定位城市的state处理
    POSITIONCITY(state, value) {
      state.currentpositioncity = value
    },
    //当前指定城市的state处理
    GETIDCITY(state, value) {
      state.currentidcity = value
    },
    //全部城市
    ALLCITY(state, value) {
      state.allcityList = value
    },
    //搜索城市任务
    INPUTING(state, value) {
      if (value.message === '参数错误') {
        return
      }
      state.sousuorscity = value
      //TODO完成历史城市的展示
    },
    //保存历史
    SAVECITYHANDLER(state, value) {
      state.localsavecity.push(value)
      localStorage.setItem('savacity', JSON.stringify(state.localsavecity))
    },
    //保存route信息
    ROUTERINFO(state, value) {
      state.routerinfo = value
    }
  },
  state: {
    //热门城市数据
    hotcityList: [],
    //全部城市
    allcityList: [],
    //当前定位城市
    currentpositioncity: '',
    //当前城市id
    currentidcity: [],
    //搜索城市结果
    sousuorscity: [],
    //本地历史
    localsavecity: [],
    //保存的route信息
    routerinfo: []
  }
}
