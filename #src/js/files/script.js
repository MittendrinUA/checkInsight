// Timer

    // Настраиваем изменение окончания слов (часов, минут, секунд)
let decCache = [],
    decCases = [2, 0, 1, 1, 1, 2];

function decOfNum(number, titles) {
    if(!decCache[number]) decCache[number] = number % 100 > 4 && number % 100 < 20 ? 2 : decCases[Math.min(number % 10, 5)];
    return titles[decCache[number]];
}

    // сам таймер
function timer(year, month, day) {
    setInterval(function() {
        let hoursLeft = document.querySelector('.timer-hrs-l'),
            hoursRight = document.querySelector('.timer-hrs-r'),
            hoursText = document.querySelector('.timer-name-hrs'),
            minutesLeft = document.querySelector('.timer-min-l'),
            minutesRight = document.querySelector('.timer-min-r'),
            minutesText = document.querySelector('.timer-name-min'),
            secLeft = document.querySelector('.timer-sec-l'),
            secRight = document.querySelector('.timer-sec-r'),
            secText = document.querySelector('.timer-name-sec'),
            dateNow = new Date().getTime(),
            dateFinish = new Date(year, month, day),
            sec = Math.floor((dateFinish - dateNow) / 1000),
            secToMinutes = sec % 3600,
            hoursNumber = Math.floor(sec / 3600),
            minutesNumber = Math.floor(secToMinutes / 60),
            secondsNumber = secToMinutes % 60;
        hoursText.innerHTML = decOfNum(hoursNumber, ['час','часа','часов']);
        minutesText.innerHTML = decOfNum(minutesNumber, ['минута','минуты','минут']);
        secText.innerHTML = decOfNum(secondsNumber, ['секунда','секунды','секунд']);
        hoursLeft.innerHTML = Math.floor(hoursNumber / 10);
        hoursRight.innerHTML = hoursNumber - (Math.floor(hoursNumber / 10) * 10);
        minutesLeft.innerHTML = Math.floor(minutesNumber / 10);
        minutesRight.innerHTML = minutesNumber - (Math.floor(minutesNumber / 10) * 10);
        secLeft.innerHTML = Math.floor(secondsNumber / 10);
        secRight.innerHTML = secondsNumber - (Math.floor(secondsNumber / 10) * 10);

    },1000)
}

    // Внимание!!! Месяца в JavaScript начинаются с 0 а не с 1
timer(2021, 07, 30);


// SWIPER -> Slider sect. reviews
const swiperReviews = new Swiper('.slider-reviews', {
    breakpoints: {
        320: {
            speed: 400,
            slidesPerView: 1,
            loop: true,
            navigation: {
                nextEl: '.reviews__btn-right',
                prevEl: '.reviews__btn-left',
              },
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true,
            },
        },
        650: {
            slidesPerView: 1.4,
            spaceBetween: 30,
            loop: true,
        },
        1010: {
            slidesPerView: 2.3,
            spaceBetween: 30,
            loop: false,
        }
    },
    speed: 400,
    slidesPerView: 2.3,
    spaceBetween: 30,
    navigation: {
        nextEl: '.reviews__btn-right',
        prevEl: '.reviews__btn-left',
      },
    pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
    },
});



// SWIPER -> Slider sect. cases
const swiperCases = new Swiper('.cases__slider', {
    slidesPerView: 1,
    speed: 400,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: '.cases__arrow-right',
        prevEl: '.cases__arrow-left',
      },
    pagination: {
    el: '.cases__dots',
    type: 'bullets',
    clickable: true,
    },
});

function checkCasesName () {
    setInterval (function() {
        let casesBtnPrevText = document.querySelector('.cases .swiper-slide-prev .cases__subtitle a').innerHTML;
            casesBtnNextText = document.querySelector('.cases .swiper-slide-next .cases__subtitle a').innerHTML;
            casesBtnPrev = document.querySelector('.cases__arrow-left');
            casesBtnNext = document.querySelector('.cases__arrow-right');
        casesBtnPrev.innerHTML = casesBtnPrevText;
        casesBtnNext.innerHTML = casesBtnNextText;
    },100)
}

checkCasesName();