<template>
  <div class="auth">

    <a href="https://github.com/phpzm/quasar-boilerplate"><img
      style="position: absolute; top: 0; left: 0; border: 0; z-index: 20"
      src="https://camo.githubusercontent.com/121cd7cbdc3e4855075ea8b558508b91ac463ac2/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f6c6566745f677265656e5f3030373230302e706e67"
      alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_left_green_007200.png"></a>

    <app-layout :left="false" :right="false" :footer="false">
      <stars slot="content">
        <div class="form-login">
          <img src="/statics/logo.png" alt="logo" style="margin: 40px 0 0 0; height: 200px">
          <br>
          <form @submit.prevent="submit" class="form" style="max-width: 420px; margin: 0 auto;">
            <component :is="schemas.user.component" :schema="schemas.user" class="field"></component>
            <component :is="schemas.password.component" :schema="schemas.password" class="field"></component>
            <component :is="schemas.remember.component" :schema="schemas.remember" class="field"></component>
            <div class="field">
              <button class="primary raised full-width">Log In</button>
            </div>
          </form>
        </div>
      </stars>
    </app-layout>
  </div>
</template>

<script type="text/javascript">
  import AppLayout from 'modules/Common/Layout/AppLayout.vue'
  import Stars from 'src/modules/Foolish/Stars.vue'

  export default {
    name: 'auth-index',
    components: {
      AppLayout, Stars
    },
    data: () => ({
      schemas: {
        user: {
          component: 'field-text',
          label: 'Login'
        },
        password: {
          component: 'field-password',
          label: 'Password'
        },
        remember: {
          component: 'field-checkbox',
          label: 'Remember'
        }
      }
    }),
    methods: {
      submit () {
        this.$router.push('/dashboard')
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .auth
    .form-login
      background #fff
      text-align center
      margin 20px auto 0 auto
      max-width 420px
      padding 0 40px 40px 40px
</style>
