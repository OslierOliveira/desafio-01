function fazGet(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function criaLinha(queue) {
    console.log(queue)
    linha = document.createElement("tr");

    tdid = document.createElement("td");
    tdbirth = document.createElement("td");
    tdname = document.createElement("td");
    tdgender = document.createElement("td");
    tdemail = document.createElement("td");    
    tdphone = document.createElement("td"); 
    tdaddress = document.createElement("td"); 
    tdcity = document.createElement("td"); 
    tdcep = document.createElement("td");   

    tdid.innerHTML = queue.id
    tdbirth.innerHTML = queue.birth
    tdname.innerHTML = queue.name
    tdgender.innerHTML = queue.gender
    tdemail.innerHTML = queue.email
    tdphone.innerHTML = queue.phone
    tdaddress.innerHTML = queue.address
    tdcity.innerHTML = queue.city
    tdcep.innerHTML = queue.cep

    linha.appendChild(tdid);
    linha.appendChild(tdbirth);
    linha.appendChild(tdname);
    linha.appendChild(tdgender);
    linha.appendChild(tdemail);
    linha.appendChild(tdphone);
    linha.appendChild(tdaddress);
    linha.appendChild(tdcity);
    linha.appendChild(tdcep);


    return linha;
}

function main() {
    let data = fazGet("https://my-json-server.typicode.com/oslieroliveira/api-queue-organization/queue");
    let queue = JSON.parse(data);
    let tabela = document.getElementById("tabela");
    queue.forEach(element => {
        let linha = criaLinha(element);
        tabela.appendChild(linha);
    });
    // Para cada pessoa da fila
        // criar uma linha
        // adicionar na tabela
}

main()