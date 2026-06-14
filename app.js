// ==========================================
// CONFIGURACIÓN DE BASE DE DATOS Y USUARIOS
// ==========================================

const defaultUsers = [
  { email: "admin@obra360.cl", password: "123", role: "Administrador", name: "Hardy Rehbein", projectId: "las-palmas" },
  { email: "cliente@obra360.cl", password: "123", role: "Cliente", name: "Juan Pérez", projectId: "las-palmas" },
  { email: "admin2@obra360.cl", password: "123", role: "Administrador", name: "Sofía Silva", projectId: "el-roble" },
  { email: "cliente2@obra360.cl", password: "123", role: "Cliente", name: "Pedro Gómez", projectId: "el-roble" }
];

const defaultProjects = {
  "las-palmas": {
    id: "las-palmas",
    name: "Edificio Las Palmas",
    status: "En ejecución",
    clientName: "Juan Pérez",
    progressPlan: 52,
    progressReal: 47,
    delayDays: 7,
    statusTerm: "En observación",
    gantt: [
      { activity: "Excavaciones", start: "01/05", end: "08/05", status: "Terminada", progress: 100 },
      { activity: "Fundaciones", start: "09/05", end: "22/05", status: "Terminada", progress: 100 },
      { activity: "Estructura", start: "23/05", end: "18/06", status: "En ejecución", progress: 64 },
      { activity: "Albañilería", start: "19/06", end: "05/07", status: "Atrasada", progress: 12 },
      { activity: "Instalaciones", start: "06/07", end: "30/07", status: "Pendiente", progress: 0 }
    ],
    photos: [
      { id: "img-01", src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=600&q=80", title: "Vista avance fachada norte", date: "12 Mayo 2026", desc: "Obra gruesa terminada en fachada norte." },
      { id: "img-02", src: "https://images.unsplash.com/photo-1581094288338-2314dddb7eed?auto=format&fit=crop&w=600&q=80", title: "Instalaciones interiores nivel 2", date: "14 Mayo 2026", desc: "Avance de terminaciones y cableado de tableros." },
      { id: "img-03", src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80", title: "Avance terminaciones acceso principal", date: "10 Mayo 2026", desc: "Instalación de marcos de ventanas de acceso." }
    ],
    payments: [
      { id: "EP N°1", progress: "15%", amount: 37500000, status: "Pagado" },
      { id: "EP N°2", progress: "20%", amount: 50000000, status: "Pagado" },
      { id: "EP N°3", progress: "20%", amount: 50000000, status: "En revisión" },
      { id: "EP N°4", progress: "15%", amount: 37500000, status: "Pendiente" }
    ],
    documents: [
      { name: "01. Contrato de Obra Las Palmas.pdf", type: "pdf", file: "cotizacion.pdf" },
      { name: "02. Planos Arquitectura General.pdf", type: "pdf", file: "plano.pdf" },
      { name: "03. Permiso de Edificación.pdf", type: "pdf", file: "cotizacion.pdf" },
      { name: "04. Presupuesto Base Adjudicado.pdf", type: "pdf", file: "plano.pdf" }
    ],
    tickets: [
      { codigo: "SOL-024", tipo: "Baño", prioridad: "Importante", titulo: "Cambio porcelanato baño principal", descripcion: "Solicitud ingresada por cliente. Pendiente evaluación de costo y plazo.", estado: "En análisis", fecha: "12 mayo 2026", cost: 1250000, days: 3 },
      { codigo: "SOL-023", tipo: "Exterior", prioridad: "Urgente", titulo: "Aprobación color fachada", descripcion: "Cotización emitida. Requiere aprobación digital del mandante.", estado: "Pendiente aprobación", fecha: "10 mayo 2026", cost: 0, days: 3 },
      { codigo: "SOL-022", tipo: "Cocina", prioridad: "Normal", titulo: "Consulta iluminación cocina", descripcion: "Respuesta técnica enviada por constructora con alternativas disponibles.", estado: "Respondida", fecha: "08 mayo 2026", cost: 0, days: 0 },
      { codigo: "SOL-021", tipo: "Terminaciones", prioridad: "Normal", titulo: "Cambio puertas interiores", descripcion: "Adicional cotizado y disponible para aprobación del cliente.", estado: "Cotizada", fecha: "05 mayo 2026", cost: 1250000, days: 2 }
    ]
  },
  "el-roble": {
    id: "el-roble",
    name: "Condominio El Roble",
    status: "En ejecución",
    clientName: "Pedro Gómez",
    progressPlan: 70,
    progressReal: 72,
    delayDays: 0,
    statusTerm: "Al día",
    gantt: [
      { activity: "Excavaciones", start: "10/04", end: "20/04", status: "Terminada", progress: 100 },
      { activity: "Fundaciones", start: "21/04", end: "10/05", status: "Terminada", progress: 100 },
      { activity: "Estructura", start: "11/05", end: "05/06", status: "Terminada", progress: 100 },
      { activity: "Albañilería", start: "06/06", end: "25/06", status: "En ejecución", progress: 80 },
      { activity: "Instalaciones", start: "15/06", end: "15/07", status: "En ejecución", progress: 35 }
    ],
    photos: [
      { id: "img-04", src: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=600&q=80", title: "Avance Obra Gruesa Bloques", date: "01 Junio 2026", desc: "Muros estructurales del bloque B terminados." },
      { id: "img-05", src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80", title: "Instalación Eléctrica Embebida", date: "28 Mayo 2026", desc: "Tuberías Conduit instaladas en losas." },
      { id: "img-06", src: "https://images.unsplash.com/photo-1581094288338-2314dddb7eed?auto=format&fit=crop&w=600&q=80", title: "Fachada Condominio Norte", date: "24 Mayo 2026", desc: "Enlucido exterior de bloques principales." }
    ],
    payments: [
      { id: "EP N°1", progress: "25%", amount: 60000000, status: "Pagado" },
      { id: "EP N°2", progress: "25%", amount: 60000000, status: "Pagado" },
      { id: "EP N°3", progress: "20%", amount: 48000000, status: "Pagado" },
      { id: "EP N°4", progress: "15%", amount: 36000000, status: "En revisión" }
    ],
    documents: [
      { name: "01. Bases Administrativas El Roble.pdf", type: "pdf", file: "cotizacion.pdf" },
      { name: "02. Planos de Estructura e Ingeniería.pdf", type: "pdf", file: "plano.pdf" },
      { name: "03. Acta de Entrega de Terreno Roble.pdf", type: "pdf", file: "cotizacion.pdf" }
    ],
    tickets: [
      { codigo: "SOL-101", tipo: "Exterior", prioridad: "Urgente", titulo: "Modificación reja perimetral", descripcion: "Cliente solicita cambio de diseño de la reja por motivos de seguridad.", estado: "En análisis", fecha: "10 junio 2026", cost: 4500000, days: 5 },
      { codigo: "SOL-102", tipo: "Cocina", prioridad: "Normal", titulo: "Detalle grifería lavaplatos", descripcion: "Cotización enviada al cliente. Pendiente confirmación de modelo.", estado: "Cotizada", fecha: "08 junio 2026", cost: 280000, days: 1 }
    ]
  }
};

// Inicializar base de datos local
if (!localStorage.getItem("obra360_projects_db")) {
  localStorage.setItem("obra360_projects_db", JSON.stringify(defaultProjects));
}
if (!localStorage.getItem("obra360_users_db")) {
  localStorage.setItem("obra360_users_db", JSON.stringify(defaultUsers));
}

// Cargar estado guardado de tickets (sincronización bidireccional)
const activeProjectId = localStorage.getItem("obra360_active_project_id") || "las-palmas";
const currentTickets = JSON.parse(localStorage.getItem("obra360_solicitudes"));
if (currentTickets) {
  const db = JSON.parse(localStorage.getItem("obra360_projects_db"));
  if (db && db[activeProjectId]) {
    db[activeProjectId].tickets = currentTickets;
    localStorage.setItem("obra360_projects_db", JSON.stringify(db));
  }
}

// Variables Globales
let currentRole = "Demo";
const loggedUser = JSON.parse(localStorage.getItem("obra360_logged_user"));
if (loggedUser) {
  currentRole = loggedUser.role;
}

const buttons = document.querySelectorAll('.nav');
const views = document.querySelectorAll('.view');

// Gestión de Navegación de Vistas
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    buttons.forEach(b => b.classList.remove('active'));
    views.forEach(v => {
      v.classList.remove('active');
      v.style.display = "none";
    });
    btn.classList.add('active');
    const target = document.getElementById(btn.dataset.view);
    if(target) {
      target.classList.add('active');
      target.style.display = "block";
    }
    window.scrollTo({top:0, behavior:'smooth'});
  });
});

const loginScreen = document.getElementById("loginScreen");
const app = document.querySelector(".app");
const loginBox = document.getElementById("loginBox");
const loginTitle = document.getElementById("loginTitle");

// Cerrar sesión
const logoutBtn = document.getElementById("btnLogout");
if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("obra360_logged_user");
    localStorage.removeItem("obra360_active_project_id");
    localStorage.removeItem("obra360_solicitudes");
    location.reload();
  });
}

