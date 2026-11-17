const campoCep = document.querySelector("#cep");
const botaoBuscarCep = document.querySelector("#btnBuscarCep");
const statusCep = document.querySelector("#statusCep");
const resultadoCep = document.querySelector("#resultadoCep");

async function buscarCep() {
    // Remove tudo que não for número
    const cep = campoCep.value.replace(/\D/g, "");

    if (cep.length !== 8) {
        statusCep.textContent = "Digite um CEP com 8 números.";
        resultadoCep.textContent = "";
        campoCep.focus();
        return;
    }

    statusCep.textContent = "Consultando CEP...";
    resultadoCep.textContent = "";

    try {
        // CORREÇÃO: A crase (`) é obrigatória para funcionar a interpolação ${cep}
        const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

        if (!resposta.ok) {
            throw new Error("Falha na consulta ao serviço.");
        }

        const dados = await resposta.json();

        if (dados.erro) {
            statusCep.textContent = "CEP não encontrado.";
            return;
        }

        statusCep.textContent = "CEP encontrado.";
        resultadoCep.textContent = 
            `${dados.logradouro || "Logradouro não informado"} - ` +
            `${dados.bairro || "Bairro não informado"} - ` +
            `${dados.localidade}/${dados.uf}`;

    } catch (erro) {
        statusCep.textContent = "Não foi possível consultar o CEP agora.";
        console.error(erro);
    }
}

// Só adiciona o evento se o botão existir na página
if (botaoBuscarCep) {
    botaoBuscarCep.addEventListener("click", buscarCep);
}