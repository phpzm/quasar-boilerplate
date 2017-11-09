<template>
  <app-card>
    <div slot="title">
      <q-icon :name="icon"></q-icon>
      {{ label }}
    </div>
    <div slot="content">
      <br>
      <div class="form"> <!-- To use the with of components you need start the container with .form -->
        <field-checkbox v-bind="{label: 'Caixa de Seleção (button.$checkbox)', width: 50, init: false}"
                        v-model="model.checkbox"/>
        <field-color v-bind="{label: 'Cor (button.$color)', width: 50, value: '#ff0000'}" v-model="model.color"/>
        <field-date v-bind="{label: 'Data (button.$date)', width: 50}" v-model="model.date"/>
        <field-file v-bind="{label: 'Arquivo (button.$file)', width: 50}" v-model="model.file"/>

        <field-separator v-bind="{label: 'Separador (button.$separator)'}"/>

        <field-html v-bind="{label: 'Html (button.$html)', width: 50}"
                    v-model="model.html"/>
        <field-money v-bind="{label: 'Dinheiro (button.$money)', width: 50}" v-model="model.money"/>
        <field-select v-bind="{label: 'Seletor (button.$select)', width: 50, options: [{value: 'nada', label: 'Tudo'}]}"
                      v-model="model.select"/>
        <field-text v-bind="{label: 'Texto (button.$text)', width: 50}" v-model="model.text"/>

        <field-separator v-bind="{label: 'Separador (button.$separator)'}"/>

        <field-textarea v-bind="{label: 'Texto Longo (button.$textarea)', width: 50}" v-model="model.textarea"/>
        <field-time v-bind="{label: 'Tempo (button.$time)', width: 50}" v-model="model.time"/>
        <field-toggle v-bind="{label: 'Alternado (button.$toggle)r', width: 50, init: false}" v-model="model.toggle"/>
      </div>
      <hr>
      <h6>Debugger</h6>
      <app-debugger v-bind="{label: 'debug', inspect: model}"></app-debugger>
      <hr>
      <q-btn color="negative" @click="setAppModified(true)">Forçar estado modificado</q-btn>
      |
      <q-btn color="positive" @click="setAppModified(false)">Limpar estado modificado</q-btn>
    </div>
  </app-card>
</template>

<script type="text/javascript">
  import { mapActions } from 'vuex'
  import AppCard from 'src/themes/phpzm/components/card/AppCard.vue'
  import { icon, label } from '../model'

  const html = `<b>PHPZM Quasar Boilerplate</b>
                  você pode usar os componentes de forma individual ou usando os componentes da "API de Forms"`

  export default {
    components: {
      AppCard
    },
    name: 'forms',
    data: () => ({
      icon,
      label,
      model: {
        checkbox: undefined,
        color: undefined,
        date: undefined,
        file: undefined,
        html: html,
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
    },
    watch: {
      model: {
        handler () {
          this.setAppModified(true)
        },
        deep: true
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
</style>
