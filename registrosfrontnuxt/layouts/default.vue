<template>
  <v-app v-if="loaded">
    <v-navigation-drawer
      v-model="drawer"
      :v-if="isLogged"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      dark
      color="primary"
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer />
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'DefaultLayout',
  data () {
    return {
      clipped: true,
      drawer: true,
      items: [
        {
          title: 'Usuarios',
          to: '/admin/users'
        },
        {
          title: 'Socios',
          to: '/admin/partners'
        },
        {
          title: 'Atenciones',
          to: '/admin/attentions'
        },
        {
          title: 'Estadísticas',
          to: '/admin/stats'
        },
        {
          title: 'Recursos',
          to: '/admin/resources'
        }
      ],
      loaded: false,
      title: 'Area interna'
    }
  },
  computed: {
    ...mapGetters('auth', ['isLogged'])
  },
  mounted () {
    setTimeout(() => {
      this.loaded = true
    }, 1000)
  }
}
</script>
