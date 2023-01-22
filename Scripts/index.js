let header = document.getElementById("header");

fetch("/navbar.html")
  .then((res) => res.text())
  .then((data) => {
    header.innerHTML = data;
    const parser = new DOMParser();
    const doc = parser.parseFromString(data, "text/html");
    eval(doc.querySelector("script").textContent);
  });

const swiper = new Swiper(
  ".swiper",
  {
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    loop: true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  },
  2000
);

let babygirl=document.getElementById("baby-girl-img");
babygirl.addEventListener("click",()=>{
  window.location.href="../product_girl.html";
})
let babyboy=document.getElementById("baby-boy-img");
babyboy.addEventListener("click",()=>{
  window.location.href="../productpage.html";
})

