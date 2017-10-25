import api from 'src/infra/services/http/index'
import { set as _set, findIndex as _findIndex, each as _each, unset as _unset, isObject as _isObject } from 'lodash'
import { actions } from 'src/app/common/crud/model'
import { confirm, toast, undo } from 'src/support/message'
import { defaults } from 'src/app/common/crud/components/form/data'

export default {
  methods: {
    /**
     */
    mount () {
      Object.keys(defaults).forEach(property => {
        let value = defaults[property]
        if (this.data[property] !== undefined) {
          value = this.data[property]
        }
        if (property === 'actions' && typeof this.data[property] === 'function') {
          return
        }
        this[property] = value
      })
      if (typeof this.data['actions'] === 'function') {
        this.actions = this.data['actions'](this, actions(this))
      }
      if (!this.actions.length) {
        this.actions = actions(this)
      }

      if (!this.scope) {
        this.scope = 'view'
      }

      if (!this.record) {
        this.record = this.value
      }

      this.$update()
    },
    /**
     */
    toggleScope () {
      const readonly = this.scope === 'view'
      this.blocked = false

      if (readonly) {
        this.scope = this.previous
        this.dirty = false
        this.backup = Object.assign({}, this.record)

        return this.$update()
      }

      const reset = (backup) => {
        this.blocked = false
        this.scope = 'view'
        this.dirty = false
        this.record = backup
        if (this.$refs.form) {
          this.$refs.form.formReset()
        }
        return this.$update()
      }

      const backup = Object.assign({}, this.backup)

      if (this.dirty) {
        this.blocked = true
        return confirm(this.$t('crud.save.cancel.title'), this.$t('crud.save.cancel.message'), () => {
          reset(backup)
        })
      }

      return reset(backup)
    },
    /**
     * @param record
     */
    prepareData (record) {
      let data = {}

      for (let name in record) {
        if (!record.hasOwnProperty(name)) {
          continue
        }
        // noinspection JSCheckFunctionSignatures
        if (_findIndex(this.schemas, {name}) >= 0) {
          _set(data, name, record[name])
        }
      }

      const clear = (value, iteratee) => {
        _each(value, (v, k) => {
          if (iteratee(v, k)) {
            _unset(value, k)
          }
          else if (_isObject(v)) {
            clear(v, iteratee)
          }
        })
        return value
      }
      data = clear(data, (value, key) => {
        return ['_key'].includes(key)
      })

      if (this.beforeSend && typeof this.beforeSend === 'function') {
        return this.beforeSend(data)
      }

      return data
    },
    /*
     * @param id
     * @param callback
     */
    fetchRecord (callback) {
      if (!this.api) {
        return
      }
      if (!this.$route.params.id) {
        return
      }

      const url = this.api + '/' + this.$route.params.id

      const fetch = (response) => {
        let record = response.data
        if (Array.isArray(response.data)) {
          record = response.data[0]
        }
        this.record = record
        if (typeof callback === 'function') {
          callback()
        }
      }

      const error = () => {
        undo(this.$t('crud.fetch.error'), () => {
          api.get(url).then(fetch).catch(error)
        })
      }

      api.get(url).then(fetch).catch(error)
    },
    method () {
      const scope = this.scopes.find(item => item.id === this.scope)
      if (scope) {
        return scope.method
      }
      return 'post'
    },
    /**
     * @param {object} record
     * @param {boolean} back
     */
    save (record, back = false) {
      let id = ''
      let method = this.method()

      if (this.$route.params.id) {
        id = '/' + this.$route.params.id
      }

      const settings = {
        method: method,
        url: this.api + id,
        data: this.prepareData(record)
      }

      const save = (response) => {
        const afterSave = this['afterSave']
        if (afterSave && typeof afterSave === 'function') {
          return afterSave(response)
        }
        toast(this.$t('crud.save.success'))
        if (back) {
          this.$router.push(this.path)
        }
      }

      const error = () => {
        undo(this.$t('crud.save.error'), () => {
          api(settings).then(save).catch(error)
        })
      }

      api(settings).then(save).catch(error)
    },
    /**
     * @param record
     */
    onchange (record) {
      this.dirty = true
      this.$emit('input', record)
    },
    /**
     */
    $update () {
      const scopes = this.scopes.filter(_scope => _scope.id === this.scope)
      if (scopes.length) {
        this.editable = scopes[0].editable
      }

      this.actions.forEach((_action, index) => {
        if (_action.id === 'save') {
          this.actions[index].hidden = !this.editable
        }
        if (_action.id === 'edit') {
          this.actions[index].hidden = this.scope === 'create'
          this.actions[index].label = this.editable ? 'Cancelar' : 'Editar'
        }
      })

      this.schemas = this.schemas.map(_schema => {
        _schema.form.editable = this.editable
        return _schema
      })

      if (this.$refs.form) {
        this.$refs.form.updateForm()
      }
    }
  }
}
