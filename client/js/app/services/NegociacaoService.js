class NegociacaoService {

    constructor() {
        this._http = new HttpService(); 
    }

    obterNegociacoesDaSemana() {

        return new Promise((resolve, reject) => {

            this._http
                .get('negociacoes/semana')
                .then(negociacoes => {
                    console.log(negociacoes);
                    resolve(negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));
                })
                .catch(erro => {
                    console.log(error);
                    reject('Nao foi possivel obter as negociacoes da semana');
                });   
        });

    }

    obterNegociacoesDaSemanaAnterior(cb) {

        return new Promise((resolve, reject) => {

            this._http
                .get('negociacoes/semana')
                .then(negociacoes => {
                    console.log(negociacoes);
                    resolve(negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));
                })
                .catch(erro => {
                    console.log(error);
                    reject('Nao foi possivel obter as negociacoes da semana anterior');
                });   
        });
    }

    obterNegociacoesDaSemanaRetrasada(cb) {

        return new Promise((resolve, reject) => {

            this._http
                .get('negociacoes/semana')
                .then(negociacoes => {
                    console.log(negociacoes);
                    resolve(negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));
                })
                .catch(erro => {
                    console.log(error);
                    reject('Nao foi possivel obter as negociacoes da semana retrasada');
                });   
        });

    }
}