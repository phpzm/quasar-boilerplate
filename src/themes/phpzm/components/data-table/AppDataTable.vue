<template>
  <div class="app-data-table" :style="config.styles">
    <q-data-table v-bind="{data, columns, config}" @refresh="refresh" @rowclick="rowclick">
      <div v-if="actions.length" slot="col-options" slot-scope="cell">
        <div class="app-data-table-options">
          <q-fab color="primary" icon="settings" :direction="direction">
            <q-fab-action v-if="permission(action, cell.row)" v-for="action in actions" :key="action.id"
                          @click="handler(action, cell.row)" :color="action.color" :icon="action.icon" class="rotate">
              <q-tooltip :disabled="!action.tooltip">
                {{ action.tooltip }}
              </q-tooltip>
            </q-fab-action>
          </q-fab>
        </div>
      </div>
      <!--<div v-for="slot in ['id']" :slot="'col-' + slot" slot-scope="cell">-->
      <!--<component is="field-text" v-model="cell.data"></component>-->
      <!--</div>-->
    </q-data-table>
  </div>
</template>

<script type="text/javascript">
  import MixinPermission from 'src/themes/phpzm/components/@mixins/MixinPermission'
  import { computed, data, methods, props } from './model'

  export default {
    mixins: [MixinPermission, computed, data, methods, props],
    name: 'app-data-table'
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .app-data-table
    font-family Roboto
    .app-data-table-options
      position absolute
      margin-top -20px
      .q-btn-round.q-btn-standard
        height 40px
        width 40px
        q-icon, .q-spinner
          font-size 20px
    .q-data-table
      display flex
      .q-data-table-toolbar.upper-toolbar
        display none
      .q-data-table-container
        overflow auto
      .q-data-table-head
        overflow visible
      .q-data-table-body
        overflow visible

  .production
    .app-data-table-options
      .q-btn-round.q-btn-standard
        .q-fab-icon.q-icon, .q-fab-active-icon.q-icon
          margin 6px 0 0 0
</style>
