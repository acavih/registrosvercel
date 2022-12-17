import Vue from 'vue'
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
Vue.mixin({
  filters: {
    date (value) {
      return dayjs(value).format('DD/MM/YYYY')
    },
    edad (value) {
      return calcularEdad(value)
    }
  }
})
