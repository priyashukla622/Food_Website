
// let slides = document.querySelectorAll(".slide"); 
// let baricon=document.getElementById("bar")
// let ul=document.querySelector("ul");
// console.log(slides);
// let count = 0;

// slides.forEach(function (slide, index) {
//   slide.style.left = `${index * 100}%`;
// });

// function slide() {
//   slides.forEach(function (curvel) {
//     curvel.style.transform = `translateX(-${count * 100}%)`;
//     console.log(curvel);
//   });
// }

// setInterval(function () {
//   count++;
//   if (count === slides.length) {
//     count = 0; 
//   }
//   slide();
// }, 2000);

// baricon.addEventListener("click", function () {
//   ul.classList.toggle("showitem"); 

//   if (ul.classList.contains("showitem")) { 
//     baricon.className = "fa-solid fa-xmark"; 
//   } else {
//     baricon.className = "fa-solid fa-bars"; 
//   }
// });

// let savetheme = localStorage.getItem("theme") || "light";

// // Select toggle buttons
// const toggleLight = document.getElementById("toggleLight"); // Ensure ID matches HTML
// const toggleDark = document.getElementById("toggleDark");

// // Apply the saved theme on page load
// document.body.classList.add(savetheme);
// if (savetheme === 'light') {
//   toggleLight.classList.add('active');
// } else {
//   toggleDark.classList.add('active');
// }

// // Light mode toggle
// toggleLight.addEventListener("click", function () {
//   document.body.classList.remove('dark');
//   document.body.classList.add('light');
//   localStorage.setItem('theme', 'light');
//   toggleLight.classList.add('active');
//   toggleDark.classList.remove('active');
// });

// // Dark mode toggle
// toggleDark.addEventListener("click", function () {
//   document.body.classList.remove('light');
//   document.body.classList.add('dark');
//   localStorage.setItem('theme', 'dark');
//   toggleDark.classList.add('active');
//   toggleLight.classList.remove('active');
// });



// Slide Functionality
const slides = document.querySelectorAll(".slide");
let count = 0;

// Arrange slides horizontally                                                                                                                                                                                                                                     
slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

// Slide transition function
function slide() {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${count * 100}%)`;
  });
}

// Auto-slide every 2 seconds
setInterval(() => {
  count = (count + 1) % slides.length; 
  slide();
}, 2000);

// Toggle Navigation Menu
const barIcon = document.getElementById("bar");
const ul = document.querySelector("ul");

barIcon.addEventListener("click", () => {
  ul.classList.toggle("showitem"); 
  barIcon.className = ul.classList.contains("showitem")
    ? "fa-solid fa-xmark" 
    : "fa-solid fa-bars"; 
});

// Light/Dark Theme Functionality
const toggleLight = document.getElementById("toggleLight");
const toggleDark = document.getElementById("toggleDark");
const savedTheme = localStorage.getItem("theme") || "light";

// Apply saved theme on page load
document.body.classList.add(savedTheme);
if (savedTheme === "light") {
  toggleLight.classList.add("active");
} else {
  toggleDark.classList.add("active");
}

// Light theme button
toggleLight.addEventListener("click", () => {
  document.body.className = "light"; 
  localStorage.setItem("theme", "light");
  toggleLight.classList.add("active");
  toggleDark.classList.remove("active");
});

// Dark theme button
toggleDark.addEventListener("click", () => {
  document.body.className = "dark";
  localStorage.setItem("theme", "dark");
  toggleDark.classList.add("active");
  toggleLight.classList.remove("active");
});
