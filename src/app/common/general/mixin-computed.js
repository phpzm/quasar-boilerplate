import { mapGetters } from 'vuex'

export const WIDTH_EXTRA = 430

export const WIDTH_COLUMN = 20

const filter = (array, scope, position) => {
  return array.filter(_action => {
    return (_action.scopes && _action.scopes.includes(scope)) && (_action.positions && _action.positions.includes(position))
  })
}

const gridWidth = (gridViewport, schema) => {
  const initial = schema.width ? schema.width : WIDTH_COLUMN
  const width = parseInt((initial / 100) * gridViewport) + 'px'
  return {
    maxWidth: width,
    minWidth: width,
    width: width
  }
}

export default {
  computed: {
    gridViewport () {
      return this.getAppWidth - WIDTH_EXTRA
    },
    available () {
      return this.schemas
        .filter(_schema => {
          return (_schema.scopes && _schema.scopes.includes(this.scope)) &&
            (!this.visibility || (this.visibility.model && this.visibility.model.includes(_schema.name)))
        })
        .map(_schema => {
          const base = {
            name: _schema.name,
            label: _schema.label,
            editable: this.editable
          }
          const schema = _schema[this.type]
          if (schema) {
            schema.grid = {
              width: gridWidth(this.gridViewport, schema)
            }
          }
          let override = {}
          if (_schema[this.scope]) {
            override = _schema[this.scope]
          }
          let all = {}
          if (_schema['all']) {
            all = _schema['all']
          }
          return Object.assign({}, all, schema, override, base)
        })
    },
    top () {
      return filter(this.actions, this.scope, 'top')
    },
    middle () {
      return filter(this.actions, this.scope, 'middle')
    },
    bottom () {
      return filter(this.actions, this.scope, 'bottom')
    },
    floating () {
      return filter(this.actions, this.scope, 'floating')
    },
    begin () {
      return filter(this.actions, this.scope, 'begin')
    },
    retry () {
      return filter(this.actions, this.scope, 'retry')
    },
    classNames () {
      const classNames = []
      classNames.push(this.$options.name)
      return classNames
    },
    ...mapGetters(['getAppWidth'])
  }
}
