import { confirm } from 'genesis/support/message/index'
import { $first } from 'src/bootstrap/configure/http'

/**
 * @param {AppCrudGrid|AppCrudForm} $this
 * @returns {Function}
 */
export const view = ($this) => {
  return (record, schemas, $component) => $this.browse($this.path + '/' + record[$this.id])
}

/**
 * @param {AppCrudGrid|AppCrudForm} $this
 * @returns {Function}
 */
export const edit = ($this) => {
  return (record, schemas, $component) => $this.browse($this.path + '/' + record[$this.id] + '/edit')
}

/**
 * @param {AppCrudGrid|AppCrudForm} $this
 * @returns {Function}
 */
export const add = ($this) => {
  return (record, schemas, $component) => $this.browse($this.path + '/' + 'create')
}

/**
 * @param {AppCrudGrid|AppCrudForm} $this
 * @returns {Function}
 */
export const read = ($this) => {
  return (record, schemas, $component) => $this.fetchData()
}

/**
 * @param {AppCrudGrid|AppCrudForm} $this
 * @param {Function} callback
 * @returns {Function}
 */
export const create = ($this, callback = null) => {
  callback = callback || ((response) => $this.browse($this.path + '/' + $first(response)[$this.id] + '/' + 'edit'))
  return (record, schemas, $component) => $this.create(record, callback)
}

/**
 * @param {AppCrudGrid|AppCrudForm} $this
 * @param {Function} callback
 * @returns {Function}
 */
export const update = ($this, callback = (() => null)) => {
  return (record, schemas, $component) => $this.update(record, callback)
}

/**
 * @param {AppCrudGrid|AppCrudForm} $this
 * @param {Function} callback
 * @param {string} title
 * @param {string} message
 * @returns {Function}
 */
export const destroy = ($this, callback = (() => null), title, message) => {
  return (record, schemas, $component) => {
    confirm(title, message, () => $this.delete(record[$this.id], callback))
  }
}
