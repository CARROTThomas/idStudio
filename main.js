//
/**/
let btn_Service = document.querySelector(".btnServices");
const Services = document.querySelector(".ourServices");
btn_Service.addEventListener('click', function() {
    console.log("test")
    Services.scrollIntoView({behavior:'smooth'})
});

const btn_Portfolio = document.querySelector(".btnPortfolio");
const Portfolio = document.querySelector(".ourPortfolio");
btn_Portfolio.addEventListener('click', function() {
    Portfolio.scrollIntoView({behavior:'smooth'})
});

const btn_Pricing = document.querySelector(".btnPricing");
const Pricing = document.querySelector(".ourPricing");
btn_Pricing.addEventListener('click', function() {
    Pricing.scrollIntoView({behavior:'smooth'})
});

const btn_About = document.querySelector(".btnAbout");
const aboutStudio = document.querySelector(".aboutStudio");
btn_About.addEventListener('click', function() {
    aboutStudio.scrollIntoView({behavior:'smooth'})
});

const btn_Testimonials = document.querySelector(".btnTestimonials");
const peopleSay = document.querySelector(".peopleSay");
btn_Testimonials.addEventListener('click', function() {
    peopleSay.scrollIntoView({behavior:'smooth'})
});




