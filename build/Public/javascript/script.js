var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursorblur")
document.addEventListener("mousemove", function(dets){
  crsr.style.left = dets.x + "px"
  crsr.style.top = dets.y+"px"
  blur.style.left = dets.x-150 + "px"
  blur.style.top = dets.y-150+"px"
})

gsap.to(".nav", {
  backgroundColor: "#000",
  duration: 1,
  height: "14%",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    // markers:true,
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});
const testimonials = [
  {
    name: " - Tripty Kumari",
    testimonial:
      "Planning our son's first birthday was a daunting task, especially being new to Patna. Thankfully, we found caterMe, and they took care of everything with such professionalism and warmth. Despite being unfamiliar with the city, they guided us to the perfect location, alleviating all our concerns. The event was a dream come true - from the charming venue to the delectable food and delightful decor, caterMe exceeded all expectations. Our family and relatives were impressed, and we couldn't be happier with the outcome. Thank you, caterMe, for making our son's special day unforgettable, even in a new city!",
  },
  {
    name: " - Jitnendra kumar gupta",
    testimonial:
      "Even with Jitendra Kumar's busy schedule, celebrating our 25th wedding anniversary at home felt like a big challenge. But caterMe came to our rescue! They made our evening unforgettable, taking care of everything smoothly, from the delicious food to the beautiful decorations, for our 50 guests. Thanks to them, Jitendra could relax and enjoy the milestone. We're so grateful to caterMe for making our anniversary so special!   ",
  },
  {
    name: " - Ankit",
    testimonial:
      "Being in Patna city, organizing my bachelor party seemed like a daunting task. I was worried about making it enjoyable and memorable. Luckily, I connected with caterMe, and they came to the rescue! Not only did they ease my concerns, but they also suggested a fantastic party theme that added so much fun to the night. From start to finish, caterMe's expertise ensured everything went smoothly. Thanks to them, my bachelor party in Patna was an absolute hit, and I'll cherish the memories forever!",
  },
];
//Current Slide
let i = 0;
//Total Slides
let j = testimonials.length;
let testimonialContainer = document.getElementById("testimonial-container");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");
nextBtn.addEventListener("click", () => {
  i = (j + i + 1) % j;
  displayTestimonial();
});
prevBtn.addEventListener("click", () => {
  i = (j + i - 1) % j;
  displayTestimonial();
});
let displayTestimonial = () => {
  testimonialContainer.innerHTML = `
    <p>${testimonials[i].testimonial}</p>
    <h3>${testimonials[i].name}</h3>
  `;
};
window.onload = displayTestimonial;
