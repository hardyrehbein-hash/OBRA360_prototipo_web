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

document.getElementById("enterClient").addEventListener("click", () => {
  loginScreen.style.display = "none";
  app.style.display = "flex";
});

document.getElementById("enterAdmin").addEventListener("click", () => {
  loginScreen.style.display = "none";
  app.style.display = "flex";
});