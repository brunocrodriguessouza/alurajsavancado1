class HttpService {

        /* 
        0: requisicao ainda nao iniciada
        1: conexao com o servidor estabelecida
        2: requisicao recebida
        3: processando requisicao
        4: requisicao concluida e a resposta pronta
    */

    get(url) {
        return new Promise((resolve, reject) => {

            let xhr = new XMLHttpRequest();
    
            xhr.open('GET', url);
    
            xhr.onreadystatechange = () => {
    
                if(xhr.readyState == 4) {
                    
                    if(xhr.status == 200) {
    
                        resolve(JSON.parse(xhr.responseText));
                    } else {
                        reject(xhr.responseText);
                    }
                }
            };
    
            xhr.send();
        });
    }
}