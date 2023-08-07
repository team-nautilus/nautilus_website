gsap.registerPlugin(ScrollTrigger);

function navbar_down(){
  gsap.from("nav",{
  y:-100,
  duration:1,
  delay:1,
  opacity:0,
  easeIn: Power2
})
}
navbar_down()

const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// Show active menu when scrolling
const highlightMenu = () => {
  const elem = document.querySelector('.highlight');
  const homeMenu = document.querySelector('#home-page');
  const aboutMenu = document.querySelector('#about-page');
  const servicesMenu = document.querySelector('#services-page');
  let scrollPos = window.scrollY;
  // console.log(scrollPos);

  // adds 'highlight' class to my menu items
  if (window.innerWidth > 960 && scrollPos < 600) {
    homeMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1400) {
    aboutMenu.classList.add('highlight');
    homeMenu.classList.remove('highlight');
    servicesMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 2345) {
    servicesMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    return;
  }

  if ((elem && window.innerWIdth < 960 && scrollPos < 600) || elem) {
    elem.classList.remove('highlight');
  }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

//  Close mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active');
  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('active');
  }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);


gsap.registerPlugin(ScrollTrigger)



gsap.registerPlugin(ScrollTrigger)

gsap.fromTo(
  '#main>#page>.container>.box_2',
  { opacity:0, xPercent: 100}, // #page>.container>.box Starts on the rights
  {
      opacity:1,
      xPercent: 500, // Moves to the left
      ease: 'power1.inOut',
      scrollTrigger: {
          trigger: '#page>.container>.box_2',
          start: 'top bottom',
          end: 'bottom center',
          scrub: true,
          
      },
  }
)


gsap.registerPlugin(ScrollTrigger)

gsap.fromTo(
  '#page>.car_1s',
  {xPercent: 100}, // #page>.box Starts on the rights
  {
      xPercent: 500, // Moves to the left
      ease: 'power1.inOut',
      scrollTrigger: {
          trigger: '#page>.car_1',
          start: 'top bottom',
          end: 'center center',
          scrub: true,
          
      },
  }
)




console.clear();

function loco1(){
  dayjs.extend(dayjs_plugin_duration);
  
  function activateCountdown(element, dateString){
      const targetDate = dayjs(dateString);
  
      setInterval(() => {
          const now = dayjs();
          const duration = dayjs.duration(targetDate.diff(now));
  
          if(duration.asMilliseconds() <= 0) return;
  
          element.querySelector(".until__numeric--seconds").textContent = duration.seconds().toString().padStart(2, "0");
          element.querySelector(".until__numeric--minutes").textContent = duration.minutes().toString().padStart(2, "0");
          element.querySelector(".until__numeric--hours").textContent = duration.hours().toString().padStart(2, "0    ");
          element.querySelector(".until__numeric--days").textContent = duration.asDays().toFixed(0).toString().padStart(2, "0    ");
      }, 250);
  }
  
  
  activateCountdown(document.getElementById("myCountdown"), "2023-09-8");
  }
  loco1()



console.clear();

function page3_txtappear(){

  gsap.registerPlugin(ScrollTrigger);
const boxes = gsap.utils.toArray("#main>#page3>.textcontainer>.text");

boxes.forEach((box) => {
  gsap.from(box, {
    scrollTrigger: {
      trigger: box,
      start: "top 70%",
      end: "top 50%",
      scrub: true,
      markers: true
    },
    opacity: 0,
    y: 150
  });
});

}
page3_txtappear()


var circle = document.querySelector(".circle");
var text = document.querySelector(".text");

circle.addEventListener("mouseover", function() {
  text.style.opacity = 1;
});

circle.addEventListener("mouseout", function() {
  text.style.opacity = 0;
});








gsap.registerPlugin(ScrollTrigger)

gsap.fromTo(
  '#main>#page3>.imagecontainer>.car',
  { xPercent: -100 }, // #page>.container>.box Starts on the rights
  {

    xPercent: 150
    , // Moves to the left
      ease: 'power1.inOut',
      scrollTrigger: {
          trigger: '#main>#page3>.imagecontainer>.car',
          start: 'top bottom',
          end: 'bottom 80%',
          scrub: true,
          
      },
  }
)

