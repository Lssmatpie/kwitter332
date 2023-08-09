function entrar() {
  nomeUsuario = document.getElementById("nomeUsuario").value;
  localStorage.setItem("nomeUsuario", nomeUsuario);
  window.location = "sala.html";
  }