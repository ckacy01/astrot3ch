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

// Mute button
const muteButton = document.getElementById('muteButton');
muteButton.addEventListener('click', () => {
    audio.muted = !audio.muted;
    muteButton.textContent = audio.muted ? 'Unmute' : 'Mute';
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
