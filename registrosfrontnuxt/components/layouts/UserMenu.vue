<template>
  <div class="text-center">
    <v-menu
      v-model="menu"
      :close-on-content-click="false"
      :nudge-width="200"
      offset-x
      offset-y
    >
      <template #activator="{ on, attrs }">
        <v-btn
          color="secondary"
          dark
          v-bind="attrs"
          elevation="0"
          v-on="on"
        >
          Menu de usuario
        </v-btn>
      </template>

      <v-card>
        <v-list>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>{{ userInfo.user }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider />

        <v-card-actions>
          <v-spacer />
          <v-btn
            color="error"
            text
            @click="handleLogout"
          >
            Cerrar sesión
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-menu>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data: () => ({
    fav: true,
    menu: false,
    message: false,
    hints: true
  }),
  computed: {
    ...mapState('auth', ['userInfo'])
  },
  methods: {
    ...mapMutations('auth', ['logout']),
    handleLogout () {
      this.logout()
      this.menu = false
    }
  }
}
</script>
