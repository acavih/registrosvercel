export const state = () => ({
  attentions: []
})

/**
* @type {import('vuex').GetterTree<ReturnType<typeof state>>, any>}
*/
export const getters = {
}

/**
* @type {import('vuex').MutationTree<ReturnType<typeof state>>>}
*/
export const mutations = {
  attentionsList (state, { payload }) {
    state.attentions = payload
  }
}

/**
* @type {import('vuex').ActionTree<ReturnType<typeof state>>, any>}
*/
export const actions = {
  async getMemberAttentions (ctx, user) {
    const attentionsReq = await this.$axios.get('/attentions/by-user/' + user)
    ctx.commit('attentionsList', attentionsReq.data)
  }
}

export const strict = false
