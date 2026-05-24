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
const requestGrid = document.querySelector(".requests-grid");
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
        src="assets/docs/${fileName}"
        width="100%"
        height="500px"
        style="border:none;border-radius:12px;">
    </iframe>
`;

}
else if(fileName.endsWith(".jpg")){

    preview.innerHTML = `
    <img
        src="assets/docs/${fileName}"
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
const aprobarSolicitudBtn = document.getElementById("aprobarSolicitud");
const approvalMessage = document.getElementById("approvalMessage");

if(aprobarSolicitudBtn && approvalMessage){

    aprobarSolicitudBtn.addEventListener("click", () => {

        approvalMessage.style.display = "block";

        aprobarSolicitudBtn.innerText = "Solicitud aprobada";
        aprobarSolicitudBtn.disabled = true;

    });

}
const abrirNuevaSolicitud = document.getElementById("abrirNuevaSolicitud");
const modalNuevaSolicitud = document.getElementById("modalNuevaSolicitud");
const cerrarNuevaSolicitud = document.getElementById("cerrarNuevaSolicitud");
const guardarNuevaSolicitud = document.getElementById("guardarNuevaSolicitud");

const tituloSolicitud = document.getElementById("tituloSolicitud");
const descripcionSolicitud = document.getElementById("descripcionSolicitud");

const contenedorSolicitudes = document.querySelector(".requests-grid") || document.querySelector(".request-grid");

if(abrirNuevaSolicitud && modalNuevaSolicitud){
    abrirNuevaSolicitud.addEventListener("click", () => {
        modalNuevaSolicitud.classList.add("active");
    });
}

if(cerrarNuevaSolicitud && modalNuevaSolicitud){
    cerrarNuevaSolicitud.addEventListener("click", () => {
        modalNuevaSolicitud.classList.remove("active");
    });
}

if(guardarNuevaSolicitud){
    guardarNuevaSolicitud.addEventListener("click", () => {

        const titulo = tituloSolicitud.value || "Nueva solicitud cliente";
        const descripcion = descripcionSolicitud.value || "Solicitud ingresada por cliente para revisión de constructora.";

        const nuevaSolicitud = document.createElement("article");
        nuevaSolicitud.className = "request-card";

        nuevaSolicitud.innerHTML = `
            <span class="tag yellow">Pendiente constructora</span>
            <h3>${titulo}</h3>
            <p>${descripcion}</p>
            <small>SOL-025 · Ingresada hoy · Pendiente respuesta constructora</small>
        `;

        if(contenedorSolicitudes){

    contenedorSolicitudes.prepend(nuevaSolicitud);

    const kanbanPendientes = document.getElementById("kanbanPendientes");

    if(kanbanPendientes){

        const nuevaKanban = document.createElement("article");
        nuevaKanban.className = "kanban-card";

        nuevaKanban.innerHTML = `
            <span class="tag yellow">Pendiente revisión</span>
            <h4>SOL-025 · ${titulo}</h4>
            <p>${descripcion}</p>
            <small>Cliente: Juan Pérez · Ingresada hoy</small>
        `;

        kanbanPendientes.appendChild(nuevaKanban);
    }
}
const solicitudesGuardadas = JSON.parse(localStorage.getItem("obra360_solicitudes")) || [];

solicitudesGuardadas.unshift({
    codigo: "SOL-025",
    titulo: titulo,
    descripcion: descripcion,
    estado: "Pendiente constructora",
    fecha: "Ingresada hoy"
});

localStorage.setItem("obra360_solicitudes", JSON.stringify(solicitudesGuardadas));
        modalNuevaSolicitud.classList.remove("active");

        tituloSolicitud.value = "";
        descripcionSolicitud.value = "";

const mensajeNuevaSolicitud = document.getElementById("mensajeNuevaSolicitud");

if(mensajeNuevaSolicitud){
    mensajeNuevaSolicitud.style.display = "block";
}

    });
}
const btnAdminSolicitudes = document.getElementById("btnAdminSolicitudes");
const adminSolicitudesView = document.getElementById("adminSolicitudes");
const todasLasVistas = document.querySelectorAll(".view");

if(btnAdminSolicitudes && adminSolicitudesView){

    btnAdminSolicitudes.addEventListener("click", () => {

        todasLasVistas.forEach(vista => {
            vista.classList.remove("active");
        });

        adminSolicitudesView.classList.add("active");

    });

}
function cargarSolicitudesGuardadas(){

    const solicitudesGuardadas = JSON.parse(localStorage.getItem("obra360_solicitudes")) || [];

    const contenedorSolicitudes = document.querySelector(".requests-grid") || document.querySelector(".request-grid");
    const kanbanPendientes = document.getElementById("kanbanPendientes");

    solicitudesGuardadas.forEach(solicitud => {

        if(contenedorSolicitudes){

            const tarjetaCliente = document.createElement("article");
            tarjetaCliente.className = "request-card";

            tarjetaCliente.innerHTML = `
                <span class="tag yellow">${solicitud.estado}</span>
                <h3>${solicitud.titulo}</h3>
                <p>${solicitud.descripcion}</p>
                <small>${solicitud.codigo} · ${solicitud.fecha} · Pendiente respuesta constructora</small>
            `;

            contenedorSolicitudes.prepend(tarjetaCliente);
        }

        if(kanbanPendientes){

            const tarjetaKanban = document.createElement("article");
            tarjetaKanban.className = "kanban-card";

            tarjetaKanban.innerHTML = `
                <span class="tag yellow">Pendiente revisión</span>
                <h4>${solicitud.codigo} · ${solicitud.titulo}</h4>
                <p>${solicitud.descripcion}</p>
                <small>Cliente: Juan Pérez · ${solicitud.fecha}</small>
            `;

            kanbanPendientes.appendChild(tarjetaKanban);
        }

    });
}

cargarSolicitudesGuardadas();
const modalCotizar = document.getElementById("modalCotizar");
const cerrarModalCotizar = document.getElementById("cerrarModalCotizar");
const enviarCotizacion = document.getElementById("enviarCotizacion");

document.querySelectorAll(".btn-cotizar").forEach(btn => {

    btn.addEventListener("click", () => {
        modalCotizar.classList.add("active");
    });

});

if(cerrarModalCotizar){

    cerrarModalCotizar.addEventListener("click", () => {
        modalCotizar.classList.remove("active");
    });

}

if(enviarCotizacion){

    enviarCotizacion.addEventListener("click", () => {

        modalCotizar.classList.remove("active");

        alert("Cotización enviada correctamente al cliente para aprobación.");

    });

}