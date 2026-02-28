
// ================= Menu Logo ======================
// funcao para diminuir a logo ao passar do banner
$(window).ready(function(){

  // variavel pra pegar o tamanho do banner ao carregar o site
  let tamanhoBanner = $(".slider-banners").outerHeight()
  tamanhoBanner = tamanhoBanner/3

  //função que captura o scroll da janela
  $(window).scroll(function () {
    function scroll () {
      return $(window).scrollTop() 
    }
    //if para validar se o scroll ja passou ou nao do banner
    if (scroll() < tamanhoBanner){
      //aqui remove a classe de fechado que deixa a logo pequena e adiciona a aberto que deixa grande
      $("#logo-utp").addClass("logo-utp-aberto")
      $("#logo-utp").removeClass("logo-utp-fechado")

      // mostra a div atrás do menu
      $("#menu-back").addClass("menu-back-fechado")
      $("#menu-back").removeClass("menu-back-aberto")

      // console.log('fecho') => era para testes
    }else if (scroll() >= tamanhoBanner){
      //aqui faz o contrario pois deixa pequeno ao invés de grande
      $("#logo-utp").addClass("logo-utp-fechado");
      $("#logo-utp").removeClass("logo-utp-aberto");

      // mostra a div atrás do menu 
      $("#menu-back").addClass("menu-back-aberto")
      $("#menu-back").removeClass("menu-back-fechado")

      // console.log('abriu em:', tamanhoBanner) => era para testes
    };
  });
});

$(document).ready(function() {
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
// ========================================================