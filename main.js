//DOM Document Object Model para acessar as propriedades do documento

// para abrir e fechar o menu da pagina web quando clicar nos icons do menu
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  // para ("tipo_variavel" "nomeVariavelQualquer" of "Referencia_De_UmaVariavel_Exisnte_Do_MesmoTipo")
  element.addEventListener(
    'click', // o EVENTO DESEJADO
    function () {
      // declarando função sem nome
      nav.classList.toggle('show')
    }
  )
}

// quando clicar em qualquer item linkado do menu, feche o menu
const linksMenu = document.querySelectorAll('#header nav .menu ul li a')

for (const links of linksMenu) {
  links.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

//mudar o header da página quando der scroll
function changeHeaderWhenScroll() {
  const header = document.querySelector('#header')
  const alturadoHeader = header.offsetHeight

  if (window.scrollY >= alturadoHeader) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}





//SWIPER
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1, /*QTD de slides que o usuario vai visualizar*/
  pagination: {
    el: '.swiper-pagination'
  },
 mousewheel: true, /*da next quando faz a rolagem do mouse*/
 keyboard: true,
 breakpoints:{
  767: { /*quando a width for 767 ou maior:*/
    slidesPerView: 2, /*deixar visivel dois slides .card */
    setWrapperSize: true
  }
 }
})

/* ScrollReveal: Mostrar elementos quando der scroll na página */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials
  #contact .text, #contact .links,
  footer .brand, footer .social
  `,
  { interval: 100 }
)

/*botão voltar para o top*/
function backToTop() {
  const backToTopButton = document.querySelector('.back-to-top')
  
  if(window.scrollY >= 560){
    backToTopButton.classList.add('show')
  }else{
    backToTopButton.classList.remove('show')
  }
}

/* Menu ativo conforme a seção visível na página */
/* Menu ativo conforme a seção visível na página 1:09:00 parte video*/

const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
  const checkpoint = ((window.innerHeight / 8) * 4) + window.pageYOffset ;
  /* .pageYOffset - retorna o número de pixels que o documento
     está rolando no momento ao longo do eixo vertical.
     
     window.innerHeight- Altura (em pixels) da janela de visualização
     do navegador, incluindo, se renderizado, a barra de rolagem horizontal.
     */

  for (const section of sections) {
    const sectionTop = section.offsetTop 
    /*o .offsetTop acima - é um método apenas de leitura que retorna a 
    medida, em pixels, da distância do elemento atual em relação ao topo do*/
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')
    /*section.getAttribute('id') - está capturando os valores dos <Section> */

    const checkpointStart = checkpoint >= sectionTop /* o inicio da seção */
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight /* o fim da seção */

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

/* When Scroll */
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
  activateMenuAtCurrentSection()
})

