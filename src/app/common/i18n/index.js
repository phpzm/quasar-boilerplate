import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {
  pt_BR: {
    validation: {
      required: 'Campo obrigatório',
      minLength: 'Informe pelo menos {min} caracteres',
      email: 'Informe um e-mail válido',
      time: 'Informe uma hora entre 00:00 e 23:59'
    },
    crud: {
      save: {
        success: 'Registro salvo com sucesso',
        error: 'Houve um problema ao salvar o registro',
        cancel: {
          title: 'Cancelar',
          message: 'Deseja descartar as alterações?'
        }
      },
      fetch: {
        error: 'Houve um problema ao recuperar o registro'
      },
      run: {
        error: 'Erro ao processar a solicitação',
        success: 'Operação realizada com sucesso'
      }
    },
    debt: {
      message: 'Fatura com {late} dias de atraso. Evite bloqueio, clique aqui para regularizar!'
    }
  }
}

export default new VueI18n({
  locale: process.env.LOCALE,
  messages
})
