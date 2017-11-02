import { uid } from 'quasar-framework'
import { alert } from 'src/app/support/message'
import { unMask } from 'src/app/support/utils/index'

export default {
  props: {
    value: {
      default: undefined
    },
    label: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    name: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: ''
    },
    small: {
      type: String,
      default: ''
    },
    width: {
      default: '100'
    },
    validate: {
      default: undefined
    },
    tooltip: {
      default: ''
    },
    title: {
      type: String,
      default: 'Este campo possui critérios de validação'
    },
    mask: {
      type: String,
      default: ''
    },
    className: {
      type: Array,
      default: () => ([])
    },
    inline: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    editable: {
      type: Boolean,
      default: true
    },
    errors: {
      type: Array,
      default: () => ([])
    },
    dependsOn: {
      type: Object,
      default: null
    },
    dependsIsOk: {
      type: Boolean,
      default: true
    },
    events: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    /**
     */
    classNames () {
      const classNames = this.className
      const width = 'field has-' + String(this.inline ? '100' : this.width)
      classNames.push(width)
      classNames.push(this.$options.name)
      return classNames
    },
    /**
     * @return {Object}
     */
    problem () {
      if (!this.problems.length) {
        return {}
      }
      // noinspection JSPotentiallyInvalidTargetOfIndexedPropertyAccess
      return this.parseProblem(this.problems[0])
    },
    /**
     * @return {Array}
     */
    problems () {
      if (!Array.isArray(this.errors)) {
        return []
      }
      return this.errors.filter(_error => !_error.status)
    }
  },
  created () {
    this.id = uid()
  },
  data: () => ({
    id: ''
  }),
  methods: {
    /**
     * @param {*} value
     */
    updateValue (value) {
      if (this.mask) {
        value = unMask(this.mask, value)
      }
      if (this.pattern) {
        value = unMask(this.pattern, value)
      }
      this.$emit('input', value, this)
    },
    /**
     * @param {Object} problem
     * @return {Object}
     */
    parseProblem (problem) {
      return {
        path: 'validation.' + problem.rule,
        parameters: problem.parameters
      }
    },
    /**
     */
    showErrors () {
      const errors = []
      this.problems.forEach(_problem => {
        let problem = this.parseProblem(_problem)
        errors.push(' - ' + this.$t(problem.path, problem.parameters))
      })
      alert('Validação', errors.join('<br>'))
    },
    focus ($event) {
      if (this.events.focus && typeof this.events.focus === 'function') {
        this.events.focus($event.target.value, this)
      }
    },
    blur ($event) {
      if (this.events.blur && typeof this.events.blur === 'function') {
        this.events.blur($event.target.value, this)
      }
    },
    keypress ($event) {
      if (this.events.keypress && typeof this.events.keypress === 'function') {
        this.events.keypress($event.target.value, this)
      }
    },
    keyup ($event) {
      if (this.events.keyup && typeof this.events.keyup === 'function') {
        this.events.keyup($event.target.value, this)
      }
    },
    enter ($event) {
      if (this.events.enter && typeof this.events.enter === 'function') {
        this.events.enter($event.target.value, this)
      }
    },
    mouseup ($event) {
      if (this.events.mouseup && typeof this.events.mouseup === 'function') {
        this.events.mouseup($event.target.value, this)
      }
    }
  }
}
