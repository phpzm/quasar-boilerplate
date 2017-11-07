/**
 * Returns true to show tooltips or false to disable
 *
 * @param {AppTooltip} $this
 * @return {boolean}
 */
export default ($this) => {
  return !$this.$q.platform.is.mobile
}
