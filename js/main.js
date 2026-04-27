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

// fazendo o slider com as imagens de banner
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

// definindo o primeiro card que vai abrir
let lastOpenDivSobre = "graduacao";

// função de tar toogle nas classes dentro do card
function toogleClassDivSobre(id) {
  $(`#${id}`).toggleClass("div-sobre-aberto");
  $(`#${id}-div-2`).toggleClass("div-sobre-texto-aberto");
  $(`#${id}-div-1`).toggleClass("div-sobre-select-fechado");
}

// função que abre o card e fecha o ultimo que estava abert
function abriDivSobre(id) {
  // fecha o último
  toogleClassDivSobre(lastOpenDivSobre);
  // abre o selecionado
  toogleClassDivSobre(id);
  // salva o que foi aberto
  lastOpenDivSobre = id;
}

// ====================== tags select ==================

// variavel pra armazenar a ultima tag selecionada
let lastTagSelected = "tag-none";
// varivel pra armazenar a o valor da varivel acima depois de dar slice
let filter = "";

// função de limpar a lastTagSelected
function chopFilter(id) {
  // filter cortando o texto "tag-" do id da tag selecionada
  filter = lastTagSelected.slice(4)
  // array com os possíveis valores para escrever no input
  var filterAdaptado = {
    "graduacao":"Graduação",
    "pos": "Pós-Graduação",
    "mestrado": "Mestrado"
  }
  // if pra verificar o filter e dentro do filter colocar o texto tratado dentro de filterAdaptado
  if (filter == "graduacao" || filter == "pos" || filter == "mestrado"){
    filter = filterAdaptado[filter]
  }

  // evento de simular input com o filto
  $("#search-input").val(filter).trigger("input");
}

// funcao de dat toogle na classe tag-selected
function toggleClassTag(id) {
  $(`#${id}`).toggleClass("tag-selected");
}

// funcao de selecionar a tag e tirar a selecao da ultima
function selectTag(id) {
  // tira a classe de seleciona
  toggleClassTag(lastTagSelected);
  // coloca a classe na nova
  toggleClassTag(id);
  // atualiza a variavel pra conter o valor da categoria selecionada agora
  lastTagSelected = id;
  // coloca no input
  chopFilter(id);
}

// ====================== search ==================

// jquery do plugin jquery searcher 
$("#search-list").searcher({
  // seletor de itens
  itemSelector: ".search-item",
  // onde procurar textos
  textSelector: "p, span, small",
  // input pra pesquisar
  inputSelector: "#search-input",

  toggle: function (item, containsText) {
    // se tem o texto pesquisado ele aparece
    if (containsText) $(item).fadeIn();
    // se nao tem ele some
    else $(item).fadeOut();
  },
});

// ========================================================
// array pra guardar todos os cursos
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

// loop pra colocar todos os cursos
for (i in cursos) {
  // dentro de search-list coloca o novo item com os textos do curso atual da contagem
  $("#search-list").append(`
  <div class="search-item">
  <span>${cursos[i]["modalidade"]}</span>
  <p>${cursos[i]["nome"]}</p>
  <!-- tag -->
  <small>${cursos[i]["tipo"]}</small>
  </div>
  `);
}
