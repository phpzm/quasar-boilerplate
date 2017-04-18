<template>
  <div class="auth">
    <app-layout :left="false" :right="false" :footer="false">
      <div slot="content" class="row small-gutter form-container">
        <div class="width-1of2" style="text-align: center">
          <img src="/statics/logo.png" alt="logo" style="height: 200px">
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
        <div class="width-1of2">
          <stars></stars>
        </div>
      </div>
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
    .form-container
      width 100%
</style>
