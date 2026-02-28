**Ed 1 - Programação Web**
**Aluno:** Jean Saragossa Vieira de Souza Junior

---

# **1 -> Início**

## 1.1 figma

Para iniciar tentei desenhar algo simples, pelo figma, para ter uma base ao criar o site. Busquei uma fonte que eu irei usar no site, selecionei a fonte **Raleway**, encontrei essa fonte sendo recomendada na biblioteca de recursos do figma. Selecionei também imagens como: logo, banners e icone para o site. Retirei todas as imagens do próprio site da tuiuti.

Assim que fui selecionando as imagens eu criei uma pasta para o projeto e a deixei inicialmente no seguinte formato:

```
📁 ED1
/imgs/
  /banners/ => banners que selecionei no site da tuiuti
  /imagens/ => imagens diversas
  /logos/ => logos do site e icone
/js/ => scripts
/css/ => arquivos de estilização
/plugins/ => plugins de jquery
index.html
```

Algumas imagens que eu precisei estavam inseridas pelo css do site, então eu precisei inspecionar a pagina e no *background-image* eu selecionei peguei o link da imagem e a coloquei na pasta */imgs/imagens.

Minha ideia inicial será um site simples para a promoção da tuiuti

###### **Referencias:**

* [Projeto Figma](https://www.figma.com/design/ecqwwUPZIqMdkEomqkTnSm/Ed-1---Programa%C3%A7%C3%A3o-Web?node-id=0-1&t=1TNfxnr1tAZFhXj0-1 "projeto figma") + [google fonts](https://fonts.google.com/selection "google fonts")
* [Fonte - biblioteca de recursos do figma](https://www.figma.com/pt-br/resource-library/melhores-fontes-para-sites/#:~:text=15.%20Object%20Sans-,16.%20Raleway,-17.%20Montserrat "Ir para o link")
* [Imagens em geral - Site Tuiuti](https://tuiuti.edu.br/ "site tuiuti")

---

## 1.2 jquery

Eu fiz um curso + estágio de desenvolvimento web a alguns anos, durante o curso eu tive um aprendizado raso em jquery. Como eu não lembrava de muitas coisas eu parti para estudar as funções e sintaxe do jquery no w3school.

Após relembrar um pouco do jquery eu tive a seguinte ideia:

> Eu quero que meu cabeçalho/menu do site tenha uma logo da tuiuti, só que ela saia do menu e quando o usuário scrollar para baixo ela

Após a formatação do menu eu comecei a fazer a animação da logo.
A ideia inicial foi a que foi para frente, quando está em cima dos banners ela ganha a classe *logo-utp-aberto* e quando rola para baixo ela perde essa classe e é adicionada a classe *logo-utp-fechado.* Algumas outras ideias que eu tive foram descartadas.

```js
//if para validar se o scroll ja passou ou nao do banner
    if ($(window).scrollTop() < tamanhoBanner){
      //aqui remove a classe de fechado e adiciona a aberto
      $("#logo-utp").addClass("logo-utp-aberto")
      $("#logo-utp").removeClass("logo-utp-fechado")
    }else if ($(window).scrollTop() >= tamanhoBanner){
      //aqui faz o contrario pois deixa pequeno ao invés de grande
      $("#logo-utp").addClass("logo-utp-fechado");
      $("#logo-utp").removeClass("logo-utp-aberto");
    };
```

---





Após fazer a logo do menu eu parti para os banners. Para os banners eu usei o plugin **lightslider-master** do jquery.

###### **Referencias**:

* [Jquery](https://jquery.com/)
* [w3school Jquery Scroll](https://www.w3schools.com/jquery/event_scroll.asp)
