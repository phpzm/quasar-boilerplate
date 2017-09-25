// functions
import { load as __load, toast as __toast } from 'src/modules/Common/Resources/Base'

const FormMethods = {
  methods: {
    /**
     * @param record
     */
    setData (record) {
      this.entry = record
    },
    /**
     * @returns {*|record|{}|Array}
     */
    getRecord () {
      return this.record
    },
    /**
     * @param record
     */
    setRecord (record) {
      this.record = record
    },
    /**
     * Apply the changes to record
     */
    applyRecord () {
      __load(true)
      if (this.service[this.action]) {
        // cast action
        const apply = this.service[this.action]
        // perform the action
        return apply(this.getRecord())
          .then((response) => {
            this.setRecord(response.data)
            __toast(this.replaceRecord(this.success))
            __load(false)
          })
          .catch((error) => {
            this.error(error)
          })
      }
      __load(false)
    },
    /**
     * @param message
     */
    replaceRecord (message) {
      for (let property in this.record) {
        if (!this.record.hasOwnProperty(property)) {
          continue
        }
        let regex = new RegExp(`{{${property}}}`, 'g')
        message = message.replace(regex, this.record[property])
      }
      return message
    },
    /**
     * @param error
     */
    error (error) {
      this.error = error
      __load(false)
    }
  }
}

export default FormMethods
