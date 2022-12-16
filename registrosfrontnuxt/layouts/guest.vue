<template>
  <v-app v-if="loaded">
    <v-app-bar
      fixed
      dark
      color="primary"
      app
    >
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer />
    </v-app-bar>
    <v-main>
      <v-container>
        <if-is-logged>
          <redirect-to to="/admin/resources" message="Redireccionando al area interna" />
          <template slot="guest">
            <Nuxt />
          </template>
        </if-is-logged>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'
import IfIsLogged from '~/components/utils/IfIsLogged.vue'
import RedirectTo from '~/components/utils/RedirectTo.vue'
export default {
  name: 'DefaultLayout',
  components: { IfIsLogged, RedirectTo },
  data () {
    return {
      title: 'Página de acceso',
      loaded: false
    }
  },
  mounted () {
    setTimeout(() => {
      this.loaded = true
    }, 500)
  },
  computed: {
    ...mapGetters('auth', ['isLogged'])
  }
}
</script>
