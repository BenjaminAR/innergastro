document.addEventListener("scroll", function () {
  const scrollTop = window.scrollY;
  const parallaxElement = document.querySelector(".fondo-parallax");
  const parallaxElementDiv = document.querySelector(
    ".contenido-parallax-titulo"
  );
  // const parallaxBody = document.querySelector("body");
  parallaxElement.style.backgroundPositionY = `${scrollTop * -1.8}px`;
  parallaxElementDiv.style.bottom = `${scrollTop * 0.2 + 40}%`;
});

document.addEventListener("DOMContentLoaded", function () {
  var titulo = document.querySelector(".contenido-parallax-titulo");
  var saludo = 'Hola munod';
  var miDiv = document.querySelector(".menu-line");

  window.addEventListener("scroll", function () {
    var scrollPosition = window.scrollY;
    var windowHeight = window.innerHeight;
    var targetPosition = 0.1 * windowHeight;

    // Calcula la opacidad basándose en la posición de desplazamiento
    var opacity = 1 - scrollPosition / targetPosition;
    opacity = Math.min(1, Math.max(0, opacity)); // Asegura que la opacidad esté en el rango de 0 a 1

    // Aplica la opacidad al elemento h2
    titulo.style.opacity = opacity;

    if (scrollPosition >+ 350) {
      miDiv.style.backgroundColor = "#242525"; /* Cambia el color de fondo a rojo */
      console.log(scrollPosition)
    } else {
      miDiv.style.backgroundColor = "transparent"; /* Restaura el color de fondo original a azul */
        console.log('Restaura color')
    }
  });
});
