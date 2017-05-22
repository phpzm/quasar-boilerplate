export const parseRecord = (schemas) => {
  const record = {}

  for (let property in schemas) {
    if (!schemas.hasOwnProperty(property)) {
      continue
    }
    record[property] = schemas[property].default
  }
  return record
}
