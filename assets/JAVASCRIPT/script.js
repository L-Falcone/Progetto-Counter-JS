
let contatore = document.getElementById('valore');
let buttonPlus = document.getElementById('btnPlus');
let buttonMin = document.getElementById('btnMin');

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

    
    
// Incremento
buttonPlus.addEventListener('click', function() {
  temp++;
  contatore.innerText = (temp + '°');
  backImg();
});

// Decremento
buttonMin.addEventListener('click', function() {
  temp--;
  contatore.innerText = (temp + '°');
  backImg();
});

// Chiamata funzione
   backImg();



    




