/**
 * @param {string} id
 * @param {Route|string} to
 * @param {string} label
 * @param {string} icon
 * @param {boolean} exact
 * @param {string} tooltip
 * @param {string} namespace
 * @param {int} permission
 */
export default (id, to, label, icon, exact = false, tooltip = '', namespace = '', permission = 1) => {
  const item = {to, label, exact, id, tooltip, namespace, permission}
  if (icon) {
    item.left = {icon}
  }
  return item
}
