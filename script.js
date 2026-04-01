// Seleciona o formulário pelo id
const formulario = document.getElementById("formContato");

// Adiciona uma ação quando o usuário clicar em enviar
formulario.addEventListener("submit", function (event) {
  // Impede o envio real do formulário
  event.preventDefault();

  // Captura os valores digitados e remove espaços extras
  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();
  const retorno = document.getElementById("retorno");

  // Expressão para verificar se o e-mail está em um formato válido
  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Verifica se algum campo ficou vazio
  if (nome === "" || email === "" || mensagem === "") {
    retorno.textContent = "Por favor, preencha todos os campos.";
    retorno.style.color = "red";
    return;
  }

  // Verifica se o e-mail está correto
  if (!emailValido.test(email)) {
    retorno.textContent = "Por favor, digite um e-mail válido.";
    retorno.style.color = "red";
    return;
  }

  // Se estiver tudo certo, exibe mensagem de sucesso
  retorno.textContent = "Mensagem enviada com sucesso!";
  retorno.style.color = "green";

  // Limpa os campos do formulário
  formulario.reset();
});