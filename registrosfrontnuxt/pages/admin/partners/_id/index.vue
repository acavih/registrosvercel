<template>
  <v-sheet>
    <v-card>
      <v-card-title>
        Información del socio
      </v-card-title>
      <v-card-text>
        <v-simple-table>
          <tbody>
            <tr>
              <td>Código</td>
              <td>{{ partner.codigo }}</td>
            </tr>
            <tr>
              <td>Nombre</td>
              <td>{{ partner.nombre }}</td>
            </tr>
            <tr>
              <td>Apellidos</td>
              <td>{{ partner.apellidos }}</td>
            </tr>
            <tr>
              <td>Edad</td>
              <td>
                <template v-if="partner.fechanacimiento">
                  {{ partner.fechanacimiento | edad }} años (nacimiento en <strong>{{ partner.fechanacimiento | date }}</strong>)
                </template>
                <template v-else>
                  N/A
                </template>
              </td>
            </tr>
            <tr>
              <td>Nacionalidad</td>
              <td>{{ partner.nacionalidad.name }}</td>
            </tr>
            <tr>
              <td>Ciudad residencia</td>
              <td>{{ partner.ciudadresidencia.name }}</td>
            </tr>
            <tr>
              <td>Socio o no</td>
              <td>{{ partner.socioono.name }}</td>
            </tr>
            <tr>
              <td>Sexo</td>
              <td>{{ partner.sexo.name }}</td>
            </tr>
          </tbody>
        </v-simple-table>
      </v-card-text>
    </v-card>
  </v-sheet>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import dayjs from 'dayjs'

function calcularEdad (fecha) {
  const hoy = new Date()
  const cumpleanos = new Date(fecha)
  let edad = hoy.getFullYear() - cumpleanos.getFullYear()
  const m = hoy.getMonth() - cumpleanos.getMonth()

  if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
    edad--
  }

  return edad
}

export default {
  computed: {
    ...mapGetters('partners', ['partnerById']),
    partner () {
      return this.partnerById(this.$route.params.id)
    }
  },
  filters: {
    date (value) {
      return dayjs(value).format('DD/MM/YYYY')
    },
    edad (value) {
      return calcularEdad(value)
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
