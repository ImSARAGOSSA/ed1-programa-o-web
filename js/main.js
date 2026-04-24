// ================= Menu Logo ======================
// funcao para diminuir a logo ao passar do banner
$(window).ready(function () {
  // variavel pra pegar o tamanho do banner ao carregar o site
  let tamanhoBanner = $(".slider-banners").outerHeight();
  tamanhoBanner = tamanhoBanner / 3;

  //função que captura o scroll da janela
  $(window).scroll(function () {
    function scroll() {
      return $(window).scrollTop();
    }
    //if para validar se o scroll ja passou ou nao do banner
    if (scroll() < tamanhoBanner) {
      //aqui remove a classe de fechado que deixa a logo pequena e adiciona a aberto que deixa grande
      $("#logo-utp").addClass("logo-utp-aberto");
      $("#logo-utp").removeClass("logo-utp-fechado");

      // mostra a div atrás do menu
      $("#menu-back").addClass("menu-back-fechado");
      $("#menu-back").removeClass("menu-back-aberto");

      // console.log('fecho') => era para testes
    } else if (scroll() >= tamanhoBanner) {
      //aqui faz o contrario pois deixa pequeno ao invés de grande
      $("#logo-utp").addClass("logo-utp-fechado");
      $("#logo-utp").removeClass("logo-utp-aberto");

      // mostra a div atrás do menu
      $("#menu-back").addClass("menu-back-aberto");
      $("#menu-back").removeClass("menu-back-fechado");

      // console.log('abriu em:', tamanhoBanner) => era para testes
    }
  });
});

$(document).ready(function () {
  $("#banners").lightSlider({
    item: 1,
    auto: true,
    useCss: true,
    controls: false,
    pager: false,
    speed: 1000,
    slideMargin: 0,
    slideMove: 1,
    loop: true,
    pause: 6000,
  });
});

// ===============  sobre  =================

let lastOpenDivSobre = "graduacao";

function toogleClassDivSobre(id) {
  $(`#${id}`).toggleClass("div-sobre-aberto");
  $(`#${id}-div-2`).toggleClass("div-sobre-texto-aberto");
  $(`#${id}-div-1`).toggleClass("div-sobre-select-fechado");
}

function abriDivSobre(id) {
  toogleClassDivSobre(lastOpenDivSobre);
  toogleClassDivSobre(id);
  lastOpenDivSobre = id;
}

// ====================== tags select ==================

let lastTagSelected = "tag-none";
let filter = "";

function splitFilter(id) {
  filter = lastTagSelected.slice(4)
  var filterAdaptado = {
    "graduacao":"Graduação",
    "pos": "Pós-Graduação",
    "mestrado": "Mestrado"
  }
  if (filter == "graduacao" || filter == "pos" || filter == "mestrado"){
    filter = filterAdaptado[filter]
  }

  $("#search-input").val(filter).trigger("input");
}

function toggleClassTag(id) {
  $(`#${id}`).toggleClass("tag-selected");
}

function selectTag(id) {
  toggleClassTag(lastTagSelected);
  toggleClassTag(id);
  lastTagSelected = id;
  splitFilter(id);
}

// ====================== search ==================

$("#search-list").searcher({
  itemSelector: ".search-item",
  textSelector: "p, span, small",
  inputSelector: "#search-input",

  toggle: function (item, containsText) {
    if (containsText) $(item).fadeIn();
    else $(item).fadeOut();
  },
});

// ========================================================

var cursos = [
  {
    nome: "Análise e Desenvolvimento de sistemas",
    modalidade: "Presencial",
    tipo: "Graduação",
  },
  {
    nome: "Análise e Desenvolvimento de sistemas",
    modalidade: "Semi Presencial",
    tipo: "Graduação",
  },
  {
    nome: "Ciência da Computação",
    modalidade: "Presencial",
    tipo: "Graduação",
  },
  {
    nome: "Agronomia",
    modalidade: "Presencial",
    tipo: "Graduação",
  },
  {
    nome: "Design",
    modalidade: "Presencial Com Ead",
    tipo: "Graduação",
  },
  {
    nome: "Design de Moda",
    modalidade: "Presencial",
    tipo: "Graduação",
  },
  {
    nome: "Ciências Contábeis",
    modalidade: "EAD",
    tipo: "Graduação",
  },
  {
    nome: "Enfermagem",
    modalidade: "Presencial",
    tipo: "Graduação",
  },
  {
    nome: "Engenharia Mecânica",
    modalidade: "Presencial",
    tipo: "Graduação",
  },
  {
    nome: "Biomedicina Estética ",
    modalidade: "Semipresencial",
    tipo: "Pós-Graduação",
  },
  {
    nome: "Cardiologia Veterinária",
    modalidade: "Semipresencial",
    tipo: "Pós-Graduação",
  },
  {
    nome: "Endodontia",
    modalidade: "Presencial",
    tipo: "Pós-Graduação",
  },
  {
    nome: "Iplantodontia",
    modalidade: "Presencial",
    tipo: "Pós-Graduação",
  },
  {
    nome: "Harmonização Orofacial",
    modalidade: "Presencial",
    tipo: "Pós-Graduação",
  },
  {
    nome: "Fisioterapia Dermatofuncional",
    modalidade: "Semiresencial",
    tipo: "Pós-Graduação",
  },
  {
    nome: "Neuropsicologia",
    modalidade: "Presencial",
    tipo: "Pós-Graduação",
  },
  {
    nome: "Educação",
    modalidade: "Presencial",
    tipo: "Mestrado",
  },
  {
    nome: "Psicologia Forense",
    modalidade: "Presencial",
    tipo: "Mestrado",
  },
  {
    nome: "Comunicação e Linguagens",
    modalidade: "Presencial",
    tipo: "Mestrado",
  },
  {
    nome: "Mestrado em Odontologia",
    modalidade: "Precensial",
    tipo: "Mestrado",
  },
  {
    nome: "Saúde da Comunicação Humana",
    modalidade: "Precensial",
    tipo: "Mestrado",
  },
];

for (i in cursos) {
  $("#search-list").append(`
  <div class="search-item">
  <span>${cursos[i]["modalidade"]}</span>
  <p>${cursos[i]["nome"]}</p>
  <!-- tag -->
  <small>${cursos[i]["tipo"]}</small>
  </div>
  `);
}
