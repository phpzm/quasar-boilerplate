/**
 * @type {Array}
 */
export const dayNames = [
  'domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'
]

/**
 * @type {Array}
 */
export const monthNames = [
  'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro',
  'Dezembro'
]

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

// process.env.LOCALE

/**
 * @type {Object}
 */
export default {
  pt_BR: {
    monthNames, dayNames, events, validation, crud
  }
}
