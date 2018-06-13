class NegociacaoController {

    constructor() {

        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');

        this._ordemAtual = '';
        
        this._negociacoesView = new NegociacoesView($('#negociacoesView'));

        this._listaNegociacoes = new Bind(
            new ListaNegociacoes(),
            this._negociacoesView,
            ['adicionar', 'removerTodas', 'ordernar', 'inverterOrdem'])

        this._mensagemView = new MensagemView($('#mensagemView'));
        
        this._mensagem = new Bind(
            new Mensagem(),
            this._mensagemView,
            ['texto'])
    }
    
    adicionar(event) {

        event.preventDefault();
        this._listaNegociacoes.adicionar(this._criarNegociacao());
        this._mensagem.texto = 'Negociacao adicionada com sucesso';
        this._limparFormulario();
    }

    obterNegociacoesDaSemana() {

        let service = new NegociacaoService();

        Promise.all([
            service.obterNegociacoesDaSemana(),
            service.obterNegociacoesDaSemanaAnterior(),
            service.obterNegociacoesDaSemanaRetrasada()]
        ).then(negociacoes => {
            negociacoes
                .reduce((arrayAchatado, array) => arrayAchatado.concat(array), [])
                .forEach(negociacao => this._listaNegociacoes.adicionar(negociacao));
            this._mensagem.texto = 'Negociacoes importadas com sucesso';
        }).catch(error => this._mensagem.texto = error);
    }

    removerTodas() {

        this._listaNegociacoes.removerTodas();
        this._mensagem.texto = "Negociacoes apagadas com sucesso";
    }

    _criarNegociacao() {

        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value), 
            this._inputQuantidade.value,
            this._inputValor.value)
    }

    _limparFormulario() {

        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;

        this._inputQuantidade.focus();
    }

    inverterOrdem() {
        this._negociacoes.reverse();
    }

    ordenar(coluna) {
        if(this._ordemAtual == coluna) {
            this._listaNegociacoes.inverterOrdem();
        } else {
            this._listaNegociacoes.ordenar((a, b) => a[coluna] - b[coluna]);    
        }
        this._ordemAtual = coluna;
    }


}