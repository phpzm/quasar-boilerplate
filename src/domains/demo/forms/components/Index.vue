<template>
  <app-card>
    <div slot="title">
      <q-icon :name="icon"></q-icon> {{ title }}
    </div>
    <div slot="content">
      <hr>
      <div class="form">
        <field-checkbox v-bind="{label: 'Caixa de Seleção', width: 50, value: true}" v-model="model.checkbox"></field-checkbox>
        <field-color v-bind="{label: 'Cor', width: 50, value: '#ff0000'}" v-model="model.color"></field-color>
        <field-date v-bind="{label: 'Data', width: 50}" v-model="model.date"></field-date>
        <field-file v-bind="{label: 'Arquivo', width: 50}" v-model="model.file"></field-file>
        <field-separator v-bind="{label: 'Separador'}"/>
        <field-html v-bind="{label: 'Html', width: 50, value: '<b>PHPZM Quasar Boilerplate</b>'}" v-model="model.html"></field-html>
        <field-money v-bind="{label: 'Dinheiro', width: 50}" v-model="model.money"></field-money>
        <field-select v-bind="{label: 'Seletor', width: 50, options: [{value: 'nada', label: 'Tudo'}]}" v-model="model.select"></field-select>
        <field-text v-bind="{label: 'Texto', width: 50}" v-model="model.text"></field-text>
        <field-textarea v-bind="{label: 'Texto Longo', width: 50}" v-model="model.textarea"></field-textarea>
        <field-time v-bind="{label: 'Tempo', width: 50}" v-model="model.time"></field-time>
        <field-toggle v-bind="{label: 'Alternador', width: 50}" v-model="model.toggle"></field-toggle>
      </div>
      <app-debugger v-bind="{label: 'debug', inspect: model}"></app-debugger>
      <hr>
      <q-btn color="negative" @click="setAppModified(true)">Forçar estado modificado</q-btn>
    </div>
  </app-card>
</template>

<script type="text/javascript">
  import { mapActions } from 'vuex'
  import 'src/themes/phpzm/components/fields/index'
  import AppLayout from 'src/themes/phpzm/components/layout/AppLayout.vue'
  import AppCard from 'src/themes/phpzm/components/card/AppCard.vue'
  import AppDebugger from 'src/themes/phpzm/components/debugger/AppDebugger.vue'
  import { icon, title } from '../model'

  export default {
    components: {
      AppDebugger,
      AppLayout,
      AppCard
    },
    name: 'forms',
    data: () => ({
      icon,
      title,
      model: {
        checkbox: undefined,
        color: undefined,
        date: undefined,
        file: undefined,
        html: undefined,
        money: undefined,
        select: undefined,
        text: undefined,
        textarea: undefined,
        time: undefined,
        toggle: undefined
      }
    }),
    methods: {
      ...mapActions(['setAppModified'])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
