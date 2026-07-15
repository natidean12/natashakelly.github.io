// Função para simular o envio correto de contato
function sendForm(event) {
  event.preventDefault();
  const btn = event.target.querySelector('button');
  
  btn.innerHTML = "Enviando... <i class='fa-solid fa-spinner fa-spin'></i>";
  btn.style.opacity = "0.7";
  btn.disabled = true;

  setTimeout(() => {
    alert("Mensagem enviada com sucesso! A equipe EcoSapiens entrará em contato em breve.");
    btn.innerHTML = "Enviado com Sucesso! <i class='fa-solid fa-check'></i>";
    btn.style.background = "#4caf50";
    btn.style.color = "#0b0f0c";
  }, 1500);
}
