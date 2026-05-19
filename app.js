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

    aplicarPermisos();
    window.scrollTo({ top: 0, behavior: "smooth" });

}
function aplicarPermisos() {

    const menuPagos = document.getElementById("menuPagos");
    const menuDocs = document.getElementById("menuDocs");
      const menuTickets = document.getElementById("menuTickets");

    menuTickets.style.display = "";

}
document.getElementById("enterClient").addEventListener("click", () => {
   loginBox.classList.add("active");
    loginTitle.innerText = "Acceso Cliente";
    currentRole = "Cliente";
});
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
document.querySelectorAll(".request-card").forEach(card => {
card.addEventListener("click", () => {

document.querySelectorAll(".view").forEach(v => {
v.style.display = "none";
});

document.getElementById("detalleSolicitud").style.display = "block";

window.scrollTo({
top:0,
behavior:"smooth"
});

});
});
document.getElementById("volverSolicitudes")
.addEventListener("click", () => {

document.querySelectorAll(".view").forEach(v => {
v.style.display = "none";
});

document.getElementById("solicitudescambios")
.style.display = "block";

window.scrollTo({
top:0,
behavior:"smooth"
});

});
const volverBtn = document.getElementById("volverSolicitudes");

if(volverBtn){

volverBtn.addEventListener("click", () => {

document.querySelectorAll(".view").forEach(v => {
v.style.display = "none";
});

document.getElementById("solicitudescambios")
.style.display = "block";

window.scrollTo({
top:0,
behavior:"smooth"
});

});

}
const aprobarSolicitud = document.querySelector("#detalleSolicitud #aprobarSolicitud");
const estadoSolicitud = document.querySelector("#detalleSolicitud #estadoSolicitud");
const estadoCardSolicitud = document.querySelector("#solicitudescambios #estadoCardSolicitud");

function marcarSolicitudAprobada() {

  if (estadoSolicitud) {
    estadoSolicitud.innerText = "Aprobada";
    estadoSolicitud.className = "tag ok";
  }

  if (estadoCardSolicitud) {
    estadoCardSolicitud.innerText = "Aprobada";
    estadoCardSolicitud.className = "tag ok";
  }

  if (aprobarSolicitud) {

    aprobarSolicitud.addEventListener("click", () => {

        marcarSolicitudAprobada();

        localStorage.setItem("solicitud024", "aprobada");

        aprobarSolicitud.innerText = "Solicitud aprobada";
        aprobarSolicitud.disabled = true;

    });

}
}

if (localStorage.getItem("solicitud024") === "aprobada") {
  marcarSolicitudAprobada();
}

if (aprobarSolicitud) {
  aprobarSolicitud.addEventListener("click", () => {

    marcarSolicitudAprobada();

    aprobarSolicitud.innerText = "Solicitud aprobada";
    aprobarSolicitud.disabled = true;

});
}
const attachmentItems = document.querySelectorAll(".attachment-item");
const fileModal = document.getElementById("fileModal");
const fileModalTitle = document.getElementById("fileModalTitle");
const closeFileModal = document.getElementById("closeFileModal");

attachmentItems.forEach(item => {

    item.addEventListener("click", () => {

    const fileName = item.dataset.file;
    const preview = document.getElementById("filePreviewContent");

    if(fileName.endsWith(".pdf")){

        preview.innerHTML = `
            <iframe
                src="https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf"
                width="100%"
                height="500px"
                style="border:none;border-radius:12px;">
            </iframe>
        `;

    }
else if(fileName.endsWith(".jpg")){

    preview.innerHTML = `
        <img
            src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
            style="width:100%; border-radius:12px;">
    `;

}
        fileModalTitle.innerText = fileName;

        fileModal.classList.add("active");

    });

});

if (closeFileModal) {

    closeFileModal.addEventListener("click", () => {

        fileModal.classList.remove("active");

    });

}