function abrirDashboard() {
  loginScreen.style.display = "none";
  loginBox.classList.remove("active");
  app.style.display = "flex";

  const user = JSON.parse(localStorage.getItem("obra360_logged_user"));
  if (user) {
    document.getElementById("roleBadge").innerText =
        user.role === "Administrador"
        ? "Panel Administrador"
        : "Portal Cliente";
    currentRole = user.role;
  } else {
    document.getElementById("roleBadge").innerText = "Dashboard Demo";
    currentRole = "Demo";
  }

  aplicarPermisos();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function aplicarPermisos() {
  const btnAdminSolicitudes = document.getElementById("btnAdminSolicitudes");
  const photoUploadSection = document.getElementById("photoUploadSection");

  if(currentRole === "Administrador"){
    if(btnAdminSolicitudes) btnAdminSolicitudes.style.display = "";
    if(photoUploadSection) photoUploadSection.style.display = "block";
  } else {
    if(btnAdminSolicitudes) btnAdminSolicitudes.style.display = "none";
    if(photoUploadSection) photoUploadSection.style.display = "none";
  }
}

// Configuración de accesos pre-rellenados
document.getElementById("enterClient").addEventListener("click", () => {
  loginBox.classList.add("active");
  loginTitle.innerText = "Acceso Cliente";
  document.getElementById("loginUser").value = "cliente@obra360.cl";
  document.getElementById("loginPassword").value = "123";
  document.getElementById("loginError").style.display = "none";
});

document.getElementById("enterAdmin").addEventListener("click", () => {
  loginBox.classList.add("active");
  loginTitle.innerText = "Acceso Administrador";
  document.getElementById("loginUser").value = "admin@obra360.cl";
  document.getElementById("loginPassword").value = "123";
  document.getElementById("loginError").style.display = "none";
});

document.getElementById("enterDemo").addEventListener("click", () => {
  // Demo logs in as Juan Perez client
  const demoUser = defaultUsers[1];
  localStorage.setItem("obra360_logged_user", JSON.stringify(demoUser));
  localStorage.setItem("obra360_active_project_id", demoUser.projectId);
  abrirDashboard();
  loadActiveProject();
});

// Autenticación Real
document.getElementById("loginAccess").addEventListener("click", () => {
  const emailVal = document.getElementById("loginUser").value.trim();
  const passVal = document.getElementById("loginPassword").value;
  const errorEl = document.getElementById("loginError");
  const loader = document.getElementById("loginLoader");

  const users = JSON.parse(localStorage.getItem("obra360_users_db")) || defaultUsers;
  const matchedUser = users.find(u => u.email.toLowerCase() === emailVal.toLowerCase() && u.password === passVal);

  if (!matchedUser) {
    errorEl.innerText = "Usuario o contraseña inválidos.";
    errorEl.style.display = "block";
    return;
  }

  errorEl.style.display = "none";
  localStorage.setItem("obra360_logged_user", JSON.stringify(matchedUser));
  localStorage.setItem("obra360_active_project_id", matchedUser.projectId);
  currentRole = matchedUser.role;

  // Sync project tickets to local table
  const db = JSON.parse(localStorage.getItem("obra360_projects_db"));
  const project = db[matchedUser.projectId];
  if (project) {
    localStorage.setItem("obra360_solicitudes", JSON.stringify(project.tickets));
  }

  loader.innerText = `Validando acceso... cargando proyecto ${project ? project.name : ''}`;
  loader.style.display = "block";

  setTimeout(() => {
    loader.style.display = "none";
    abrirDashboard();
    loadActiveProject();
  }, 1200);
});

document.getElementById("closeLogin").addEventListener("click", () => {
  loginBox.classList.remove("active");
});

// Cargar Datos del Proyecto Activo
function renderProjectPhotos(project) {
  const photoGallery = document.getElementById("projectPhotoGallery");
  if (photoGallery) {
    photoGallery.innerHTML = project.photos.map(p => `
      <div class="photo-item" style="background: url('${p.src}');">
        <div>
          <span>${p.date}</span>
          <strong>${p.title}</strong>
        </div>
      </div>
    `).join("");
    
    // Abrir visor de fotos en modal
    document.querySelectorAll("#projectPhotoGallery .photo-item").forEach((item, index) => {
      item.style.cursor = "pointer";
      item.addEventListener("click", () => {
        const photo = project.photos[index];
        const preview = document.getElementById("filePreviewContent");
        preview.innerHTML = `
          <div style="text-align:center;">
            <img src="${photo.src}" style="max-width:100%; max-height:400px; border-radius:12px; margin-bottom:15px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">
            <p style="font-size:14px; color:#475569; line-height:1.6; margin:0 20px;">${photo.desc || ''}</p>
            <small style="color:var(--muted);">${photo.date}</small>
          </div>
        `;
        const fileModalTitle = document.getElementById("fileModalTitle");
        if (fileModalTitle) fileModalTitle.innerText = photo.title;
        const fileModal = document.getElementById("fileModal");
        if (fileModal) fileModal.classList.add("active");
      });
    });
  }

  const dashboardPhotoPanel = document.querySelector(".grid .panel:nth-child(2)");
  if (dashboardPhotoPanel && project.photos.length > 0) {
    const latestPhoto = project.photos[0];
    dashboardPhotoPanel.innerHTML = `
      <h3>Avance semanal</h3>
      <div class="photo" style="background: url('${latestPhoto.src}'); background-size: cover; background-position: center; cursor:pointer;" id="dashPhotoWidget"></div>
      <p style="margin-top:10px;"><strong>${latestPhoto.title}</strong></p>
      <p style="font-size:13px; color:var(--muted);">${latestPhoto.desc.substring(0, 80)}...</p>
      <small style="display:block; margin-top:8px;">${project.photos.length} fotos · 2 videos · 4 documentos</small>
    `;
    document.getElementById("dashPhotoWidget")?.addEventListener("click", () => {
      document.getElementById("menuAvance").click();
    });
  }
}

function loadActiveProject() {
  const activeProjId = localStorage.getItem("obra360_active_project_id") || "las-palmas";
  const projectsDb = JSON.parse(localStorage.getItem("obra360_projects_db")) || defaultProjects;
  const project = projectsDb[activeProjId];
  if (!project) return;

  // Cabecera e información del proyecto
  const logged = JSON.parse(localStorage.getItem("obra360_logged_user"));
  if (logged) {
    const avatarEl = document.querySelector(".client-card .avatar");
    const nameEl = document.querySelector(".client-card strong");
    const roleEl = document.querySelector(".client-card small");
    if (avatarEl) {
      avatarEl.innerText = logged.name.split(" ").map(n => n[0]).join("").substring(0, 2).toUpperCase();
    }
    if (nameEl) nameEl.innerText = logged.name;
    if (roleEl) roleEl.innerText = logged.role;
  }

  const topbarH1 = document.querySelector(".topbar h1");
  if (topbarH1) topbarH1.innerText = project.name;

  // Actualizar KPIs
  const kpisSection = document.querySelector(".kpis");
  if (kpisSection) {
    kpisSection.innerHTML = `
      <article>
        <small>Avance planificado</small>
        <strong>${project.progressPlan}%</strong>
        <div class="bar"><span style="width:${project.progressPlan}%"></span></div>
      </article>
      <article>
        <small>Avance real</small>
        <strong>${project.progressReal}%</strong>
        <div class="bar green"><span style="width:${project.progressReal}%"></span></div>
      </article>
      <article>
        <small>Desviación</small>
        <strong class="${project.progressReal - project.progressPlan >= 0 ? 'green' : 'danger'}">
          ${project.progressReal - project.progressPlan >= 0 ? '+' : ''}${project.progressReal - project.progressPlan}%
        </strong>
        <p>${project.progressReal - project.progressPlan >= 0 ? 'Sobre planificación' : 'Bajo planificación'}</p>
      </article>
      <article>
        <small>Estado del plazo</small>
        <strong class="${project.delayDays === 0 ? 'green' : 'warn'}">${project.statusTerm}</strong>
        <p>${project.delayDays === 0 ? 'Sin retrasos' : 'Retraso estimado: ' + project.delayDays + ' días'}</p>
      </article>
    `;
  }

  // Gantt Mini
  const ganttMini = document.querySelector(".gantt-mini");
  if (ganttMini) {
    ganttMini.innerHTML = project.gantt.map(task => {
      const cls = task.status === "Terminada" ? "done" :
                  task.status === "En ejecución" ? "run" :
                  task.status === "Atrasada" ? "late" : "pending";
      return `<div>${task.activity} <span class="${cls}" style="width: ${task.progress}%"></span></div>`;
    }).join("");
  }

  // Gantt Completa
  const ganttTableBody = document.querySelector("#gantt tbody");
  if (ganttTableBody) {
    ganttTableBody.innerHTML = project.gantt.map(task => {
      const tagCls = task.status === "Terminada" ? "ok" :
                     task.status === "En ejecución" ? "blue" :
                     task.status === "Atrasada" ? "red" : "gray";
      return `
        <tr>
          <td><strong>${task.activity}</strong></td>
          <td>${task.start}</td>
          <td>${task.end}</td>
          <td><span class="tag ${tagCls}">${task.status}</span></td>
          <td>${task.progress}%</td>
        </tr>
      `;
    }).join("");
  }

  // Estados de Pago
  const paymentsTableBody = document.querySelector("#pagos tbody");
  if (paymentsTableBody) {
    const formatPrice = (val) => new Intl.NumberFormat("es-CL", { style: "currency", currency: "CLP", maximumFractionDigits: 0 }).format(val);
    paymentsTableBody.innerHTML = project.payments.map(pay => {
      const tagCls = pay.status === "Pagado" ? "ok" :
                     pay.status === "En revisión" ? "yellow" : "red";
      return `
        <tr>
          <td><strong>${pay.id}</strong></td>
          <td>${pay.progress}</td>
          <td>${formatPrice(pay.amount)}</td>
          <td><span class="tag ${tagCls}">${pay.status}</span></td>
        </tr>
      `;
    }).join("");
  }

  // Total pagado en Donut de Pagos
  const totalPagado = project.payments.filter(p => p.status === "Pagado").reduce((sum, p) => sum + p.amount, 0);
  const totalProyecto = project.payments.reduce((sum, p) => sum + p.amount, 0);
  const pctPagado = totalProyecto > 0 ? Math.round((totalPagado / totalProyecto) * 100) : 0;
  
  const donutEl = document.querySelector(".panel .donut");
  if (donutEl) {
    donutEl.innerText = `${pctPagado}%`;
    donutEl.style.background = `conic-gradient(var(--blue) ${pctPagado}%, #e8edf5 0)`;
    const donutTexts = donutEl.parentElement.querySelectorAll("p");
    const formatPrice = (val) => new Intl.NumberFormat("es-CL", { style: "currency", currency: "CLP", maximumFractionDigits: 0 }).format(val);
    if (donutTexts[0]) donutTexts[0].innerHTML = `<strong>${formatPrice(totalPagado)}</strong> pagado`;
    if (donutTexts[1]) donutTexts[1].innerText = `Saldo restante: ${formatPrice(totalProyecto - totalPagado)}`;
  }

  // Documentos
  const docsContainer = document.querySelector("#documentos .docs");
  if (docsContainer) {
    docsContainer.innerHTML = project.documents.map(doc => `
      <div style="cursor:pointer;" class="document-item" data-file="${doc.file}">📁 ${doc.name}</div>
    `).join("");

    document.querySelectorAll(".document-item").forEach(item => {
      item.addEventListener("click", () => {
        const fileName = item.dataset.file;
        const preview = document.getElementById("filePreviewContent");
        if(fileName.endsWith(".pdf")){
          preview.innerHTML = `<iframe src="assets/docs/${fileName}" width="100%" height="500px" style="border:none;border-radius:12px;"></iframe>`;
        } else if(fileName.endsWith(".jpg")){
          preview.innerHTML = `<img src="assets/docs/${fileName}" style="width:100%; border-radius:12px;">`;
        }
        const fileModalTitle = document.getElementById("fileModalTitle");
        if (fileModalTitle) fileModalTitle.innerText = item.innerText.replace("📁 ", "");
        const fileModal = document.getElementById("fileModal");
        if (fileModal) fileModal.classList.add("active");
      });
    });
  }

  // Fotos de Avance y Timeline
  renderProjectPhotos(project);
  renderProjectTickets(project);

  const adminRoleBadge = document.querySelector("#adminSolicitudes .pill");
  if (adminRoleBadge) {
    adminRoleBadge.innerText = `Panel Constructora · ${project.name}`;
  }
}

// Carga Inicial del Dashboard si hay sesión activa
if (localStorage.getItem("obra360_logged_user")) {
  abrirDashboard();
  loadActiveProject();
}

// Módulo de Carga de Fotos
const uploadPhotoInput = document.getElementById("uploadPhotoInput");
const photoTitleInput = document.getElementById("photoTitleInput");
const submitPhotoBtn = document.getElementById("submitPhotoBtn");
const previewImg = document.getElementById("previewImg");
const uploadPhotoPreview = document.getElementById("uploadPhotoPreview");

let uploadedBase64 = "";

if (uploadPhotoInput) {
  uploadPhotoInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (evt) => {
      uploadedBase64 = evt.target.result;
      previewImg.src = uploadedBase64;
      uploadPhotoPreview.style.display = "block";
    };
    reader.readAsDataURL(file);
  });
}

if (submitPhotoBtn) {
  submitPhotoBtn.addEventListener("click", () => {
    if (!uploadedBase64) {
      alert("Seleccione una imagen primero.");
      return;
    }
    const title = photoTitleInput.value.trim() || "Avance Registrado";
    const actProjId = localStorage.getItem("obra360_active_project_id") || "las-palmas";
    const db = JSON.parse(localStorage.getItem("obra360_projects_db"));
    
    const newPhoto = {
      id: "img-" + Date.now(),
      src: uploadedBase64,
      title: title,
      date: new Date().toLocaleDateString("es-CL", { day: "numeric", month: "long", year: "numeric" }),
      desc: "Imagen registrada en terreno por el equipo técnico de la Constructora."
    };
    
    db[actProjId].photos.unshift(newPhoto);
    localStorage.setItem("obra360_projects_db", JSON.stringify(db));
    
    // Resetear cargador
    uploadedBase64 = "";
    photoTitleInput.value = "";
    uploadPhotoPreview.style.display = "none";
    
    loadActiveProject();
    alert("Foto de avance agregada correctamente.");
  });
}

// Módulo de Cámaras CCTV
let webcamStream = null;
const webcamVideo = document.getElementById("cctvWebcam");
const webcamFallback = document.getElementById("webcamFallback");
const btnStartWebcam = document.getElementById("btnStartWebcam");

async function startWebcam() {
  try {
    webcamStream = await navigator.mediaDevices.getUserMedia({ video: { width: 640, height: 480 }, audio: false });
    if (webcamVideo) {
      webcamVideo.srcObject = webcamStream;
      webcamVideo.style.display = "block";
    }
    if (webcamFallback) webcamFallback.style.display = "none";
  } catch (err) {
    console.warn("No se pudo iniciar la webcam física, usando feed simulado...", err);
    if (webcamFallback) {
      webcamFallback.innerHTML = `
        <div class="fallback-pulsing-icon" style="color:var(--orange);">📷</div>
        <p style="font-size:12px; margin: 5px 0;">Cámara en uso o sin permisos. Iniciando feed CCTV virtual...</p>
      `;
      setTimeout(() => {
        if (webcamVideo) {
          webcamVideo.src = "https://assets.mixkit.co/videos/preview/mixkit-timelapse-of-a-street-in-a-modern-city-41712-large.mp4";
          webcamVideo.loop = true;
          webcamVideo.play().catch(e => console.log(e));
          webcamVideo.style.display = "block";
        }
        if (webcamFallback) webcamFallback.style.display = "none";
      }, 1500);
    }
  }
}

if (btnStartWebcam) {
  btnStartWebcam.addEventListener("click", startWebcam);
}

// Iniciar cámara automáticamente al entrar a la sección de cámaras
document.getElementById("menuCamaras")?.addEventListener("click", () => {
  if (!webcamStream && (!webcamVideo || webcamVideo.style.display !== "block")) {
    startWebcam();
  }
});

