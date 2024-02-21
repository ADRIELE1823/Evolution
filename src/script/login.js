var formSignin = document.querySelector('#signin')
var formSignup = document.querySelector('#signup')
var btnColor = document.querySelector('.btnColor')

document.querySelector('#btnSignin')
  .addEventListener('click', () => {
    formSignin.style.left = "25px"
    formSignup.style.left = "450px"
    btnColor.style.left = "0px"
})

document.querySelector('#btnSignup')
  .addEventListener('click', () => {
    formSignin.style.left = "-450px"
    formSignup.style.left = "25px"
    btnColor.style.left = "110px"
})

// Suponha que você tenha alguma lógica para verificar o sucesso do cadastro.
// Quando o cadastro for bem-sucedido, você pode mostrar a mensagem de sucesso assim:

function exibirMensagemDeSucesso() {
  const successMessage = document.getElementById("successMessage");
  successMessage.style.display = "block"; // Exibe a mensagem
}

// Exemplo: Quando o formulário é enviado com sucesso (você pode ajustar isso conforme necessário)
document.getElementById("signup").addEventListener("submit", function(event) {
  event.preventDefault();

  // Lógica de verificação de cadastro bem-sucedido aqui

  // Suponha que o cadastro seja bem-sucedido
  exibirMensagemDeSucesso();
});
