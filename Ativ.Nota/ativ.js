const body = document.querySelector(`body`);
body.style.background = "blue";
body.style.display = "flex";
body.style.justifyContent = "hidden";
body.style.alignItems = "center";

const div2 = document.createElement("div")
div2.style.width = "200";
div2.style.height ="200";
div2.style.display = "flex";
div2.style.backgroundColor = "white";
div2.style.alignItems = "center";
body.appendChild(div2);

const textoDiv = document.createElement("h3");
textoDiv.textContent = "Qual a primeira nota";
div2.appendChild(textoDiv);




