function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  
/*  if(html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  } */
  
const img = document.querySelector("#profile img")
  
  if(html.classList.contains("light")) {
    img.setAttribute("src", "./avatartwo.png")
  } else {
    img.setAttribute("src", "./avatarone.png")
  }
  
  if(html.classList.contains("light")) {
    img.setAttribute("alt", "Foto de Carol com o cabelo preso.")
  } else {
    img.setAttribute("alt", "Foto de Carol com o cabelo solto.")
  }
  
  
}
