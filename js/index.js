const images = document.querySelectorAll('.image-container');
images.forEach((imageContainer, index) => {
    const audio = imageContainer.querySelector('audio');
    const muteButton = imageContainer.querySelector('.mute-button');

    imageContainer.addEventListener('mouseover', () => {
        audio.play();
    });

    imageContainer.addEventListener('mouseout', () => {
        audio.pause();
        audio.currentTime = 0; // Reinicia el audio
    });

    audio.addEventListener('ended', () => {
        audio.currentTime = 0; 
        audio.play(); 
    });

    muteButton.addEventListener('click', () => {
        audio.muted = !audio.muted;
        muteButton.textContent = audio.muted ? 'Unmute' : 'Mute';
    });
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


/* pop up*/
// Obtener los elementos
var popup = document.getElementById('popup');
var popupImg = document.getElementById('popup-img');
var popupInfo = document.getElementById('popup-info');
var close = document.getElementsByClassName('close')[0];

// Añadir evento de clic a las imágenes
document.querySelectorAll('.thumbnail').forEach(img => {
    img.addEventListener('click', function() {
        popup.style.display = 'block';
        popupImg.src = this.src;
        popupInfo.textContent = this.getAttribute('data-info');
    });
});

// Cerrar el pop-up
close.onclick = function() {
    popup.style.display = 'none';
}

// Cerrar el pop-up al hacer clic fuera de él
window.onclick = function(event) {
    if (event.target == popup) {
        popup.style.display = 'none';
    }
}
