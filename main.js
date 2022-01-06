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


/*chamnado e execultando as função que possuem o evento SCROLL */
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll() /*transição dos conteudos da pagina*/
  backToTop() /*botão para voltar para a seção #home no top */
  
  /*é uma forma mais inteligente de chamar as funções que são executada a partir de um evento. nesse caso as duas funções 
  são execultada quando ocorre o evento "scroll" */
})