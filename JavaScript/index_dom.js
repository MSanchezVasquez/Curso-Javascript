import hamburgerMenu from "./dom/menu_hamburguesa.js";
import { digitalClock, alarm } from "./dom/reloj.js";
import { moveBall, shortcuts } from "./dom/teclado.js";
import countdown from "./dom/cuenta_regresiva.js";
import scrollTopButton from "./dom/boton_scroll.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", "menu a");
  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
  alarm("assets/alarma.mp3", "#activar-alarma", "#desactivar-alarma");
  countdown("countdown", "Dec 23, 2024 11:59:59", "Feliz Cumpleaños! 🎂");
  scrollTopButton(".scroll-top-btn");
});

/* d.addEventListener("keyup", (e) => {
  shortcuts(e);
}); */

/* d.addEventListener("keypress", (e) => {
  shortcuts(e);
}); */

d.addEventListener("keydown", (e) => {
  shortcuts(e);
  moveBall(e, ".ball", ".stage");
});
