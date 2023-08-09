// Adicionar os seus links do Firebase 
const firebaseConfig = {
  apiKey: "AIzaSyDUz0nH6o3azS8b198VUiWy5sjKCpmhnqI",
  authDomain: "whatstter.firebaseapp.com",
  databaseURL: "https://whatstter-default-rtdb.firebaseio.com",
  projectId: "whatstter",
  storageBucket: "whatstter.appspot.com",
  messagingSenderId: "287860065289",
  appId: "1:287860065289:web:7381ad8f94bdf73585a4d8"
};
  
  // Inicializa o Firebase
  firebase.initializeApp(firebaseConfig); 
  
  // Adicionar salas
  nomeUsuario = localStorage.getItem("nomeUsuario");
  document.getElementById("nomeUsuario").innerHTML = "Olá! Bem vindo(a)," + nomeUsuario + "É otimo te ver denovo!";

  
  function addRoom(){
    roomName = document.getElementById("roomName").value; 
    firebase.database().ref("/").child(roomName).update({purpose: "adicionando nome da sala"}); 
    localStorage.setItem("roomName", roomName); 
    window.location = "mensagem.html"; 
  }
  
  // Obter os nomes das salas já gravadas no Firebase: 
  function getData() {  
    firebase.database().ref("/").on('value', function(snapshot) {
      document.getElementById("output").innerHTML = ""; 
      snapshot.forEach(function(childSnapshot) { 
        childKey  = childSnapshot.key;
        roomName = childKey;
        console.log("Nome da sala: " + roomName);
        row = "<div class='roomName' id="+ roomName+" onclick='redirectToRoomName(this.id)' >#"+ roomName +"</div><hr>";
        document.getElementById("output").innerHTML += row;
      });
    });
  }
  getData(); 
  
  // Redirecionar para a sala escolhida 
  function redirectToRoomName(name){
    console.log(name); 
    localStorage.setItem("roomName", name); 
    window.location = "mensagem.html"; 
  }
  
  // Fazer o logout 
  function logout(){
    localStorage.removeItem("nomeUsuario"); 
    localStorage.removeItem("roomName"); 
    window.location = "index.html"; 
  }