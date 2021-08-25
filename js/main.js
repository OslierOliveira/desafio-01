
//Função fazGet que recebe a URL do Get
function fazGet(url) {
    let request = new XMLHttpRequest()   // Faz a requisição da URL
    request.open("GET", url, false)      // Método GET, URL, False
    request.send()                       // Nesse caso não mandamos nada pro servidor ()
    return request.responseText          // Retornamos responseText
}

//Função criaLinha que recebe o queue (fila de espera)
function criaLinha(queue) {
    console.log(queue)

    // Vamos então criar essas linhas
    linha = document.createElement("tr");    // A linha

    tdid = document.createElement("td");     // AS colunas para os 9 campos do registro
    tdbirth = document.createElement("td");
    tdname = document.createElement("td");
    tdgender = document.createElement("td");
    tdemail = document.createElement("td");    
    tdphone = document.createElement("td"); 
    tdaddress = document.createElement("td"); 
    tdcity = document.createElement("td"); 
    tdcep = document.createElement("td");   

    tdid.innerHTML = queue.id                // Botamos os dados nessas colunas
    tdbirth.innerHTML = queue.birth
    tdname.innerHTML = queue.name
    tdgender.innerHTML = queue.gender
    tdemail.innerHTML = queue.email
    tdphone.innerHTML = queue.phone
    tdaddress.innerHTML = queue.address
    tdcity.innerHTML = queue.city
    tdcep.innerHTML = queue.cep

    linha.appendChild(tdid);                // Acrescentamos na linha como filhos dela todos os 9 campos
    linha.appendChild(tdbirth);
    linha.appendChild(tdname);
    linha.appendChild(tdgender);
    linha.appendChild(tdemail);
    linha.appendChild(tdphone);
    linha.appendChild(tdaddress);
    linha.appendChild(tdcity);
    linha.appendChild(tdcep);


    return linha;                     // Retornamos o conteudo da linha para a nossa tabela
}
//Função main (Principal)
function main() {
    // Chamamos o fazGet
    // passamos a URL da API (BACK END)
    // A resposta vem como uma string. Preciso passar como Json (objeto javascript), por isso jogo na variável "data"
    // e depois uso o json.parse e passo a variável "data" e recebo como objeto javascript na variável "queue"
    let data = fazGet("https://my-json-server.typicode.com/oslieroliveira/api-queue-organization/queue"); 
    let queue = JSON.parse(data);         
    
    // Agora que temos os dados, precisamos mostrar na tela do usuário
    // Para cada pessoa da fila, (registro), criar uma linha    
    let tabela = document.getElementById("tabela");
    queue.forEach(element => {                  // forEach (faz o loop para cada registro encontrado e acrescenta na tabela)
        let linha = criaLinha(element);
        tabela.appendChild(linha);
    });
}

main()