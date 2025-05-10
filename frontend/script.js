
const slides = document.querySelectorAll(".slide");
let count = 0;

                                                                                                                                                                                                                                     
slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

function slide() {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${count * 100}%)`;
  });
}


setInterval(() => {
  count = (count + 1) % slides.length; 
  slide();
}, 2000);

const barIcon = document.getElementById("bar");
const ul = document.querySelector("ul");

barIcon.addEventListener("click", () => {
  ul.classList.toggle("showitem"); 
  barIcon.className = ul.classList.contains("showitem")
    ? "fa-solid fa-xmark" 
    : "fa-solid fa-bars"; 
});


const toggleLight = document.getElementById("toggleLight");
const toggleDark = document.getElementById("toggleDark");
const savedTheme = localStorage.getItem("theme") || "light";


document.body.classList.add(savedTheme);
if (savedTheme === "light") {
  toggleLight.classList.add("active");
} else {
  toggleDark.classList.add("active");
}


toggleLight.addEventListener("click", () => {
  document.body.className = "light"; 
  localStorage.setItem("theme", "light");
  toggleLight.classList.add("active");
  toggleDark.classList.remove("active");
});


toggleDark.addEventListener("click", () => {
  document.body.className = "dark";
  localStorage.setItem("theme", "dark");
  toggleDark.classList.add("active");
  toggleLight.classList.remove("active");
});


  function closeLoginForm() {
    document.getElementById("loginModal").style.display = "none";
  }


document.getElementById("user").onclick = handleUserClick;


function closeSignupForm() {
  document.getElementById("signupModal").style.display = "none";
}


  function handleSignup(event) {
    const email = document.getElementById("signupEmail").value.trim();
    const password = document.getElementById("signupPassword").value.trim();
      document.getElementById("loginModal").style.display = "none";
    document.getElementById("signupModal").style.display = "block";

    if (email && password) {
      const userData = {
        email: email,
        password: password
      };
  
      localStorage.setItem("userData", JSON.stringify(userData)); 
  
      alert("Signup Successfully");
      closeSignupForm();
    } else {
      alert("Please fill all fields.");
    }
  }

  function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value.trim();
    document.getElementById("signupModal").style.display = "none";
    document.getElementById("loginModal").style.display = "block";
  
    const storedUser = JSON.parse(localStorage.getItem("userData"));

  
    if (storedUser && storedUser.email === email && storedUser.password === password) {
      const firstLetter = email.charAt(0).toUpperCase();
      localStorage.setItem("userInitial", firstLetter); 
  
      updateUserIcon(); 
      alert("Login Successfully");
      closeLoginForm();
      location.reload();
      return true
    } else {
      alert("Invalid email or password");
      return false
    }
  }
    function updateUserIcon() {
    const initial = localStorage.getItem("userInitial");
    const userIcon = document.getElementById("user");
    if (initial) {
      userIcon.innerText = initial;        
      userIcon.className = "user-initial"; 
      document.getElementById("logoutMenu").style.display = "block";
    }
  }

  function handleUserClick() {
    const initial = localStorage.getItem("userInitial");
    console.log("userInitial from localStorage:", initial); 
  
    const logoutMenu = document.getElementById("logoutMenu");
  
    if (initial) {
    
      logoutMenu.style.display = logoutMenu.style.display === "block" ? "none" : "block";
    } else {
   
      document.getElementById("loginModal").style.display = "block";
    }
  }
  function logout() {
    localStorage.removeItem("userInitial");
    const userIcon = document.getElementById("user");
  

    userIcon.innerText = "";
    userIcon.className = "fa-solid fa-user";
  

    document.getElementById("logoutMenu").style.display = "none";
  
 
    document.getElementById("loginModal").style.display = "none";
  
    alert("Logout Successfully");
  }
  window.onload = () => {
    updateUserIcon();
  };




let allFoods = [];

// Select HTML elements
const foodContainer = document.getElementById("foodCards");
const searchInput = document.querySelector(".food-input input");
const searchBtn = document.querySelector(".food-btn");

// ✅ Function to render cards
function renderFoodCards(foods) {
  foodContainer.innerHTML = "";

  foods.forEach(food => {
    const card = document.createElement("div");
    card.className = "crd";
    card.innerHTML = `
      <img src="${food.image}" alt="${food.title}">
      <h4 style="font-size: 16px; margin-top:15px; margin-left:15px">${food.title}</h4>

      <p style="font-size: 15px; margin-top:10px;">${food.description}</p>
      <button style="font-size: 14px; margin-top:10px;">Order</button>
    `;
    foodContainer.appendChild(card);
  });
}

// ✅ API se data fetch
function fetchFoods() {
  fetch("https://food-website-lm7v.onrender.com/api/getFood")
    .then(response => response.json())
    .then(data => {
      allFoods = data.foodCategory.flatMap(category => category.items.map(item => ({
        title: item.name,
        image: item.image,
        description: item.description 
      })));

      renderFoodCards(allFoods);
    })
    .catch(error => {
      console.error("Error fetching food data:", error);
    });
}

searchBtn.addEventListener("click", () => {
  const searchTerm = searchInput.value.toLowerCase().trim();
  const filteredFoods = allFoods.filter(food =>
    food.title.toLowerCase().includes(searchTerm)
  );
  renderFoodCards(filteredFoods);
});
window.addEventListener("DOMContentLoaded", fetchFoods);




searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const searchTerm = searchInput.value.toLowerCase().trim();

    const filteredFoods = allFoods.filter(food =>
      food.title.toLowerCase().includes(searchTerm)
    );

    if (filteredFoods.length > 0) {
      renderFoodCards(filteredFoods);
    } else {
      renderFoodCards(allFoods); 
    }
  }
});




