class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document);
        this.inputQuantidade = $('#data');
        this.inputData = $('#quantidade');
        this.inputValor = $('#valor');
    }
    
    adicionar(event) {
        event.preventDefault();

        alert("Chamei a acao no controller");

        console.log(this.inputQuantidade.value);
        console.log(this.inputData.value);
        console.log(this.inputValor.value);
    }
}