// Capturar frame desde el video
function captureCctvFrame(videoId, cameraName) {
  const video = document.getElementById(videoId);
  const canvas = document.getElementById("cctvCaptureCanvas");
  if (!video || !canvas) return;
  
  if (video.readyState < 2) {
    alert("Cargando transmisión de la cámara. Por favor espere...");
    return;
  }

  const ctx = canvas.getContext("2d");
  canvas.width = video.videoWidth || 640;
  canvas.height = video.videoHeight || 480;
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
  
  const dataUrl = canvas.toDataURL("image/jpeg");
  const actProjId = localStorage.getItem("obra360_active_project_id") || "las-palmas";
  const db = JSON.parse(localStorage.getItem("obra360_projects_db"));
  
  const newPhoto = {
    id: "img-cctv-" + Date.now(),
    src: dataUrl,
    title: `CCTV: ${cameraName}`,
    date: new Date().toLocaleDateString("es-CL", { day: "numeric", month: "long", year: "numeric" }) + " - " + new Date().toLocaleTimeString("es-CL", { hour: '2-digit', minute: '2-digit' }),
    desc: `Foto instantánea tomada de forma digital a través de la red de cámaras CCTV (${cameraName}).`
  };
  
  db[actProjId].photos.unshift(newPhoto);
  localStorage.setItem("obra360_projects_db", JSON.stringify(db));
  
  loadActiveProject();
  
  const toast = document.getElementById("cctvToast");
  if (toast) {
    toast.classList.add("show");
    setTimeout(() => {
      toast.classList.remove("show");
    }, 4000);
  }
}

document.getElementById("btnSnapCam1")?.addEventListener("click", () => captureCctvFrame("cctvWebcam", "Acceso Principal"));
document.getElementById("btnSnapCam2")?.addEventListener("click", () => captureCctvFrame("cctvVideoCrane", "Grúa Torre 1"));
document.getElementById("btnSnapCam3")?.addEventListener("click", () => captureCctvFrame("cctvVideoTimelapse", "Timelapse Estructura"));
document.getElementById("btnSnapCam4")?.addEventListener("click", () => captureCctvFrame("cctvVideoWarehouse", "Acceso Bodegas"));

function toggleCctvPlay(videoId, btnId) {
  const video = document.getElementById(videoId);
  const btn = document.getElementById(btnId);
  if (!video || !btn) return;
  if (video.paused) {
    video.play();
    btn.innerText = "⏸ Pausar";
  } else {
    video.pause();
    btn.innerText = "▶ Reanudar";
  }
}
document.getElementById("btnToggleCam1")?.addEventListener("click", () => toggleCctvPlay("cctvWebcam", "btnToggleCam1"));
document.getElementById("btnToggleCam2")?.addEventListener("click", () => toggleCctvPlay("cctvVideoCrane", "btnToggleCam2"));
document.getElementById("btnToggleCam3")?.addEventListener("click", () => toggleCctvPlay("cctvVideoTimelapse", "btnToggleCam3"));
document.getElementById("btnToggleCam4")?.addEventListener("click", () => toggleCctvPlay("cctvVideoWarehouse", "btnToggleCam4"));

function makeFullscreen(videoId) {
  const video = document.getElementById(videoId);
  if (!video) return;
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.webkitRequestFullscreen) {
    video.webkitRequestFullscreen();
  }
}
document.getElementById("btnFullscreenCam1")?.addEventListener("click", () => makeFullscreen("cctvWebcam"));
document.getElementById("btnFullscreenCam2")?.addEventListener("click", () => makeFullscreen("cctvVideoCrane"));
document.getElementById("btnFullscreenCam3")?.addEventListener("click", () => makeFullscreen("cctvVideoTimelapse"));
document.getElementById("btnFullscreenCam4")?.addEventListener("click", () => makeFullscreen("cctvVideoWarehouse"));


