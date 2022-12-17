<template>
  <v-card>
    <v-card-text>
      {{ message }}
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      required: true
    },
    to: {
      type: String,
      required: true
    },
    ms: {
      type: Number,
      default: 2000
    }
  },
  mounted () {
    setTimeout(() => {
      this.$router.push(this.to)
    }, this.ms)
  }
}
</script>

<style lang="scss" scoped>

</style>
