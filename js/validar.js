//Variables de formulario
let form = document.getElementById('contact__form');
let inputs = document.querySelectorAll('#contact__form input');
let textarea = document.querySelectorAll('#contact__form textarea');

//Arreglo de expleciones regulares
let expreciones = {
    nombre: /^[a-zA-Z\s]{1,50}$/,
    correo: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    asunto: /^.{1,50}$/,
    mensaje: /^.{1,300}$/
}

let campos = {
    nombre: false,
    correo: false,
    asunto: false,
    mensaje: false
}

//Validador de formulario
let valueForm = (e) => {
    switch (e.target.name) {
        case "name":
            if(expreciones.nombre.test(e.target.value)){
                ClassReturne('input__name', 'contact__input-falle', 'contact__input-ok');
                campos.nombre = true;
            }else{
                ClassReturne('input__name', 'contact__input-ok', 'contact__input-falle');
                campos.nombre = false;
            }
            break;
        case "email":
            if(expreciones.correo.test(e.target.value)){
                ClassReturne('input__email', 'contact__input-falle', 'contact__input-ok');
                campos.correo = true;
            }else{
                ClassReturne('input__email', 'contact__input-ok', 'contact__input-falle');
                campos.correo = false;
            }
            break;
        case "title":
            if(expreciones.asunto.test(e.target.value)){
                ClassReturne('input__title', 'contact__input-falle', 'contact__input-ok');
                campos.asunto = true;
            }else{
                ClassReturne('input__title', 'contact__input-ok', 'contact__input-falle');
                campos.asunto = false;
            }
            break;
        case "description":
            if(expreciones.mensaje.test(e.target.value)){
                ClassReturne('input__description', 'contact__input-falle', 'contact__input-ok');
                campos.mensaje = true;
            }else{
                ClassReturne('input__description', 'contact__input-ok', 'contact__input-falle');
                campos.mensaje = false;
            }
            break;
    }
}

//Funcion que altera la clase del formulario
function ClassReturne(id, classRemove, classAdd){
    //document.getElementById(id).classList.remove('contact__input');
    document.getElementById(id).classList.remove(classRemove);
    document.getElementById(id).classList.add(classAdd);
}

//Ciclo para evaluar cada caracter en los input
inputs.forEach((input) =>{
    input.addEventListener('keyup', valueForm);
    input.addEventListener('blur', valueForm);
});

//Ciclo para evaluar cada caracter en el textarea
textarea.forEach((textarea) =>{
    textarea.addEventListener('keyup', valueForm);
    textarea.addEventListener('blur', valueForm);
})