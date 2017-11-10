<template>
  <app-card>
    <div slot="title">
      <q-icon name="today"></q-icon> Agenda
    </div>
    <div slot="content">
      <q-btn @click="add">Adicionar</q-btn>
      <app-calendar ref="calendar"></app-calendar>
    </div>
  </app-card>
</template>

<script type="text/javascript">
  import AppCard from 'phpzm/components/card/AppCard.vue'
  import AppCalendar from 'phpzm/components/calendar/AppCalendar.vue'

  export default {
    components: {
      AppCard, AppCalendar
    },
    name: 'dashboard-home',
    methods: {
      add () {
        // eslint-disable-next-line
        this.$refs.calendar.renderEvent({title: 'Ronião', start: new Date(), allDay: true})
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
</style>
