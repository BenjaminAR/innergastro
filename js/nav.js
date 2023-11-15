$(document).ready(function () {
  if ("ontouchstart" in window) {
    var click = "touchstart";
  } else {
    var click = "click";
  }

  $("div.burger").on(click, function () {
    if (!$(this).hasClass("open")) {
      openMenu();
      $(".screen").css("height", "100vh"); // Cambiar la altura de .screen a 100vh
    } else {
      closeMenu();
      $(".screen").css("height", "5rem"); // Restaurar la altura de .screen a 5rem
    }
  });

  $("div.menu ul li a").on(click, function (e) {
    e.preventDefault();
    closeMenu();
    $(".screen").css("height", "5rem"); // Asegurarse de restaurar la altura de .screen a 5rem cuando se hace clic en un enlace del menú
  });

  function openMenu() {
    $("div.circle").addClass("expand");
    $("div.burger").addClass("open");
    $("div.x, div.y, div.z").addClass("collapse");
    $(".menu li").addClass("animate");

    setTimeout(function () {
      $("div.y").hide();
      $("div.x").addClass("rotate30");
      $("div.z").addClass("rotate150");
    }, 70);
    setTimeout(function () {
      $("div.x").addClass("rotate45");
      $("div.z").addClass("rotate135");
    }, 120);
  }

  function closeMenu() {
    $("div.burger").removeClass("open");
    $("div.x").removeClass("rotate45").addClass("rotate30");
    $("div.z").removeClass("rotate135").addClass("rotate150");
    $("div.circle").removeClass("expand");
    $(".menu li").removeClass("animate");

    setTimeout(function () {
      $("div.x").removeClass("rotate30");
      $("div.z").removeClass("rotate150");
    }, 50);
    setTimeout(function () {
      $("div.y").show();
      $("div.x, div.y, div.z").removeClass("collapse");
    }, 70);
  }
});

let timeout;

document.querySelectorAll('.menu-list .hover-element').forEach((item) => {
    item.addEventListener('mousemove', (e) => {
        const hoverElement = item;
        const { left, top, width, height } = hoverElement.getBoundingClientRect();
        const x = (e.clientX - left) / width * 100;
        const y = (e.clientY - top) / height * 100;

        hoverElement.style.backgroundImage = `radial-gradient(circle at ${x}% ${y}%, transparent, rgba(23, 23, 23, 0.406))`;

        clearTimeout(hoverElement.timeout);
        document.body.classList.add("movimiento");
        hoverElement.timeout = setTimeout(function () {
            document.body.classList.remove("movimiento");
        }, 300);
    });

    item.addEventListener('mouseleave', () => {
        const hoverElement = item;
        hoverElement.style.backgroundImage = 'none';
    });
});
