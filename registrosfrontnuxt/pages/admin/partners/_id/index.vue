<template>
  <v-sheet>
    <v-card>
      <v-card-title>
        Información del socio
      </v-card-title>
      <v-card-text>
        <partner-info v-if="partner" :partner="partner" />
      </v-card-text>
    </v-card>
  </v-sheet>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import PartnerInfo from '~/components/partners/PartnerInfo.vue'

export default {
  components: { PartnerInfo },
  computed: {
    ...mapGetters('partners', ['partnerById']),
    partner () {
      return this.partnerById(this.$route.params.id)
    }
  },
  async mounted () {
    if (typeof this.partner === 'undefined') {
      await this.retrievePartner(this.$route.params.id)
    }
  },
  methods: {
    ...mapActions('partners', ['retrievePartner'])
  }
}
</script>

<style lang="scss" scoped>

</style>
