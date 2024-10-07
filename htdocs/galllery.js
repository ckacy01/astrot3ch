
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