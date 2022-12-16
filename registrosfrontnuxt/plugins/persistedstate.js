import VuexPersistence from 'vuex-persist'

export default ({ $axios, store, req, isDev }) => {
  new VuexPersistence({
    key: 'test',
    modules: ['auth']
  }).plugin(store)
  const token = store.state.auth.token
  $axios.defaults.headers.common.authorization = token
}
