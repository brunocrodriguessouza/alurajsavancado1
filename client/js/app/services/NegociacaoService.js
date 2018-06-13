class NegociacaoService {

    /* 
        0: requisicao ainda nao iniciada
        1: conexao com o servidor estabelecida
        2: requisicao recebida
        3: processando requisicao
        4: requisicao concluida e a resposta pronta
    */

    obterNegociacoesDaSemana() {

        return new Promise((resolve, reject) => {

            let xhr = new XMLHttpRequest();
    
            xhr.open('GET', 'negociacoes/semana');
    
            xhr.onreadystatechange = () => {
    
                if(xhr.readyState == 4) {
                    
                    if(xhr.status == 200) {
    
                        console.log('Obtendo as negociacoes do servidor');
                        resolve(JSON.parse(xhr.responseText)
                            .map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));
                    } else {
                        
                        console.log(xhr.responseText);
                        reject('Nao foi possivel obter as negociacoes da semana');
                    }
                }
            };
    
            xhr.send();
        });

    }

    obterNegociacoesDaSemanaAnterior(cb) {

        return new Promise((resolve, reject) => {

            let xhr = new XMLHttpRequest();
    
            xhr.open('GET', 'negociacoes/anterior');
    
            xhr.onreadystatechange = () => {
    
                if(xhr.readyState == 4) {
                    
                    if(xhr.status == 200) {
    
                        console.log('Obtendo as negociacoes do servidor');
                        resolve(JSON.parse(xhr.responseText)
                            .map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));
                    } else {
                        
                        console.log(xhr.responseText);
                        reject('Nao foi possivel obter as negociacoes da semana anterior');
                    }
                }
            };
    
            xhr.send();
        });
    }

    obterNegociacoesDaSemanaRetrasada(cb) {

        return new Promise((resolve, reject) => {

            let xhr = new XMLHttpRequest();
    
            xhr.open('GET', 'negociacoes/retrasada');
    
            xhr.onreadystatechange = () => {
    
                if(xhr.readyState == 4) {
                    
                    if(xhr.status == 200) {
    
                        console.log('Obtendo as negociacoes do servidor');
                        resolve(JSON.parse(xhr.responseText)
                            .map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));
                    } else {
                        
                        console.log(xhr.responseText);
                        reject('Nao foi possivel obter as negociacoes da semana retrasada');
                    }
                }
            };
    
            xhr.send();
        });

    }
}