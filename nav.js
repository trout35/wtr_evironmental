const navSlide = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.col-menu');
	const navLinks = document.querySelectorAll('.col-menu li');
	
	burger.addEventListener('click', () => {
		nav.classList.toggle('nav-active');
		
		navLinks.forEach((link,index) => {
			if(link.style.animation){
				link.style.animation = '';
			}
			else{	
				link.style.animation = `navFade 0.5s ease forwards ${index / 7+ 0.3}s`;
			}
		});
		
		burger.classList.toggle('toggle');
	});
	
	
	
}

navSlide();