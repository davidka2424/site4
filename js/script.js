document.addEventListener('DOMContentLoaded', function() {
    // Мобильное меню
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav');
    
    burger.addEventListener('click', function() {
        this.classList.toggle('active');
        nav.classList.toggle('active');
    });
    
    // Плавная прокрутка для якорных ссылок
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            if (burger.classList.contains('active')) {
                burger.classList.remove('active');
                nav.classList.remove('active');
            }
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Активируем анимацию для целевого раздела
                setTimeout(() => {
                    animateSection(targetElement);
                }, 1000);
            }
        });
    });
    
    // Раскрытие деталей товара
    const detailButtons = document.querySelectorAll('.product-card__details-btn');
    
    detailButtons.forEach(button => {
        button.addEventListener('click', function() {
            const card = this.closest('.product-card');
            const details = card.querySelector('.product-card__details');
            
            details.classList.toggle('active');
            
            if (details.classList.contains('active')) {
                this.textContent = 'Свернуть';
            } else {
                this.textContent = 'Подробнее';
            }
        });
    });
    
    // Фиксированная шапка при скролле
    const header = document.querySelector('.header');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            header.classList.remove('scroll-up');
        }
        
        if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
            header.classList.remove('scroll-up');
            header.classList.add('scroll-down');
        }
        
        if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
            header.classList.remove('scroll-down');
            header.classList.add('scroll-up');
        }
        
        lastScroll = currentScroll;
    });
    
    // Новая логика анимаций при скролле
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('[data-animated]');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition && !element.classList.contains('animated')) {
                element.classList.add('animated');
            }
        });
    };
    
    // Анимация секции при ручной навигации
    const animateSection = function(section) {
        const animatedElements = section.querySelectorAll('[data-animated]');
        animatedElements.forEach(el => {
            if (!el.classList.contains('animated')) {
                el.classList.add('animated');
            }
        });
    };
    
    // Инициализация анимаций при загрузке
    document.querySelectorAll('section').forEach(section => {
        const animatedElements = section.querySelectorAll('.section-title, .products__grid, .about__content, .reviews__slider, .product-card');
        animatedElements.forEach(el => {
            el.setAttribute('data-animated', 'true');
        });
    });
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Запустить при загрузке
});