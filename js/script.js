const campoServico = document.querySelector('#servico');
const botaoConsultar = document.querySelector('#btnConsultar');
const resultado = document.querySelector('#resultado');

botaoConsultar.addEventListener('click', () => {
    const escolha = campoServico.value;
    console.log(escolha); // usado só para testar no Console

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

console.table(servicos);
console.log(servicos[0].nome);
console.log(servicos[1].descricao);

servicos.forEach((servico) => {
    console.log(servico.nome);
});