const buttons = document.querySelectorAll('.nav');
const views = document.querySelectorAll('.view');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    buttons.forEach(b => b.classList.remove('active'));
    views.forEach(v => v.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(btn.dataset.view).classList.add('active');
    window.scrollTo({top:0, behavior:'smooth'});
  });
});
const loginScreen = document.getElementById("loginScreen");
const app = document.querySelector(".app");

const loginBox = document.getElementById("loginBox");
const loginTitle = document.getElementById("loginTitle");
let currentRole = "Demo";

  function abrirDashboard() {
   
    loginScreen.style.display = "none";
    loginBox.classList.remove("active");
    app.style.display = "flex";

    document.getElementById("roleBadge").innerText =
        currentRole === "Administrador"
        ? "Panel Administrador"
        : currentRole === "Cliente"
        ? "Portal Cliente"
        : "Dashboard Demo";

    window.scrollTo({ top: 0, behavior: "smooth" });

    aplicarPermisos();
}
function aplicarPermisos() {

    const menuPagos = document.getElementById("menuPagos");
    const menuDocs = document.getElementById("menuDocs");
    const menuTickets = document.getElementById("menuTickets");

    if (currentRole === "Cliente") {

        menuTickets.style.display = "none";

    } else {

        menuTickets.style.display = "block";

    }
}
document.getElementById("enterClient").addEventListener("click", () => {
  loginBox.classList.add("active");
  loginTitle.innerText = "Acceso Cliente";
});
currentRole = "Cliente";
document.getElementById("enterAdmin").addEventListener("click", () => {
  loginBox.classList.add("active");
  loginTitle.innerText = "Acceso Administrador";
  currentRole = "Administrador";
});

document.getElementById("enterDemo").addEventListener("click", abrirDashboard);

document.getElementById("loginAccess").addEventListener("click", () => {

  const loader = document.getElementById("loginLoader");

  loader.style.display = "block";

  setTimeout(() => {
    abrirDashboard();
    loader.style.display = "none";
  }, 1800);

});
document.getElementById("closeLogin").addEventListener("click", () => {

  loginBox.classList.remove("active");

});