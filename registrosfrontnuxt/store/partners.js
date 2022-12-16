export const state = () => ({
  partners: [],
  partnerTableHeaders: [
    { text: '', value: 'data-table-expand' },
    { text: 'Código', value: 'codigo' },
    { text: 'Nombre', value: 'nombre' },
    { text: 'Apellidos', value: 'apellidos' },
    { text: 'Edad', value: 'fechanacimiento' },
    { text: 'Email', value: 'correoelectronico' },
    { text: 'Acciones', value: 'actions' }
  ]
})

/**
* @type {import('vuex').GetterTree<ReturnType<typeof state>>, any>}
*/
export const getters = {
  partnerById: state => (id) => {
    return state.partners.filter(p => p.id === id)[0]
  }
}

/**
* @type {import('vuex').MutationTree<ReturnType<typeof state>>>}
*/
export const mutations = {
  partnersList (state, list) {
    state.partners = list
  },
  partnerAddition (state, partner) {
    state.partners.push(partner)
  }
}

/**
* @type {import('vuex').ActionTree<ReturnType<typeof state>>, any>}
*/
export const actions = {
  async retrievePartners (ctx) {
    const reponsePartners = await this.$axios.get('/partners')

    ctx.commit('partnersList', reponsePartners.data.payload)
  },
  async retrievePartner (ctx, id) {
    const partnerRequest = await this.$axios.get('/partners/' + id)
    ctx.commit('partnerAddition', partnerRequest.data.payload)
  }
}

export const strict = false
