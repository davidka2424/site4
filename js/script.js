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

// В файле script.js добавляем:

// Данные статей (можно вынести в отдельный JSON файл)
const articlesData = [
    {
        id: 1,
        title: "Что важно при выборе окон? Полное руководство",
        image: "images/article7.jpg",
        excerpt: "Ключевые критерии выбора качественных пластиковых окон для дома и квартиры",
        date: "05.07.2023",
        content: `
            <p>Выбирая пластиковые окна, необходимо учитывать множество нюансов, которые в конечном счете влияют на процесс эксплуатации.</p>
    
            <h4>Качество и надёжность</h4>    
            <ul>
                <li><strong>Не гонитесь за дешевизной</strong> - низкая цена часто означает плохое качество, и через несколько лет может потребоваться замена.</li>
                <li><strong>Выбирайте проверенных производителей</strong> - крупные компании предлагают продукцию, соответствующую европейским стандартам.</li>
                <li><strong>Обратите внимание на фурнитуру</strong> - только качественные механизмы обеспечат долгую и комфортную эксплуатацию.</li>
            </ul>
    
            <h4>Выбор профиля</h4>
            <p>Профиль определяет тепловые характеристики окна. Для хорошей теплоизоляции выбирайте:</p>
            <ul>
                <li>Многокамерный профиль (не менее 5 камер)</li>
                <li>В сочетании с двухкамерным стеклопакетом</li>
                <li>С дополнительным утепляющим контуром</li>
            </ul>
    
            <h4>Выбор стеклопакета</h4>
            <p>В разных ситуациях требуются разные решения:</p>
            <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
                <tr style="background-color: #f8f9fa;">
                    <th style="padding: 10px; text-align: left; border: 1px solid #ddd;">Ситуация</th>
                    <th style="padding: 10px; text-align: left; border: 1px solid #ddd;">Рекомендация</th>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid #ddd;">Шумная местность</td>
                    <td style="padding: 10px; border: 1px solid #ddd;">Шумопоглощающий двухкамерный стеклопакет</td>
                </tr>
                <tr style="background-color: #f8f9fa;">
                    <td style="padding: 10px; border: 1px solid #ddd;">Яркое солнце</td>
                    <td style="padding: 10px; border: 1px solid #ddd;">Стеклопакет с солнцезащитным покрытием</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid #ddd;">Холодный климат</td>
                    <td style="padding: 10px; border: 1px solid #ddd;">Энергосберегающий стеклопакет с низкоэмиссионным покрытием</td>
                </tr>
            </table>
    
            <h4>Конфигурация оконной конструкции</h4>
            <p>Важные правила при выборе конструкции:</p>
            <ul>
                <li>Сочетайте глухие и открывающиеся створки</li>
                <li>Обеспечьте возможность проветривания (во избежание конденсата)</li>
                <li>Продумайте удобство мытья стекол</li>
                <li>Учитывайте мебель и интерьер при выборе способа открывания</li>
            </ul>
    
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h4 style="margin-top: 0;">Безопасность окон</h4>
                <p><strong>Противовзломная фурнитура</strong> - рекомендуется для первых этажей и частных домов.</p>
                <p><strong>Ручки с ключами</strong> - обязательное решение для семей с маленькими детьми.</p>
                <p><strong>Ударопрочные стекла</strong> - дополнительная защита от повреждений.</p>
            </div>
    
            <p>Наши специалисты помогут подобрать оптимальное решение с учетом всех ваших потребностей и особенностей помещения. Закажите бесплатную консультацию прямо сейчас!</p>
        `
    },
    
    {
        id: 2,
        title: "Выбор фурнитуры",
        image: "images/article1.jpg",
        excerpt: "Какую фурнитуру лучше выбрать для окон в квартиру: G-U или МАКО?",
        content: "<p>Ответ: Окна надо выбирать не по марке фурнитуры. Окно - это сложное техническое изделие, качество которого зависит от тысячи факторов. И отличия, которые вносят фурнитура или профиль, при условии, что они 'правильные', (ROTO-NT и MACO - 'правильные'!), на порядки меньше других факторов: замерщиков, производителей окошек, комплектовщиков заказов, монтажников... Почему мы и рекомендуем всем конечным потребителям выбирать оконную фирму (при условии, конечно, что она работает на 'правильных' комплектующих), а не сами комплектующие.<br></p>",
        date: "15.05.2023"
    },
    {
        id: 3,
        title: "Утепление балкона",
        image: "images/article2.png",
        excerpt: "Планирую утеплить балкон, подскажите вариант подходящего остекления.",
        content: "<p>Ответ: При утеплении нужно учитывать ТЕПЛОВОЙ БАЛАНС ПОМЕЩЕНИЯ: сколько тепла подаётся (и за какую цену) и сколько тепла теряется через остекление, 'утепление' и на вентиляционный воздух. В среднем около 15 кв.м холодных стен, утепленные 1,5 - 2,5 (м2•°С)/Вт, и около 10 кв. м остекления с максимальным коэффициентом сопротивления теплопередаче аж 0,8 (м2•°С)/Вт будут нуждатся в теплом поле мощностью от 1 000 Вт и российской зимой съедать на электроотопление около 2000 рублей в месяц. Не считая 1000 рублей на обогрев вентиляционного воздуха. До 1995 года жилые дома строились согласно действовавшим нормам, с сопротивлением теплопередаче стен, не превышающем 1,0 (м2•°С)/Вт (k = 1,0 Вт/(м2• °С)). Согласно современным нормам требуемое сопротивление теплопередаче стен составляет 3,13 (м2•°С)/Вт (k = 0,32 Вт/(м2•°С)), т.е. стена ВСЕГДА 'теплее' минимум в 3-5 раз самого лучшего окна, и никакое остекление не создаст микроклимат жилого помещения. А после вложения кучи денег зимой получается ... обычный балкон. После присоединения балкона к квартире - конвекционная зона с полным дискомфортом (проще говоря: 'от окна сильно дует!'). Даже с принудительной вентиляцией. Для немецких светопрозрачных витражных конструкций нужен немецкий климат (+2 зимой). Одно преимущество - шумоизоляция станет просто супер, если сохранить существующую балконную дверь.</p>",
        date: "10.12.2022"
    },
    {
        id: 4,
        title: "Как продлить срок службы?",
        image: "images/article3.png",
        excerpt: "Как продлить срок службы ПВХ окна?",
        content: "<p>Ответ: Окна, как любой другой предмет интерьера, требуют ухода. Для этих целей существуют комплекты по уходу за окнами производства Германии и России. Обычно в комплект входит: очистительное молочко, средство для ухода за уплотнителями и масло для смазки фурнитуры. Очистительное молочко: не содержит растворителя. Используется для очистки окон, дверей и жалюзей из белого ПВХ, анодированного алюминия. Не оставляет разводы, антистатично. Средство для ухода за уплотнителями: для профилактического ухода за резиной. Смягчает резину, придавая ей свойства, летом не прилипать, а зимой не примерзать к профилю. Предотвращает растрескивание уплотнителей. Масло для фурнитуры: для ухода за фурнитурой и шарнирами, улучшает скольжение деталей, предотвращает быстрый износ и способствует антикоррозийной защите. Снижает усилие на оконной ручке.</p>",
        date: "10.12.2022"
    },
    {
        id: 5,
        title: "Шум и ПВХ окна",
        image: "images/article4.png",
        excerpt: "Исчезнет ли уличный шум, если поставить окна ПВХ?",
        content: "<p>Ответ: Полностью шум не исчезнет, но значительно уменьшится, примерно на 30 дБа когда окно закрыто и на 15 дБа в режиме 'щелевого микропроветривания'. Параметры акустических свойст остекления оцениваются единым числовым индексом Rw(C:Сtr) установленным в стандарте EN ISO 717-1 и, например, видно что нет заметной разницы по шумоизоляции между однокамерным стеклопакетом 4-16-4 Rw=30 дБа и двухкамерным 4-10-4-10 Rw=31 дБа, а вот разница в 5 дБа со стеклопакетом 6-12-4-14-4 Rw=36 дБа уже отчетливо слышна! Стеклопакет с шумозащитным многослойным стеклом обладает звукоизоляцией Rw от 40 дБ для 6-12-44.2, до 44 дБ для 10-12-66.2 и 50 дБ для 44.2-20-66.2. А снижение на 10 дБ эквивалентно 50% уменьшению субъективно воспринимаемой громкости звука, снижение на 20 дБ эквивалентно 75% уменьшению субъективно воспринимаемой громкости звука.</p>",
        date: "10.12.2022"
    },
    {
        id: 6,
        title: "Отливы для пластиковых окон: полный гид по выбору и установке",
        image: "images/article8.jpg",
        excerpt: "Все что нужно знать о наружных отливах: виды, материалы, монтаж и важные нюансы выбора",
        date: "15.07.2023",
        content: `
            <h4>Что такое оконные отливы и зачем они нужны?</h4>
            <p>Отливы – это специальные профили из пластика или металла, которые монтируются на нижнюю часть оконной конструкции снаружи здания. Они выполняют две важные функции:</p>
            
            <ul>
                <li><strong>Защитную</strong> - оберегают фасад и оконный проем от дождя, снега и других атмосферных воздействий</li>
                <li><strong>Эстетическую</strong> - придают окну завершенный внешний вид</li>
            </ul>
        
            <h4>Основные параметры отливов</h4>
            <p>Современные отливы различаются по:</p>
            
            <div style="display: flex; flex-wrap: wrap; gap: 15px; margin: 20px 0;">
                <div style="flex: 1; min-width: 250px; background: #f8f9fa; padding: 15px; border-radius: 8px;">
                    <h5 style="margin-top: 0;">Размеры</h5>
                    <ul style="margin-bottom: 0;">
                        <li>Ширина: 90-400 мм</li>
                        <li>Длина: до 3 метров</li>
                    </ul>
                </div>
                
                <div style="flex: 1; min-width: 250px; background: #f8f9fa; padding: 15px; border-radius: 8px;">
                    <h5 style="margin-top: 0;">Материалы</h5>
                    <ul style="margin-bottom: 0;">
                        <li>Алюминий</li>
                        <li>Оцинкованная сталь</li>
                        <li>Пластик</li>
                    </ul>
                </div>
                
                <div style="flex: 1; min-width: 250px; background: #f8f9fa; padding: 15px; border-radius: 8px;">
                    <h5 style="margin-top: 0;">Покрытие</h5>
                    <ul style="margin-bottom: 0;">
                        <li>Хромирование</li>
                        <li>Полимерное</li>
                        <li>Порошковая окраска</li>
                    </ul>
                </div>
            </div>
    
            <h4>Виды отливов и их особенности</h4>
    
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
                <h5 style="margin-top: 0; color: var(--primary-color);">Алюминиевые отливы</h5>
                <ul>
                    <li>Коррозионностойкие</li>
                    <li>Универсальные - подходят для любых окон</li>
                    <li>Часто покрываются хромом для дополнительной защиты</li>
                    <li>Оптимальное соотношение цены и качества</li>
                </ul>
            </div>
    
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
                <h5 style="margin-top: 0; color: var(--primary-color);">Оцинкованные стальные отливы</h5>
                <ul>
                    <li>Особая прочность и жесткость</li>
                    <li>Минимальная вибрация при ветре</li>
                    <li>Отличная защита от ржавчины</li>
                    <li>Доступны в различных цветах (чаще всего белые)</li>
                </ul>
            </div>
    
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
                <h5 style="margin-top: 0; color: var(--primary-color);">Полиэстеровые (пластиковые) отливы</h5>
                <ul>
                    <li>Устойчивость к перепадам температур</li>
                    <li>Срок службы более 20 лет</li>
                    <li>Богатая цветовая палитра</li>
                    <li>Устойчивость к выцветанию</li>
                </ul>
            </div>
    
            <h4>Почему важно правильно установить отливы?</h4>
            <p>Качественный монтаж отливов обеспечивает:</p>
            <ul>
                <li>Надежную защиту монтажного шва от влаги</li>
                <li>Правильную пароизоляцию оконной конструкции</li>
                <li>Повышение энергоэффективности окна</li>
                <li>Долговечность всей оконной системы</li>
            </ul>
    
            <div style="background-color: var(--primary-color); color: white; padding: 20px; border-radius: 8px; margin-top: 30px;">
                <h4 style="margin-top: 0;">Профессиональный совет</h4>
                <p>Для максимальной защиты рекомендуем выбирать отливы с капельником - специальным изгибом на краю, который предотвращает стекание воды на фасад.</p>
                <p>Наши специалисты помогут подобрать оптимальный вариант отлива для ваших окон и выполнят монтаж с гарантией качества!</p>
            </div>
        `
    },
    {
        id: 7,
        title: "Герметики для пластиковых окон: виды и особенности применения",
        image: "images/article8.png",
        excerpt: "Полный обзор герметиков для монтажа и ремонта пластиковых окон - как выбрать лучший вариант",
        date: "25.07.2023",
        content: `
            <h4>Для чего нужны герметики при установке окон?</h4>
            <p>Герметизирующие составы используются для заполнения пустот и щелей при монтаже пластиковых окон. Они обеспечивают:</p>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 15px; margin: 20px 0;">
                <div style="background: #f8f9fa; padding: 15px; border-radius: 8px;">
                    <h5 style="margin-top: 0;">Теплоизоляцию</h5>
                    <p>Защищают от сквозняков и теплопотерь</p>
                </div>
                <div style="background: #f8f9fa; padding: 15px; border-radius: 8px;">
                    <h5 style="margin-top: 0;">Гидроизоляцию</h5>
                    <p>Предотвращают проникновение влаги</p>
                </div>
                <div style="background: #f8f9fa; padding: 15px; border-radius: 8px;">
                    <h5 style="margin-top: 0;">Шумоизоляцию</h5>
                    <p>Снижают уровень уличного шума</p>
                </div>
            </div>
    
            <img src="images/sealant-application.jpg" alt="Нанесение герметика на окно" style="max-width: 100%; height: auto; margin: 15px 0; border-radius: 8px;">
    
            <h4>Основные виды герметиков</h4>
    
            <div style="background: #f1f8fe; padding: 20px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #4a90e2;">
                <h5 style="margin-top: 0; color: #2c3e50;">Силиконовые герметики</h5>
                <ul>
                    <li>Высокая эластичность - не дает усадки со временем</li>
                    <li>Устойчивость к УФ-излучению - не меняет цвет</li>
                    <li>Отличная адгезия к ПВХ, стеклу и металлу</li>
                    <li>Рабочий диапазон температур: -50°C до +200°C</li>
                    <li>Срок службы: 15-20 лет</li>
                </ul>
                <p style="font-style: italic; margin-bottom: 0;">Рекомендуем для наружных работ и мест с повышенной влажностью</p>
            </div>
    
            <div style="background: #f0f8f0; padding: 20px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #4CAF50;">
                <h5 style="margin-top: 0; color: #2c3e50;">Акриловые герметики</h5>
                <ul>
                    <li>Экологически безопасны - нетоксичны</li>
                    <li>Не имеют резкого запаха</li>
                    <li>Легко окрашиваются после нанесения</li>
                    <li>Просты в применении и уходе</li>
                    <li>Срок службы: 10-15 лет</li>
                </ul>
                <p style="font-style: italic; margin-bottom: 0;">Идеальны для внутренних работ и жилых помещений</p>
            </div>
    
            <div style="background: #fef6f6; padding: 20px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #f44336;">
                <h5 style="margin-top: 0; color: #2c3e50;">Синтетические герметики (полиуретановые)</h5>
                <ul>
                    <li>Легко удаляются водой до застывания</li>
                    <li>После высыхания становятся эластичными</li>
                    <li>Устойчивы к влаге и моющим средствам</li>
                    <li>Отлично защищают от продувания</li>
                    <li>Срок службы: 12-18 лет</li>
                </ul>
                <p style="font-style: italic; margin-bottom: 0;">Особенно эффективны для герметизации откосов</p>
            </div>
    
            <h4>Как правильно выбрать герметик?</h4>
            <p>При выборе учитывайте следующие критерии:</p>
            
            <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
                <thead>
                    <tr style="background-color: var(--primary-color); color: white;">
                        <th style="padding: 12px; text-align: left;">Критерий</th>
                        <th style="padding: 12px; text-align: left;">Рекомендация</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 12px;">Место применения</td>
                        <td style="padding: 12px;">Силикон - для улицы, акрил - для помещений</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd; background-color: #f8f9fa;">
                        <td style="padding: 12px;">Температурные условия</td>
                        <td style="padding: 12px;">Для экстремальных температур - только силикон</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 12px;">Необходимость окрашивания</td>
                        <td style="padding: 12px;">Акриловые составы лучше поддаются окраске</td>
                    </tr>
                    <tr style="background-color: #f8f9fa;">
                        <td style="padding: 12px;">Срок службы</td>
                        <td style="padding: 12px;">Силиконовые наиболее долговечны</td>
                    </tr>
                </tbody>
            </table>
    
            <div style="background-color: var(--primary-color); color: white; padding: 20px; border-radius: 8px; margin-top: 30px;">
                <h4 style="margin-top: 0;">Профессиональный совет</h4>
                <p>Для комплексной защиты рекомендуем:</p>
                <ol style="margin-bottom: 0;">
                    <li>Использовать монтажную пену для первичного заполнения больших пустот</li>
                    <li>Наносить силиконовый герметик для наружной защиты</li>
                    <li>Завершать работы акриловым составом внутри помещения</li>
                </ol>
            </div>
    
            <p style="margin-top: 30px;">В компании "ОкнаТек" вы найдете все необходимые герметики для профессионального монтажа окон. Наши специалисты помогут подобрать оптимальный состав для вашего случая и дадут подробные рекомендации по применению.</p>
        `
    },
    {
        id: 8,
        title: "Ремонт окон после пожара: полное руководство",
        image: "images/article6.jpg",
        excerpt: "Как правильно восстановить окна после пожара - от демонтажа до установки новых конструкций",
        date: "20.06.2023",
        content: `
            <h4>Последствия пожара для окон</h4>
            <p>Пожар, как и любая другая стихия, приносит с собой массу разрушений. Пострадавшая от огня квартира потребует от вас много сил и средств на ремонтные работы и восстановление. Прежде, чем его начинать, стоит избавиться от всех вещей, так или иначе задетых в пожаре – на свалку пойдут напольные, потолочные покрытия, межкомнатные перегородки и окна. Жалеть о них не нужно:</p>
            
            <ul>
                <li>во-первых, под воздействием огня материалы, скорее всего, уже утратили свой первоначальный вид и свойства;</li>
                <li>во-вторых, и что намного важнее, все они впитали в себя запах гари и сажу, вывести которые будет не так-то просто, если не невозможно.</li>
            </ul>
    
            <h4>Демонтируем окна</h4>
            <p>Итак, с чего начать ремонт окон, пострадавших в пожаре? Сначала вам придется демонтировать обгоревшие оконные конструкции. Сделать это можно двумя способами – с сохранением самой рамы либо нет. Если вы хотите сохранить оконный профиль, все работы важно выполнять крайне аккуратно, чтобы в дальнейшем вынутый оконный профиль можно было как-то еще эксплуатировать, например, на даче.</p>
            
            <p>Если вы снимаете окна целиком, то начинать следует с демонтажа оконных створок. После этого удаляется подоконник и отливы. Следующим этапом вынимается само окно, осуществляется демонтаж откосов и утеплителя.</p>
    
            <h4>Подготовка проема</h4>
            <p>Теперь получившийся оконный проем нужно очистить и выровнять поверхность. Если работы на этом этапе провести некачественно, в дальнейшем может существенно снизиться срок эксплуатации стеклопакета, а также будет нарушена его герметичность, что приведет к возникновению постоянных сквозняков и снижению теплоизоляции помещения.</p>
    
            <h4>Порядок установки новых окон</h4>
            <p>Конечно, установку пластиковых стеклопакетов лучше всего доверить профессионалам - так вы избежите множества ошибок в работе, допущенных из-за незнания важных нюансов. Однако, если вы все же планируете монтировать окна самостоятельно, следует помнить некоторые правила:</p>
    
            <ul>
                <li><strong>Замеры:</strong> проводятся в два этапа – внутренний и наружный. Таким образом рассчитывается глубина оконного проема.</li>
                
                <li><strong>Теплоизоляция:</strong> стык между стеной и оконным проемом герметизируется строительной монтажной пеной. Обратите внимание, что стеклопакет должен быть установлен на специальные несущие колодки.</li>
                
                <li><strong>Безопасность:</strong> масса окна может достигать 150 кг, а это значит, что крепление на дюбели или, тем более, опора на монтажную пену здесь недопустима.</li>
                
                <li><strong>Завершение:</strong> монтаж подоконника и регуляция оконной фурнитуры. Также необходимо удалить защитную пленку - под воздействием солнечного света она разрушается, превращаясь в трудноудаляемый слой.</li>
            </ul>
    
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h4 style="margin-top: 0;">Важно!</h4>
                <p>Процесс самостоятельной установки окон достаточно трудоемок и обладает массой «подводных камней». Чтобы сохранить свои силы, время и деньги, рекомендуем обращаться к профессионалам — они помогут отремонтировать оконные конструкции даже после серьезного пожара.</p>
            </div>
    
            <p>Наши специалисты имеют опыт работы с поврежденными пожаром конструкциями и помогут подобрать оптимальное решение для вашего случая. Звоните для консультации!</p>
        `
    },

    

    // Добавьте остальные статьи
];

