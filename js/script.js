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
// ===== AULA 09 e 11 – Array de objetos com categoria =====
const servicos = [
    {
        nome: "Curadoria de Fontes",
        descricao: "Feed único com as principais manchetes de veículos reconhecidos.",
        categoria: "noticias"
    },
    {
        nome: "Radar de Verificação",
        descricao: "Cole um link suspeito e consulte agências de fact-checking.",
        categoria: "verificacao"
    },
    {
        nome: "Resumo Diário Personalizado",
        descricao: "Receba um resumo diário com as notícias mais relevantes.",
        categoria: "personalizacao"
    }
];

// ===== AULA 10 e 11 – Catálogo dinâmico com filtro =====
const listaServicos = document.querySelector("#listaServicos");
const filtroCategoria = document.querySelector("#filtroCategoria");
const mensagemFiltro = document.querySelector("#mensagemFiltro");

function renderizarServicos(lista) {
    listaServicos.innerHTML = "";

    if (lista.length === 0) {
        listaServicos.textContent = "Nenhum serviço foi encontrado nesta categoria.";
        return;
    }

    lista.forEach((servico) => {
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

// Renderiza todos os serviços ao carregar a página
renderizarServicos(servicos);

// ===== AULA 11 – Evento change do filtro =====
filtroCategoria.addEventListener("change", () => {
    const categoriaEscolhida = filtroCategoria.value;

    if (categoriaEscolhida === "todos") {
        renderizarServicos(servicos);
        mensagemFiltro.textContent = "Mostrando todos os serviços.";
    } else {
        const servicosFiltrados = servicos.filter((servico) => {
            return servico.categoria === categoriaEscolhida;
        });

        renderizarServicos(servicosFiltrados);
        mensagemFiltro.textContent = servicosFiltrados.length + " serviço(s) encontrado(s).";
    }
    // ===== AULA 12 – Validação do Formulário =====
const formulario = document.querySelector("#formContato");

// Verifica se o formulário existe na página para não dar erro nas outras páginas
if (formulario) {
    const campoNome = document.querySelector("#nome");
    const campoEmail = document.querySelector("#email");
    const campoAssunto = document.querySelector("#assunto"); // No seu HTML o id é "assunto"
    const mensagem = document.querySelector("#mensagemForm");

    formulario.addEventListener("submit", (evento) => {
        evento.preventDefault(); // Impede a página de recarregar

        const nome = campoNome.value.trim();
        const email = campoEmail.value.trim();
        const assunto = campoAssunto.value;

        // Validação
        if (nome === "" || email === "" || assunto === "") {
            mensagem.textContent = "Preencha os campos obrigatórios antes de continuar.";
            return;
        }

        mensagem.textContent = `Obrigado, ${nome}! Sua solicitação foi registrada.`;
        formulario.reset(); // Limpa os campos após o envio
    });
}

// ===== AULA 13 – LocalStorage (Serviço Favorito) =====
const campoFavorito = document.querySelector("#servicoFavorito");
const botaoFavorito = document.querySelector("#btnSalvarFavorito");
const mensagemFavorito = document.querySelector("#favoritoSalvo");

if (campoFavorito) {
    // Recupera o favorito ao carregar a página
    const favoritoSalvo = localStorage.getItem("servicoFavorito");
    if (favoritoSalvo) {
        campoFavorito.value = favoritoSalvo;
        mensagemFavorito.textContent = `Seu serviço favorito é: ${favoritoSalvo}`;
    }

    // Salva o favorito ao clicar no botão
    botaoFavorito.addEventListener("click", () => {
        const servico = campoFavorito.value;

        if (servico === "") {
            mensagemFavorito.textContent = "Escolha um serviço primeiro.";
            return;
        }

        localStorage.setItem("servicoFavorito", servico);
        mensagemFavorito.textContent = `Favorito salvo: ${servico}`;
    });
}
});