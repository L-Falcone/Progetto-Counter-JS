let temp = 0;

// Funzione con cambio sfondo in base a valore temperatura
function backImg() {
  let body = document.querySelector('body');
  let imageUrl = '';
  let colorBg = '';

  if (temp >= 10 && temp <= 16) {
      imageUrl = 'url("assets/img/collage_autunno.png")';
      colorBg = 'rgb(120, 31, 25)';
  } else if (temp >= 17 && temp <= 24) {
      imageUrl = 'url("assets/img/collage_spring.png")';
      colorBg = 'rgb(153, 203, 255)';
  } else if (temp >= 25 && temp <= 44) {
      imageUrl = 'url("assets/img/collage_estate.png")';
      colorBg = 'rgb(247, 232, 159)';
  } else if (temp >= 45 ) {
      imageUrl = 'url("assets/img/collage_deserto.png")';
      colorBg = 'rgb(244, 164, 96)';
  } else if (temp <= -16) {
      imageUrl = 'url("assets/img/collage_artico.png")';
      colorBg = 'rgb(229, 230, 232)';
  } else {
      imageUrl = 'url("assets/img/collage_inverno.png")';
      colorBg = 'rgb(255, 250, 250)';
  }

  body.style.backgroundImage = imageUrl;
  body.style.backgroundColor = colorBg;
}

// Creazione della box contenitore
const box = document.createElement("div");
box.classList.add("contatore");
document.body.appendChild(box);

// Creazione del contatore
const contatore = document.createElement("p");
contatore.classList.add("valore");
contatore.textContent = "0°";
box.appendChild(contatore);

// Creazione del pulsante "+" con l'evento di incremento
const buttonPlus = document.createElement("button");
buttonPlus.classList.add("button");
buttonPlus.innerHTML = '<p class="btn-top">+</p>';
buttonPlus.addEventListener('click', function () {
  temp++;
  contatore.innerText = (temp + '°');
  backImg();
});
box.appendChild(buttonPlus);

// Creazione del pulsante "-" con l'evento di decremento
const buttonMin = document.createElement("button");
buttonMin.classList.add("button");
buttonMin.innerHTML = '<p class="btn-top">-</p>';
buttonMin.addEventListener('click', function () {
  temp--;
  contatore.innerText = (temp + '°');
  backImg();
});
box.appendChild(buttonMin);

// Chiamata funzione
backImg();

    
