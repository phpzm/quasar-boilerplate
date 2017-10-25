<template>
  <div :class="classNames" v-show="dependsIsOk">

    <slot name="label">
      <label :for="id" v-if="!inline" :class="{'field-label': true, 'label-with-error': problems.length}">
        {{ label }} <span v-if="!!validate" :title="title">*</span>
        <q-tooltip v-if="tooltip">
          <span v-html="tooltip"></span>
        </q-tooltip>
      </label>

      <div v-if="showError" class="pull-right error-message">
        <span v-if="problem && problem.path">{{ $t(problem.path, problem.parameters) }}</span>
        <i v-if="(problems.length > 1)" @click="showErrors">help_outline</i>
      </div>
    </slot>

    <slot name="component"></slot>

  </div>
</template>

<script type="text/javascript">
  export default {
    computed: {
      /**
       * @returns {boolean}
       */
      showError () {
        if (this.editable) {
          return !!this.problems.length
        }
        return false
      }
    },
    name: 'field-base',
    props: {
      classNames: String,
      editable: Boolean,
      inline: Boolean,
      dependsIsOk: Boolean,
      id: String,
      problem: Object,
      problems: Array,
      label: String,
      validate: Object,
      title: String,
      tooltip: String
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