gsap.registerPlugin(ScrollTrigger)

gsap.fromTo(
  '#main>#page4>.team',
  { opacity: 0.5 }, // #page>.container>.box Starts on the rights
  {
    opacity:1,
    y:-50
    , // Moves to the left
      ease: 'power1.inOut',
      scrollTrigger: {
          trigger: '#main>#page4>.team',
          start: 'top bottom',
          end: 'bottom 80%',
          scrub: true,
          
      },
  }
)

gsap.registerPlugin(ScrollTrigger)

gsap.fromTo(
  '#main>#page4>.team',
  { opacity: 1 }, // #page>.container>.box Starts on the rights
  {
    opacity:0.5,
    y:10
    , // Moves to the left
      ease: 'power1.inOut',
      scrollTrigger: {
          trigger: '#main>#page4>.team',
          start: 'bottom 80%',
          end: '+=1500px',
          scrub: true,
          
      },
  }
)


gsap.registerPlugin(ScrollTrigger)

gsap.fromTo(
  '#ourjourney>#imgcontainer',
  { opacity: 0 }, // #page>.container>.box Starts on the rights
  {
    opacity:1,
    y:10
    , // Moves to the left
      ease: 'power1.inOut',
      scrollTrigger: {
          trigger: '#ourjourney>#imgcontainer',
          start: 'top bottom',
          end: 'top 40%',
          scrub: true,
          
      },
  }
)

gsap.fromTo(
  '#ourjourney>#text',
  { opacity: 0 }, // #page>.container>.box Starts on the rights
  {
    opacity:1,
    y:50
    , // Moves to the left
      ease: 'power1.inOut',
      scrollTrigger: {
          trigger: '#ourjourney>#text',
          start: 'top 60%',
          end: 'top 40%',
          scrub: true,
          
      },
  }
)


gsap.fromTo(
  '#ourjourney>#imgcontainer',
  { y:0}, // #page>.container>.box Starts on the rights
  {
    y:2400
    , // Moves to the left
      ease: 'power1.inOut',
      scrollTrigger: {
          trigger: '#ourjourney>#imgcontainer',
          start: 'top 40%',
          end: '2600px',
          scrub: true,
          
      },
  }
)
gsap.to('#ourjourney>#imgcontainer', {duration: 1, y:10})


gsap.fromTo(
  '#ourjourney>#text_1',
  { opacity:0,
  x:0}, // #page>.container>.box Starts on the rights
  {
    x:50,
    opacity:1
    , // Moves to the left
      ease: 'power1.inOut',
      scrollTrigger: {
        delay: 1.5,
          trigger: '#ourjourney>#text_1',
          start: 'top 80%',
          end: 'top 60%',
          scrub: true,
          
      },
  }
)
gsap.fromTo(
  '#ourjourney>#text_1>#txtline_1',
  { width: 0}, // #page>.container>.box Starts on the rights
  {
    width: 300
    , // Moves to the left
      ease: 'power1.inOut',
      scrollTrigger: {
          trigger: '#ourjourney>#text_1',
          start: 'top 80%',
          end: 'center 50%',
          scrub: true,
          
      },
  }
)



gsap.fromTo(
  '#ourjourney>#text_2',
  { opacity:0,
    x:0}, // #page>.container>.box Starts on the rights
  {
    x:-50,
    opacity:1
    , // Moves to the left
      ease: 'power1.inOut',
      scrollTrigger: {
          trigger: '#ourjourney>#text_2',
          start: 'top 80%',
          end: 'top 60%',
          scrub: true,
          
      },
  }
)
gsap.fromTo(
  '#ourjourney>#text_2>#txtline_2',
  { width: 0}, // #page>.container>.box Starts on the rights
  {
    width: 300
    , // Moves to the left
      ease: 'power1.inOut',
      scrollTrigger: {
          trigger: '#ourjourney>#text_2',
          start: 'top 80%',
          end: 'center 50%',
          scrub: true,
          
      },
  }
)



