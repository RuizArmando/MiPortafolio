function MenuPosition(event, targetId){
    event.preventDefault()
    let menu = document.querySelector('.menu');
    let aboutSection = document.querySelector(targetId);
    let aboutSectionTop = aboutSection.offsetTop - 50;
    menu.classList.add('adjusted');
    window.scroll({
        top: aboutSectionTop,
        behavior: 'smooth'
    });
    targetId = targetId.substring(1);
    Menu(targetId);
}

function Menu(sectionID){
    let main = document.querySelectorAll('#mainHTML section');

    main.forEach((section) =>{
        section.style.display = 'none';
    });

    let id = document.getElementById(sectionID);
    id.style.display = 'block';

    linkBold(sectionID);
}

function linkBold(linkID){
    let menuLink = document.querySelectorAll('#menu a');

    menuLink.forEach((a) =>{
        a.style.fontWeight = 'normal'
    });
    
    linkID = "link__" + linkID;
    let link = document.getElementById(linkID);
    link.style.fontWeight = 'bold';
}