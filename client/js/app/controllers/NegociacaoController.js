class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputQuantidade = $('#quantidade');
        this._inputData = $('#data');
        this._inputValor = $('#valor');
    }
    
    adicionar(event) {
        event.preventDefault();

        let data = new Date(this._inputData.value.replace(/-/g, ','));

        console.log(data);

        // adicionar a negociacao em uma lista
    }
}