class NegociacaoController {
    
    constructor(){
       
        let $ = document.querySelector.bind(document);

        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');

    }

    adiciona(event) {
       

        event.preventDefault();

        let data = new Date(
            ...this._inputData.value
            .split('-')
            .map((item, indice ) => item -indice % 2)
        );

        let negociacao = new NegociacaoController(
            data ,
            this._inputQuantidade.value,
            this._inputValor.value
        )

        
        let $ = document.querySelector.bind(document);
        
        let tabela = $('#tbody');
       
        let td = document.createElement('td');

        let trData = document.createElement('tr');
        trData.textContent = negociacao.data;

        let trQuantidade = document.createElement('tr');
        trQuantidade.textContent = negociacao.quantidade;

        let trValor = document.createElement('tr');
        trValor.textContent = negociacao.valor;

        td.appendChild(trData);
        td.appendChild(trQuantidade);
        td.appendChild(trValor);

        tabela.appendChild(td);

    }
}