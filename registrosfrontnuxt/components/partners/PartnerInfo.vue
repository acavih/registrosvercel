<template>
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
</template>

<script>
export default {
  props: {
    partner: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
