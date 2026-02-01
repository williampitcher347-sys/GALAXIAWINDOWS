let currentUser = null;

function login() {
  const name = document.getElementById("username").value.trim();
  if (!name) return alert("Enter a username");
  localStorage.setItem("webos_user", name);
  startSession(name);
}

function startSession(name) {
  currentUser = name;
  document.getElementById("loginScreen").hidden = true;
  document.getElementById("desktop").hidden = false;
}
