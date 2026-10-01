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