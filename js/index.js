// Images and sound
const imagen = document.getElementById('imagen');
const audio = document.getElementById('audio');

imagen.addEventListener('mouseover', () => {
    audio.play();
});

imagen.addEventListener('mouseout', () => {
    audio.pause();
    audio.currentTime = 0; // Reloads the audio
});

audio.addEventListener('ended', () => {
    audio.currentTime = 0; 
    audio.play(); 
});

// Navbar change color
window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    if (window.scrollY > 10) { // Cambia 100 por el valor que prefieras
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
