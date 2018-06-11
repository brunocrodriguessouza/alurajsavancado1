class ListaNegociacoes {

    constructor() {

        this._negociacoes = []
    }

    adicionar(negociacao) {

        this._negociacoes.push(negociacao);
    }

    get negociacoes() {

        return this._negociacoes;
    }
}