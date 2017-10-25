<template>
  <q-card class="card-form">
    <q-card-media>
      <!--suppress HtmlUnknownTarget -->
      <img src="statics/logo/big.png" alt="logo"/>
    </q-card-media>

    <q-card-separator></q-card-separator>

    <q-card-title>
      <p class="text-right"><i>Acesso Administrativo</i></p>
    </q-card-title>

    <q-card-separator></q-card-separator>

    <q-card-main class="form">
      <field-text v-model="credentials.email" v-bind="{label: 'Login'}"></field-text>
      <field-text v-model="credentials.password" v-bind="{label: 'Senha', type: 'password'}"></field-text>
      <div class="field has-100">
        <hr class="light">
      </div>
      <div class="field has-100">
        <q-btn big class="full-width" color="teal" @click="attempt">Entrar</q-btn>
      </div>
    </q-card-main>

  </q-card>
</template>

<script type="text/javascript">
  import 'src/app/common/fields'
  // import api from 'src/infra/services/http/index'
  import { mapActions } from 'vuex'

  export default {
    name: 'auth-login',
    data: () => ({
      credentials: {
        email: '',
        password: ''
      }
    }),
    methods: {
      attempt () {
        this.$router.push({name: 'dashboard.home'})
//        api
//          .post('/auth/login', this.credentials)
//          .then(({data}) => {
//            this.login({
//              user: this.credentials.email,
//              token: data.token
//            })
//            this.$router.push({name: 'dashboard.home'})
//          })
//          .catch(error => {
//            console.log('~> error', error)
//          })
      },
      ...mapActions(['login'])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .card-form
    max-width 380px
    margin 10px auto
    .q-card-media
      background #F7F7F7
      & > img
        width auto
        margin 20px auto
    p
      font-family play
    .q-form-login
      max-width 500px
</style>
