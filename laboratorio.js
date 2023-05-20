const btnAnalisis = document.getElementById("btn__analisis");
const contenedor1 = document.getElementById("contenedor1");
const titulo = document.getElementById("titulo");
const lista__analisis = document.getElementById("lista__analisis");
const btn__enviar = document.getElementById("btn__enviar");
const form__input = document.querySelectorALL(".form__input");
// const contenedor_lista = document.getElementById("contenedor_lista");

btnAnalisis.addEventListener("click", () => {
  desaparecer();
  tituloNuevo();
  mostrar();
});

btn__enviar.addEventListener("click", () => {
  desaparecer2();
  tituloNuevo2();
});

function desaparecer() {
  contenedor1.classList.toggle("none");
}

function desaparecer2() {
  contenedor_lista.classList.toggle("none");
}

// function completo(){
//   if()
// }

// function mostrar() {
//   document.getElementById("contenedor_lista").style.display = "block";
// }

// let paciente = prompt("ingrese el nombre del paciente");

function tituloNuevo() {
  titulo.innerText = `Selecciones los analisis para el paciente ${paciente}.`;
}

function tituloNuevo2() {
  titulo.innerText = `Los analisis del paciente: ${paciente} fueron enviados.`;
}
const analisis = [
  {
    Nombre_Analisis: "Orina completa",
    precio: 1400,
    tiempo: 1,
  },
  {
    Nombre_Analisis: "Urocultivo",
    precio: 1600,
    tiempo: 7,
  },
  {
    Nombre_Analisis: "Hemograma",
    precio: 1200,
    tiempo: 1,
  },
  {
    Nombre_Analisis: "Hepatograma",
    precio: 1700,
    tiempo: 4,
  },
  {
    Nombre_Analisis: "Ionograma",
    precio: 1100,
    tiempo: 5,
  },
  {
    Nombre_Analisis: "Perfil Tiroideo",
    precio: 2200,
    tiempo: 7,
  },
  {
    Nombre_Analisis: "Serologia Completa",
    precio: 2100,
    tiempo: 4,
  },
  {
    Nombre_Analisis: "Coagulograma",
    precio: 1300,
    tiempo: 1,
  },
  {
    Nombre_Analisis: "Vitaminas",
    precio: 10000,
    tiempo: 15,
  },
  {
    Nombre_Analisis: "Micologico",
    precio: 7000,
    tiempo: 30,
  },
  {
    Nombre_Analisis: "Creatinina",
    precio: 1500,
    tiempo: 3,
  },
  {
    Nombre_Analisis: "Glucosa",
    precio: 2000,
    tiempo: 3,
  },
];

for (const item of analisis) {
  let tarjetas = document.createElement("div");
  tarjetas.className = "analisis__item";
  tarjetas.innerHTML = ` <input class="analisis__item" type="checkbox" name="n1" /> <b class="negrita"> ${item.Nombre_Analisis} </b>
<p class="p" >Precio $${item.precio}</p>
<p class="p" >Tiempo de demora ${item.tiempo} dias</p>
`;

  lista__analisis.append(tarjetas);
}