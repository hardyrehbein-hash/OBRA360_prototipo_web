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

function abrirDashboard() {
  loginScreen.style.display = "none";
  app.style.display = "flex";
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.getElementById("enterClient").addEventListener("click", () => {
  loginBox.classList.add("active");
  loginTitle.innerText = "Acceso Cliente";
});

document.getElementById("enterAdmin").addEventListener("click", () => {
  loginBox.classList.add("active");
  loginTitle.innerText = "Acceso Administrador";
});

document.getElementById("enterDemo").addEventListener("click", abrirDashboard);

document.getElementById("loginAccess").addEventListener("click", abrirDashboard);