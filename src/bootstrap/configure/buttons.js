import { button } from 'genesis/modules/dashboard/index'
import { view, edit, add, create, read, update, destroy } from 'src/bootstrap/configure/operations'

const color = 'positive'

/**
 * @param {AppCrudGrid|AppCrudForm} $this
 * @return {Array}
 */
export default ($this) => {
  return [
    // ********************************* middle *********************************

    buttonView($this).$middle(),
    buttonEdit($this).$middle(),
    buttonDestroy($this).$middle(),

    // ********************************* grid *********************************

    buttonRefresh($this).$grid(),
    buttonAddInline($this).$grid(),
    buttonRetry($this).$render(['retry'], ['center']),
    buttonFirst($this).$render(['empty'], ['center']),

    // ********************************* form *********************************

    buttonCreate($this).$validate().$form(['create']),
    buttonUpdate($this).$validate().$form(['edit']),
    buttonSaveAndAdd($this).$validate().$form(['create', 'edit']),
    buttonSaveAndBack($this).$validate().$form(['create', 'edit']),
    buttonEditInline($this).$form(['view']),
    buttonDestroyInline($this).$form(['view', 'edit']),

    // ********************************* general *********************************

    buttonAdd($this).$all(['floating']),
    buttonBack($this).$all(['top', 'bottom']),

    // ********************************* last buttons *********************************

    buttonStart($this).$form(),
    buttonFilter($this).$grid()
  ]
}

/**
 * @param {AppCrudGrid|AppCrudForm} $this
 * @returns {Object}
 */
export const buttonView = $this => button(
  'view', 1, 'Detalhes', view($this), 'search', 'Visualize detalhes deste registro'
)

/**
 * @param {AppCrudGrid|AppCrudForm} $this
 * @returns {Object}
 */
export const buttonEdit = $this => button(
  'edit', 3, 'Editar', edit($this), 'edit', 'Edite este registro', 'primary'
)

/**
 * @param {AppCrudGrid|AppCrudForm} $this
 * @returns {Object}
 */
export const buttonDestroy = $this => button(
  'destroy', 4, 'Apagar', destroy($this, 'Confirmação', 'Deseja apagar este registro?'), 'delete',
  'Envie este registro para a lixeira', 'negative'
)

/**
 * @param {AppCrudGrid|AppCrudForm} $this
 * @returns {Object}
 */
export const buttonRefresh = $this => button(
  'refresh', 1, '', read($this, true), 'refresh', 'Recarregar os dados', 'primary'
)

/**
 * @param {AppCrudGrid|AppCrudForm} $this
 * @returns {Object}
 */
export const buttonAddInline = $this => button(
  'add-inline', 2, '', add($this), 'add', 'Inicie a criação de um novo registro', 'primary'
)

/**
 * @param {AppCrudGrid|AppCrudForm} $this
 * @returns {Object}
 */
export const buttonRetry = $this => button(
  'retry', 1, 'Tentar novamente', () => $this.read(), 'add', 'Realizar uma nova tentativa de recuperação de dados',
  'primary'
)

/**
 * @param {AppCrudGrid|AppCrudForm} $this
 * @returns {Object}
 */
export const buttonFirst = $this => button(
  'first', 2, 'Criar um novo registro', add($this), 'add', 'Inicie a criação de um novo registro', 'primary'
)

/**
 * @param {AppCrudGrid|AppCrudForm} $this
 * @returns {Object}
 */
export const buttonCreate = $this => button(
  'create', 2, 'Salvar', create($this), '', 'Salvar as alterações feitas a este registro', 'primary'
)

/**
 * @param {AppCrudGrid|AppCrudForm} $this
 * @returns {Object}
 */
export const buttonUpdate = $this => button(
  'update', 3, 'Salvar', update($this), '', 'Salvar as alterações feitas a este registro', 'primary'
)

/**
 * @param {AppCrudGrid|AppCrudForm} $this
 * @returns {Object}
 */
export const buttonSaveAndAdd = $this => button(
  'save-and-add', $this.scope === 'create' ? 2 : 3, 'Salvar & Novo',
  record => $this.save(record, () => $this.browse($this.path + '/' + 'create')), '',
  'Salva este registro e abre nova tela para criação de um novo registro'
)

/**
 * @param {AppCrudGrid|AppCrudForm} $this
 * @returns {Object}
 */
export const buttonSaveAndBack = $this => button(
  'save-and-back', $this.scope === 'create' ? 2 : 3, 'Salvar & Voltar',
  record => $this.save(record, () => $this.browse($this.path)), '',
  'Salva este registro e volta para a lista principal de registros'
)

/**
 * @param {AppCrudGrid|AppCrudForm} $this
 * @returns {Object}
 */
export const buttonEditInline = $this => button('edit-inline', 3, 'Editar', edit($this), '', 'Editar este registro')

/**
 * @param {AppCrudGrid|AppCrudForm} $this
 * @returns {Object}
 */
export const buttonDestroyInline = $this => button(
  'destroy-inline', 4, 'Apagar',
  destroy($this, 'Confirmação', 'Deseja apagar este registro?', () => $this.browse($this.path)),
  '', 'Apagar este registro'
)

/**
 * @param {AppCrudGrid|AppCrudForm} $this
 * @returns {Object}
 */
export const buttonAdd = $this => button(
  'add', 2, '', add($this), 'add', 'Inicie a criação de um novo registro', 'primary'
).$options({round: true})

/**
 * @param {AppCrudGrid|AppCrudForm} $this
 * @returns {Object}
 */
export const buttonBack = $this => button(
  'back', 1, '', () => $this.$router.go(-1), 'reply', 'Voltar para a tela anterior'
).$options({rotate: false})

/**
 * @param {AppCrudGrid|AppCrudForm} $this
 * @returns {Object}
 */
export const buttonStart = $this => button(
  'start', 1, '', () => $this.browse($this.path, false), 'fa-level-up', 'Abre a lista de registros', color
).$options({rotate: false})

/**
 * @param {AppCrudGrid|AppCrudForm} $this
 * @returns {Object}
 */
export const buttonFilter = $this => button(
  'filter', 1, '', () => $this.filterOpen(), 'fa-filter', 'Abre o painel de filtros', color
).$options({rotate: false, 'class': '--button-filter'})
