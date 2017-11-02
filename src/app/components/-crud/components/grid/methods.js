import http from 'src/app/infra/services/http'
import { actions } from 'src/app/components/-crud/model'
import { map as _map } from 'lodash'
import { defaults } from 'src/app/components/-crud/components/grid/data'
import { toast, undo } from 'src/app/support/message'
import { populateGrid } from 'src/bootstrap/settings'

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
        this[property] = value
      })

      if (typeof this.actions === 'function') {
        this.actions = this.actions(this, actions(this))
      }
      if (!this.actions.length) {
        this.actions = actions(this)
      }
    },
    /**
     * @param {Array} schemas
     * @return {Array}
     */
    prepareFields (schemas) {
      let data = []
      schemas.forEach(schema => {
        if (schema.scopes.includes('index')) {
          data.push(schema.name)
        }
      })

      return data
    },
    /**
     * @param {Object} extraParams
     */
    fetchAll (extraParams = {}) {
      if (!this.api) {
        return
      }

      const query = {
        limit: 25
      }
      Object.keys(this.$route.query).forEach((_item) => {
        if (this.$route.query[_item]) {
          query[_item] = this.$route.query[_item]
        }
      })

      const params = {
        params: {
          fields: this.prepareFields(this.schemas),
          ...query
        }
      }

      // noinspection JSCheckFunctionSignatures
      http
        .get(this.api, Object.assign(params, extraParams))
        .then(response => {
          this.populate(response)
          this.loaded = 'complete'
        })
        .catch(error => {
          this.loaded = 'error'
          console.error(error)
        })
    },
    /**
     * @param {Object} response
     */
    populate (response) {
      populateGrid(this, response)

      this.$emit('populate', response)
    },
    /**
     * @param {String} _id
     */
    remove (_id) {
      // noinspection JSCheckFunctionSignatures
      http
        .delete(this.api + '/' + _id)
        .then(response => {
          this.fetchAll()
        })
        .catch(err => {
          console.log(err)
        })
    },
    /**
     * @param {String} query
     * @param {int} limit
     */
    changeSearch (query, limit) {
      if (typeof query === 'string') {
        return this.$router.push({query: Object.assign({}, this.$route.query, {search: query, limit: limit})})
      }
    },
    /**
     * @param {int} pagination
     * @param {int} limit
     */
    changePage (pagination, limit) {
      this.$router.push({query: Object.assign({}, this.$route.query, {page: pagination, limit: limit})})
    },
    /**
     * @param {Array} sorted
     */
    changeSort (sorted) {
      if (this.api) {
        // noinspection JSCheckFunctionSignatures
        http
          .patch(this.api, {op: 'sort', docs: _map(sorted, '_id')})
          .then(response => {
            if (response.status === 204) {
              this.records = sorted
            }
          })
          .catch(err => {
            console.log(err)
          })
      }
      this.records = sorted
      this.$emit('input', sorted)
    },
    /**
     * @param method
     * @param url
     * @param data
     * @param callback
     */
    request (method, url, data, callback) {
      const settings = {
        method: method,
        url: url,
        data: data
      }

      const run = (response) => {
        if (callback) {
          return callback(response)
        }
        toast(this.$t('crud.run.success'))
      }

      const error = () => {
        undo(this.$t('crud.run.error'), () => {
          http(settings).then(run).catch(error)
        })
      }

      http(settings).then(run).catch(error)
    }
  }
}
