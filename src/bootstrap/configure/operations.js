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
 * @param {boolean} noCache
 * @returns {Function}
 */
export const read = ($this, noCache = false) => {
  return (record, schemas, $component) => $this.fetchData(noCache)
}

/**
 * @param {AppCrudGrid|AppCrudForm} $this
 * @param {Function} callback
 * @returns {Function}
 */
export const create = ($this, callback = null) => {
  const after = response => $this.browse($this.path + '/' + $first(response)[$this.id] + '/' + 'edit')
  return (record, schemas, $component) => $this.create(record, callback || after)
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
 * @param {string} title
 * @param {string} message
 * @param {Function} callback
 * @returns {Function}
 */
export const destroy = ($this, title, message, callback = (() => null)) => {
  return (record, schemas, $component) => {
    confirm(title, message, () => $this.delete(record[$this.id], callback))
  }
}
