/* --- Lógica do Modo Escuro --- */
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Verifica se já existe uma preferência salva no navegador
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    themeToggle.innerText = "Modo Claro";
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        themeToggle.innerText = "Modo Claro";
        localStorage.setItem('theme', 'dark');
    } else {
        themeToggle.innerText = "Modo Escuro";
        localStorage.setItem('theme', 'light');
    }
});

/* --- Validação do Formulário de Contato --- */
function validarFormulario(event) {
    event.preventDefault(); // Impede o envio real do formulário
    
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    if (nome === "" || email === "" || mensagem === "") {
        alert("Por favor, preencha todos os campos antes de enviar.");
    } else {
        alert("Obrigado, " + nome + "! Sua mensagem foi simulada com sucesso.");
        // Limpa o formulário após o sucesso
        document.getElementById('formContato').reset();
    }
}

// Conecta a função ao formulário se ele existir na página atual
const form = document.getElementById('formContato');
if (form) {
    form.addEventListener('submit', validarFormulario);
}