<template>
  <div class="common-form" :style="stylish">
    <div slot="content">
      <div class="form-default">

        <div class="group text-right" v-if="top.length">
          <form-actions :actions="top" :handler="handlerAction" :valid="$valid"></form-actions>
          <hr>
        </div>

        <div :class="tabs.length ? 'tabs' : 'form'">
          <div v-if="tabs.length" class="q-tabs in-line row justified">
            <div class="q-tabs-scroller row">
              <div v-for="tab in tabs" @click="selected = tab.value"
                   :class="['q-tab', 'items-center', 'justify-center', selected === tab.value ? 'active': '']">
                <span class="q-tab-label">{{ tab.label }}</span>
              </div>
            </div>
          </div>

          <div class="form" v-for="tab in (tabs.length ? tabs : [{value: ''}])" :key="tab.value"
               v-show="tab.value === selected">
            <component v-for="item in (tabs.length ? itemsFromTab[tab.value] : items)" :key="item.name"
                       :is="item.component"
                       v-bind="item" v-model="record[item.name]" :scope="scope" :errors="getErrors(item.name)"
                       @input="changeRecord(item.name)" @mouseup="mouseupRecord(item.name)"
                       @keypress="keypressRecord(item.name)" @keyup="keyupRecord(item.name)"
                       @blur="blurRecord(item.name)" @focus="focusRecord(item.name)"></component>
          </div>
        </div>

        <div class="group text-right" v-if="bottom.length">
          <hr>
          <form-actions :actions="bottom" :handler="handlerAction" :valid="$valid"></form-actions>
        </div>

      </div>

      <div class="fixed-bottom-right" v-if="floating.length" style="margin: 20px">
        <slot name="action-floating">
          <form-actions :actions="floating" :handler="handlerAction" :valid="$valid"></form-actions>
        </slot>
      </div>

      <div v-if="debug">
        <pre>{{ record }}</pre>
      </div>

    </div>
  </div>
</template>

<script type="text/javascript">
  import 'src/app/modules/common/fields'
  import { validationMixin } from 'vuelidate'
  import GeneralComputed from 'src/app/modules/common/general/mixin-computed'
  import GeneralMethods from 'src/app/modules/common/general/mixin-methods'

  import MixinComputed from 'src/app/modules/common/form/mixins/computed'
  import MixinHooks from 'src/app/modules/common/form/mixins/hooks'
  import MixinMethods from 'src/app/modules/common/form/mixins/methods'
  import MixinProps from 'src/app/modules/common/form/mixins/props'
  import MixinData from 'src/app/modules/common/form/mixins/data'

  import FormActions from 'src/app/modules/common/form/components/FormActions.vue'

  export default {
    components: {
      FormActions
    },
    mixins: [
      validationMixin,
      GeneralComputed, GeneralMethods,
      MixinComputed, MixinData, MixinHooks, MixinMethods, MixinProps
    ],
    name: 'common-form',
    validations () {
      const validations = this.generateValidations(this.schemas)
      return {
        record: validations
      }
    },
    watch: {
      value: {
        handler () {
          this.updateForm()
        },
        deep: true
      },
      scope () {
        this.updateForm()
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .form-default > .tabs
    > .q-tabs
      padding 10px 5px
    > .form
      margin-top 5px

  .common-form
    .fixed-bottom-right
      margin 20px
</style>
