class ListaNegociacoes {

    constructor() {

        this._negociacoes = [];
    }

    adicionar(negociacao) {

        this._negociacoes.push(negociacao);
        //this._negociacoes = [].concat(this._negociacoes, negociacao);
    }

    get negociacoes() {

        return [].concat(this._negociacoes);
    }

    removerTodas() {

        this._negociacoes = [];
    }

    ordenar(criterio) {

        this._negociacoes.sort(criterio);
    }

    inverterOrdem() {
        this._negociacoes.reverse();
    }
}