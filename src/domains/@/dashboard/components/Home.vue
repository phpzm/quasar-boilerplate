<template>
  <app-card class="dashboard-home">
    <div slot="title">
      <q-icon name="home"></q-icon>
      Home
    </div>
    <div slot="content">
      <h5>Bem vindo ao PHPZM Quasar Boilerplate</h5>
      <p align="justify">
        O propósito desse projeto é catalisar tudo o que é implementado e aprendido pela comunidade em um projeto real
        disponível para todos.
        <br>
        <small>Este projeto envolve algumas metodologias avançadas e pode não ser indicado para iniciantes.</small>
        <br>
      </p>
      <div class="jumbotron info yellow pulse">
        Este é um projeto experimental e requer que haja revisões antes de ir para produção.
        Não nos responsabilizamos por eventuais problemas! Nenhum problema mesmo #ficadica.
      </div>
      <hr>
      <p align="justify">
        Você pode ver o código-fonte do projeto aqui no <a href="https://github.com/phpzm/quasar-boilerplate"
                                                           target="_blank">Github</a>
      </p>
      <p align="justify">
        Os exemplos da <strong>"API de Forms"</strong> utilizam uma API "fake" que é provida por esse arquivo
        <a href="https://github.com/phpzm/quasar-boilerplate/blob/master/.deploy/api/index.php">aqui</a>.
      </p>
      <hr>
      <p align="justify">
        Eu e o Gilvan conversamos sobre a estrutura utilizada e gravamos um vídeo sobre essa conversa.
        O vídeo está desatualizado em relação ao momento atual do projeto, mas dá para ter uma ideia do que está havendo.
        <br>
        <small>Faremos um atualizado o quanto antes</small>
        <br>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/xpYNVO5YJqw?rel=0" frameborder="0"
                allowfullscreen></iframe>
      </p>
    </div>
  </app-card>
</template>

<script type="text/javascript">
  import AppCard from 'src/themes/phpzm/components/card/AppCard.vue'

  export default {
    components: {
      AppCard
    },
    name: 'dashboard-home'
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .dashboard-home
    font-size 14px
    .jumbotron
      padding 10px
      border-radius 3px
    small
      font-style italic
</style>
