<template>
  <div class="app-data-table" :style="config.styles">
    <q-data-table v-bind="{data, columns, config}" @refresh="refresh" @rowclick="rowclick">
      <div v-if="actions.length" slot="col-options" slot-scope="cell">
        <div class="app-data-table-options">
          <q-fab color="primary" icon="settings" :direction="direction">
            <q-fab-action v-if="permission(action, cell.row)" v-for="action in actions" :key="action.id"
                          @click="handler(action, cell.row)" :color="action.color" :icon="action.icon" class="rotate">
              <app-tooltip :disabled="!action.tooltip">
                {{ action.tooltip }}
              </app-tooltip>
            </q-fab-action>
          </q-fab>
        </div>
      </div>
      <div v-for="slot in slots" :slot="'col-' + slot.field" slot-scope="cell">
        <!--<component :is="slot.is" v-bind="slot.bind" v-model="cell.data" :row="cell.row"/>-->
        <field-functional :component="slot.component" :on="on(slot, cell)" :props="props(slot, cell)"/>
      </div>
    </q-data-table>
  </div>
</template>

<script type="text/javascript">
  import MixinPermission from 'src/themes/phpzm/components/@mixins/MixinPermission'
  import { computed, data, methods, props } from './model'

  export default {
    mixins: [
      MixinPermission, computed, data, methods, props
    ],
    name: 'app-data-table'
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
