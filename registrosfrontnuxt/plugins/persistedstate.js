import VuexPersistence from 'vuex-persist'

export default ({ store, req, isDev }) => {
  new VuexPersistence({
    key: 'test',
    modules: ['auth']
  }).plugin(store)
}
