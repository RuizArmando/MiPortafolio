const nav1 = document.getElementById('skills__nav');
const nav2 = document.getElementById('hobbies__nav');
const nav3 = document.getElementById('academic__nav');
const imagen1 = document.getElementById('proyect__div');

const loginNav = (entradas, observador) => {

	entradas.forEach((entrada) => {
		if(entrada.isIntersecting){
			entrada.target.classList.add('visible');
		} else {
			entrada.target.classList.remove('visible');
		}
	});
}

const observador = new IntersectionObserver(loginNav, {
	root: null,
	rootMargin: '0px 0px 0px 0px',
	threshold: 1.0
});

observador.observe(nav1);
observador.observe(nav2);
observador.observe(nav3);
observador.observe(imagen1);