gsap.fromTo(
  '#ourjourney>#text_3',
  { opacity:0,
    x:0}, // #page>.container>.box Starts on the rights
  {
    x:50,
    opacity:1
    , // Moves to the left
      ease: 'power1.inOut',
      scrollTrigger: {
          trigger: '#ourjourney>#text_3',
          start: 'top 80%',
          end: 'top 60%',
          scrub: true,
          
      },
  }
)
gsap.fromTo(
  '#ourjourney>#text_3>#txtline_3',
  { width: 0}, // #page>.container>.box Starts on the rights
  {
    width: 300
    , // Moves to the left
      ease: 'power1.inOut',
      scrollTrigger: {
          trigger: '#ourjourney>#text_3',
          start: 'top 80%',
          end: 'center 50%',
          scrub: true,
          
      },
  }
)


gsap.fromTo(
  '#ourjourney>#text_4',
  { opacity:0,
    x:0}, // #page>.container>.box Starts on the rights
  {
    x:-50,
    opacity:1
    , // Moves to the left
      ease: 'power1.inOut',
      scrollTrigger: {
          trigger: '#ourjourney>#text_4',
          start: 'top 80%',
          end: 'top 60%',
          scrub: true,
          
      },
  }
)



gsap.fromTo(
  '#ourjourney>#line_1_jorn',
  { height:0}, // #page>.container>.box Starts on the rights
  {
    height:3000
    , // Moves to the left
      ease: 'power1.inOut',
      scrollTrigger: {
          trigger: '#ourjourney>#text',
          start: 'top bottom',
          end: '5px',
          scrub: true,
          
      },
  }
)
gsap.fromTo(
  '#ourjourney>#line_2_jorn',
  { height:0}, // #page>.container>.box Starts on the rights
  {
    height:3000
    , // Moves to the left
      ease: 'power1.inOut',
      scrollTrigger: {
          trigger: '#ourjourney>#text',
          start: 'top bottom',
          end: '5px',
          scrub: true,
          
      },
  }
)

gsap.fromTo(
  '#contactus>#contacttxt',
  { opacity:0,
    x:0}, // #page>.container>.box Starts on the rights
  {
    x:50,
    opacity:1
    , // Moves to the left
      ease: 'power1.inOut',
      scrollTrigger: {
          trigger: '#contactus>#contacttxt',
          start: 'top 80%',
          end: 'top 60%',
          scrub: true,
          
      },
  }
)

gsap.fromTo(
  '.meetteamtxt',
  { opacity:0,
    y:-50}, // #page>.container>.box Starts on the rights
  {
    y:50,
    opacity:1
    , // Moves to the left
      ease: 'power1.inOut',
      scrollTrigger: {
          trigger: '.meetteamtxt',
          start: 'top 80%',
          end: 'top 50%',
          scrub: true,
          
      },
  }
)

gsap.fromTo(
  '#oursponsors>.title',
  { opacity:0,
    y:-50}, // #page>.container>.box Starts on the rights
  {
    y:50,
    opacity:1
    , // Moves to the left
      ease: 'power1.inOut',
      scrollTrigger: {
          trigger: '#oursponsors>.title',
          start: 'top 80%',
          end: 'top 50%',
          scrub: true,
          
      },
  }
)


gsap.fromTo(
  '#ourjourney>#text_4>#txtline_4',
  { width: 0}, // #page>.container>.box Starts on the rights
  {
    width: 300
    , // Moves to the left
      ease: 'power1.inOut',
      scrollTrigger: {
          trigger: '#ourjourney>#text_4',
          start: 'top 80%',
          end: 'center 50%',
          scrub: true,
          
      },
  }
)


const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const square = entry.target.querySelector('svg .draw');

    if (entry.isIntersecting) {
      square.classList.add('animation');
	  return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    square.classList.remove('animation');
  });
});

observer.observe(document.querySelector('.square-wrapper'));



