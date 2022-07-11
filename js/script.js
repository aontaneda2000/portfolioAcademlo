/* menu */
/* menu */
/* Funcion anonima auto ejecutable */
((d) => {
  const $btnMenu = d.querySelector(".menu-btn");
  $menu = d.querySelector(".menu");

  $btnMenu.addEventListener("click", (e) => {
    $btnMenu.firstElementChild.classList.toggle("none");
    $btnMenu.lastElementChild.classList.toggle("none");
    /* mostrar opacidad del menú */
    $menu.classList.toggle("is-active");
  });

  d.addEventListener("click", (e) => {
    /* Si no tiene la clase ponsela */
    if (!e.target.matches(".menu a")) return false;
    $btnMenu.firstElementChild.classList.remove("none");
    $btnMenu.lastElementChild.classList.add("none");
    /* mostrar opacidad del menú */
    $menu.classList.toggle("is-active");
  });
})(document);
