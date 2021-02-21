// scroll nav 
$(window).load(function() {
         $(".loader").fadeOut("1000"); 
        });

const cross = document.querySelector('.cross')
         const headerNav = document.querySelector('.header-nav')
         const headerNavRight = document.querySelector('.header-nav-right')

        cross.addEventListener('click', () => {
            cross.classList.toggle('close')
            headerNav.classList.toggle('close')
            headerNavRight.classList.toggle('close')
        })

$(window).scroll(function(){
    if ($(window).scrollTop() >= 1000) {
        $('.header-nav').addClass('scroll');
    }
    else {
        $('.header-nav').removeClass('scroll');
    }
});



// scroll reveal anime
const sr = ScrollReveal();

// dist title

const delayTitle = 200;
const durationTitle = 1500;

// sr.reveal('.cta-dark', {
// 	 delay: delayTitle,
//     duration: durationTitle,
//     distance: "100px",
//     origin: "bottom"
// });

// sr.reveal('.cta-light', {
// 	 delay: delayTitle,
//     duration: durationTitle,
//     distance: "100px",
//     origin: "bottom"
// });


sr.reveal('.h1-dark', {
	 delay: delayTitle,
    duration: durationTitle,
    distance: "100px",
    origin: "bottom"
});

sr.reveal('.h1-light', {
	 delay: delayTitle,
    duration: durationTitle,
    distance: "100px",
    origin: "bottom"
});

sr.reveal('.h2-dark', {
	 delay: delayTitle,
    duration: durationTitle,
    distance: "100px",
    origin: "bottom"
});

sr.reveal('.h2-ligth', {
	 delay: delayTitle,
    duration: durationTitle,
    distance: "100px",
    origin: "bottom"
});

sr.reveal('.h3-dark', {
	 delay: delayTitle,
    duration: durationTitle,
    distance: "100px",
    origin: "bottom"
});


sr.reveal('.h3-light', {
	 delay: delayTitle,
    duration: durationTitle,
    distance: "100px",
    origin: "bottom"
});

sr.reveal('.h4-dark', {
	 delay: delayTitle,
    duration: durationTitle,
    distance: "100px",
    origin: "bottom"
});

sr.reveal('.h4-light', {
	 delay: delayTitle,
    duration: durationTitle,
    distance: "100px",
    origin: "bottom"
});

sr.reveal('.body-dark', {
	 delay: delayTitle,
    duration: durationTitle,
    distance: "100px",
    origin: "bottom"
});

sr.reveal('.titleProject-dark', {
	 delay: delayTitle,
    duration: durationTitle,
    distance: "100px",
    origin: "bottom"
});

sr.reveal('.titleProject-light', {
	 delay: delayTitle,
    duration: durationTitle,
    distance: "100px",
    origin: "bottom"
});


sr.reveal('.midTitleProject-dark', {
	 delay: delayTitle,
    duration: durationTitle,
    distance: "100px",
    origin: "bottom"
});

sr.reveal('.midTitleProject-light', {
	 delay: delayTitle,
    duration: durationTitle,
    distance: "100px",
    origin: "bottom"
});


//  COMPOSANTS SCROLL REVEAL 
const delayComposants = 200;
const durationComposants = 1300;
const distanceComposants = 70;

sr.reveal('.home-section', {
	 delay: delayComposants,
    duration: durationComposants,
    distance: distanceComposants + 'px',
    origin: "bottom"
});

sr.reveal('.textAbout-section', {
	 delay: delayComposants,
    duration: durationComposants,
    distance: distanceComposants + 'px',
    origin: "bottom"
});

sr.reveal('.favoritProject-section', {
	 delay: delayComposants,
    duration: durationComposants,
    distance: distanceComposants + 'px',
    origin: "bottom"
});


sr.reveal('.photo-content-section', {
	 delay: delayComposants,
    duration: durationComposants,
    distance: distanceComposants + 'px',
    origin: "bottom"
});


sr.reveal('.middle', {
	 delay: delayComposants,
    duration: durationComposants,
    distance: distanceComposants + 'px',
    origin: "bottom"
});


sr.reveal('.full', {
	 delay: delayComposants,
    duration: durationComposants,
    distance: distanceComposants + 'px',
    origin: "bottom"
});

sr.reveal('.min', {
	 delay: delayComposants,
    duration: durationComposants,
    distance: distanceComposants + 'px',
    origin: "bottom"
});


sr.reveal('.allProjects-section', {
	 delay: delayComposants,
    duration: durationComposants,
    distance: distanceComposants + 'px',
    origin: "bottom"
});

sr.reveal('.contentProject-section', {
	 delay: delayComposants,
    duration: durationComposants,
    distance: distanceComposants + 'px',
    origin: "bottom"
});

sr.reveal('.contactNow-section', {
	 delay: delayComposants,
    duration: durationComposants,
    distance: distanceComposants + 'px',
    origin: "bottom"
});














