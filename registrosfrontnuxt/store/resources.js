import _ from 'lodash'

export const state = () => ({
  resourceList: [],
  loaded: false,
  activeResource: ''
})

/**
* @type {import('vuex').GetterTree<ReturnType<typeof state>>, any>}
*/
export const getters = {
  resourceTypes (state) {
    return _.uniq(state.resourceList.map(r => r.type))
  },
  activeResources (state) {
    return state.resourceList.filter((r) => {
      return r.type === state.activeResource
    })
  }
}

/**
* @type {import('vuex').MutationTree<ReturnType<typeof state>>>}
*/
export const mutations = {
  setListResources (state, payload) {
    state.resourceList = payload
  },
  setActiveResource (state, type) {
    state.activeResource = type
  },
  updateResource (state, resource) {
    state.resourceList = state.resourceList.map((r) => {
      if (r.id === resource.id) {
        return resource
      }
      return r
    })
  },
  resourceAddition (state, resource) {
    state.resourceList = [...state.resourceList, resource]
  }
}

/**
* @type {import('vuex').ActionTree<ReturnType<typeof state>>, any>}
*/
export const actions = {
  async retrieveResources (ctx) {
    try {
      const response = await this.$axios.get('/resources')
      ctx.commit('setListResources', response.data.payload)
    } catch (error) {
      console.error(error)
    }
  },
  async editResource (ctx, resource) {
    try {
      const resourceReq = await this.$axios.put('/resources/' + resource.id, resource)
      ctx.commit('updateResource', resourceReq.data.payload)
    } catch (error) {
      console.error(error)
    }
  },
  async addResource (ctx, resource) {
    try {
      const resourceReq = await this.$axios.post('/resources/', {
        ...resource,
        type: ctx.state.activeResource
      })
      ctx.commit('resourceAddition', resourceReq.data.payload)
    } catch (error) {
      console.error(error)
    }
  }
}

export const strict = false
