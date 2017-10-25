import { uid } from 'quasar-framework'
import { alert } from 'src/support/message'
import { unMask } from 'src/app/common/utils'

export default {
  props: {
    value: {
      required: true,
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
      default: 'Este campo possui critérios de validação'
    },
    mask: {
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
    dependsOn: null,
    dependsIsOk: {
      type: Boolean,
      default: true
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
    }
  }
}
