/*var alumnos = [
  "Carlos Manuel",
  "Cesar Oziel",
  "Regina",
  "Diego Leonardo",
  "Andrea Carolina",
  "Mayela Mayte",
  "Eder Abraham",
  "Diego Alonso",
  "Naomi Michelle",
  "Eder Abisai",
  "Regina", //Dariela
  "Carlos", //Alejandro
  "Carlos" //Manuel
];

console.log(alumnos);
//eliminar al último
alumnos.pop();
//console.log(alumnos);
//agregar al final
alumnos.push("Edgar Aurelio");
//elimina al primero
alumnos.shift()
//agrega al inicio
alumnos.unshift("Axel Gabriel")
//console.log(alumnos);
//cambiar elementos específicos
alumnos[4]="Carlos Manuel";
//console.log(alumnos);
//saber la ubicación de un elemento
console.log(alumnos.indexOf("Eder Abisai")); //regrrsa -1 pues fue eliminado
//eso del -1 es útil para validar quienes están en la lista
console.log(alumnos.includes("Eder Abisai"));
console.log(alumnos.includes("Axel Gabriel"));
console.log(alumnos.find(nombre=>nombre=="Regina"));
//Lo de arriba es equivalente a:
/*for(var i=0; i<alumnos.length; i++){
  if(alumnos[i] =="Regina"){
    console.log(alumnos[i]);
    break;
  }
}
console.log(alumnos.findIndex(nombre=>nombre=="Regina")) //me dice dónde esta el elemento
//lo de arriba es equivalente a:
/*for(var j=; j<alumnos.length;j++){
  for(alumnos[j] =="Regina"){
    console.log(j);
    break;
  }
}*/

/*let ul = document.getElementById("listaAlumnos");
function mostrarLista(lista) {
  ul.innerHTML = ""; //para que elimine la lista anterior
  lista.forEach(function(alumno) {
    var li = document.createElement("li");
    li.textContent = alumno;
    ul.appendChild(li);
  });
}
mostrarLista(alumnos);

//mostrar el de la búsqueda
let boton = document.querySelector("button");
boton.onclick = function() {
  var filtro = document.getElementById("filtroAlumno").value;
  var resultados = alumnos.filter(function(alumno) {
    return alumno.toLowerCase().includes(filtro.toLowerCase());
  });
  mostrarLista(resultados);
}*/

var alumnos = [
  {nombre: "Carlos", apellidoPaterno: "Valerio", apellidoMaterno: "Ríos", matricula: 203040},
  {nombre: "Cesar", apellidoPaterno: "Guajardo", apellidoMaterno: "Rodríguez", matricula: 102030},
  {nombre: "Regina", apellidoPaterno: "Hernandez", apellidoMaterno: "Rodríguez", matricula: 112233},
  {nombre: "Diego", apellidoPaterno: "Alejo", apellidoMaterno: "Cantú", matricula: 147345},
  {nombre: "Andrea", apellidoPaterno: "Alfaro", apellidoMaterno: "Sánchez", matricula: 111629},
  {nombre: "Mayela", apellidoPaterno: "López", apellidoMaterno: "Cerino", matricula: 199820},
  {nombre: "Eder", apellidoPaterno: "Sampayo", apellidoMaterno: "González",  matricula: 182324},
  {nombre: "Diego", apellidoPaterno: "Villanueva", apellidoMaterno: "García", matricula: 200456},
  {nombre: "Naomi", apellidoPaterno: "Ortiz", apellidoMaterno: "Juárez", matricula: 176522},
  {nombre: "Eder", apellidoPaterno: "Esquivel", apellidoMaterno: "Maldonado", matricula: 178882},
  {nombre: "Regina", apellidoPaterno: "Sosa", apellidoMaterno: "Huerta", matricula: 204976},
  {nombre: "Carlos", apellidoPaterno: "Leal", apellidoMaterno: "Delgado", matricula: 156677}
]

//hacer lo anterior pero que busque sin importar el elemento

//para mostrar la lista
let ul = document.getElementById("listaAlumnos");

function mostrarLista(lista) {
  ul.innerHTML = "";
  lista.forEach(function(alumno) {
    var li = document.createElement("li");
    li.textContent = `${alumno.nombre} ${alumno.apellidoPaterno} ${alumno.apellidoMaterno} ${alumno.matricula}`;
    ul.appendChild(li);
  });
}
mostrarLista(alumnos);

//hacer la búsqueda
let boton = document.querySelector("button");
boton.onclick = function() {
  var filtro = document.getElementById("filtroAlumno").value.toLowerCase();
  var resultados = alumnos.filter(function(alumno) {
    return (
      alumno.nombre.toLowerCase().includes(filtro) ||
      alumno.apellidoPaterno.toLowerCase().includes(filtro) ||
      alumno.apellidoMaterno.toLowerCase().includes(filtro) ||
      alumno.matricula.toString().includes(filtro)
    );
  });
  mostrarLista(resultados);
};

//hacer el ordenamiento
const ordenSelect = document.getElementById("ordenSelect");
ordenSelect.onchange = function () {
  const tipoOrden = ordenSelect.value;
  const listaOrdenada = [...alumnos].sort((a, b) => {
    const nombreA = `${a.nombre} ${a.apellidoPaterno}`.toLowerCase();
    const nombreB = `${b.nombre} ${b.apellidoPaterno}`.toLowerCase();

    if (tipoOrden === "AZ") {
      return nombreA.localeCompare(nombreB);
    } else {
      return nombreB.localeCompare(nombreA);
    }
  });
  mostrarLista(listaOrdenada);
};