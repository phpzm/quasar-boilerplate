import Vuelidate from 'vuelidate'
import VueFroala from 'vue-froala-wysiwyg'
import moment from 'moment'

import Http from 'src/infra/services/http/plugin'
import router from 'src/infra/router'
import store from 'src/infra/store'
import i18n from 'src/support/i18n'
import 'src/support/quasar/index'

// Require Froala Editor js file
require('froala-editor/js/froala_editor.pkgd.min')
require('froala-editor/js/plugins/code_view.min')
require('froala-editor/js/languages/pt_br')

// Require Froala Editor css files
require('froala-editor/css/froala_editor.pkgd.min.css')
require('font-awesome/css/font-awesome.css')
require('froala-editor/css/froala_style.min.css')

export const menu = [
  {
    to: '/dashboard',
    label: 'Página Inicial',
    exact: true,
    left: {
      icon: 'home'
    }
  },
  {
    to: '/dashboard/forms',
    label: 'Formulários',
    exact: true,
    left: {
      icon: 'subtitles'
    }
  },
  {
    to: '/dashboard/graphics',
    label: 'Gráficos',
    exact: true,
    left: {
      icon: 'pie_chart'
    }
  },
  {
    to: '/dashboard/user',
    label: 'Usuários',
    left: {
      icon: 'supervisor_account'
    }
  }
]

export default (Vue) => {
  Vue.use(Vuelidate)
  Vue.use(VueFroala)
  Vue.use(Http, { store, router })

  moment.locale('pt-BR')

  Vue.config.productionTip = false

  return {
    router,
    store,
    i18n
  }
}
