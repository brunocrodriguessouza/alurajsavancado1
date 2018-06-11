class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputQuantidade = $('#quantidade');
        this._inputData = $('#data');
        this._inputValor = $('#valor');
    }
    
    adicionar(event) {
        event.preventDefault();

        let data = new Date(...
            this._inputData.value
                .split('-')
                .map(function(item, index) {
                    return item - index % 2;
                })
        );

        console.log(data);

        // adicionar a negociacao em uma lista
    }
}