// Módulo de Reportes PDF Dinámicos
function generatePdfReport() {
  const actProjId = localStorage.getItem("obra360_active_project_id") || "las-palmas";
  const projectsDb = JSON.parse(localStorage.getItem("obra360_projects_db")) || defaultProjects;
  const project = projectsDb[actProjId];
  if (!project) return;

  const logged = JSON.parse(localStorage.getItem("obra360_logged_user")) || { name: "Usuario Invitado", role: "Demo" };

  const reportContainer = document.createElement("div");
  reportContainer.style.padding = "35px";
  reportContainer.style.fontFamily = "Arial, sans-serif";
  reportContainer.style.color = "#0f172a";
  reportContainer.style.background = "#ffffff";
  
  reportContainer.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center; border-bottom: 2px solid #ff7a00; padding-bottom: 15px; margin-bottom: 25px;">
      <div style="font-size:28px; font-weight:900; color:#07192d;">OBRA<span style="color:#ff7a00;">360</span></div>
      <div style="text-align:right;">
        <h4 style="margin:0; color:#1e293b;">REPORTE SEMANAL DE AVANCE</h4>
        <small style="color:#64748b;">Fecha: ${new Date().toLocaleDateString("es-CL")} · ${new Date().toLocaleTimeString("es-CL", {hour:'2-digit', minute:'2-digit'})}</small>
      </div>
    </div>

    <div style="margin-bottom: 25px; background: #f8fafc; padding: 20px; border-radius: 12px; border: 1px solid #e2e8f0;">
      <h2 style="margin: 0 0 10px 0; color: #0b2745;">${project.name}</h2>
      <table style="width: 100%; font-size: 14px;">
        <tr>
          <td><strong>Cliente / Mandante:</strong> ${project.clientName}</td>
          <td><strong>Estado de Obra:</strong> ${project.status}</td>
        </tr>
        <tr>
          <td><strong>Inspector / Autor:</strong> ${logged.name} (${logged.role})</td>
          <td><strong>Estado Plazo:</strong> ${project.delayDays === 0 ? 'Al día' : 'En observación'}</td>
        </tr>
      </table>
    </div>

    <h3 style="border-left: 4px solid #ff7a00; padding-left: 10px; color: #07192d;">Indicadores de Progreso</h3>
    <table style="width:100%; border-collapse:collapse; margin-bottom: 25px; text-align:center;">
      <thead>
        <tr style="background:#07192d; color:#fff; font-size:12px;">
          <th style="padding:10px; border: 1px solid #cbd5e1;">Avance Planificado</th>
          <th style="padding:10px; border: 1px solid #cbd5e1;">Avance Real</th>
          <th style="padding:10px; border: 1px solid #cbd5e1;">Desviación</th>
          <th style="padding:10px; border: 1px solid #cbd5e1;">Hito Plazo</th>
        </tr>
      </thead>
      <tbody>
        <tr style="background:#f1f5f9; font-size:16px; font-weight:bold;">
          <td style="padding:15px; color:#145cc7; border: 1px solid #cbd5e1;">${project.progressPlan}%</td>
          <td style="padding:15px; color:#35b26f; border: 1px solid #cbd5e1;">${project.progressReal}%</td>
          <td style="padding:15px; color:${project.progressReal - project.progressPlan >= 0 ? '#35b26f' : '#f04d2f'}; border: 1px solid #cbd5e1;">
            ${project.progressReal - project.progressPlan >= 0 ? '+' : ''}${project.progressReal - project.progressPlan}%
          </td>
          <td style="padding:15px; color:${project.delayDays === 0 ? '#35b26f' : '#ff7a00'}; border: 1px solid #cbd5e1;">${project.statusTerm}</td>
        </tr>
      </tbody>
    </table>

    <h3 style="border-left: 4px solid #ff7a00; padding-left: 10px; color: #07192d;">Desglose de Tareas de Carta Gantt</h3>
    <table style="width:100%; border-collapse:collapse; margin-bottom: 25px; font-size: 13px;">
      <thead>
        <tr style="background:#e2e8f0; text-align:left;">
          <th style="padding:10px; border-bottom:2px solid #cbd5e1;">Actividad</th>
          <th style="padding:10px; border-bottom:2px solid #cbd5e1;">Inicio</th>
          <th style="padding:10px; border-bottom:2px solid #cbd5e1;">Fin</th>
          <th style="padding:10px; border-bottom:2px solid #cbd5e1;">Estado</th>
          <th style="padding:10px; border-bottom:2px solid #cbd5e1;">Completado</th>
        </tr>
      </thead>
      <tbody>
        ${project.gantt.map(task => `
          <tr>
            <td style="padding:10px; border-bottom:1px solid #e2e8f0; font-weight:bold;">${task.activity}</td>
            <td style="padding:10px; border-bottom:1px solid #e2e8f0;">${task.start}</td>
            <td style="padding:10px; border-bottom:1px solid #e2e8f0;">${task.end}</td>
            <td style="padding:10px; border-bottom:1px solid #e2e8f0;">${task.status}</td>
            <td style="padding:10px; border-bottom:1px solid #e2e8f0; font-weight:bold; color:#145cc7;">${task.progress}%</td>
          </tr>
        `).join("")}
      </tbody>
    </table>

    <div style="page-break-before: always;"></div>
    <h3 style="border-left: 4px solid #ff7a00; padding-left: 10px; color: #07192d;">Registro de Galería Fotográfica</h3>
    <div style="display:grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 25px;">
      ${project.photos.slice(0, 4).map(p => `
        <div style="border: 1px solid #e2e8f0; border-radius: 8px; padding: 12px; background:#f8fafc; text-align:center;">
          <img src="${p.src}" style="width:100%; height:160px; object-fit:cover; border-radius:6px; border:1px solid #cbd5e1;">
          <h4 style="margin:10px 0 4px 0; font-size:13px; color:#1e293b;">${p.title}</h4>
          <small style="color:#64748b; font-size:11px;">${p.date}</small>
        </div>
      `).join("")}
    </div>

    <div style="border-top:1px solid #cbd5e1; padding-top:15px; margin-top:40px; text-align:center; font-size:11px; color:#64748b;">
      Reporte automatizado emitido el ${new Date().toLocaleDateString("es-CL")} desde OBRA360. Todos los derechos reservados.
    </div>
  `;

  const opt = {
    margin:       15,
    filename:     `Reporte_Avance_${project.name.replace(/\s+/g, '_')}.pdf`,
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2, useCORS: true, logging: false },
    jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };

  html2pdf().set(opt).from(reportContainer).save();
}

document.getElementById("btnDownloadReportPdf")?.addEventListener("click", generatePdfReport);
document.getElementById("btnDownloadWeeklyReportPdf")?.addEventListener("click", generatePdfReport);


// Módulo de Visualización BIM (Three.js)
class BimVisualizer {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    if (!this.container) return;

    this.meshes = [];
    this.groups = {
      arq: new THREE.Group(),
      est: new THREE.Group(),
      san: new THREE.Group(),
      ele: new THREE.Group(),
      hvac: new THREE.Group()
    };
    
    this.init();
    this.createModel();
    this.animate();
    this.setupEvents();
    
    const overlay = document.getElementById("bimLoaderOverlay");
    if (overlay) {
      setTimeout(() => {
        overlay.style.display = "none";
      }, 1000);
    }
  }

  init() {
    this.width = this.container.clientWidth || 600;
    this.height = this.container.clientHeight || 450;

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x0f172a);
    this.scene.fog = new THREE.FogExp2(0x0f172a, 0.012);

    this.camera = new THREE.PerspectiveCamera(45, this.width / this.height, 0.1, 1000);
    this.camera.position.set(24, 18, 24);

    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(this.width, this.height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.container.appendChild(this.renderer.domElement);

    this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.05;
    this.controls.maxPolarAngle = Math.PI / 2 - 0.05;
    this.controls.minDistance = 6;
    this.controls.maxDistance = 120;

    // Luces
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.65);
    this.scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 0.75);
    dirLight1.position.set(20, 35, 15);
    dirLight1.castShadow = true;
    this.scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x0284c7, 0.35);
    dirLight2.position.set(-20, 15, -20);
    this.scene.add(dirLight2);

    // Rejilla de Suelo
    const gridHelper = new THREE.GridHelper(50, 50, 0x475569, 0x1e293b);
    gridHelper.position.y = -0.01;
    this.scene.add(gridHelper);

    // Agregar Grupos
    Object.values(this.groups).forEach(g => this.scene.add(g));
  }

  createModel() {
    Object.values(this.groups).forEach(g => {
      while(g.children.length > 0){ g.remove(g.children[0]); }
    });
    this.meshes = [];

    // Materiales del render
    const matConcrete = new THREE.MeshStandardMaterial({ color: 0xa1a1aa, roughness: 0.8 });
    const matGlass = new THREE.MeshPhysicalMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.28, roughness: 0.1, transmission: 0.7 });
    const matSanitaryHot = new THREE.MeshStandardMaterial({ color: 0xef4444, roughness: 0.4 });
    const matSanitaryCold = new THREE.MeshStandardMaterial({ color: 0x3b82f6, roughness: 0.4 });
    const matElectric = new THREE.MeshStandardMaterial({ color: 0x22c55e, roughness: 0.3 });
    const matHvac = new THREE.MeshStandardMaterial({ color: 0xf97316, roughness: 0.2, metalness: 0.7 });

    const spacing = 5.5;
    const stories = 3;
    const heightPerStory = 3.2;

    // 1. Estructura (Slabs & Columns)
    for (let s = 0; s <= stories; s++) {
      const slabGeo = new THREE.BoxGeometry(15, 0.25, 15);
      const slab = new THREE.Mesh(slabGeo, matConcrete);
      slab.position.set(0, s * heightPerStory, 0);
      slab.receiveShadow = true;
      slab.castShadow = true;
      
      slab.userData = {
        name: `Losa Hormigón Nivel ${s}`,
        class: "IfcSlab",
        material: "Hormigón H-30",
        phase: s === 0 ? "Completado" : s === stories ? "En encofrado" : "Fraguado listo",
        thickness: "25 cm",
        volume: "56.2 m³"
      };
      this.groups.est.add(slab);
      this.meshes.push(slab);
    }

    for (let s = 0; s < stories; s++) {
      for (let x = -1; x <= 1; x++) {
        for (let z = -1; z <= 1; z++) {
          const colGeo = new THREE.BoxGeometry(0.5, heightPerStory, 0.5);
          const col = new THREE.Mesh(colGeo, matConcrete);
          col.position.set(x * spacing, s * heightPerStory + heightPerStory / 2, z * spacing);
          col.castShadow = true;
          col.receiveShadow = true;
          
          col.userData = {
            name: `Columna Estructural C-${x+2}${z+2} (Nivel ${s+1})`,
            class: "IfcColumn",
            material: "Hormigón Armado H-35",
            dimensions: "50x50 cm",
            height: "3.20 m",
            phase: s < stories - 1 ? "Completado" : "Armando fierros"
          };
          this.groups.est.add(col);
          this.meshes.push(col);
        }
      }
    }

    // 2. Arquitectura (Muros Exteriores Translúcidos)
    const wallHeight = heightPerStory - 0.25;
    for (let s = 0; s < stories - 1; s++) {
      const wallGeo = new THREE.BoxGeometry(14.5, wallHeight, 0.15);
      
      // Norte
      const wallN = new THREE.Mesh(wallGeo, matGlass);
      wallN.position.set(0, s * heightPerStory + wallHeight/2 + 0.125, -7.2);
      wallN.userData = { name: `Muro Cortina Norte (Nivel ${s+1})`, class: "IfcWallStandardCase", material: "Vidrio Laminado + Aluminio", phase: "Instalado", area: "46.4 m²" };
      this.groups.arq.add(wallN);
      this.meshes.push(wallN);

      // Este
      const wallE = new THREE.Mesh(wallGeo, matGlass);
      wallE.rotation.y = Math.PI / 2;
      wallE.position.set(7.2, s * heightPerStory + wallHeight/2 + 0.125, 0);
      wallE.userData = { name: `Muro Cortina Este (Nivel ${s+1})`, class: "IfcWallStandardCase", material: "Vidrio Laminado + Aluminio", phase: "Instalado", area: "46.4 m²" };
      this.groups.arq.add(wallE);
      this.meshes.push(wallE);

      // Oeste
      const wallW = new THREE.Mesh(wallGeo, matGlass);
      wallW.rotation.y = Math.PI / 2;
      wallW.position.set(-7.2, s * heightPerStory + wallHeight/2 + 0.125, 0);
      wallW.userData = { name: `Muro Cortina Oeste (Nivel ${s+1})`, class: "IfcWallStandardCase", material: "Vidrio Laminado + Aluminio", phase: "Instalado", area: "46.4 m²" };
      this.groups.arq.add(wallW);
      this.meshes.push(wallW);
    }

    // 3. Sanitarias (Redes de Agua)
    const pipeGeo = new THREE.CylinderGeometry(0.1, 0.1, heightPerStory * 2.8, 8);
    const pipeACS = new THREE.Mesh(pipeGeo, matSanitaryHot);
    pipeACS.position.set(-3.5, heightPerStory * 1.4, -3.5);
    pipeACS.userData = { name: "Matriz Alimentación ACS (Agua Caliente)", class: "IfcPipeSegment", material: "Cobre Tipo L", diameter: '2"', phase: "Instalado" };
    this.groups.san.add(pipeACS);
    this.meshes.push(pipeACS);

    const pipeAFS = new THREE.Mesh(pipeGeo, matSanitaryCold);
    pipeAFS.position.set(-3.8, heightPerStory * 1.4, -3.5);
    pipeAFS.userData = { name: "Matriz Alimentación AFS (Agua Fría)", class: "IfcPipeSegment", material: "PPR Termofusión", diameter: '2.5"', phase: "Instalado" };
    this.groups.san.add(pipeAFS);
    this.meshes.push(pipeAFS);

    for (let s = 1; s <= 2; s++) {
      const hPipeGeo = new THREE.CylinderGeometry(0.05, 0.05, 7, 8);
      const hPipeACS = new THREE.Mesh(hPipeGeo, matSanitaryHot);
      hPipeACS.rotation.z = Math.PI / 2;
      hPipeACS.position.set(0, s * heightPerStory - 0.4, -3.5);
      hPipeACS.userData = { name: `Alimentación ACS Ramal Nivel ${s}`, class: "IfcPipeSegment", material: "Cobre 3/4\"", phase: "Prueba de presión aprobada" };
      this.groups.san.add(hPipeACS);
      this.meshes.push(hPipeACS);

      const hPipeAFS = new THREE.Mesh(hPipeGeo, matSanitaryCold);
      hPipeAFS.rotation.z = Math.PI / 2;
      hPipeAFS.position.set(0, s * heightPerStory - 0.5, -3.5);
      hPipeAFS.userData = { name: `Alimentación AFS Ramal Nivel ${s}`, class: "IfcPipeSegment", material: "PPR 25mm", phase: "Prueba de presión aprobada" };
      this.groups.san.add(hPipeAFS);
      this.meshes.push(hPipeAFS);
    }

    // 4. Eléctricas (Canalización y Bandejas)
    for (let s = 1; s <= 2; s++) {
      const trayGeo = new THREE.BoxGeometry(10, 0.06, 0.4);
      const tray = new THREE.Mesh(trayGeo, matElectric);
      tray.position.set(0, s * heightPerStory - 0.6, 2.5);
      tray.userData = { name: `Bandeja Distribución Eléctrica Nivel ${s}`, class: "IfcCableCarrierSegment", material: "Acero Galvanizado", dimensions: "150x50 mm", phase: "Cableado en curso" };
      this.groups.ele.add(tray);
      this.meshes.push(tray);

      const boxGeo = new THREE.BoxGeometry(0.35, 0.35, 0.15);
      const box = new THREE.Mesh(boxGeo, matElectric);
      box.position.set(-2, s * heightPerStory - 0.6, 2.75);
      box.userData = { name: `Tablero Derivación Nivel ${s}`, class: "IfcJunctionBox", material: "PVC Metálico", phase: "Montado" };
      this.groups.ele.add(box);
      this.meshes.push(box);
    }

    // 5. Climatización (HVAC Ducts)
    for (let s = 1; s <= 2; s++) {
      const ductGeo = new THREE.BoxGeometry(0.7, 0.5, 9);
      const duct = new THREE.Mesh(ductGeo, matHvac);
      duct.position.set(2.5, s * heightPerStory - 1.0, 0);
      duct.userData = { name: `Ducto Inyección Aire Clima Nivel ${s}`, class: "IfcDuctSegment", material: "Chapa Galvanizada 0.8mm", section: "50x35 cm", phase: "Instalado" };
      this.groups.hvac.add(duct);
      this.meshes.push(duct);
      
      const diffuserGeo = new THREE.BoxGeometry(0.8, 0.08, 0.8);
      const diffuser = new THREE.Mesh(diffuserGeo, matHvac);
      diffuser.position.set(2.5, s * heightPerStory - 1.25, 2.2);
      diffuser.userData = { name: `Difusor Reticulado Aire Nivel ${s}`, class: "IfcAirTerminal", material: "Aluminio esmaltado", dimensions: "40x40 cm", phase: "Instalado" };
      this.groups.hvac.add(diffuser);
      this.meshes.push(diffuser);
    }

    this.controls.target.set(0, heightPerStory * 1.5, 0);
  }

  animate() {
    requestAnimationFrame(() => this.animate());
    if (this.controls) this.controls.update();
    if (this.renderer) this.renderer.render(this.scene, this.camera);
  }

  setupEvents() {
    const toggles = {
      layerArq: this.groups.arq,
      layerEst: this.groups.est,
      layerSan: this.groups.san,
      layerEle: this.groups.ele,
      layerHvac: this.groups.hvac
    };

    Object.entries(toggles).forEach(([id, group]) => {
      document.getElementById(id)?.addEventListener("change", (e) => {
        group.visible = e.target.checked;
      });
    });

    window.addEventListener("resize", () => {
      if (!this.container) return;
      this.width = this.container.clientWidth;
      this.height = this.container.clientHeight;
      this.camera.aspect = this.width / this.height;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(this.width, this.height);
    });

    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    this.renderer.domElement.addEventListener("pointerdown", (e) => {
      const rect = this.renderer.domElement.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / this.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / this.height) * 2 + 1;

      raycaster.setFromCamera(mouse, this.camera);
      const visibleMeshes = this.meshes.filter(m => m.parent.visible);
      const intersects = raycaster.intersectObjects(visibleMeshes);

      const propContent = document.getElementById("bimPropertiesContent");
      if (intersects.length > 0) {
        const obj = intersects[0].object;
        const origColor = obj.material.color.getHex();
        obj.material.color.setHex(0xffaa00);
        setTimeout(() => {
          if (obj.material) obj.material.color.setHex(origColor);
        }, 300);

        const data = obj.userData;
        if (propContent) {
          propContent.innerHTML = `
            <div style="background:#f8fafc; border-left:4px solid var(--orange); padding:12px; border-radius:8px; font-size:13px; border: 1px solid #e2e8f0; border-left-width: 4px;">
              <h4 style="margin:0 0 6px 0; color:var(--navy); font-size:14px;">${data.name}</h4>
              <table style="width:100%; font-size:12px; border-collapse:collapse;">
                ${Object.entries(data).map(([key, val]) => {
                  if (key === "name") return '';
                  const label = key === "class" ? "Clase IFC" :
                                key === "material" ? "Material" :
                                key === "phase" ? "Estado de Obra" :
                                key.charAt(0).toUpperCase() + key.slice(1);
                  return `
                    <tr style="border-bottom:1px solid #f1f5f9;">
                      <td style="padding:4px 0; color:var(--muted); font-weight:bold;">${label}:</td>
                      <td style="padding:4px 0; text-align:right; color:var(--text);">${val}</td>
                    </tr>
                  `;
                }).join("")}
              </table>
            </div>
          `;
        }
      } else {
        if (propContent) {
          propContent.innerHTML = `<p style="color:var(--muted); font-style:italic;">Haga clic en cualquier objeto en el visor 3D para inspeccionar sus especificaciones técnicas de obra.</p>`;
        }
      }
    });

    const ifcFileInput = document.getElementById("ifcFileInput");
    const ifcUploadZone = document.getElementById("ifcUploadZone");

    if (ifcFileInput) {
      ifcFileInput.addEventListener("change", (e) => this.handleIfcFile(e.target.files[0]));
    }

    if (ifcUploadZone) {
      ifcUploadZone.addEventListener("dragover", (e) => {
        e.preventDefault();
        ifcUploadZone.style.borderColor = "var(--orange)";
      });
      ifcUploadZone.addEventListener("dragleave", () => {
        ifcUploadZone.style.borderColor = "#cbd5e1";
      });
      ifcUploadZone.addEventListener("drop", (e) => {
        e.preventDefault();
        ifcUploadZone.style.borderColor = "#cbd5e1";
        if (e.dataTransfer.files.length > 0) {
          this.handleIfcFile(e.dataTransfer.files[0]);
        }
      });
    }
  }

  handleIfcFile(file) {
    if (!file) return;
    if (!file.name.endsWith(".ifc")) {
      alert("Por favor cargue un archivo con extensión .ifc válido.");
      return;
    }

    const overlay = document.getElementById("bimLoaderOverlay");
    if (overlay) {
      overlay.querySelector("p").innerText = `Procesando archivo IFC: ${file.name}...`;
      overlay.style.display = "flex";
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target.result;
      const lines = text.split("\n");
      let wallsCount = 0;
      let columnsCount = 0;
      let slabCount = 0;
      let pipeCount = 0;

      lines.forEach(l => {
        if (l.includes("IFCWALL")) wallsCount++;
        if (l.includes("IFCCOLUMN")) columnsCount++;
        if (l.includes("IFCSLAB")) slabCount++;
        if (l.includes("IFCPIPE")) pipeCount++;
      });

      setTimeout(() => {
        this.createUploadedIfcModel(file.name, wallsCount, columnsCount, slabCount, pipeCount);
        if (overlay) overlay.style.display = "none";
        alert(`✓ Archivo IFC cargado exitosamente.\nSe han detectado e importado los siguientes elementos en 3D:\n- Losas: ${slabCount || 2}\n- Columnas: ${columnsCount || 8}\n- Muros: ${wallsCount || 10}\n- Cañerías/Redes: ${pipeCount || 6}`);
      }, 1500);
    };
    reader.readAsText(file);
  }

  createUploadedIfcModel(filename, walls, columns, slabs, pipes) {
    Object.values(this.groups).forEach(g => {
      while(g.children.length > 0){ g.remove(g.children[0]); }
    });
    this.meshes = [];

    const matEst = new THREE.MeshStandardMaterial({ color: 0xd4d4d8, roughness: 0.85 });
    const matWall = new THREE.MeshPhysicalMaterial({ color: 0xf3f4f6, transparent: true, opacity: 0.35, roughness: 0.1 });
    const matPipe = new THREE.MeshStandardMaterial({ color: 0x3b82f6 });

    const numSlabs = Math.max(2, Math.min(slabs, 4));
    const numCols = Math.max(6, Math.min(columns, 18));
    const numWalls = Math.max(4, Math.min(walls, 16));

    for (let s = 0; s < numSlabs; s++) {
      const g = new THREE.BoxGeometry(11, 0.2, 11);
      const m = new THREE.Mesh(g, matEst);
      m.position.set(0, s * 3.0, 0);
      m.userData = { name: `Losa IFC Importada - Piso ${s+1}`, class: "IfcSlab", material: "Hormigón Armado", phase: "Importado", file: filename };
      this.groups.est.add(m);
      this.meshes.push(m);
    }

    for (let c = 0; c < numCols; c++) {
      const angle = (c / (numCols / 2)) * Math.PI;
      const x = Math.cos(angle) * 4.0;
      const z = Math.sin(angle) * 4.0;
      const g = new THREE.CylinderGeometry(0.25, 0.25, 3.0, 8);
      
      const level = Math.floor(c / (numCols / (numSlabs - 1 || 1)));
      const m = new THREE.Mesh(g, matEst);
      m.position.set(x, level * 3.0 + 1.5, z);
      m.userData = { name: `Columna IFC [${filename}] C-${c+1}`, class: "IfcColumn", material: "Hormigón C-30", phase: "Importado" };
      this.groups.est.add(m);
      this.meshes.push(m);
    }

    for (let w = 0; w < numWalls; w++) {
      const angle = (w / (numWalls / 2)) * Math.PI;
      const x = Math.cos(angle) * 5.0;
      const z = Math.sin(angle) * 5.0;
      const g = new THREE.BoxGeometry(2.2, 2.8, 0.12);
      
      const level = Math.floor(w / (numWalls / (numSlabs - 1 || 1)));
      const m = new THREE.Mesh(g, matWall);
      m.position.set(x, level * 3.0 + 1.4, z);
      m.rotation.y = -angle + Math.PI/2;
      m.userData = { name: `Muro Perimetral IFC W-${w+1}`, class: "IfcWallStandardCase", material: "Placa Yeso-Cartón / Vidrio", phase: "Importado" };
      this.groups.arq.add(m);
      this.meshes.push(m);
    }

    this.controls.target.set(0, (numSlabs * 3.0) / 2, 0);
  }
}

// Inicializar Visor BIM al abrir la pestaña
let bimViewerInstance = null;
document.getElementById("menuBim")?.addEventListener("click", () => {
  if (!bimViewerInstance) {
    setTimeout(() => {
      bimViewerInstance = new BimVisualizer("bimCanvasContainer");
    }, 250);
  }
});

// ==========================================
// MÓDULO DE GESTIÓN DE SOLICITUDES (TICKETS)
// ==========================================

function renderProjectTickets(project) {
  const contenedorSolicitudes = document.querySelector(".requests-grid") || document.getElementById("requestGrid");
  const kanbanPendientes = document.getElementById("kanbanPendientes");
  const kanbanCotizadas = document.getElementById("kanbanCotizadas");
  const kanbanRespuestasCliente = document.getElementById("kanbanRespuestasCliente");

  if (contenedorSolicitudes) contenedorSolicitudes.innerHTML = "";
  
  if (kanbanPendientes) {
    const header = kanbanPendientes.querySelector("h3");
    kanbanPendientes.innerHTML = "";
    if (header) kanbanPendientes.appendChild(header);
  }
  if (kanbanCotizadas) {
    const header = kanbanCotizadas.querySelector("h3");
    kanbanCotizadas.innerHTML = "";
    if (header) kanbanCotizadas.appendChild(header);
  }
  if (kanbanRespuestasCliente) {
    const header = kanbanRespuestasCliente.querySelector("h3");
    kanbanRespuestasCliente.innerHTML = "";
    if (header) kanbanRespuestasCliente.appendChild(header);
  }

  project.tickets.forEach(solicitud => {
    // 1. Tarjeta Vista Cliente
    if (contenedorSolicitudes) {
      const card = document.createElement("article");
      card.className = "request-card";
      card.style.cursor = "pointer";
      
      const tagCls = solicitud.estado === "Cotizada" ? "green" :
                     solicitud.estado === "En análisis" ? "yellow" :
                     solicitud.estado === "Aprobada por cliente" || solicitud.estado === "Aprobada" ? "ok" :
                     solicitud.estado === "Pendiente aprobación" ? "red" : "gray";
                     
      card.innerHTML = `
        <span class="tag ${tagCls}">${solicitud.estado}</span>
        <h3>${solicitud.titulo}</h3>
        <p>${solicitud.descripcion}</p>
        <small>${solicitud.codigo} · ${solicitud.fecha || 'Ingresada hoy'}</small>
        ${solicitud.estado === "Cotizada" ? `
          <div style="margin-top: 12px; padding-top: 12px; border-top: 1px solid #f1f5f9; font-size: 13px;">
            <p style="margin: 4px 0;"><strong>Monto:</strong> ${solicitud.monto || "$1.250.000"}</p>
            <p style="margin: 4px 0;"><strong>Plazo:</strong> ${solicitud.plazo || "+3 días"}</p>
            <div class="approval-actions" style="margin-top: 10px; display:flex; gap: 8px;">
              <button class="primary btn-aprobar-cliente" data-codigo="${solicitud.codigo}" style="padding: 6px 12px; font-size: 12px; font-family: inherit;">Aprobar</button>
              <button class="secondary btn-rechazar-cliente" data-codigo="${solicitud.codigo}" style="padding: 6px 12px; font-size: 12px; font-family: inherit; margin-bottom:0;">Rechazar</button>
            </div>
          </div>
        ` : ""}
      `;
      
      card.addEventListener("click", (e) => {
        if (e.target.tagName === "BUTTON") return;
        loadTicketDetails(solicitud);
        document.querySelectorAll(".view").forEach(v => {
          v.style.display = "none";
        });
        document.getElementById("detalleSolicitud").style.display = "block";
        window.scrollTo({ top:0, behavior:"smooth" });
      });

      contenedorSolicitudes.appendChild(card);
    }

    // 2. Tarjeta Kanban Admin
    const kanbanCard = document.createElement("article");
    kanbanCard.className = "kanban-card";
    
    if (solicitud.estado === "Aprobada por cliente" || solicitud.estado === "Rechazada por cliente" || solicitud.estado === "Aprobada") {
      const tagCls = (solicitud.estado === "Aprobada por cliente" || solicitud.estado === "Aprobada") ? "green" : "red";
      kanbanCard.innerHTML = `
        <span class="tag ${tagCls}">${solicitud.estado}</span>
        <h4>${solicitud.codigo} · ${solicitud.titulo}</h4>
        <p>${solicitud.descripcion}</p>
        <small>Monto: ${solicitud.monto || "-"} · Plazo: ${solicitud.plazo || "-"}</small>
      `;
      if (kanbanRespuestasCliente) kanbanRespuestasCliente.appendChild(kanbanCard);
    } else if (solicitud.estado === "Cotizada") {
      kanbanCard.innerHTML = `
        <span class="tag green">Cotización enviada</span>
        <h4>${solicitud.codigo} · ${solicitud.titulo}</h4>
        <p>${solicitud.descripcion}</p>
        <small>Monto: ${solicitud.monto || "$1.250.000"} · Plazo: ${solicitud.plazo || "+3 días"}</small>
      `;
      if (kanbanCotizadas) kanbanCotizadas.appendChild(kanbanCard);
    } else {
      kanbanCard.innerHTML = `
        <span class="tag yellow">${solicitud.estado}</span>
        <h4>${solicitud.codigo} · ${solicitud.titulo}</h4>
        <p>${solicitud.descripcion}</p>
        <small>Prioridad: ${solicitud.prioridad || "Normal"} · ${solicitud.fecha || 'Reciente'}</small>
        <div style="margin-top: 10px;">
          <button class="secondary btn-cotizar" data-codigo="${solicitud.codigo}" style="padding: 6px 12px; font-size: 11px; margin-bottom: 0; box-shadow: none; font-family: inherit;">
            Cotizar
          </button>
        </div>
      `;
      if (kanbanPendientes) kanbanPendientes.appendChild(kanbanCard);
    }
  });

  // Eventos reactivos para botones dinámicos
  document.querySelectorAll(".btn-aprobar-cliente").forEach(btn => {
    btn.addEventListener("click", () => {
      updateTicketStatus(btn.dataset.codigo, "Aprobada");
    });
  });

  document.querySelectorAll(".btn-rechazar-cliente").forEach(btn => {
    btn.addEventListener("click", () => {
      updateTicketStatus(btn.dataset.codigo, "Rechazada por cliente");
    });
  });

  document.querySelectorAll(".btn-cotizar").forEach(btn => {
    btn.addEventListener("click", () => {
      localStorage.setItem("obra360_solicitud_cotizando", btn.dataset.codigo);
      document.getElementById("modalCotizar").classList.add("active");
    });
  });
}

function loadTicketDetails(solicitud) {
  const detailHeader = document.querySelector("#detalleSolicitud h2");
  const detailTitle = document.querySelector("#detalleSolicitud .detail-header h3");
  const detailDesc = document.querySelector("#detalleSolicitud .detail-header p");
  const detailStatus = document.querySelector("#detalleSolicitud #estadoSolicitud");
  const detailCost = document.querySelector("#detalleSolicitud .impact-panel .impact-card:nth-child(1) h3");
  const detailPlazo = document.querySelector("#detalleSolicitud .impact-panel .impact-card:nth-child(2) h3");
  
  if (detailHeader) detailHeader.innerText = `Solicitud ${solicitud.codigo}`;
  if (detailTitle) detailTitle.innerText = solicitud.titulo;
  if (detailDesc) detailDesc.innerText = solicitud.descripcion;
  
  if (detailStatus) {
    detailStatus.innerText = solicitud.estado;
    const tagCls = solicitud.estado === "Cotizada" ? "green" :
                   solicitud.estado === "En análisis" ? "yellow" :
                   solicitud.estado === "Aprobada por cliente" || solicitud.estado === "Aprobada" ? "ok" :
                   solicitud.estado === "Pendiente aprobación" ? "red" : "gray";
    detailStatus.className = `tag ${tagCls}`;
  }

  const formatPrice = (val) => new Intl.NumberFormat("es-CL", { style: "currency", currency: "CLP", maximumFractionDigits: 0 }).format(val);
  if (detailCost) detailCost.innerText = solicitud.cost ? formatPrice(solicitud.cost) : "$0";
  if (detailPlazo) detailPlazo.innerText = solicitud.days ? `+${solicitud.days} días` : "0 días";

  const approvalPanel = document.getElementById("detalleCotizacion");
  const user = JSON.parse(localStorage.getItem("obra360_logged_user"));
  
  if (approvalPanel) {
    if (solicitud.estado === "Cotizada" && user && user.role === "Cliente") {
      approvalPanel.style.display = "block";
      const aprobarBtn = document.getElementById("aprobarSolicitud");
      if (aprobarBtn) {
        aprobarBtn.disabled = false;
        aprobarBtn.innerText = "Aprobar solicitud";
        
        const newAprobarBtn = aprobarBtn.cloneNode(true);
        aprobarBtn.parentNode.replaceChild(newAprobarBtn, aprobarBtn);
        
        newAprobarBtn.addEventListener("click", () => {
          updateTicketStatus(solicitud.codigo, "Aprobada");
          const approvalMsg = document.getElementById("approvalMessage");
          if (approvalMsg) approvalMsg.style.display = "block";
          newAprobarBtn.innerText = "Solicitud aprobada";
          newAprobarBtn.disabled = true;
          setTimeout(() => {
            if (approvalMsg) approvalMsg.style.display = "none";
          }, 2000);
        });
      }
    } else {
      approvalPanel.style.display = "none";
    }
  }
}

function updateTicketStatus(codigo, newStatus, extraData = {}) {
  const actProjId = localStorage.getItem("obra360_active_project_id") || "las-palmas";
  const db = JSON.parse(localStorage.getItem("obra360_projects_db"));
  const project = db[actProjId];
  if (!project) return;
  
  const ticket = project.tickets.find(t => t.codigo === codigo);
  if (ticket) {
    ticket.estado = newStatus;
    Object.assign(ticket, extraData);
    localStorage.setItem("obra360_projects_db", JSON.stringify(db));
    localStorage.setItem("obra360_solicitudes", JSON.stringify(project.tickets));
    loadActiveProject();
  }
}

// Nueva solicitud
const abrirNuevaSolicitud = document.getElementById("abrirNuevaSolicitud");
const modalNuevaSolicitud = document.getElementById("modalNuevaSolicitud");
const cerrarNuevaSolicitud = document.getElementById("cerrarNuevaSolicitud");
const guardarNuevaSolicitud = document.getElementById("guardarNuevaSolicitud");

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
    const titulo = document.getElementById("tituloSolicitud").value.trim() || "Nueva solicitud cliente";
    const descripcion = document.getElementById("descripcionSolicitud").value.trim() || "Solicitud ingresada por cliente.";
    const tipo = document.getElementById("tipoSolicitud")?.value || "Sin categoría";
    const prioridad = document.getElementById("prioridadSolicitud")?.value || "Normal";
    
    const actProjId = localStorage.getItem("obra360_active_project_id") || "las-palmas";
    const db = JSON.parse(localStorage.getItem("obra360_projects_db"));
    
    let ultimoNumeroSolicitud = parseInt(localStorage.getItem("obra360_ultimo_numero_solicitud")) || 25;
    ultimoNumeroSolicitud++;
    localStorage.setItem("obra360_ultimo_numero_solicitud", ultimoNumeroSolicitud);

    const numeroSolicitud = "SOL-" + String(ultimoNumeroSolicitud).padStart(3, "0");
    
    const nuevaSolicitud = {
      codigo: numeroSolicitud,
      tipo: tipo,
      prioridad: prioridad,
      titulo: titulo,
      descripcion: descripcion,
      estado: "En análisis",
      fecha: new Date().toLocaleDateString("es-CL", { day: "numeric", month: "long" }),
      cost: 0,
      days: 0
    };

    db[actProjId].tickets.unshift(nuevaSolicitud);
    localStorage.setItem("obra360_projects_db", JSON.stringify(db));
    localStorage.setItem("obra360_solicitudes", JSON.stringify(db[actProjId].tickets));

    modalNuevaSolicitud.classList.remove("active");
    document.getElementById("tituloSolicitud").value = "";
    document.getElementById("descripcionSolicitud").value = "";

    const mensajeNuevaSolicitud = document.getElementById("mensajeNuevaSolicitud");
    if(mensajeNuevaSolicitud){
      mensajeNuevaSolicitud.style.display = "block";
      setTimeout(() => {
        mensajeNuevaSolicitud.style.display = "none";
      }, 4000);
    }

    loadActiveProject();
  });
}

document.getElementById("volverSolicitudes")?.addEventListener("click", () => {
  document.querySelectorAll(".view").forEach(v => {
    v.style.display = "none";
  });
  document.getElementById("solicitudescambios").style.display = "block";
  window.scrollTo({ top:0, behavior:"smooth" });
});
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

        const monto = document.getElementById("montoCotizacion").value || "$1.250.000";
        const plazo = document.getElementById("plazoCotizacion").value || "+3 días";
        const comentario = document.getElementById("comentarioCotizacion").value || "Cotización emitida por constructora.";

        const solicitudesGuardadas = JSON.parse(localStorage.getItem("obra360_solicitudes")) || [];

        if(solicitudesGuardadas.length > 0){

            const codigoCotizando = localStorage.getItem("obra360_solicitud_cotizando");

const solicitudCotizada = solicitudesGuardadas.find(solicitud => solicitud.codigo === codigoCotizando);

if(solicitudCotizada){
    solicitudCotizada.estado = "Cotizada";
    solicitudCotizada.monto = monto;
    solicitudCotizada.plazo = plazo;
    solicitudCotizada.comentarioCotizacion = comentario;
            localStorage.setItem("obra360_solicitudes", JSON.stringify(solicitudesGuardadas));
        }
}
        modalCotizar.classList.remove("active");

        location.reload();

    });

}
document.querySelectorAll(".btn-aprobar-cliente").forEach(btn => {
    btn.addEventListener("click", () => {
        const codigo = btn.dataset.codigo;
        const solicitudesGuardadas = JSON.parse(localStorage.getItem("obra360_solicitudes")) || [];
        const solicitud = solicitudesGuardadas.find(item => item.codigo === codigo);

        if(solicitud){
            solicitud.estado = "Aprobada por cliente";
            localStorage.setItem("obra360_solicitudes", JSON.stringify(solicitudesGuardadas));
            location.reload();
        }
    });
});

document.querySelectorAll(".btn-rechazar-cliente").forEach(btn => {
    btn.addEventListener("click", () => {
        const codigo = btn.dataset.codigo;
        const solicitudesGuardadas = JSON.parse(localStorage.getItem("obra360_solicitudes")) || [];
        const solicitud = solicitudesGuardadas.find(item => item.codigo === codigo);

        if(solicitud){
            solicitud.estado = "Rechazada por cliente";
            localStorage.setItem("obra360_solicitudes", JSON.stringify(solicitudesGuardadas));
            location.reload();
        }
    });
});

// ==========================================
// REGISTRO Y GESTIÓN DE PROVEEDORES (HRH)
// ==========================================

const baseContractors = [
  {
    id: "prov-001",
    name: "Constructora Andes Ltda.",
    rut: "76.452.180-K",
    specialty: "Estructuras",
    rating: 94,
    contact: "Andrés Silva",
    email: "asilva@constructoraandes.cl",
    phone: "+56 9 8765 4321",
    financialScore: 92,
    technicalScore: 95,
    safetyIndex: 96,
    history: [
      { project: "Edificio Las Rosas", year: "2024", status: "Completado", score: 95, comment: "Excelente calidad de hormigonado y cumplimiento de plazos." },
      { project: "Condominio El Roble", year: "2025", status: "Completado", score: 93, comment: "Cumplió con todas las normativas de seguridad impuestas." }
    ]
  },
  {
    id: "prov-002",
    name: "Instalaciones Voltio S.A.",
    rut: "77.108.920-5",
    specialty: "Electricidad",
    rating: 88,
    contact: "Mauricio Lagos",
    email: "mlagos@voltio.cl",
    phone: "+56 9 7654 3210",
    financialScore: 85,
    technicalScore: 90,
    safetyIndex: 89,
    history: [
      { project: "Torre Centenario", year: "2024", status: "Completado", score: 88, comment: "Buen desempeño técnico. Detalles menores en entrega de planos as-built." }
    ]
  },
  {
    id: "prov-003",
    name: "TermoClima Profesional",
    rut: "79.231.440-2",
    specialty: "Climatización",
    rating: 91,
    contact: "Carlos Mery",
    email: "cmery@termoclima.cl",
    phone: "+56 9 6543 2109",
    financialScore: 88,
    technicalScore: 92,
    safetyIndex: 93,
    history: [
      { project: "Clínica San José", year: "2025", status: "Completado", score: 91, comment: "Buen servicio post-venta y cumplimiento de especificaciones técnicas." }
    ]
  },
  {
    id: "prov-004",
    name: "Flux Sistemas Sanitarios",
    rut: "81.049.200-3",
    specialty: "Sanitarias",
    rating: 85,
    contact: "Patricia Soto",
    email: "psoto@fluxsanitarios.cl",
    phone: "+56 9 5432 1098",
    financialScore: 82,
    technicalScore: 86,
    safetyIndex: 87,
    history: [
      { project: "Mall Plaza Norte", year: "2024", status: "Completado", score: 85, comment: "Instalaciones sanitarias correctas. Leve demora en entrega de pruebas de presión." }
    ]
  },
  {
    id: "prov-005",
    name: "Pinturas y Revestimientos Prisma",
    rut: "86.115.300-8",
    specialty: "Terminaciones",
    rating: 89,
    contact: "Jorge Valdés",
    email: "jvaldes@pinturasprisma.cl",
    phone: "+56 9 4321 0987",
    financialScore: 86,
    technicalScore: 90,
    safetyIndex: 91,
    history: [
      { project: "Hotel Costanera", year: "2025", status: "Completado", score: 89, comment: "Excelente calidad de terminación. Trabajo limpio y ordenado." }
    ]
  }
];

if (!localStorage.getItem("obra360_proveedores")) {
  localStorage.setItem("obra360_proveedores", JSON.stringify(baseContractors));
}

const baseBidding = {
  climatizacion: {
    packageTitle: "Instalaciones de Climatización - Las Palmas",
    bidders: [
      { name: "TermoClima Profesional", price: 34500000, time: 25, tech: 92, fin: 88, comp: 91, overall: 90.6, recommended: true },
      { name: "AireFresco Ingeniería", price: 31200000, time: 30, tech: 84, fin: 80, comp: 82, overall: 82.4, recommended: false },
      { name: "ClimaConfort y Sistemas", price: 36800000, time: 22, tech: 95, fin: 90, comp: 88, overall: 92.1, recommended: false }
    ],
    recommendation: "Tras analizar las ofertas económicas y técnicas, HRH Consulting recomienda adjudicar el contrato de climatización a **TermoClima Profesional**. Aunque ClimaConfort presenta un puntaje técnico levemente superior (+3%), su oferta es 6.7% más costosa ($36.8M vs $34.5M). Por su parte, AireFresco ofrece el menor precio, pero su puntaje técnico y de cumplimiento histórico no cumplen con los estándares mínimos exigidos para este proyecto. TermoClima ofrece la relación costo-calidad más balanceada."
  },
  estructura: {
    packageTitle: "Obra Gruesa y Estructuras - Las Palmas",
    bidders: [
      { name: "Constructora Andes Ltda.", price: 145000000, time: 60, tech: 95, fin: 92, comp: 94, overall: 93.9, recommended: true },
      { name: "Cimientos y Hormigones S.A.", price: 138000000, time: 65, tech: 88, fin: 85, comp: 88, overall: 87.1, recommended: false },
      { name: "Ingeniería del Bío Bío", price: 152000000, time: 55, tech: 92, fin: 90, comp: 89, overall: 90.8, recommended: false }
    ],
    recommendation: "Para la partida de Estructuras y Obra Gruesa, HRH Consulting aconseja adjudicar a **Constructora Andes Ltda.** por un monto de $145.000.000. Si bien Cimientos y Hormigones presentó una oferta $7M menor, su plazo es mayor y sus antecedentes de seguridad e índices financieros reflejan un mayor riesgo operativo. Constructora Andes posee amplia experiencia certificada en edificación en altura y un índice de accidentabilidad cercano a cero."
  }
};

if (!localStorage.getItem("obra360_licitaciones")) {
  localStorage.setItem("obra360_licitaciones", JSON.stringify(baseBidding));
}

// Sub-pestañas
const subTabButtons = document.querySelectorAll('#proveedores .tab-btn');
const subTabContents = document.querySelectorAll('#proveedores .tab-content');

subTabButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    subTabButtons.forEach(b => b.classList.remove('active'));
    subTabContents.forEach(c => {
      c.style.display = "none";
      c.classList.remove('active');
    });
    
    btn.classList.add('active');
    const targetTabId = 'tab-' + btn.dataset.tab;
    const targetTab = document.getElementById(targetTabId);
    if(targetTab) {
      targetTab.style.display = "block";
      targetTab.classList.add('active');
    }
  });
});

// Renderizar tabla de proveedores
function renderProveedores() {
  const tableBody = document.getElementById("proveedoresTableBody");
  if (!tableBody) return;
  
  const providers = JSON.parse(localStorage.getItem("obra360_proveedores")) || baseContractors;
  const searchQuery = document.getElementById("searchProveedor")?.value.toLowerCase() || "";
  const specialtyFilter = document.getElementById("filterEspecialidad")?.value || "";
  
  tableBody.innerHTML = "";
  
  const filtered = providers.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchQuery) || p.rut.includes(searchQuery);
    const matchesSpecialty = specialtyFilter === "" || p.specialty === specialtyFilter;
    return matchesSearch && matchesSpecialty;
  });
  
  if (filtered.length === 0) {
    tableBody.innerHTML = `<tr><td colspan="5" style="text-align:center; color:var(--muted); padding:20px;">No se encontraron proveedores.</td></tr>`;
    return;
  }
  
  filtered.forEach(p => {
    const tr = document.createElement("tr");
    tr.style.cursor = "pointer";
    tr.addEventListener("click", () => showProveedorDetail(p.id));
    
    const displaySpecialty = p.specialty === "Estructuras" ? "Obra Gruesa" :
                             p.specialty === "Electricidad" ? "Inst. Eléctricas" :
                             p.specialty === "Climatización" ? "Climatización" :
                             p.specialty === "Sanitarias" ? "Inst. Sanitarias" : "Terminaciones";
                             
    tr.innerHTML = `
      <td><strong>${p.name}</strong><br><small style="color:var(--muted);">${p.rut}</small></td>
      <td>${displaySpecialty}</td>
      <td><strong>${p.financialScore}%</strong> / <strong>${p.technicalScore}%</strong></td>
      <td>
        <span class="tag ${p.rating >= 90 ? 'ok' : p.rating >= 80 ? 'blue' : 'yellow'}">${p.rating} pts</span>
      </td>
      <td><span class="tag ok">Aprobado</span></td>
    `;
    tableBody.appendChild(tr);
  });
}

// Mostrar detalles de proveedor
function showProveedorDetail(id) {
  const placeholder = document.getElementById("detailPlaceholder");
  const content = document.getElementById("detailCardContent");
  
  if (!content || !placeholder) return;
  
  const providers = JSON.parse(localStorage.getItem("obra360_proveedores")) || baseContractors;
  const provider = providers.find(p => p.id === id);
  if (!provider) return;
  
  placeholder.style.display = "none";
  content.style.display = "block";
  
  const displaySpecialty = provider.specialty === "Estructuras" ? "Obra Gruesa y Estructuras" :
                           provider.specialty === "Electricidad" ? "Instalaciones Eléctricas" :
                           provider.specialty === "Climatización" ? "Instalaciones de Climatización" :
                           provider.specialty === "Sanitarias" ? "Instalaciones Sanitarias" : "Terminaciones y Pinturas";
  
  let historyHtml = "";
  if (provider.history && provider.history.length > 0) {
    provider.history.forEach(h => {
      historyHtml += `
        <div class="compliance-card" style="margin-bottom:8px;">
          <div class="compliance-card-header">
            <span>${h.project} (${h.year})</span>
            <span class="tag ok">${h.score} pts</span>
          </div>
          <div class="compliance-card-body">
            <p style="margin:4px 0 0 0;">${h.comment}</p>
          </div>
        </div>
      `;
    });
  } else {
    historyHtml = `<p style="color:var(--muted); font-size:13px; text-align:center;">Sin evaluaciones registradas.</p>`;
  }
  
  content.innerHTML = `
    <div class="detail-header-card">
      <span class="tag blue">Ficha de Evaluación</span>
      <h3 style="margin:6px 0;">${provider.name}</h3>
      <div class="detail-badge-row">
        <small style="color:var(--muted);">${provider.rut}</small>
        <span class="tag ok">Cumplimiento: ${provider.rating}%</span>
      </div>
    </div>
    
    <div class="detail-section-title">Información de Contacto</div>
    <div class="info-grid" style="margin-bottom:12px;">
      <div class="info-item"><small>Contacto</small><span>${provider.contact}</span></div>
      <div class="info-item"><small>Teléfono</small><span>${provider.phone}</span></div>
      <div class="info-item" style="grid-column: span 2;"><small>E-mail</small><span>${provider.email}</span></div>
      <div class="info-item" style="grid-column: span 2;"><small>Especialidad</small><span>${displaySpecialty}</span></div>
    </div>
    
    <div class="detail-section-title">Evaluaciones HRH Precalificación</div>
    <div class="mini-kpi-grid">
      <div class="mini-kpi-card">
        <small>Financiero</small>
        <strong class="${provider.financialScore >= 90 ? 'green' : 'blue'}">${provider.financialScore}%</strong>
      </div>
      <div class="mini-kpi-card">
        <small>Técnico</small>
        <strong class="${provider.technicalScore >= 90 ? 'green' : 'blue'}">${provider.technicalScore}%</strong>
      </div>
      <div class="mini-kpi-card">
        <small>Seguridad</small>
        <strong class="green">${provider.safetyIndex}%</strong>
      </div>
    </div>
    
    <div class="detail-section-title">Registro Histórico de Cumplimiento</div>
    <div class="compliance-timeline">
      ${historyHtml}
    </div>
  `;
}

// Búsqueda y filtrado
document.getElementById("searchProveedor")?.addEventListener("input", renderProveedores);
document.getElementById("filterEspecialidad")?.addEventListener("change", renderProveedores);

// ==========================================
// COMPARATIVA Y RECOMENDACIÓN DE OFERTAS
// ==========================================

function renderComparativa() {
  const licitacionSelect = document.getElementById("comparativaLicitacion");
  if (!licitacionSelect) return;
  
  const selectedLicitacion = licitacionSelect.value;
  const licitaciones = JSON.parse(localStorage.getItem("obra360_licitaciones")) || baseBidding;
  const data = licitaciones[selectedLicitacion];
  if (!data) return;
  
  // Nombres oferentes
  const bidder1Name = document.getElementById("bidder-1-name");
  const bidder2Name = document.getElementById("bidder-2-name");
  const bidder3Name = document.getElementById("bidder-3-name");
  
  if (bidder1Name) bidder1Name.innerHTML = data.bidders[0].name + (data.bidders[0].recommended ? ' <span class="tag-winner">HRH Rec.</span>' : '');
  if (bidder2Name) bidder2Name.innerHTML = data.bidders[1].name + (data.bidders[1].recommended ? ' <span class="tag-winner">HRH Rec.</span>' : '');
  if (bidder3Name) bidder3Name.innerHTML = data.bidders[2].name + (data.bidders[2].recommended ? ' <span class="tag-winner">HRH Rec.</span>' : '');
  
  // Tabla comparativa
  const compTableBody = document.getElementById("comparativaTableBody");
  if (compTableBody) {
    const formatPrice = (val) => new Intl.NumberFormat("es-CL", { style: "currency", currency: "CLP", maximumFractionDigits: 0 }).format(val);
    
    compTableBody.innerHTML = `
      <tr>
        <td><strong>Oferta Económica (Neto)</strong></td>
        <td><strong>${formatPrice(data.bidders[0].price)}</strong></td>
        <td><strong>${formatPrice(data.bidders[1].price)}</strong></td>
        <td><strong>${formatPrice(data.bidders[2].price)}</strong></td>
      </tr>
      <tr>
        <td><strong>Plazo de Ejecución</strong></td>
        <td>${data.bidders[0].time} días</td>
        <td>${data.bidders[1].time} días</td>
        <td>${data.bidders[2].time} días</td>
      </tr>
      <tr>
        <td><strong>Evaluación Técnica (30%)</strong></td>
        <td>${data.bidders[0].tech}%</td>
        <td>${data.bidders[1].tech}%</td>
        <td>${data.bidders[2].tech}%</td>
      </tr>
      <tr>
        <td><strong>Evaluación Financiera (50%)</strong></td>
        <td>${data.bidders[0].fin}%</td>
        <td>${data.bidders[1].fin}%</td>
        <td>${data.bidders[2].fin}%</td>
      </tr>
      <tr>
        <td><strong>Cumplimiento Histórico (20%)</strong></td>
        <td>${data.bidders[0].comp}%</td>
        <td>${data.bidders[1].comp}%</td>
        <td>${data.bidders[2].comp}%</td>
      </tr>
      <tr class="highlight-row">
        <td><strong>Puntaje Final Ponderado</strong></td>
        <td><span class="tag ok">${data.bidders[0].overall} pts</span></td>
        <td><span class="tag blue">${data.bidders[1].overall} pts</span></td>
        <td><span class="tag blue">${data.bidders[2].overall} pts</span></td>
      </tr>
    `;
  }
  
  // Recomendación
  const recLetter = document.getElementById("recomendacionLetter");
  const recommendedBidder = data.bidders.find(b => b.recommended);
  const codeDoc = selectedLicitacion === "climatizacion" ? "INF-HRH-CLI-024" : "INF-HRH-EST-011";
  
  if (recLetter && recommendedBidder) {
    recLetter.innerHTML = `
      <div class="paper-header">
        <div class="paper-logo" style="color:var(--navy); font-weight:900;">HRH<span style="color:var(--orange);">Consulting</span></div>
        <div class="paper-code">CÓDIGO: ${codeDoc}</div>
      </div>
      <hr style="border:0; border-top:1px solid #d1d5db; margin: 10px 0 16px 0;">
      <div class="paper-title">INFORME DE RECOMENDACIÓN DE CONTRATACIÓN</div>
      <div class="paper-meta" style="font-size:12px; margin-bottom:14px; line-height:1.4;">
        <strong>Para:</strong> Hardy Rehbein, Administrador OBRA360<br>
        <strong>De:</strong> Equipo de Licitaciones, HRH Consulting<br>
        <strong>Fecha:</strong> 14 de Junio de 2026<br>
        <strong>Referencia:</strong> Adjudicación de partida "${data.packageTitle}"
      </div>
      <div class="paper-body" style="font-size:12px; line-height:1.5;">
        <p>Estimado Administrador,</p>
        <p>Presentamos la evaluación final del proceso licitatorio para la ejecución de la partida de referencia del Proyecto Edificio Las Palmas.</p>
        <p>${data.recommendation}</p>
        <p>Por lo tanto, se aconseja proceder con la adjudicación y firma de contrato para resguardar la calidad técnica y el cumplimiento de plazos del proyecto general.</p>
      </div>
      <div class="paper-signatures" style="margin-top:20px; font-size:10px;">
        <div class="signature-block">
          <div class="signature-line"></div>
          L. González · Finanzas HRH
        </div>
        <div class="signature-block">
          <div class="signature-line"></div>
          F. Muñoz · Consultor Obras
        </div>
      </div>
    `;
  }
  
  renderMinutaPreview();
}

document.getElementById("comparativaLicitacion")?.addEventListener("change", renderComparativa);

// ==========================================
// MINUTA DE ADJUDICACIÓN
// ==========================================

function renderMinutaPreview() {
  const licitacionSelect = document.getElementById("comparativaLicitacion");
  if (!licitacionSelect) return;
  const selectedLicitacion = licitacionSelect.value;
  const licitaciones = JSON.parse(localStorage.getItem("obra360_licitaciones")) || baseBidding;
  const data = licitaciones[selectedLicitacion];
  if (!data) return;
  
  const recommendedBidder = data.bidders.find(b => b.recommended);
  const adminName = document.getElementById("adjAdminName")?.value || "Ing. Hardy Rehbein";
  const adjDate = document.getElementById("adjDate")?.value || "2026-06-14";
  const warranty = document.getElementById("adjWarranty")?.value || "10% de fiel cumplimiento del contrato";
  const notes = document.getElementById("adjNotes")?.value || "Sin observaciones adicionales.";
  
  const formatPrice = (val) => new Intl.NumberFormat("es-CL", { style: "currency", currency: "CLP", maximumFractionDigits: 0 }).format(val);
  
  const previewDiv = document.getElementById("minutaDocumentPreview");
  
  const isSigned = localStorage.getItem("minuta_signed_" + selectedLicitacion) === "true";
  const signedMsg = document.getElementById("minutaAdjudicadaMessage");
  const firmarBtn = document.getElementById("btnFirmarMinuta");
  
  if (signedMsg && firmarBtn) {
    if (isSigned) {
      signedMsg.style.display = "block";
      firmarBtn.innerText = "Contrato Adjudicado";
      firmarBtn.disabled = true;
    } else {
      signedMsg.style.display = "none";
      firmarBtn.innerText = "Firmar y Adjudicar Contrato";
      firmarBtn.disabled = false;
    }
  }

  if (previewDiv && recommendedBidder) {
    previewDiv.innerHTML = `
      <div class="report-paper" style="min-height: auto; border: 1px solid #94a3b8; font-family: Georgia, serif; padding: 24px;">
        <div class="paper-header" style="display:flex; justify-content:space-between; align-items:center;">
          <div class="paper-logo" style="font-family:Inter, sans-serif; font-weight:900;">OBRA<span style="color:var(--orange);">360</span></div>
          <div class="paper-code" style="font-family:Inter, sans-serif;">MIN-ADJ-${selectedLicitacion.toUpperCase()}-01</div>
        </div>
        <hr style="border:0; border-top:1px solid #cbd5e1; margin: 8px 0 12px 0;">
        <div class="paper-title" style="font-family:Inter, sans-serif; font-size:13px; font-weight:800; text-align:center; margin-bottom:12px;">MINUTA DE ADJUDICACIÓN DE CONTRATACIÓN</div>
        <div class="paper-body" style="font-size:12px; line-height:1.5;">
          <p>En Santiago, con fecha <strong>${adjDate}</strong>, el Administrador de Obra, <strong>${adminName}</strong>, de conformidad con las recomendaciones e informe técnico emitido por <strong>HRH Consulting</strong>, procede a adjudicar los trabajos correspondientes a:</p>
          <p style="background:#f8fafc; padding:10px; border-radius:8px; border:1px solid #e2e8f0; font-family:monospace; line-height:1.4;">
            <strong>Partida:</strong> ${data.packageTitle}<br>
            <strong>Adjudicatario:</strong> ${recommendedBidder.name}<br>
            <strong>Monto de Adjudicación:</strong> ${formatPrice(recommendedBidder.price)} Netos<br>
            <strong>Garantías Exigidas:</strong> ${warranty}<br>
            <strong>Plazo Contractual:</strong> ${recommendedBidder.time} días corridos
          </p>
          <p><strong>Observaciones:</strong> ${notes || 'Se procede a redactar borrador de contrato definitivo conforme a bases y propuesta económica aprobada.'}</p>
        </div>
        <div class="paper-signatures" style="margin-top:20px; font-family:Inter, sans-serif; font-size:10px;">
          <div class="signature-block">
            <div class="signature-line"></div>
            Recomendado por HRH Consulting
          </div>
          <div class="signature-block">
            <div class="signature-line"></div>
            ${isSigned ? '✓ FIRMADO DIGITALMENTE' : 'Firma de Aceptación (Administrador)'}
          </div>
        </div>
      </div>
    `;
  }
}

// Reactivos para re-dibujar minuta en tiempo real
document.getElementById("adjAdminName")?.addEventListener("input", renderMinutaPreview);
document.getElementById("adjDate")?.addEventListener("change", renderMinutaPreview);
document.getElementById("adjWarranty")?.addEventListener("change", renderMinutaPreview);
document.getElementById("adjNotes")?.addEventListener("input", renderMinutaPreview);

// Firmar minuta
document.getElementById("btnFirmarMinuta")?.addEventListener("click", () => {
  const licitacionSelect = document.getElementById("comparativaLicitacion");
  if (!licitacionSelect) return;
  const selectedLicitacion = licitacionSelect.value;
  
  localStorage.setItem("minuta_signed_" + selectedLicitacion, "true");
  renderMinutaPreview();
  
  const licitaciones = JSON.parse(localStorage.getItem("obra360_licitaciones")) || baseBidding;
  const data = licitaciones[selectedLicitacion];
  if (!data) return;
  const recommendedBidder = data.bidders.find(b => b.recommended);
  
  const providers = JSON.parse(localStorage.getItem("obra360_proveedores")) || baseContractors;
  const providerIndex = providers.findIndex(p => p.name === recommendedBidder.name);
  if (providerIndex !== -1) {
    providers[providerIndex].history.unshift({
      project: "Edificio Las Palmas",
      year: "2026",
      status: "Adjudicado",
      score: recommendedBidder.overall,
      comment: `Adjudicación de contrato para "${data.packageTitle}" por un monto de ${new Intl.NumberFormat("es-CL", { style: "currency", currency: "CLP", maximumFractionDigits: 0 }).format(recommendedBidder.price)} netos.`
    });
    localStorage.setItem("obra360_proveedores", JSON.stringify(providers));
    renderProveedores();
  }
});

// Descargar minuta
document.getElementById("btnDescargarMinuta")?.addEventListener("click", () => {
  alert("Generando PDF de la Minuta de Adjudicación de HRH... Descargando archivo.");
});

// ==========================================
// FORMATOS DE SOLICITUD DE COTIZACIÓN (RFQ)
// ==========================================

// Descargas
document.querySelectorAll(".btn-download-mock").forEach(btn => {
  btn.addEventListener("click", () => {
    alert(`Descargando plantilla de HRH Consulting: ${btn.dataset.file}`);
  });
});

// Generar RFQ
document.getElementById("btnGenerarRFQ")?.addEventListener("click", () => {
  const partida = document.getElementById("rfqPartida").value || "Instalación de Revestimientos";
  const desc = document.getElementById("rfqDesc").value || "Especificaciones generales adjuntas.";
  const deadline = document.getElementById("rfqDeadline").value || "2026-06-30";
  const planos = document.getElementById("rfqPlanos").value || "PL-ARQ-01";
  
  document.getElementById("prevRfqPartida").innerText = partida;
  document.getElementById("prevRfqDeadline").innerText = deadline;
  document.getElementById("prevRfqPlanos").innerText = planos;
  document.getElementById("prevRfqDesc").innerText = desc;
  
  const container = document.getElementById("rfqPreviewContainer");
  if (container) {
    container.style.display = "block";
    container.scrollIntoView({ behavior: "smooth" });
  }
});

// Enviar RFQ
document.getElementById("btnSendRFQ")?.addEventListener("click", () => {
  const msg = document.getElementById("rfqEnviadoMessage");
  if (msg) {
    msg.style.display = "block";
    setTimeout(() => {
      msg.style.display = "none";
    }, 4000);
  }
});

document.getElementById("btnPrintRFQ")?.addEventListener("click", () => {
  window.print();
});

// ==========================================
// EVALUACIÓN DE DESEMPEÑO (SISTEMA)
// ==========================================

const selectEvalProv = document.getElementById("evalProveedor");

function fillEvalProveedorDropdown() {
  if (!selectEvalProv) return;
  const providers = JSON.parse(localStorage.getItem("obra360_proveedores")) || baseContractors;
  
  selectEvalProv.innerHTML = "";
  providers.forEach(p => {
    const option = document.createElement("option");
    option.value = p.id;
    option.innerText = p.name + ` (${p.specialty})`;
    selectEvalProv.appendChild(option);
  });
  
  updateScorecardPreview();
}

function updateScorecardPreview() {
  const provId = selectEvalProv?.value;
  if (!provId) return;
  
  const providers = JSON.parse(localStorage.getItem("obra360_proveedores")) || baseContractors;
  const p = providers.find(item => item.id === provId);
  if (!p) return;
  
  const c = parseInt(document.getElementById("slideCalidad").value);
  const pl = parseInt(document.getElementById("slidePlazo").value);
  const s = parseInt(document.getElementById("slideSeguridad").value);
  const g = parseInt(document.getElementById("slideGestion").value);
  
  const labelValCalidad = document.getElementById("valCalidad");
  const labelValPlazo = document.getElementById("valPlazo");
  const labelValSeguridad = document.getElementById("valSeguridad");
  const labelValGestion = document.getElementById("valGestion");
  
  if (labelValCalidad) labelValCalidad.innerText = c + " pts";
  if (labelValPlazo) labelValPlazo.innerText = pl + " pts";
  if (labelValSeguridad) labelValSeguridad.innerText = s + " pts";
  if (labelValGestion) labelValGestion.innerText = g + " pts";
  
  const sCal = document.getElementById("labelValCalidad");
  const sPla = document.getElementById("labelValPlazo");
  const sSeg = document.getElementById("labelValSeguridad");
  const sGes = document.getElementById("labelValGestion");
  
  if (sCal) sCal.innerText = c + "%";
  if (sPla) sPla.innerText = pl + "%";
  if (sSeg) sSeg.innerText = s + "%";
  if (sGes) sGes.innerText = g + "%";
  
  const barCal = document.getElementById("barCalidad");
  const barPla = document.getElementById("barPlazo");
  const barSeg = document.getElementById("barSeguridad");
  const barGes = document.getElementById("barGestion");
  
  if (barCal) barCal.style.width = c + "%";
  if (barPla) barPla.style.width = pl + "%";
  if (barSeg) barSeg.style.width = s + "%";
  if (barGes) barGes.style.width = g + "%";
  
  const overall = (c * 0.3) + (pl * 0.3) + (s * 0.2) + (g * 0.2);
  const overallFixed = overall.toFixed(1);
  
  const scorecardComp = document.getElementById("scorecardCompany");
  const scorecardOver = document.getElementById("scorecardOverall");
  const scorecardGrade = document.getElementById("scorecardGrade");
  
  if (scorecardComp) scorecardComp.innerText = p.name;
  if (scorecardOver) scorecardOver.innerText = overallFixed;
  
  if (scorecardGrade) {
    if (overall >= 90) {
      scorecardGrade.innerHTML = `<strong>Estado: Desempeño Excelente (Clase A)</strong><p>El contratista supera ampliamente los requerimientos de la obra. Recomendado para contrataciones futuras sin restricciones.</p>`;
    } else if (overall >= 80) {
      scorecardGrade.innerHTML = `<strong>Estado: Desempeño Bueno (Clase B)</strong><p>El contratista cumple satisfactoriamente los estándares contractuales de obra y seguridad.</p>`;
    } else if (overall >= 70) {
      scorecardGrade.innerHTML = `<strong>Estado: Desempeño Regular (Clase C)</strong><p>Se observan desviaciones menores en obra o retrasos administrativos. Requiere plan de mejora continuo y supervisión estrecha.</p>`;
    } else {
      scorecardGrade.innerHTML = `<strong>Estado: Desempeño Deficiente (Clase D)</strong><p>El contratista no cumple los estándares mínimos exigidos. Se sugiere suspensión provisional del registro e inicio de auditoría de procesos.</p>`;
    }
  }
}

// Sliders events
document.getElementById("slideCalidad")?.addEventListener("input", updateScorecardPreview);
document.getElementById("slidePlazo")?.addEventListener("input", updateScorecardPreview);
document.getElementById("slideSeguridad")?.addEventListener("input", updateScorecardPreview);
document.getElementById("slideGestion")?.addEventListener("input", updateScorecardPreview);
selectEvalProv?.addEventListener("change", updateScorecardPreview);

// Guardar eval
document.getElementById("btnRegistrarEval")?.addEventListener("click", () => {
  const provId = selectEvalProv?.value;
  if (!provId) return;
  
  const providers = JSON.parse(localStorage.getItem("obra360_proveedores")) || baseContractors;
  const providerIndex = providers.findIndex(item => item.id === provId);
  if (providerIndex === -1) return;
  
  const c = parseInt(document.getElementById("slideCalidad").value);
  const pl = parseInt(document.getElementById("slidePlazo").value);
  const s = parseInt(document.getElementById("slideSeguridad").value);
  const g = parseInt(document.getElementById("slideGestion").value);
  const comments = document.getElementById("evalComments").value || "Evaluación periódica registrada.";
  const project = document.getElementById("evalProject").value || "Edificio Las Palmas";
  
  const overall = (c * 0.3) + (pl * 0.3) + (s * 0.2) + (g * 0.2);
  const score = Math.round(overall);
  
  providers[providerIndex].history.unshift({
    project: project,
    year: "2026",
    status: "Evaluación Desempeño",
    score: score,
    comment: `Nota: ${score} pts (Calidad ${c}%, Plazo ${pl}%, Seguridad ${s}%, Gestión ${g}%). Comentarios: ${comments}`
  });
  
  const allScores = providers[providerIndex].history
    .filter(h => h.score !== undefined)
    .map(h => h.score);
  
  if (allScores.length > 0) {
    const sum = allScores.reduce((acc, score) => acc + score, 0);
    providers[providerIndex].rating = Math.round(sum / allScores.length);
  }
  
  localStorage.setItem("obra360_proveedores", JSON.stringify(providers));
  
  const msg = document.getElementById("evalRegistradaMessage");
  if (msg) {
    msg.style.display = "block";
    setTimeout(() => {
      msg.style.display = "none";
    }, 4000);
  }
  
  renderProveedores();
  showProveedorDetail(provId);
  updateScorecardPreview();
});

// Menú principal click listener
document.getElementById("menuProveedores")?.addEventListener("click", () => {
  renderProveedores();
  renderComparativa();
  fillEvalProveedorDropdown();
});

// Inicializar al cargar
renderProveedores();
renderComparativa();
fillEvalProveedorDropdown();