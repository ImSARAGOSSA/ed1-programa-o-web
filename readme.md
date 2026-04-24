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

- [Projeto Figma](https://www.figma.com/design/ecqwwUPZIqMdkEomqkTnSm/Ed-1---Programa%C3%A7%C3%A3o-Web?node-id=0-1&t=1TNfxnr1tAZFhXj0-1) + [google fonts](https://fonts.google.com/selection)
- [Fonte - biblioteca de recursos do figma](https://www.figma.com/pt-br/resource-library/melhores-fontes-para-sites/#:~:text=15.%20Object%20Sans-,16.%20Raleway,-17.%20Montserrat)
- [Imagens em geral - Site Tuiuti](https://tuiuti.edu.br/)

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

- [Jquery](https://jquery.com/)
- [w3school Jquery Scroll](https://www.w3schools.com/jquery/event_scroll.asp)

## 1.3 -> Cards

Agora foi a hora de montar a estrutura do site e estilizar com css, eu optei por nomes de classes mais simples e indicativas para facilitar a visualização do código.  

```html

<main>

	<div id="inicio"></div>

		<!--Slider Dos Banners--->

		<section id="banners-section">

			<div id="banners" class="slider-banners">

				<div>

					<img src="imgs/banners/banner-ead.jpg" alt="" />

				</div>

				<div>

					<img src="imgs/banners/banner-pos.jpg" alt="" />

				</div>

				<div>

					<img src="imgs/banners/banner-vestibular.webp" alt="" />

				</div>

			</div>

		</section>  
...

```

Após fazer o banner e menu eu fiz uma seção de cards que abre ao clicar, eu usei jquery para a acão nos cliques (abrir e fechar) dando um toogle na classe que deixa ele aberto.

## 1.4 -> Pesquisa

Construi a parte da criação da pesquisa de cursos, eu utilizei o plugin "jquery-searcher-0.3.0" feito pela comunidade do jquery. Eu fiz uma seleção de categorias que colocam o texto dentro do input e usam o trigger com evento de input para o plugin pesquisar.  

```javascript
// essa parte primeiro pega o id do span clicado e depois tira o texto "tag-" e utiliza o texto que sobra 
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
```

###### **Referencias**:

- [Jquery](https://api.jquery.com/trigger/)
- [w3school Jquery](https://www.w3schools.com/jquery)

## 1.5 -> Footer

Eu criei um footer bem simples, porém funcional que possui a logo, endereço e links para navegação

# **2 -> Página de ajuda **

## 1.1 -> Ideia

A página de ajuda vai ser para o usuário entrar em contato via email ou rede sociais da tuiuti  


## 1.2 -> Construção

Irei reutilizar o menu flutuante e o footer da nossa index 