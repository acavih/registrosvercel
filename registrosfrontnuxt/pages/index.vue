<template>
  <v-sheet>
    <v-card tag="form" @submit.prevent="handleLogin">
      <v-card-title>
        Acceso a la area interna
      </v-card-title>
      <v-card-text>
        <v-text-field v-model="form.email" label="Email" />
        <v-text-field v-model="form.password" label="Contraseña" type="password" />
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn type="submit" elevation="0" color="primary">
          Acceder
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-sheet>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'IndexPage',
  layout: 'guest',
  data () {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapMutations('auth', ['login']),
    async handleLogin () {
      try {
        const response = await this.$axios.post('/auth/login', this.form)
        this.login(response.data)
      } catch (error) {
        console.error('fail', error)
      }
    }
  }
}
</script>
