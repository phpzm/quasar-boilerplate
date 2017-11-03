export default {
  data () {
    return {
      config: {
        styles: this.styles,
        refresh: false,
        noHeader: false,
        columnPicker: false,
        leftStickyColumns: 0,
        rightStickyColumns: 0,
        bodyStyle: this.bodyStyle,
        rowHeight: '50px',
        responsive: false,
        pagination: undefined,
        messages: this.messages,
        labels: this.labels
      }
    }
  }
}
