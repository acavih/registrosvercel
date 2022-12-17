<template>
  <v-data-iterator :items="attentions">
    <template #default="{ items}">
      <v-row>
        <v-col
          v-for="item in items"
          :key="item.name"
          cols="12"
        >
          <attention-item :attention="item" />
        </v-col>
      </v-row>
    </template>
  </v-data-iterator>
</template>

<script>
import AttentionItem from './AttentionItem.vue'
export default {
  components: { AttentionItem },
  props: {
    attentions: {
      type: Array,
      required: true
    }
  },
  mounted () {}
}
</script>

<style lang="scss" scoped>

</style>
