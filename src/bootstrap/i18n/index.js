/**
 * @type {Object}
 */
export const date = {
  days: {
    week: [
      'domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'
    ]
  },
  months: [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro',
    'Dezembro'
  ]
}

/**
 * @type {Object}
 */
export const events = {
  modified: {
    title: 'Modificações pendentes',
    message: 'Você possui modificações pendentes.<br>Deseja descartar estas modificações?'
  }
}

/**
 * @type {Object}
 */
export const validation = {
  required: 'Campo obrigatório',
  minLength: 'Informe pelo menos {min} caracteres',
  email: 'Informe um e-mail válido',
  time: 'Informe uma hora entre 00:00 e 23:59'
}

/**
 * @type {Object}
 */
export const crud = {
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
}

/**
 * @type {Object}
 */
export const locales = {
  date, events, validation, crud
}

/**
 * @type {Object}
 */
export default {
  // process.env.LOCALE
  pt_BR: locales
}
