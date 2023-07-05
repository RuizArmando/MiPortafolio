function MenuPosition(event, targetId){
    event.preventDefault()
    let menu = document.querySelector('.menu')
    let aboutSection = document.querySelector(targetId)
    let aboutSectionTop = aboutSection.offsetTop - 50
    menu.classList.add('adjusted')
    window.scroll({
        top: aboutSectionTop,
        behavior: 'smooth'
    })
}