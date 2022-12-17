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
    <v-card style="margin-top: 20px;">
      <v-card-title>
        Atenciones
      </v-card-title>
      <v-card-text>
        <attentions-iterator :attentions="attentions" />
      </v-card-text>
    </v-card>
  </v-sheet>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex'
import AttentionsIterator from '~/components/attentions/AttentionsIterator.vue'
import PartnerInfo from '~/components/partners/PartnerInfo.vue'

export default {
  components: { PartnerInfo, AttentionsIterator },
  computed: {
    ...mapGetters('partners', ['partnerById']),
    ...mapState('attentions', ['attentions']),
    partner () {
      return this.partnerById(this.$route.params.id)
    }
  },
  async mounted () {
    if (typeof this.partner === 'undefined') {
      await this.retrievePartner(this.$route.params.id)
    }
    await this.getMemberAttentions(this.$route.params.id)
  },
  methods: {
    ...mapActions('partners', ['retrievePartner']),
    ...mapActions('attentions', ['getMemberAttentions'])
  }
}
</script>

<style lang="scss" scoped>

</style>
