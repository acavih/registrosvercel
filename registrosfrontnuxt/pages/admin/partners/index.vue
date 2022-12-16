<template>
  <v-sheet>
    <v-card :disabled="loading">
      <v-card-title>
        Listado de socios
      </v-card-title>
      <v-card-text>
        <partners-table :total-partners="totalPartners" :options-page.sync="optionsPage" :loading="loading" :partners-list="partners" />
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
      loading: false,
      optionsPage: {
        itemsPerPage: Number(this.$route.query.itemsPerPage),
        page: Number(this.$route.query.page || 1)
      }
    }
  },
  watch: {
    optionsPage: {
      deep: true,
      handler () {
        this.$router.push({
          query: this.optionsPage
        })
        setTimeout(() => {
          this.handleRetrievePartners()
        }, 250)
      }
    }
  },
  async created () {
    this.$router.push({
      query: this.optionsPage
    })
    await this.handleRetrievePartners()
  },
  computed: {
    ...mapState('partners', ['partners', 'partnerTableHeaders', 'totalPartners'])
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
