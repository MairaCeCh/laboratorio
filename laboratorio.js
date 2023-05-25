////// llamar id/////

const btnAnalisis = document.getElementById("btn__analisis");
const contenedor1 = document.getElementById("contenedor1");
const titulo = document.getElementById("titulo");
const lista__analisis = document.getElementById("lista__analisis");
const btn__enviar = document.getElementById("btn__enviar");
const form__input = document.getElementsByClassName("form__input");
const inputNombre = document.getElementById("inputNombre");
const inputApellido = document.getElementById("inputApellido");
const contenedor_lista = document.getElementById("contenedor_lista");
const inputNacimiento = document.getElementById("input__nacimiento");
const inputDni = document.getElementById("inputDni");
const inputTelefono = document.getElementById("inputTelefono");
const inputMail = document.getElementById("inputMail");
const listadoDelPaciene = document.getElementById("listadoDelPaciene");
const listadoDelPaciene_1 = document.getElementById("listadoDelPaciene_1");

/////declaracion de variables//////

///// funciones /////
btnAnalisis.addEventListener("click", () => {
  desaparecer(contenedor1, contenedor_lista);

  tituloNuevo();
});

btn__enviar.addEventListener("click", () => {
  desaparecer(contenedor_lista, listadoDelPaciene);
  tituloNuevo2();
  verificacion();
  agregarPacientes();
});

function agregarPacientes() {
  pacientesDB.push(
    new Paciente(
      inputNombre.value,
      inputApellido.value,
      inputNacimiento.value,
      inputDni.value,
      inputTelefono.value,
      inputMail.value
    )
  );
}

function desaparecer(caja1, caja2) {
  caja1.classList.toggle("none");
  caja2.classList.toggle("none");
}

// function completo(){
//   if()
// }

// let paciente = prompt("ingrese el nombre del paciente");

function tituloNuevo() {
  titulo.innerText = `Selecciones los analisis para el paciente ${inputNombre.value}
    ${inputApellido.value}.`;
}

function tituloNuevo2() {
  titulo.innerText = `Los analisis del paciente: ${inputNombre.value} fueron enviados.`;
}
const analisis = [
  {
    Nombre_Analisis: "Orina completa",
    precio: 1400,
    tiempo: 1,
    id: 1,
  },
  {
    Nombre_Analisis: "Urocultivo",
    precio: 1600,
    tiempo: 7,
    id: 2,
  },
  {
    Nombre_Analisis: "Hemograma",
    precio: 1200,
    tiempo: 1,
    id: 3,
  },
  {
    Nombre_Analisis: "Hepatograma",
    precio: 1700,
    tiempo: 4,
    id: 4,
  },
  {
    Nombre_Analisis: "Ionograma",
    precio: 1100,
    tiempo: 5,
    id: 5,
  },
  {
    Nombre_Analisis: "Perfil Tiroideo",
    precio: 2200,
    tiempo: 7,
    id: 6,
  },
  {
    Nombre_Analisis: "Serologia Completa",
    precio: 2100,
    tiempo: 4,
    id: 7,
  },
  {
    Nombre_Analisis: "Coagulograma",
    precio: 1300,
    tiempo: 1,
    id: 8,
  },
  {
    Nombre_Analisis: "Vitaminas",
    precio: 10000,
    tiempo: 15,
    id: 9,
  },
  {
    Nombre_Analisis: "Micologico",
    precio: 7000,
    tiempo: 30,
    id: 10,
  },
  {
    Nombre_Analisis: "Creatinina",
    precio: 1500,
    tiempo: 3,
    id: 11,
  },
  {
    Nombre_Analisis: "Glucosa",
    precio: 2000,
    tiempo: 3,
    id: 12,
  },
];

for (const item of analisis) {
  let tarjetas = document.createElement("div");
  tarjetas.className = "analisis__item valores";
  tarjetas.id = item.id;
  tarjetas.innerHTML = ` <div class=" valores2" id="${item.id}"  /> <b class="negrita "> ${item.Nombre_Analisis} </b>
<p class="p" >Precio $${item.precio}</p>
<p class="p" >Tiempo de demora ${item.tiempo} dias</p></div>
`;

  lista__analisis.append(tarjetas);
}

let variante = "";

function verificacion() {
  const btnAnalisis = document.querySelectorAll(".valores");
  const ArrayNodeListe = [].slice.call(btnAnalisis);

  //let estudios = checkboxs.forEach((item) => item.id == analisis.forEach(item) => {item.id})
  // for (const item of checkboxs) {
  //   var estudio =
  //     item.id ==
  //     analisis.forEach((item) => {
  //       item.id;
  //     });
  // }
  // ArrayNuevo.push(estudio);

  // console.log(ArrayNuevo);
  // const infoTarjeta = analisis.filter((elemento) => {
  //   elemento.id == for (const item of checkboxs) {item}
  // });
  // console.log(infoTarjeta);

  // for (const item of checkboxs) {
  //   // item.addEventListener("click", () => {
  //   // console.log(item.id);
  //   let poster = item.id;
  //   // console.log(poster);
  //   const infoTarjeta = analisis.filter((Element) => Element.checked == true);
  //   console.log(infoTarjeta);
  //   // });
  // }

  console.log(analisis);
  console.log(ArrayNodeListe);
  console.log(ArrayNodeListe[0].id);

  // variante = ArrayNodeListe.Nombre_Analisis;
  // const resultado = analisis.filter(analisis.checked == true);

  // filtrado();
  // console.log(resultado);

  analisis.forEach((analisis) => {
    let datos_analisis = document.createElement("div");
    datos_analisis.className = "listado__analisis_final";
    datos_analisis.innerHTML = `<p> Nombre: ${inputNombre.value}<br>
Apellido: ${inputApellido.value}<br>
Fecha de nacimiento: ${inputNacimiento.value}<br>
DNI: ${inputDni.value}<br>
Telefono: ${inputTelefono.value}<br>
Mail: ${inputMail.value}<br>

Los analisis que realiza son:${variante.Nombre_Analisis}`;
  });
  listadoDelPaciene_1.append(datos_analisis);
}

class Paciente {
  constructor(nombre, apellido, fecha_nacimiento, dni, telefono, mail) {
    this.nombre = nombre.toUpperCase();
    this.apellido = apellido.toUpperCase();
    this.fecha_nacimiento = parseInt(fecha_nacimiento);
    this.dni = parseInt(dni);
    this.telefono = parseInt(telefono);
    this.mail = mail.toLowerCase();
  }
}

const pacientesDB = [];
console.log(pacientesDB);
