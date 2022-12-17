<template>
  <v-card outlined>
    <v-card-title>
      {{ attention.fechaatencion | date }}
    </v-card-title>
    <v-card-text>
      <v-alert>{{ attention.comentario }}</v-alert>
      <template v-if="attention.fechacosaspendientes">
        <v-alert>
          {{ attention.fechacosaspendientes }} {{ attention.cosaspendientes }}
        </v-alert>
      </template>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    attention: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
