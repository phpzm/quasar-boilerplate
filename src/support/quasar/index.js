import Vue from 'vue'
import * as all from 'quasar-framework'

const imports = [
  'QFab', 'QFabAction', 'QTooltip', 'QAjaxBar', 'QSearch', 'QDialogSelect', 'QCheckbox', 'QIcon', 'QUploader',
  'QDatetime', 'QPopover', 'QList', 'QLayout', 'QToolbar', 'QToolbarTitle', 'QSearch', 'QTabs', 'QRouteTab',
  'QBtn', 'QIcon', 'QItemSide', 'QItemMain', 'QSideLink', 'QListHeader', 'QScrollArea', 'QItem', 'QSelect',
  'QCollapsible', 'QCard', 'QCardMedia', 'QCardTitle', 'QCardMain', 'QCardActions', 'QCardSeparator'
]

Object.keys(all).forEach(key => {
  if (imports.includes(key)) {
    Vue.component(key, all[key])
  }
})
