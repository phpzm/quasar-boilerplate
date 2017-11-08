<template>
  <div class="dashboard-no-access">
    <app-card>
      <div slot="title">
        <q-icon name="error"></q-icon> Acesso Restrito
      </div>
      <div slot="content">
        <br>
        Você tentou acessar a url abaixo e foi bloqueado
        <pre>{{ $route.query.blocked }}</pre>
        <p>
          Entre em contato com o Administrador da aplicação para obter mais detalhes
        </p>
      </div>
    </app-card>
  </div>
</template>

<script type="text/javascript">
  import AppCard from 'src/themes/phpzm/components/card/AppCard.vue'
  import { PATH_LOGIN } from 'src/app/support'

  export default {
    components: {
      AppCard
    },
    name: 'dashboard-no-access',
    beforeRouteEnter (to, from, next) {
      if (!to.query.blocked) {
        return next(PATH_LOGIN)
      }
      next()
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scope>
  .dashboard-no-access
    font-size 14px
    pre
      background #e8e8e8
      padding 10px
      border-radius 3px
    small
      font-style italic
</style>
