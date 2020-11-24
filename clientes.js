class  Cliente  {
    construtor ( )  {
        isso . clientes  =  localStorage . getItem ( "tbClientes" )  ===  null ? [ ] : JSON . parse ( localStorage . getItem ( "tbClientes" ) )
    }

    salva ( cliente )  {
        if ( document . getElementById ( 'codigo' ) . getAttribute ( 'disabled' ) === 'disabled' ) {
            isso . apaga ( cliente . codigo ) 
        }
        isso.clientes.empurrar ( cliente )
        localStorage.setItem ( "tbClientes" ,  JSON . stringify ( this . clientes ) )
        alert ( 'Cliente salvo com sucesso!' )
        isso.Limpa ( )
        retornoverdadeiro
    }
    apaga ( codigo ) { 
       deixeindex=  this . clientes . findIndex ( cliente  =>  cliente . codigo  ==  codigo )      
       isso . clientes . splice ( index ,  1 )  // o 1o parâmetro é o índice do array e o segundo o número de itens que serão removidos
       localStorage . setItem ( "tbClientes" ,  JSON . stringify ( this . clientes ) )
       cliente . atualiza ( ) 
    }

    Limpa ( ) {
        documento . getElementById ( 'codigo' ) . valor  =  ''
        documento . getElementById ( 'nome' ) . valor  =  ''
        documento . getElementById ( 'cep' ) . valor  =  ''
        documento . getElementById ( 'endereco' ) . valor  =  ''
        documento . getElementById ( 'bairro' ) . valor  =  ''
        documento . getElementById ( 'cidade' ) . valor  =  ''
        documento . getElementById ( 'observacoes' ) . valor  =  ''
    }

    edita ( cliente ) {
        documento . getElementById ( 'codigo' ) . setAttribute ( 'disabled' ,  'disabled' )
        documento . getElementById ( 'codigo' ) . valor  =  cliente . codigo
        documento . getElementById ( 'nome' ) . valor  =  cliente . nome
        documento . getElementById ( 'cep' ) . valor  =  cliente . cep
        documento . getElementById ( 'endereco' ) . valor  =  cliente . endereco
        documento . getElementById ( 'bairro' ) . valor  =  cliente . bairro
        documento . getElementById ( 'cidade' ) . valor  =  cliente . cidade
        documento . getElementById ( 'observacoes' ) . valor  =  cliente . observações

    }

    lista ( )  {
        const  listagem  =  isso . clientes . mapa ( ( cliente )  =>  (
            `<tr>
                <td> $ { cliente . codigo } </td>
                <td> $ { cliente . nome } </td>
                <td> $ { cliente . cep } </td>
                <td> $ { cliente . endereco } </td>
                <td> $ { cliente . bairro } </td>
                <td> $ { cliente . cidade } </td>
                <td> $ { cliente . observacoes } </td>
                <td> <button id = 'apagar' onClick = 'cliente.apaga ( $ { cliente . codigo } )'> 🗑️Apagar </button>
                    <button id = 'editar' onClick = 'cliente.edita ( $ { JSON . stringify ( cliente ) } )'> 📝Editar </button>
                </td>    
            </tr> `
        ) )
        return  ( `
        <table border = '1' class = 'paleBlueRows'>
         <caption> Relação dos Clientes </caption>
            <cabeça>
                <th> Código </th>
                <th> Nome </th>
                <th> CEP </th>
                <th> Endereço </th>
                <th> Bairro </th>
                <th> Cidade </th>
                <th> Observações </th>
                <th> Opções </th>
            </thead>
            <tbody>
            $ { listagem }
            </tbody>
        </table> `
        )
    }

    atualiza ( ) {     
        documento . getElementById ( 'listagem' ) . innerHTML  =  cliente . lista ( )
    }

}
// instanciamos novo objeto
const  cliente= novoCliente()

// tratamos o botão salvar
documento . getElementById ( 'salvar' ) . onclick  =  function  ( )  {
    const  registro  =  {
        codigo : documento . getElementById ( 'codigo' ) . valor ,
        nome : documento . getElementById ( 'nome' ) . valor ,
        cep : documento . getElementById ( 'cep' ) . valor ,
        endereco : documento . getElementById ( 'endereco' ) . valor ,
        bairro : documento . getElementById ( 'bairro' ) . valor ,
        cidade : documento . getElementById ( 'cidade' ) . valor ,
        observações : documento . getElementById ( 'observacoes' ) . valor
    }
    cliente . salva ( registro )

}

// tratamos a listagem
janela . onload  =  function ( )  {
    cliente . atualiza ( )   
}