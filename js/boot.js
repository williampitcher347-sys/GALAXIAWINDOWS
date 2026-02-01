const savedUser = localStorage.getItem("webos_user");
if (savedUser) startSession(savedUser);

setInterval(() => {
  document.getElementById("clock").textContent =
    new Date().toLocaleTimeString();
}, 1000);
