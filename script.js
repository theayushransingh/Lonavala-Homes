

document.addEventListener("DOMContentLoaded",()=>{
  const links = document.querySelectorAll(".menu-list a, .apartment a,.footerlinks a")
  console.log(links);
  
  for (const link of links) {
    link.addEventListener("click",function(e){
    e.preventDefault();
    const targetid = this.getAttribute("href").substring(1);
    console.log(targetid);
    const targetElement = document.getElementById(targetid);
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: 'smooth'
  });
      
    })
  }

})


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



document.getElementById('form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting the default way

  // Get the form values
  const name = document.querySelector('#user-name').value;
  const email = document.querySelector('#user-email').value;
  const phone = document.querySelector('#user-number').value;
  const arrivaldate = document.querySelector('#arrivalDate').value;
  const departuredate = document.querySelector('#departureDate').value;
  const adult = document.querySelector('#adult').value;
  const children = document.querySelector('#children').value;
  const message = document.querySelector('#user-msg').value;

  console.log(arrivalDate);

  // Create an email template params object for booking request
  const templateParams = {
      name: name,
      email: email,
      phone: phone,
      arrivaldate: arrivaldate,
      departuredate: departuredate,
      adult: adult,
      children: children,
      message: message
  };

  // Send the booking request email using EmailJS
  emailjs.send('service_prs28se', 'template_pajfvri', templateParams)
      .then(function(response) {
          console.log('Booking request sent successfully!', response.status, response.text);
          alert('Your booking request has been sent successfully!');
          document.getElementById('form').reset();
      }, function(error) {
          console.log('Failed to send booking request.', error);
          alert('Failed to send your booking request. Please try again.');
      });
});

