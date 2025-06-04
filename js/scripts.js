let animationFrame;

document.addEventListener("mousemove", function (event) {
    if (animationFrame) {
        cancelAnimationFrame(animationFrame); 
    }
    
    animationFrame = requestAnimationFrame(() => {
        const x = event.pageX; 
        const y = event.pageY; 
        
        const circleSize = 300; // Tamaño fijo en píxeles

        // Selección solo de la sección hero para el efecto interactivo
        const heroSection = document.querySelector('.hero'); 
        
        if (heroSection) {
            // Solo cambia el fondo de la sección hero
            heroSection.style.background = `radial-gradient(circle ${circleSize}px at ${x}px ${y}px, rgba(4, 104, 101, 0.9), #000000)`;
        }
    });
});

let currentIndex = 0;
const intervalTime = 3000; 

function moveSlide(step) {
    const slides = document.querySelector('.gallery-slide');
    const totalSlides = slides ? slides.children.length : 0;
    currentIndex = (currentIndex + step + totalSlides) % totalSlides;
    if (slides) {
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
}

// Desplazamiento automático del carrusel
function autoSlide() {
    moveSlide(1); 
}

setInterval(autoSlide, intervalTime);

// Navegación manual
document.querySelector('.prev')?.addEventListener('click', () => moveSlide(-1));
document.querySelector('.next')?.addEventListener('click', () => moveSlide(1));

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1); 
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    });
});

// Scroll hacia la sección About
document.getElementById("scrollDown")?.addEventListener("click", function () {
    const targetSection = document.querySelector("#about-me");
    if (targetSection) {
        targetSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    // Efecto de tipeo solo si el elemento existe
    const sashaWorkshopTitle = document.querySelector(".sasha-workshop-title");

    if (sashaWorkshopTitle) {
        const text = ""; 
        let index = 0;

        function typeWriterEffect() {
            if (index < text.length) {
                sashaWorkshopTitle.textContent += text.charAt(index);
                index++;
                setTimeout(typeWriterEffect, 100); 
            }
        }

        sashaWorkshopTitle.textContent = "";
        typeWriterEffect();
    }

    const portfolioTitle = document.querySelector('.portfolio-title');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            } else {
                entry.target.classList.remove('fade-in');
            }
        });
    }, { threshold: 0.5 }); 

    if (portfolioTitle) {
        observer.observe(portfolioTitle);
    }
});

// Función de visibilidad para otros elementos
function checkScroll() {
    const portfolioTitle = document.querySelector('.portfolio-title'); 
    const sashaWorkshopTitle = document.querySelector('.sasha-workshop-title');
    const aboutTexts = document.querySelectorAll('.about-text');
    const aboutImages = document.querySelectorAll('.image-container img');

    function checkVisibility(element) {
        const rect = element.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom >= 0;
    }

    if (portfolioTitle && checkVisibility(portfolioTitle)) {
        portfolioTitle.classList.add('visible');
    } else {
        portfolioTitle.classList.remove('visible');
    }

    if (sashaWorkshopTitle && checkVisibility(sashaWorkshopTitle)) {
        sashaWorkshopTitle.classList.add('visible');
    } else {
        sashaWorkshopTitle.classList.remove('visible');
    }

    aboutTexts.forEach((aboutText) => {
        if (checkVisibility(aboutText)) {
            aboutText.classList.add('visible');
        } else {
            aboutText.classList.remove('visible');
        }
    });

    aboutImages.forEach((aboutImage) => {
        if (checkVisibility(aboutImage)) {
            aboutImage.classList.add('visible');
        } else {
            aboutImage.classList.remove('visible');
        }
    });
}

window.addEventListener('scroll', checkScroll);
checkScroll();

// Función para verificar si el elemento está en el viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return rect.top >= 0 && rect.bottom <= window.innerHeight;
}

// Función para activar las secciones cuando se hace scroll
function handleScroll() {
  const sections = document.querySelectorAll('.project-section, .project-details');

  sections.forEach(section => {
    if (isInViewport(section)) {
      section.classList.add('active');
    } else {
      section.classList.remove('active');
    }
  });
}

// Ejecutar la función de scroll cada vez que se haga scroll
window.addEventListener('scroll', handleScroll);

// Asegurar que las secciones sean comprobadas al cargar la página
window.addEventListener('load', handleScroll);




const text = "Sasha's Workshop";
const typingSpeed = 100; // Velocidad de escritura en milisegundos
let index = 0;

function typeWriter() {
    const typewriterElement = document.getElementById('typewriter');
    if (index < text.length) {
        typewriterElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, typingSpeed);
    }
}

document.addEventListener('DOMContentLoaded', typeWriter);



function toggleMenu() {
    const menu = document.querySelector('nav ul');
    menu.classList.toggle('show'); // Alterna la clase que muestra el menú
}


