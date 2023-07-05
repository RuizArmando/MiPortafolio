function StartForm(){
    let formulario = document.getElementById('contact__form')

    formulario.addEventListener('submit', handleSubmit)
}

function handleSubmit(event){
    event.preventDefault()
    let form = new FormData(this)
    console.log(form.get('name'))
}

window.addEventListener('load', StartForm)