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
    tdid.innerHTML = queue.id
    tdbirth.innerHTML = queue.birth
    tdname.innerHTML = queue.name

    linha.appendChild(tdid);
    linha.appendChild(tdbirth);
    linha.appendChild(tdname);

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