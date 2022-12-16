<template>
  <v-sheet>
    <v-card :disabled="loading">
      <v-card-title>
        Listado de socios
      </v-card-title>
      <v-card-text>
        <partners-table :loading="loading" :partners-list="partners" />
      </v-card-text>
    </v-card>
  </v-sheet>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import PartnersTable from '~/components/partners/PartnersTable.vue'
export default {
  components: { PartnersTable },
  data () {
    return {
      loading: false
    }
  },
  async created () {
    this.loading = true
    await this.handleRetrievePartners()
    this.loading = false
  },
  computed: {
    ...mapState('partners', ['partners', 'partnerTableHeaders'])
  },
  methods: {
    ...mapActions('partners', ['retrievePartners']),
    async handleRetrievePartners () {
      await this.retrievePartners()
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
