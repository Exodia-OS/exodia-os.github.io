/*
let currentSlide = 0;
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;

  const showSlide = (index) => {
    if (index < 0) {
      currentSlide = totalSlides - 1;
    } else if (index >= totalSlides) {
      currentSlide = 0;
    } else {
      currentSlide = index;
    }

    const offset = -100 * currentSlide;
    document.querySelector('.slider').style.transform = `translateX(${offset}%)`;
    updateSliderNav();
  };

  const updateSliderNav = () => {
    document.querySelectorAll('.slider-nav button').forEach((button, index) => {
      if (index === currentSlide) {
        button.classList.add('active');
      } else {
        button.classList.remove('active');
      }
    });
  };

  document.querySelector('.prev').addEventListener('click', () => showSlide(currentSlide - 1));
  document.querySelector('.next').addEventListener('click', () => showSlide(currentSlide + 1));

  // Automatic slideshow
  setInterval(() => {
    showSlide(currentSlide + 1);
  }, 3000); // Change slide every 3 seconds



*/





  $(document).ready(function() {
    const slides = $('.slide');
    const bulletContainer = $('.slider-bullets');
    const prevArrow = $('.prev-arrow');
    const nextArrow = $('.next-arrow');
    const slideWidth = slides.first().width();
    let currentSlide = 0;

    // Create bullets
    slides.each(function(index) {
      bulletContainer.append(`<div class="bullet" data-index="${index}"></div>`);
    });

    const bullets = $('.bullet');

    // Initialize active bullet
    bullets.eq(currentSlide).addClass('active');

    // Function to move to a specific slide
    function goToSlide(index) {
      if (index >= 0 && index < slides.length) {
        $('.slider').css('transform', `translateX(-${index * slideWidth}px)`);
        currentSlide = index;
        bullets.removeClass('active');
        bullets.eq(currentSlide).addClass('active');
      }
    }

    // Event listeners for bullets
    bullets.on('click', function() {
      const index = $(this).data('index');
      goToSlide(index);
    });

    // Event listener for previous arrow
    prevArrow.on('click', function() {
      goToSlide(currentSlide - 1);
    });

    // Event listener for next arrow
    nextArrow.on('click', function() {
      goToSlide(currentSlide + 1);
    });
  });



















  $(document).ready(function(){
    var currentIndex = 0;
    var slides = $('.custom-slides img');
    var totalSlides = slides.length;
  
    $('.custom-next').click(function(){
      goToSlide(currentIndex + 1);
    });
  
    $('.custom-prev').click(function(){
      goToSlide(currentIndex - 1);
    });
  
    function goToSlide(index) {
      if (index < 0) {
        index = totalSlides - 1;
      } else if (index >= totalSlides) {
        index = 0;
      }
      slides.hide();
      slides.eq(index).fadeIn();
      currentIndex = index;
    }
  });
  