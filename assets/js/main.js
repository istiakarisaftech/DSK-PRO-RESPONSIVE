"use strict";


/*-----------------------------------------------
|   Pre-loader
-----------------------------------------------*/
$.holdReady(true);
$($('main section')[0]).imagesLoaded({
  background: '.background-holder'
}, function () {
  $.holdReady(false);
});
Utils.$document.ready(function () {
  var $preloader = $('#preloader');
  $preloader.addClass('loaded');
  setTimeout(function () {
    $preloader.remove();
  }, 800);
});
/*-----------------------------------------------
|   Documentation and Component Navigation
-----------------------------------------------*/

Utils.$document.ready(function () {
  var $componentNav = $('#components-nav');

  if ($componentNav.length) {
    var loc = window.location.href;

    var _loc$split = loc.split('#');

    loc = _loc$split[0];
    var location = loc.split('/');
    var url = location[location.length - 2] + "/" + location.pop();
    var urls = $componentNav.children('li').children('a');

    for (var i = 0, max = urls.length; i < max; i += 1) {
      var dom = urls[i].href.split('/');
      var domURL = dom[dom.length - 2] + "/" + dom.pop();

      if (domURL === url) {
        var $targetedElement = $(urls[i]);
        $targetedElement.removeClass('color-5');
        $targetedElement.addClass('fw-700');
        break;
      }
    }
  }
});
/*-----------------------------------------------
|   Table collation
-----------------------------------------------*/

Utils.$document.ready(function () {
  var $tableCollation = $('.table-collation');

  if ($tableCollation.length) {
    $tableCollation.each(function () {
      var $this = $(this);
      $this.tableCollation({
        /* myClass:'table-responsive' */
      });
    });
  }
});
/*-----------------------------------------------
|   Nav burger Panel
-----------------------------------------------*/

Utils.$document.ready(function () {
  var znavContainer = $('.znav-container');
  var navBurger = $('.nav-burger');
  var navBurgerPanel = $('.nav-burger-panel');
  navBurgerPanel.css({
    top: znavContainer.height(),
    height: "calc(100vh - " + znavContainer.height() + "px)"
  });
  navBurger.click(function () {
    navBurgerPanel.toggleClass('nav-burger-panel-collapsed');
    navBurger.toggleClass('is-active');
  });
});
/*-----------------------------------------------
|   Top navigation opacity on scroll
-----------------------------------------------*/

Utils.$document.ready(function () {
  var backgroundOnScrollTransparent = $('.background-on-scroll-transparent');
  backgroundOnScrollTransparent.css({
    backgroundColor: 'rgba(0, 0, 0, 0)',
    transition: 'background-color 0.3s ease-in-out'
  });

  if (backgroundOnScrollTransparent.length) {
    var windowHeight = Utils.$window.height();
    Utils.$window.scroll(function () {
      var scrollTop = Utils.$window.scrollTop();
      var alpha = scrollTop / windowHeight * 2;
      alpha >= 0.6 && (alpha = 0.6);
      backgroundOnScrollTransparent.css({
        'background-color': "rgba(0, 0, 0, " + alpha + ")"
      });
    }); // Top navigation background toggle on mobile

    backgroundOnScrollTransparent.on('show.bs.collapse hide.bs.collapse', function () {
      return backgroundOnScrollTransparent.toggleClass('background-black');
    });
  }
});
/*-----------------------------------------------
|   Shuffle
-----------------------------------------------*/

Utils.$document.ready(function () {
  var filterContainer = $('.filter-container');
  var filterMenu = $('.filter-menu');

  if (filterMenu.length) {
    var shuffleInstance = new Shuffle(filterContainer, {
      itemSelector: '.filter-item'
    });
    shuffleInstance.filter('header');
    filterMenu.on('click', '.item', function (e) {
      var $this = $(e.target);
      var filterValue = $this.data('filter');
      $this.siblings().removeClass('active');
      $this.addClass('active');
      shuffleInstance.filter(filterValue);
    });
  }
});


/*-----------------------------------------------
|   Gsap ScrollTrigger SVG code implement for graph
-----------------------------------------------*/
// Counter num object
let startCount = 0;
let num = { 
  var: startCount, 
  counterNodeDur: 0.1, 
  counterNodeDelay: 0, 
  scrollEndPerc: 100, 
  scrollEndDelay: 10,
  
};
let numbers = document.querySelector('.odometer');
function changeNumber() {
  numbers.innerHTML = Math.floor(num.var);
}

gsap.registerPlugin(ScrollTrigger);
const t1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".st-main",
    scrub: 1,
    start: "top 0%",
    end: `+=${num.scrollEndPerc}%`,
    pin: true,
    // markers: true,
  }
});
// Nav-opacity-0
t1.to(".st-nav", { opacity: 0 })
// main title translate-(-X)
t1.to('.st-titleTop', {
  x: "-100vw"
})
//svg translate-(+X)
t1.to(".right-n-200 ", { x: "0vw", opacity: 1})
t1.to(".opacity-0", { opacity: 1 })
// svg-node-1
const lneplayed1 = gsap.utils.toArray('.c1,.c2,.p1');
t1.to(lneplayed1, { opacity: 1})
// svg-node-1 counter number
t1.to(num, 2.5, { var: 15000000, duration: num.counterNodeDur, onUpdate: changeNumber, delay: num.counterNodeDelay });
// svg-node-2
const lneplayed2 = gsap.utils.toArray('.c3,.p2');
t1.to(lneplayed2, { opacity: 1 })
t1.to(num, { var: 30000000, duration: num.counterNodeDur, ease: "none", onUpdate: changeNumber, delay: num.counterNodeDelay  })
// svg-node-3
const lneplayed3 = gsap.utils.toArray('.c4,.p3');
t1.to(lneplayed3, { opacity: 1 })
t1.to(num, { var: 45000000, duration: num.counterNodeDur, ease: "none", onUpdate: changeNumber, delay: num.counterNodeDelay  })
// svg-node-4
const lneplayed4 = gsap.utils.toArray('.c5,.p4');
t1.to(lneplayed4, { opacity: 1 })
t1.to(num, { var: 60000000, duration: num.counterNodeDur, ease: "none", onUpdate: changeNumber, delay: num.counterNodeDelay  })
// svg-node-5
const lneplayed5 = gsap.utils.toArray('.c6,.p5');
t1.to(lneplayed5, { opacity: 1 })
t1.to(num, { var: 80000000, duration: num.counterNodeDur, ease: "none", onUpdate: changeNumber, delay: num.counterNodeDelay  })
// svg-node-6
const lneplayed6 = gsap.utils.toArray('.c7,.p6');
t1.to(lneplayed6, { opacity: 1 })
t1.to(num, { var: 100000000, duration: num.counterNodeDur, ease: "none", onUpdate: changeNumber, delay: num.counterNodeDelay  })
// nav-opacity-1
t1.to(".st-nav", { opacity: 1, duration: num.counterNodeDur*50, delay: num.scrollEndDelay})

// Experimental fix 

// window.addEventListener("resize", resizeGraphTranslate);
// async function resizeGraphTranslate() {
//   const svgGsapBox = document.querySelector('.right-n-200');  
//   let width = window.innerWidth;
//   svgGsapBox.style.transform = `translateX(${width}px)`;

// }