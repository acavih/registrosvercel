export const state = () => ({
  token: '',
  userInfo: ''
})

/**
* @type {import('vuex').GetterTree<ReturnType<typeof state>>, any>}
*/
export const getters = {
  isLogged (state) {
    return state.token !== ''
  }
}

/**
* @type {import('vuex').MutationTree<ReturnType<typeof state>>>}
*/
export const mutations = {
  login (state, payload) {
    console.log('on the mutation')
    state.token = payload.token
    state.userInfo = payload.userInfo
  },
  logout (state) {
    state.userInfo = {}
    state.token = ''
  }
}

/**
* @type {import('vuex').ActionTree<ReturnType<typeof state>>, any>}
*/
export const actions = {
}

export const strict = false
