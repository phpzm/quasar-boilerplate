export default {
  name: 'field-funcional',
  functional: true,
  render (h, context) {
    const {component, props, on} = context.props
    return h(component, {props: props, on: on})
  },
  props: {
    component: String,
    props: Object,
    on: Object
  }
}
