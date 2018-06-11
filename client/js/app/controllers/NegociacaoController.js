class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputQuantidade = $('#data');
        this._inputData = $('#quantidade');
        this._inputValor = $('#valor');
    }
    
    adicionar(event) {
        event.preventDefault();

        console.log(typeof(this._inputData.value));
        console.log(this._inputData.value);

        alert("Chamei a acao no controller");

        let negociacao = new Negociacao(
            this._inputData.value,
            this._inputQuantidade.value,
            this._inputValor.value
        );

        console.log(negociacao);

        // adicionar a negociacao em uma lista
    }
}