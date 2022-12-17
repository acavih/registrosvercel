<template>
  <v-sheet>
    <v-card :disabled="loading">
      <v-card-title>
        Listado de socios
      </v-card-title>
      <v-card-text>
        <partners-table :total-partners="totalPartners" :loading="loading" :partners-list="partners" />
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
  computed: {
    ...mapState('partners', ['partners', 'partnerTableHeaders', 'totalPartners'])
  },
  watch: {
    '$route.query' () {
      this.handleRetrievePartners()
    }
  },
  mounted () {
    this.handleRetrievePartners()
  },
  methods: {
    ...mapActions('partners', ['retrievePartners']),
    async handleRetrievePartners () {
      this.loading = true
      await this.retrievePartners(this.$route.query || this.optionsPage)
      this.loading = false
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
