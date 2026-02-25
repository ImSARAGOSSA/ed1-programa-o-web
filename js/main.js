
// ================= Menu Logo ======================
// funcao para diminuir a logo ao passar do header
$(document).ready(function(){

  // variavel pra pegar o tamanho do header ao carregar o site
  var tamanhoHeader = $("#banners").outerHeight()

  //função que captura o scroll da janela
  $(window).scroll(function () {
    //if para validar se o scroll ja passou ou nao do header
    if ($(window).scrollTop() < tamanhoHeader){
      //aqui remove a classe de fechado que deixa a logo pequena e adiciona a aberto que deixa grande
      $("#logo-utp").addClass("logo-utp-aberto")
      $("#logo-utp").removeClass("logo-utp-fechado")

      // console.log('fecho') => era para testes
    }else if ($(window).scrollTop() >= tamanhoHeader){
      //aqui faz o contratio pois deixa pequeno ao invés de grande
      $("#logo-utp").addClass("logo-utp-fechado");
      $("#logo-utp").removeClass("logo-utp-aberto");

      // console.log('abriu') => era para testes
    };
  });
});

$(".slick-banners").slick({})
// ========================================================