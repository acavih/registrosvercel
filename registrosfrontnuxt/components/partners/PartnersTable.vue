<template>
  <v-data-table
    :options.sync="partnersListOptions"
    :server-items-length="totalPartners"
    :loading="loading"
    :expanded.sync="expanded"
    show-expand
    :items="partnersList"
    :headers="partnerTableHeaders"
  >
    <template #top>
      <v-sheet style="display: flex">
        <v-spacer />
        <v-chip :dark="isAllExpanded" @click="expandAll">
          {{ isAllExpanded ? 'Contraer todo' : 'Expadir todo' }}
        </v-chip>
      </v-sheet>
    </template>
    <template #[`item.actions`]="{ item }">
      <v-btn elevation="0" :to="'/admin/partners/' + item.id" small color="primary">
        Ver detalles
      </v-btn>
    </template>
    <template #expanded-item="{ headers, item }">
      <td :colspan="headers.length">
        <v-sheet>
          <v-card color="transparent" elevation="0">
            <v-card-text>
              <v-alert v-if="item.cosaspendientes" color="warning">
                {{ item.cosaspendientes }}
              </v-alert>
            </v-card-text>
          </v-card>
        </v-sheet>
      </td>
    </template>
  </v-data-table>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: {
    partnersList: {
      type: Array,
      required: true
    },
    loading: {
      type: Boolean,
      default: false
    },
    totalPartners: {
      type: Number,
      required: true
    },
    optionsPage: {
      type: Object,
      required: false,
      default: () => ({})
    }
  },
  data () {
    return {
      expanded: [],
      partnersListOptions: { ...this.optionsPage }
    }
  },
  watch: {
    partnersListOptions: {
      deep: true,
      handler () {
        this.$emit('update:options-page', this.partnersListOptions)
      }
    }
  },
  computed: {
    ...mapState('partners', ['partnerTableHeaders']),
    isAllExpanded () {
      return this.expanded.length === this.partnersList.length
    }
  },
  methods: {
    expandAll () {
      if (this.isAllExpanded) {
        this.expanded = []
      } else {
        this.expanded = this.partnersList
      }
    }
  }
}
</script>

<style lang="scss">
.v-alert {
  margin-bottom: 0px;
}
.v-data-table__expanded__content {
  box-shadow: none !important;
  td {
    padding: 0px !important;
  }
}
</style>
