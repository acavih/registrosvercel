<template>
  <v-sheet>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>
            Recursos ({{ activeResource }})
            <v-spacer />

            <v-dialog v-model="addingResource">
              <template #activator="{on, attrs}">
                <v-btn elevation="0" icon v-bind="attrs" v-on="on">
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
              </template>
              <resource-editor :editing="false" @submit="handleAddResource" />
            </v-dialog>
          </v-card-title>
          <v-card-title>
            <v-list style="width: 100%">
              <v-list-item
                v-for="(item, i) in activeResources"
                :key="i"
                style="width: 100%"
              >
                <v-list-item-content>
                  <v-list-item-title>{{ item.name }}</v-list-item-title>
                  <v-list-item-subtitle>{{ item.type }}</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                  <v-dialog v-model="editingResource[item.id]">
                    <template #activator="{on, attrs}">
                      <v-btn elevation="0" icon v-bind="attrs" v-on="on">
                        <v-icon>mdi-pen</v-icon>
                      </v-btn>
                    </template>
                    <resource-editor :editing="true" :resource-to-edit="item" @submit="handleEditResource" />
                  </v-dialog>
                </v-list-item-action>
              </v-list-item>
            </v-list>
          </v-card-title>
        </v-card>
      </v-col>
      <v-col cols="2">
        <v-card>
          <v-card-title>
            Tipos de recursos
          </v-card-title>
          <v-card-text>
            <v-list>
              <v-list-item v-for="type in resourceTypes" :key="type" @click="setActiveResource(type)">
                <v-list-item-content>
                  <v-list-item-title>
                    {{ type }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex'
import ResourceEditor from '~/components/resources/ResourceEditor.vue'
export default {
  components: { ResourceEditor },
  data () {
    return {
      editingResource: {}, // boolean key-value
      addingResource: false
    }
  },
  computed: {
    ...mapGetters('resources', ['resourceTypes', 'activeResources']),
    ...mapState('resources', ['activeResource'])
  },
  mounted () {
    this.handleRetrieve()
  },
  methods: {
    ...mapMutations('resources', ['setActiveResource']),
    ...mapActions('resources', ['retrieveResources', 'editResource', 'addResource']),
    handleRetrieve () {
      this.retrieveResources()
    },
    async handleEditResource (resource) {
      await this.editResource(resource)
      this.editingResource[resource.id] = false
    },
    async handleAddResource (resource) {
      console.log(resource)
      await this.addResource(resource)
      this.addingResource = false
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
