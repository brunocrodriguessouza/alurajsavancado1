class NegociacaoController {

    constructor() {

        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        /*
        this._listaNegociacoes = new ListaNegociacoes(model => this._negociacoesView.update(model)); //???
        */
        
        let self = this;
        this._listaNegociacoes = new Proxy(new ListaNegociacoes(), {
                
                get(target, prop, receiver) {

                    if(['adicionar', 'removerTodas'].includes(prop) && typeof(target[prop]) == typeof(Function)) {
                        return function() {

                            console.log(`interceptando ${prop}`);
                            Reflect.apply(target[prop], target, arguments);
                            self._negociacoesView.update(target);
                        }
                    }
                    return Reflect.get(target, prop, receiver);
                }
            });

        this._negociacoesView = new NegociacoesView($('#negociacoesView'));
        this._negociacoesView.update(this._listaNegociacoes);
        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($('#mensagemView'));
        this._mensagemView.update(this._mensagem);
    }
    
    adicionar(event) {

        event.preventDefault();
        this._listaNegociacoes.adicionar(this._criarNegociacao());

        this._mensagem.texto = 'Negociacao adicionada com sucesso';
        this._mensagemView.update(this._mensagem);

        this._limparFormulario();
    }

    removerTodas() {

        this._listaNegociacoes.removerTodas();

        this._mensagem.texto = "Negociacoes apagadas com sucesso";
        this._mensagemView.update(this._mensagem);
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
}