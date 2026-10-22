// ===== AULA 08 – Consulta com select =====
const campoServico = document.querySelector('#servico');
const botaoConsultar = document.querySelector('#btnConsultar');
const resultado = document.querySelector('#resultado');

botaoConsultar.addEventListener('click', () => {
    const escolha = campoServico.value;
    console.log(escolha);

    if (escolha === '') {
        resultado.textContent = 'Escolha um serviço antes de consultar.';
    } else if (escolha === 'curadoria') {
        resultado.textContent = 'A Curadoria de Fontes reúne notícias de veículos confiáveis em um só feed.';
    } else if (escolha === 'radar') {
        resultado.textContent = 'O Radar de Verificação analisa links e textos suspeitos em bases de fact-checking.';
    } else if (escolha === 'resumo') {
        resultado.textContent = 'O Resumo Diário envia as 5 notícias mais relevantes conforme seus temas.';
    } else {
        resultado.textContent = 'Serviço não identificado.';
    }
});

// ===== AULA 09 – Array de objetos =====
const servicos = [
    {
        nome: "Curadoria de Fontes",
        descricao: "Feed único com as principais manchetes de veículos reconhecidos, organizadas por categorias."
    },
    {
        nome: "Radar de Verificação",
        descricao: "Cole um link ou texto suspeito e consulte agências de fact-checking para verificar a notícia."
    },
    {
        nome: "Resumo Diário Personalizado",
        descricao: "Receba um resumo diário com as 5 notícias mais relevantes e verificadas conforme seus temas."
    }
];

// ===== AULA 10 – Catálogo dinâmico =====
const listaServicos = document.querySelector("#listaServicos");

function renderizarServicos() {
    listaServicos.innerHTML = "";

    servicos.forEach((servico) => {
        const card = document.createElement("article");
        card.classList.add("card-servico");

        const titulo = document.createElement("h3");
        titulo.textContent = servico.nome;

        const descricao = document.createElement("p");
        descricao.textContent = servico.descricao;

        card.append(titulo, descricao);
        listaServicos.appendChild(card);
    });
}

renderizarServicos();