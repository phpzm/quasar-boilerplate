/**
 * @param {string} id
 * @param {Route|string} to
 * @param {string} label
 * @param {string} icon
 * @param {boolean} exact
 * @param {string} tooltip
 */
export default (id, to, label, icon, exact = false, tooltip = '') => {
  const item = {to, label, exact, id, tooltip}
  if (icon) {
    item.left = {icon}
  }
  return item
}
