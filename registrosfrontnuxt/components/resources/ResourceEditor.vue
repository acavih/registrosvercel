<template>
  <v-card tag="form" @submit.prevent="$emit('submit', resource)">
    <v-card-title>
      Editar recurso
    </v-card-title>
    <v-card-text>
      <v-text-field v-model="resource.name" label="Nuevo nombre para el recurso" />
    </v-card-text>
    <v-card-actions>
      <v-btn type="submitt" elevation="0" color="primary">
        Guardar cambios
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    resourceToEdit: {
      type: Object,
      default: () => ({})
    },
    editing: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      resource: {
        name: '',
        id: '',
        type: ''
      }
    }
  },
  created () {
    console.log(this.editing)
    if (this.editing) {
      this.resource.name = this.resourceToEdit.name
      this.resource.id = this.resourceToEdit.id
      this.resource.type = this.resourceToEdit.type
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
