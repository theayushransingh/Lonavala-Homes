
let mm = gsap.matchMedia();
mm.add("max-width: 900px", () => {
    gsap.from(".section-2 .info-block-1 .part2 .block",{
        duration: 0.9,
        opacity:0,
        scale:3,
        stagger:0.3,
        
    })
})



const menuList = document.querySelector(".menu-list");
const body = document.querySelector("body");
const cursor = document.querySelector(".cursor");
const vidPlayBtn = document.querySelector(".vidPlay");
let Video = document.querySelector(".myVideo");

let vidPlaying = Video.pause();

 menuList.style.maxHeight = "0px";

 document.querySelector(".menubar").addEventListener("click",()=>{
    if(menuList.style.maxHeight == "0px"){
        menuList.style.maxHeight = "410px";
    }else{
        menuList.style.maxHeight = "0px";
    }
 })

body.addEventListener("mousemove",(event)=>{
    gsap.to(cursor,{
        x: event.x,
        y: event.y,
        duration:0.5,
        ease: "back.out(1.7)",
    })
})

vidPlayBtn.addEventListener("click",(e)=>{
    if(Video.paused)
    {
        Video.play();
        vidPlayBtn.style.display = "none"
    }
})
Video.addEventListener("click",(e)=>{
    if(Video.played)
    {
        Video.pause();
        vidPlayBtn.style.display = "block"

    }
})

gsap.from(".video",{
    duration: 1.2,
    opacity:0,
    y: 10,


})


gsap.from(".section-2 .info-block-1 .part2 .block",{
    duration: 0.9,
    opacity:0,
    scale:0,
    stagger:0.3,
    scrollTrigger: {
        trigger: ".section-2",
        start: "top 50%",
        end:"top -10%",
        scrub:2,
        // markers: true,
    }
    
})


// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Function to animate the counters
function animateCounters() {
  const counters = document.querySelectorAll(".item h2");
  counters.forEach(counter => {
    let endValue = parseInt(counter.getAttribute("data-target"));

    gsap.fromTo(counter, 
      { innerText: 0 },
      {
        innerText: endValue,
        duration: 2,
        scrollTrigger: {
          trigger: counter,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        snap: { innerText: 1 },
        ease: "none",
        onUpdate: function() {
          counter.innerText = Math.ceil(counter.innerText).toString() + "+";
        }
      }
    );
  });
}

// Initialize the animation
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".ctr1 h2").setAttribute("data-target", 50);  // Example target value
  document.querySelector(".ctr2 h2").setAttribute("data-target", 100); // Example target value
  animateCounters();
});

const laptopScreen = ()=>{
  gsap.from(".downArrow .arrow",{
    y: -55,
    duration:0.5,
    // delay:2,
    yoyo:true,
    repeat:-1
  })
}
const phoneAnimation = ()=>{
  gsap.from(".downArrow .arrow",{
    y: -60,
    duration:0.5,
    // delay:2,
    yoyo:true,
    repeat:-1
  })
}

const applyAnimations = () => {
  if (window.matchMedia("(max-width: 767px)").matches) {
    // Screen width is less than or equal to 767px (phone)
    phoneAnimation();
  } else {
    // Screen width is greater than 767px (laptop/desktop)
    laptopScreen();
  }
};

applyAnimations();