document.addEventListener("DOMContentLoaded", function() {
  gsap.registerPlugin(ScrollTrigger);


  
    gsap.to(".presentation-container", {
  xPercent: -100,
  ease: "none",
  scrollTrigger: {
    trigger: ".intro",
    pin: true,
    scrub: true,
    end: "+=100%",
     markers:true
  }
});
  

document.querySelectorAll(".section").forEach((section) => {

 ScrollTrigger.create({
        trigger: section,
        start:"top top",
        end:"+=100%",
        pinSpacing: false,
        markers:true,
        pin:true


})

});

 gsap.registerPlugin(SplitText);

let split = new SplitText(".info-link-h2", {
  type: "lines,chars",
  mask: "lines"
});
 gsap.from(split.chars, {
  
  duration: 2,
  y: 100,
  skewX: 100,
  autoAlpha: 0,
  stagger: 0.05,
  ease: "back.out(1.2)",
  scrollTrigger: {
    trigger: ".info-link",
    start: "top 90%",
    end: "bottom 30%",
    scrub: true,
    markers: true
  }
});





});

