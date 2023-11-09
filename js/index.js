document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".animate-on-scroll");
  
    function handleScroll() {
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        
        if (isVisible) {
          section.classList.add("active");
          //console.log('Visible')
        } else {
          section.classList.remove("active");
          //console.log('IsNotVisible')
        }
      });
    }
  
    document.addEventListener("scroll", handleScroll);
    // Disparar handleScroll al cargar la página para verificar las secciones visibles inicialmente.
    handleScroll();
  });
  