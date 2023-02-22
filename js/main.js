const $form = document.querySelector('#carta-a-santa');

const nombre = $form.nombre.value;

const ciudad = $form.ciudad.value;
const comportamiento = $form.comportamiento.value;

const regalo = $form['descripcion-regalo'].value;

//nombre = document.querySelector('name=nombre').value;
//nombre = document.querySelector('#nombre').value;
//todas estas sentencias son equivalentes

console.log(nombre);
console.log(ciudad);
console.log(comportamiento);
console.log(regalo);

function validarNombre(nombre){
   if(nombre.length === 0){
        return 'Este campo debe tener al menos 1 caracter';
    }

    if(nombre.length >= 50){
        return 'Este campo debe tener menos de 50 caracteres';
    }
    //si no hay error devuelvo un string vacio
    return '';
}

function validarCiudad(ciudad){
    if(ciudad.length === 0){
         return 'Este campo no puede estar vacio';
     }
     return '';
 }

 function validarRegalo(regalo){
    if(regalo.length === 0){
        return 'Este campo no puede estar vacio';
    }

    if(regalo.length >= 100){
        return 'Este campo debe tener menos de 100 caracteres';
    }
    return '';
 }