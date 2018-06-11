class NegociacaoController {
    
    adicionar(event) {
        event.preventDefault();
        alert("Chamei a acao no controller");

        let $ = document.querySelector.bind(document);
        let inputQuantidade = $('#data');
        let inputData = $('#quantidade');
        let inputValor = $('#valor');

        console.log(inputQuantidade.value);
        console.log(inputData.value);
        console.log(inputValor.value);
    }
}