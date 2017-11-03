<template>
  <div :class="$options.name">
    <div id="calendar"></div>
  </div>
</template>

<script type="text/javascript">
  import 'moment'
  import JQuery from 'jquery'
  import 'fullcalendar'

  let $calendar = {}

  export default {
    name: 'app-calendar',
    props: {
      views: {
        type: Object,
        default: () => ({
          listDay: {
            buttonText: 'Resumo'
          },
          listWeek: {
            buttonText: 'semana'
          },
          agendaDay: {
            buttonText: 'dia'
          },
          agendaWeek: {
            buttonText: 'semana'
          },
          month: {
            buttonText: 'mês'
          }
        })
      },
      allDayText: {
        type: String,
        default: () => 'Dia inteiro'
      },
      defaultView: {
        type: String,
        default: () => 'month'
      },
      locale: {
        type: String,
        default: () => 'pt-br'
      },
      navLinks: {
        type: Boolean,
        default: () => true
      },
      editable: {
        type: Boolean,
        default: () => true
      },
      eventLimit: {
        type: Boolean,
        default: () => true
      },
      timeFormat: {
        type: String,
        default: () => 'HH:mm'
      },
      slotLabelFormat: {
        type: String,
        default: () => 'HH:mm'
      },
      events: {
        type: Array,
        default: () => ([
          {
            title: 'All Day Event',
            start: '2017-10-01'
          },
          {
            title: 'Long Event',
            start: '2017-10-07',
            end: '2017-10-10'
          },
          {
            id: 999,
            title: 'Repeating Event',
            start: '2017-10-09T16:00:00'
          },
          {
            id: 999,
            title: 'Repeating Event',
            start: '2017-10-16T16:00:00'
          },
          {
            title: 'Conference',
            start: '2017-10-11',
            end: '2017-10-13'
          },
          {
            title: 'Meeting',
            start: '2017-10-12T10:30:00',
            end: '2017-10-12T12:30:00'
          },
          {
            title: 'Lunch',
            start: '2017-10-12T12:00:00'
          },
          {
            title: 'Meeting',
            start: '2017-10-12T14:30:00'
          },
          {
            title: 'Happy Hour',
            start: '2017-10-12T17:30:00'
          },
          {
            title: 'Dinner',
            start: '2017-10-12T20:00:00'
          },
          {
            title: 'Birthday Party',
            start: '2017-10-13T07:00:00'
          },
          {
            title: 'Click for Google',
            url: 'http://google.com/',
            start: '2017-10-28'
          }
        ])
      },
      eventRender: {
        type: Function,
        default: () => {
          return (event, element, view) => console.log('~> eventRender', event, element, view)
        }
      }
    },
    data: () => ({}),
    methods: {
      renderEvent (event) {
        $calendar.fullCalendar('renderEvent', event, true)
      },
      updateEvent (event) {
        $calendar.fullCalendar('updateEvent', event)
      },
      refetchEvents () {
        $calendar.fullCalendar('refetchEvents')
      },
      addEventSource (source) {
        $calendar.fullCalendar('addEventSource', source)
      },
      removeEventSource (source) {
        $calendar.fullCalendar('removeEventSource', source)
      }
    },
    mounted () {
      $calendar = JQuery('#calendar')

      const options = {
        header: {
          left: 'prev,next today',
          center: 'title',
          right: 'month,basicWeek,basicDay'
        },
        views: this.views,
        allDayText: this.allDayText,
        defaultView: this.defaultView,
        locale: this.locale,
        navLinks: this.navLinks,
        editable: this.editable,
        eventLimit: this.eventLimit,
        timeFormat: this.timeFormat,
        slotLabelFormat: this.slotLabelFormat,
        eventClick: (event, element) => this.$emit('eventClick', event, element),
        eventDrop: (event, element) => this.$emit('eventDrop', event, element),
        events: this.events
      }

      $calendar.fullCalendar(options)
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
