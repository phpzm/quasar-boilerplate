import {parseItems, parseRecord} from 'src/services/Resource'

// Mixin FormHooks
const FormHooks = {
  /**
   * hook BeforeCreate
   */
  created () {
    this.items = parseItems(this.schemas, this.environment)
    this.record = parseRecord(this.items)
  }
}

export default FormHooks
