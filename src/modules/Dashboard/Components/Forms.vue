<template>
  <div class="app-content">
    <div class="toolbar sub-toolbar">
      Forms
    </div>
    <div class="app-container">
      <resource-form :title="title" :base="base" :service="service" :action="action"
                     :environment="environment" :schemas="schemas"></resource-form>
    </div>
  </div>
</template>

<script type="text/javascript">
  import ResourceForm from 'src/modules/Common/Resources/Form.vue'

  export default {
    name: 'dashboard-form',
    components: {
      ResourceForm
    },
    data: () => ({
      title: 'Form',
      base: '/dashboard/forms',
      service: {},
      action: 'create',
      environment: 'create',
      schemas: [
        {
          field: 'aln_nome',
          label: 'Nome',
          environment: ['create'],
          schema: {
            component: 'field-text',
            order: 1
          }
        }
      ]
    })
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .app-content
    position relative
</style>
