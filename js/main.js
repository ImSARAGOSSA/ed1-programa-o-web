
// ================= Menu Logo ======================
// funcao para diminuir a logo ao passar do banner
$(window).ready(function(){

  // variavel pra pegar o tamanho do banner ao carregar o site
  var tamanhoBanner = $(".slider-banners").outerHeight()

  //função que captura o scroll da janela
  $(window).scroll(function () {
    //if para validar se o scroll ja passou ou nao do banner
    if ($(window).scrollTop() < tamanhoBanner){
      //aqui remove a classe de fechado que deixa a logo pequena e adiciona a aberto que deixa grande
      $("#logo-utp").addClass("logo-utp-aberto")
      $("#logo-utp").removeClass("logo-utp-fechado")

      // console.log('fecho') => era para testes
    }else if ($(window).scrollTop() >= tamanhoBanner){
      //aqui faz o contratio pois deixa pequeno ao invés de grande
      $("#logo-utp").addClass("logo-utp-fechado");
      $("#logo-utp").removeClass("logo-utp-aberto");

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