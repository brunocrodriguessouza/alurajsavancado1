class View {

    constructor(elemento) {

        this._elemento = elemento;
    }

    template() {

        throw new Error ('O metodo template devera ser implementado');
    }

    update(model) {

        this._elemento.innerHTML = this.template(model);
    }
}