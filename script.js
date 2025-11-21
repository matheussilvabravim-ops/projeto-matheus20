function ToggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light");

    // pegar a tag immg
    const img = document.querySelector("#profile img");

    // substituir a imagem
    if (html.classList.contains("light")) {
       // se tiver light mode, adicionar a imagem light
       img.setAttribute("src", "./imagem/avatar-light.jpg");
    } else {
       // set tiver sem light mode, manter a imagem normal
       img.setAttribute("src", "./imagem/opi.jpg");
    }
}