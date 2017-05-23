// convert array of schemas into an items object

// filter the array by the environment property
export const filterByEnvironment = (environment) => {
  return (__item) => __item.environment.includes(environment)
}

// create a formatted object to be used in forms
export const mapByEnvironment = (environment) => {
  return (__item) => {
    const base = {
      label: __item.label
    }
    const schema = Object.assign({}, base, __item.schema, __item.schema[environment])
    return {
      field: __item.field,
      component: schema.component,
      schema: schema
    }
  }
}

// order the array by order property from schema
export const sortBySchema = (a, b) => {
  if (a.schema.order > b.schema.order) {
    return 1
  }
  if (a.schema.order < b.schema.order) {
    return -1
  }
  return 0
}

// reduce the array to map object
const reduceToObject = (__map, __object) => {
  __map[__object.field] = __object
  return __map
}

/**
 * @param schemas
 * @param environment
 * @returns {*}
 */
export const parseItems = (schemas, environment) => {
  // validate the input
  if (!Array.isArray(schemas)) {
    return {}
  }

  return schemas
    .filter(filterByEnvironment(environment))
    .map(mapByEnvironment(environment))
    .sort(sortBySchema)
    .reduce(reduceToObject, {})
}

// create a record from schemas with the default value
export const parseRecord = (schemas) => {
  const record = {}

  for (let property in schemas) {
    if (!schemas.hasOwnProperty(property)) {
      continue
    }
    let schema = schemas[property].schema
    record[property] = schema ? schema.default : schemas[property].default
  }
  return record
}
