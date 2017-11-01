<template>
  <app-card>
    <div slot="title">
      <q-icon :name="icon"></q-icon> {{ title }}
    </div>
    <div slot="content">
      <hr>
      <div class="form">
        <field-checkbox v-bind="{label: 'Caixa de Seleção', width: 50, value: true}"></field-checkbox>
        <field-color v-bind="{label: 'Cor', width: 50, value: '#ff0000'}"></field-color>
        <field-date v-bind="{label: 'Data', width: 50}"></field-date>
        <field-file v-bind="{label: 'Arquivo', width: 50}"></field-file>
        <field-separator v-bind="{label: 'Separador'}"/>
        <field-html v-bind="{label: 'Html', width: 50, value: '<b>PHPZM Quasar Boilerplate</b>'}"></field-html>
        <field-money v-bind="{label: 'Dinheiro', width: 50}"></field-money>
        <field-select v-bind="{label: 'Seletor', width: 50, options: [{value: 'nada', label: 'Tudo'}]}"></field-select>
        <field-text v-bind="{label: 'Texto', width: 50}"></field-text>
        <field-textarea v-bind="{label: 'Texto Longo', width: 50}"></field-textarea>
        <field-time v-bind="{label: 'Tempo', width: 50}"></field-time>
        <field-toggle v-bind="{label: 'Alternador', width: 50}"></field-toggle>
      </div>
      <hr>
      <q-btn color="negative" @click="setAppModified(true)">Forçar estado modificado</q-btn>
    </div>
  </app-card>
</template>

<script type="text/javascript">
  import { mapActions } from 'vuex'
  import 'src/app/components/fields'
  import AppLayout from 'src/app/components/layout/AppLayout.vue'
  import AppCard from 'src/app/components/card/AppCard.vue'
  import { icon, title } from '../model'

  export default {
    components: {
      AppLayout,
      AppCard
    },
    name: 'forms',
    data: () => ({
      icon,
      title
    }),
    methods: {
      ...mapActions(['setAppModified'])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
