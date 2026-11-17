// ===== AULA 08 – Consulta com select =====
const campoServico = document.querySelector("#servico");
const botaoConsultar = document.querySelector("#btnConsultar");
const resultado = document.querySelector("#resultado");

// A MÁGICA ACONTECE AQUI: Só executa se os elementos existirem (ou seja, se estivermos na tela de serviços)
if (campoServico && botaoConsultar && resultado) {
  botaoConsultar.addEventListener("click", () => {
    const escolha = campoServico.value;

    if (escolha === "") {
      resultado.textContent = "Escolha um serviço antes de consultar.";
    } else if (escolha === "curadoria") {
      resultado.textContent =
        "A Curadoria de Fontes reúne notícias de veículos confiáveis em um só feed.";
    } else if (escolha === "radar") {
      resultado.textContent =
        "O Radar de Verificação analisa links e textos suspeitos em bases de fact-checking.";
    } else if (escolha === "resumo") {
      resultado.textContent =
        "O Resumo Diário envia as 5 notícias mais relevantes conforme seus temas.";
    } else {
      resultado.textContent = "Serviço não identificado.";
    }
  });
}

// ===== AULA 09 e 11 – Array de objetos com categoria =====
const servicos = [
  {
    nome: "Curadoria de Fontes",
    descricao:
      "Feed único com as principais manchetes de veículos reconhecidos.",
    categoria: "noticias",
  },
  {
    nome: "Radar de Verificação",
    descricao: "Cole um link suspeito e consulte agências de fact-checking.",
    categoria: "verificacao",
  },
  {
    nome: "Resumo Diário Personalizado",
    descricao: "Receba um resumo diário com as notícias mais relevantes.",
    categoria: "personalizacao",
  },
];

// ===== AULA 10 e 11 – Catálogo dinâmico com filtro =====
const listaServicos = document.querySelector("#listaServicos");
const filtroCategoria = document.querySelector("#filtroCategoria");
const mensagemFiltro = document.querySelector("#mensagemFiltro");

function renderizarServicos(lista) {
  listaServicos.innerHTML = "";

  if (lista.length === 0) {
    listaServicos.textContent =
      "Nenhum serviço foi encontrado nesta categoria.";
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

// Só executa o catálogo se estivermos na página que tem esses elementos
if (listaServicos && filtroCategoria && mensagemFiltro) {
  renderizarServicos(servicos);

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
      mensagemFiltro.textContent =
        servicosFiltrados.length + " serviço(s) encontrado(s).";
    }
  }); // <--- ESTA CHAVE ESTAVA FALTANDO NO SEU CÓDIGO ORIGINAL!
}

// ===== AULA 12 – Validação do Formulário =====
const formulario = document.querySelector("#formContato");

if (formulario) {
  const campoNome = document.querySelector("#nome");
  const campoEmail = document.querySelector("#email");
  const campoAssunto = document.querySelector("#assunto");
  const mensagem = document.querySelector("#mensagemForm");

  formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const nome = campoNome.value.trim();
    const email = campoEmail.value.trim();
    const assunto = campoAssunto.value;

    if (nome === "" || email === "" || assunto === "") {
      mensagem.textContent =
        "Preencha os campos obrigatórios antes de continuar.";
      return;
    }

    mensagem.textContent = `Obrigado, ${nome}! Sua solicitação foi registrada.`;
    formulario.reset();
  });
}

// ===== AULA 13 – LocalStorage (Serviço Favorito) =====
const campoFavorito = document.querySelector("#servicoFavorito");
const botaoFavorito = document.querySelector("#btnSalvarFavorito");
const mensagemFavorito = document.querySelector("#favoritoSalvo");

if (campoFavorito && botaoFavorito && mensagemFavorito) {
  const favoritoSalvo = localStorage.getItem("servicoFavorito");
  if (favoritoSalvo) {
    campoFavorito.value = favoritoSalvo;
    mensagemFavorito.textContent = `Seu serviço favorito é: ${favoritoSalvo}`;
  }

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
