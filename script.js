//Definição do objeto sections para alternar entre páginas:
const sections = {
    linkSobre: 'sobre',
    linkFormacao: 'formacao',
    linkPortfolio: 'portfolio',
    linkContato: 'contato'
};

//Utilizando iteração e event listener para trocar as páginas com base 
//no objeto sections, escondendo as seções não ativas e adicionando classe
//para animação da página
Object.keys(sections).forEach(linkId => {
    document.getElementById(linkId).addEventListener('click', () => {
        for (const secId of Object.values(sections)) {
            const secao = document.getElementById(secId);

            if (secId === sections[linkId]) {
                secao.style.display = 'block';
                secao.classList.remove('loaded');
                void secao.offsetWidth;
                setTimeout(() => {
                    secao.classList.add('loaded');
                }, 20);
            } else {
                secao.style.display = 'none';
                secao.classList.remove('loaded');
            }
        }
    });
});

//função para abrir popup ao enviar o formulario de contato:
function formEnviado() {
    const campos = document.getElementsByClassName("campo_validade");
    const todosValidos = Array.from(campos).every(campo => campo.checkValidity());

    if (todosValidos) {
        window.alert("Sua mensagem foi enviada. Obrigado!");
    }
}

//event listener de carregamento da pagina para resetar o formulario 
//(tentativa de impedir que ao recarregar a pagina com o formulario
//preenchido ele recarregue com os mesmos valores) e para forçar a 
//pagina sobre a ser exibida no primeiro carregamento
window.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.reset();

    const secaoInicial = document.getElementById('sobre');
    secaoInicial.style.display = 'block';
    secaoInicial.classList.remove('loaded');
    void secaoInicial.offsetWidth;
    setTimeout(() => {
        secaoInicial.classList.add('loaded');
    }, 20);

});

