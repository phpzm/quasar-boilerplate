import { get, set } from 'lodash'

/**
 * @param schema
 * @param data
 * @returns {*}
 */
export const getDotNotation = (schema, data) => {
  const reduce = (accumulate, key) => {
    accumulate[schema[key].field] = get(data, schema[key].field, undefined)
    return accumulate
  }
  return Object.keys(schema).reduce(reduce, {})
}

/**
 * @param data
 * @returns {*}
 */
export const setDotNotation = (data) => {
  const reduce = (accumulate, key) => {
    set(accumulate, key, data[key])
    return accumulate
  }
  return Object.keys(data).reduce(reduce, {})
}