// Функция для отрисовки карточек статей
function renderArticles() {
    const track = document.querySelector('.articles__track');
    
    articlesData.forEach(article => {
        const articleCard = document.createElement('div');
        articleCard.className = 'article-card';
        articleCard.innerHTML = `
            <div class="article-card__image">
                <img src="${article.image}" alt="${article.title}">
            </div>
            <div class="article-card__content">
                <h3 class="article-card__title">${article.title}</h3>
                <p class="article-card__excerpt">${article.excerpt}</p>
                <div class="article-card__date">${article.date}</div>
            </div>
        `;
        
        articleCard.addEventListener('click', () => openArticleModal(article));
        track.appendChild(articleCard);
    });
}

// Функция для открытия модального окна с статьей
function openArticleModal(article) {
    const modal = document.getElementById('articleModal');
    document.getElementById('modalArticleImage').src = article.image;
    document.getElementById('modalArticleImage').alt = article.title;
    document.getElementById('modalArticleTitle').textContent = article.title;
    document.getElementById('modalArticleContent').innerHTML = article.content;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Закрытие модального окна
function closeArticleModal() {
    const modal = document.getElementById('articleModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Инициализация слайдера
function initSlider() {
    const track = document.querySelector('.articles__track');
    const prevBtn = document.querySelector('.slider-arrow--prev');
    const nextBtn = document.querySelector('.slider-arrow--next');
    
    prevBtn.addEventListener('click', () => {
        track.scrollBy({ left: -300, behavior: 'smooth' });
    });
    
    nextBtn.addEventListener('click', () => {
        track.scrollBy({ left: 300, behavior: 'smooth' });
    });
}

// Закрытие по клику на крестик
document.querySelector('.article-modal__close').addEventListener('click', closeArticleModal);

// Закрытие по клику вне модального окна
document.getElementById('articleModal').addEventListener('click', (e) => {
    if (e.target === document.getElementById('articleModal')) {
        closeArticleModal();
    }
});

// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', () => {
    renderArticles();
    initSlider();
});