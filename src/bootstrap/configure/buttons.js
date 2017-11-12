import { button } from 'genesis/modules/dashboard/index'
import { view, edit, add, create, read, update, destroy } from 'src/bootstrap/configure/operations'

const color = 'positive'

/**
 * @param {Object} $this
 * @return {Array}
 */
export default ($this) => {
  return [
    // ********************************* middle *********************************

    button('view', 1, 'Detalhes', view($this), 'search', 'Visualize detalhes deste registro').$middle(),

    button('edit', 3, 'Editar', edit($this), 'edit', 'Edite este registro', 'primary').$middle(),

    button('destroy', 4, 'Apagar', destroy($this, null, 'Confirmação', 'Deseja apagar este registro?'), 'delete',
      'Envie este registro para a lixeira', 'negative').$middle(),

    // ********************************* grid *********************************

    button('refresh', 1, '', read($this, true), 'refresh', 'Recarregar os dados', 'primary').$grid(),

    button('add-inline', 2, '', add($this), 'add', 'Inicie a criação de um novo registro', 'primary').$grid(),

    button('retry', 1, 'Tentar novamente', () => $this.read(), 'add',
      'Realizar uma nova tentativa de recuperação de dados', 'primary').$render(['retry'], ['center']),

    button('first', 2, 'Criar um novo registro', add($this), 'add', 'Inicie a criação de um novo registro',
      'primary').$render(['empty'], ['center']),

    // ********************************* form *********************************

    button('create', 2, 'Salvar', create($this), '', 'Salvar as alterações feitas a este registro', 'primary')
      .$validate().$form(['create']),

    button('update', 3, 'Salvar', update($this), '', 'Salvar as alterações feitas a este registro', 'primary')
      .$validate().$form(['edit']),

    button('save-and-add', $this.scope === 'create' ? 2 : 3, 'Salvar & Novo',
      (record) => $this.save(record, () => $this.browse($this.path + '/' + 'create')), '',
      'Salva este registro e abre nova tela para criação de um novo registro').$validate().$form(['create', 'edit']),

    button('save-and-back', $this.scope === 'create' ? 2 : 3, 'Salvar & Voltar',
      (record) => $this.save(record, () => $this.browse($this.path)), '',
      'Salva este registro e volta para a lista principal de registros').$validate().$form(['create', 'edit']),

    button('editing', 3, 'Editar', edit($this), '', 'Editar este registro').$form(['view']),

    button('destructing', 4, 'Apagar', destroy($this, () => {
      $this.browse($this.path)
    }, 'Confirmação', 'Deseja apagar este registro?'), '', 'Apagar este registro').$form(['view', 'edit']),

    // ********************************* general *********************************

    button('add', 2, '', add($this), 'add', 'Inicie a criação de um novo registro', 'primary')
      .$all(['floating'], {round: true}),

    button('back', 1, 'Voltar', () => $this.$router.go(-1), '', 'Voltar para a tela anterior').$all(['top', 'bottom']),

    // ********************************* last buttons *********************************

    button('start', 1, '', () => $this.browse($this.path, false), 'apps', 'Abre a lista de registros', color)
      .$options({rotate: false}).$form(),

    button('filter', 1, '', () => $this.filterOpen(), 'filter_list', 'Abre o painel de filtros', color)
      .$options({rotate: false, 'class': '--button-filter'}).$grid()
  ]
}
