<template>
  <div>
    <slot v-if="isLogged" />
    <slot v-else name="guest" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('auth', ['isLogged'])
  }
}
</script>

<style lang="scss" scoped>

</style>
