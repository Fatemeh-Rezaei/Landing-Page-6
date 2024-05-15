// LOADING
window.addEventListener("load", function () {
  const loader = document.querySelector(".loading");
  loader.classList += " hidden";
});

document.querySelector(".menuopen").addEventListener("click", openmenu, false);
document
  .querySelector(".menuclose")
  .addEventListener("click", closemenu, false);
var layer = document.querySelector(".layer1");

function openmenu() {
  layer.classList.add("check");
}

function closemenu() {
  layer.classList.remove("check");
}

document
  .querySelector("#sign-links")
  .addEventListener("click", opensignfrm, false);
document
  .querySelector(".sign-frm-close")
  .addEventListener("click", closefrm, false);

function opensignfrm() {
  let signfrm = document.querySelector(".sign-frm");
  signfrm.classList.add("opendisplay");
  closemenu();
  login();
  resetform();
  // e.stopPropagation();
}

function closefrm() {
  let signfrm = document.querySelector(".sign-frm");
  signfrm.classList.remove("opendisplay");
}

var btncolor = document.querySelector("#btn-color");
var btnSignIn = document.querySelector("#btn-sign-in");
var btnSignOut = document.querySelector("#btn-sign-out");
var log = document.querySelector("#login");
var reg = document.querySelector("#register");

btnSignIn.addEventListener("click", login, false);
btnSignOut.addEventListener("click", register, false);

function register() {
  log.style.right = "450px";
  reg.style.right = "0";
  btncolor.style.left = "110px";
}

function login() {
  log.style.right = "0";
  reg.style.right = "-450px";
  btncolor.style.left = "0px";
}

var username = document.getElementById("username");
var email = document.querySelector("#email-");
var password = document.getElementById("password");
var password2 = document.getElementById("password2");
var username1 = document.getElementById("username1");
var password1 = document.getElementById("password1");

log.addEventListener(
  "submit",
  (e) => {
    e.preventDefault();
    checkInput1();
  },
  false
);

reg.addEventListener(
  "submit",
  (e) => {
    e.preventDefault();
    checkInput();
  },
  false
);

function checkInput1() {
  const username1Value = username1.value.trim();
  const password1Value = password1.value.trim();
  if (username1Value === "") {
    setError(
      username1,
      "This Field Could Not Be Empty, Please Enter Your Name"
    );
  } else {
    setSuccess(username1);
  }
  if (password1Value === "") {
    setError(
      password1,
      "This Field Could Not Be Empty, Please Enter Your Password"
    );
  } else {
    setSuccess(password1);
  }
}

function checkInput() {
  const emailValue = email.value.trim();
  const usernameValue = username.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();
  if (emailValue === "") {
    setError(email, "This Field Could Not Be Empty, Please Enter Your Email");
  } else if (!isEmail(emailValue)) {
    setError(email, "The Entered Email Is Not Correct");
  } else {
    setSuccess(email);
  }
  if (usernameValue === "") {
    setError(username, "This Field Could Not Be Empty, Please Enter Your Name");
  } else {
    setSuccess(username);
  }
  if (passwordValue === "") {
    setError(
      password,
      "This Field Could Not Be Empty, Please Enter Your Password"
    );
  } else {
    setSuccess(password);
  }
  if (password2Value === "") {
    setError(
      password2,
      "This Field Could Not Be Empty, Please Repeat Your Password"
    );
  } else if (passwordValue !== password2Value) {
    setError(password2, "Psswords Are Not Equal, Please Repeat Your Password");
  } else {
    setSuccess(password2);
  }
}

function setError(input, message) {
  const formcontrol = input.parentElement;
  const span = formcontrol.querySelector("span");
  span.innerHTML = message;
  formcontrol.className = "form-control error";
}

function setSuccess(input) {
  const formcontrol = input.parentElement;
  formcontrol.className = "form-control success";
  showAlertBox();
}

const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function isEmail(email) {
  return pattern.test(email);
}

function resetform() {
  username.value = null;
  username1.value = null;
  password.value = null;
  password1.value = null;
  password2.value = null;
  email.value = null;
}

const alertBox = document.querySelector(".alert-box");
let timer;
const closeBtnAlert = document.querySelector(".close-btn-alert");

closeBtnAlert.addEventListener("click", function () {
  hideAlertBox();
  clearTimeout(timer);
});

function showAlertBox() {
  alertBox.classList.remove("hide");
  alertBox.classList.add("show");
  if (alertBox.classList.contains("hidden")) {
    alertBox.classList.remove("hidden");
  }
  timer = setInterval(function () {
    hideAlertBox();
  }, 5000);
}
function hideAlertBox() {
  alertBox.classList.remove("show");
  alertBox.classList.add("hide");
}

var btnSearchNav = document.querySelector(".btn-search-nav");
var searchPopup = document.querySelector(".search-popup");
var searchClose = document.querySelector(".search-close-btn");

btnSearchNav.addEventListener(
  "click",
  function () {
    searchPopup.classList.add("search-active");
    btnSearchNav.style.opacity = "0";
    btnSearchNav.style.visibility = "hidden";
    searchClose.style.opacity = "1";
    searchClose.style.visibility = "visible";
  },
  false
);

searchClose.addEventListener("click", closeSearchBtn, false);

function closeSearchBtn() {
  // e.preventDefault();
  searchPopup.classList.remove("search-active");
  btnSearchNav.style.opacity = "1";
  btnSearchNav.style.visibility = "visible";
  searchClose.style.opacity = "0";
  searchClose.style.visibility = "hidden";
}

// NAV
let navigation = document.querySelector(".navigation");
let sticky = navigation.offsetTop;
const cart = document.querySelector(".cart");
const progress = document.querySelector(".progress");
const progressBar = document.querySelector(".progress-bar");

window.addEventListener(
  "scroll",
  () => {
    if (window.pageYOffset > sticky) {
      navigation.classList.add("nav-sticky");
      progress.classList.add("nav-sticky");

      cart.style.borderTopLeftRadius = "5px";
      cart.style.borderBottomLeftRadius = "5px";
      cart.style.borderTopRightRadius = "0px";
      cart.style.borderBottomRightRadius = "0px";
      cart.style.width = "40%";
    } else {
      navigation.classList.remove("nav-sticky");
      progress.classList.remove("nav-sticky");

      cart.style.borderRadius = "5px";
      cart.style.width = "50%";
    }

    const winScroll = window.pageYOffset;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (winScroll / height) * 100;
    progressBar.style.width = `${scrolled}%`;
  },
  false
);

const sections = document.querySelectorAll(".wrapper section");
const navLi = document.querySelectorAll(".navigation #nav ul li");

window.onscroll = () => {
  var current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (window.pageYOffset >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });
  console.log(current);
  navLi.forEach((li) => {
    li.classList.remove("activeNav");
    if (li.classList.contains(current)) {
      li.classList.add("activeNav");
    }
  });
};

// const sections = document.querySelectorAll('section');
// const li = document.querySelectorAll('.navigation nav ul li');
// let current;

// window.addEventListener('scroll', function(){
//     sections.forEach((section) => {
//         // console.log(section)
//         const sectionTop = section.offsetTop;
//         const sectionHeight = section.clientHeight;
//         if(scrollY >= sectionTop - sectionHeight / 3){
//             current = section.getAttribute('id');
//         }
//         // console.log(current)
//     });
//     console.log(current)//خروجی null میدهد
//     li.forEach((item) => {
//         item.classList.remove('activeNav');
//         if(item.classList.contains("current")){
//             item.classList.add('activeNav')
//         }
//     });
// },false)

// SLIDER
const slides = document.querySelector(".slider").children;
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const indicator = document.querySelector(".indicator");
let index = 0;

prev.addEventListener(
  "click",
  function () {
    prevSlide();
    updateCircleIndicator();
    resetTimer();
  },
  false
);

next.addEventListener(
  "click",
  function () {
    nextSlide();
    updateCircleIndicator();
    resetTimer();
  },
  false
);

function circleIndicator() {
  for (let i = 0; i < slides.length; i++) {
    const div = document.createElement("div");
    div.innerHTML = i + 1;
    div.setAttribute("onclick", "indicatorslide(this)");
    div.id = i;
    if (i == 0) {
      div.className = "active";
    }
    indicator.appendChild(div);
  }
}

circleIndicator();

function updateCircleIndicator() {
  for (let i = 0; i < indicator.children.length; i++) {
    indicator.children[i].classList.remove("active");
  }
  indicator.children[index].classList.add("active");
}

function indicatorslide(element) {
  index = element.id;
  changeSlide();
  updateCircleIndicator();
  resetTimer();
}

function prevSlide() {
  if (index == 0) {
    index = slides.length - 1;
  } else {
    index--;
  }
  changeSlide();
}

function nextSlide() {
  if (index == slides.length - 1) {
    index = 0;
  } else {
    index++;
  }
  changeSlide();
}

function changeSlide() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  slides[index].classList.add("active");
}

function resetTimer() {
  clearInterval(timer2);
  timer2 = setInterval(autoPlay, 4000);
}

function autoPlay() {
  nextSlide();
  updateCircleIndicator();
}

let timer2 = setInterval(autoPlay, 4000);

// UNI OPTION
const allBox = document.querySelector(".grid-box").children;
const sectionServices = document.querySelectorAll(".inner-service");
const boxWidth = allBox[0].querySelector(".services").offsetWidth;
const boxHeight = allBox[0].querySelector(".services").offsetHeight;

const divServices = document.createElement("div");
divServices.style.position = "absolute";
divServices.style.width = boxWidth + "px";
divServices.style.height = boxHeight + "px";
divServices.style.backgroundImage =
  " linear-gradient(to right,  #ae8b9c 0%,#8baaaa 100%)";
divServices.style.transition = "all 1s ease";
divServices.style.left = allBox[0].querySelector(".services").offsetLeft + "px";
divServices.style.top = allBox[0].querySelector(".services").offsetTop + "px";

for (let j = 0; j < allBox.length; j++) {
  allBox[j].addEventListener(
    "click",
    function () {
      document.querySelector(".grid-box").appendChild(divServices);
      const x = this.offsetLeft;
      const y = this.offsetTop;
      divServices.style.left = x + "px";
      divServices.style.top = y + "px";
      const width = this.offsetWidth;
      const height = this.offsetHeight;
      divServices.style.width = width + "px";
      divServices.style.height = height + "px";
    },
    false
  );
}

window.addEventListener(
  "scroll",
  function () {
    sectionServices.forEach((services) => {
      if (this.window.pageYOffset >= document.documentElement.clientTop) {
        services.classList.add("services-active");
      }
    });
  },
  false
);

// OFFER SECTION
const offerIcon = document.querySelectorAll(".uni-offer-icon");
const offerText = document.querySelectorAll(".uni-offer-text p");
const offerTexth = document.querySelectorAll(".uni-offer-text h3");
const uniOfferh = document.querySelector("#uni-offer-content h2");
const uniDesc = document.querySelectorAll(".uni-offer-desc");

for (let i = 0; i < offerIcon.length; i++) {
  offerIcon[i].addEventListener(
    "click",
    function () {
      offerText[i].classList.toggle("activeIcon");
      offerTexth[i].classList.toggle("activeIcon");
    },
    false
  );
}

window.addEventListener(
  "scroll",
  function () {
    if (this.window.pageYOffset >= document.documentElement.clientHeight) {
      uniOfferh.classList.add("offer-active");
      uniDesc.forEach((desc) => {
        desc.classList.add("offer-active");
      });
    }
  },
  false
);

//VIDEO
const playIcon = document.querySelector(".play-icon");
const videoPlayer = document.querySelector("#videoPlayer");
const videoClose = document.querySelector(".video-close-btn");
const uniVideo = document.querySelector("#uni-Video");
const videoDesc = document.querySelector(".video-desc");

playIcon.addEventListener(
  "click",
  function () {
    videoPlayer.style.display = "block";
    uniVideo.play();
  },
  false
);

videoClose.addEventListener(
  "click",
  function () {
    videoPlayer.style.display = "none";
    uniVideo.pause();
  },
  false
);

window.addEventListener(
  "scroll",
  function () {
    if (
      this.window.pageYOffset >=
      document.documentElement.clientHeight + 1000
    ) {
      videoDesc.classList.add("video-active");
    }
  },
  false
);

// COUNTER
const counters = document.querySelectorAll(".counter");
const resultVideo = document.querySelector(".result");

counters.forEach((counter) => {
  counter.innerText = "0";

  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const c = +counter.innerText;

    const increment = target / 700;

    if (c < target) {
      counter.innerText = Math.ceil(c + increment);
      setTimeout(updateCounter, 1);
    } else {
      counter.innerText = target;
    }
  };
  updateCounter();
});

window.addEventListener(
  "scroll",
  function () {
    if (
      this.window.pageYOffset >=
      document.documentElement.clientHeight + 1500
    ) {
      resultVideo.classList.add("video-active");
    }
  },
  false
);

//ADD TO CART SHOPP
const cartCount = document.querySelector(".cart-count");
const cartItem = document.querySelector(".cart_items");
const addToCartBtn = document.querySelectorAll(".uni-course-product-buy");
const totalCount = document.querySelector(".total-counter");
const totalCost = document.querySelector(".total_cost");
const checkOutBtn = document.querySelector(".check_out_btn");

let cartItems = JSON.parse(localStorage.getItem("cart___items")) || [];

document.addEventListener("DOMContentLoaded", loadData);

checkOutBtn.addEventListener("click", function () {
  if (confirm("Are you sure you want to delete the product in your cart?"))
    clearCartItems();
});

cartCount.addEventListener(
  "click",
  function () {
    cartItem.classList.toggle("active-cart");
  },
  false
);

addToCartBtn.forEach((btn) => {
  btn.addEventListener(
    "click",
    () => {
      var parentElement = btn.parentElement;
      const product = {
        id: parentElement.querySelector("#product-id").value,
        name: parentElement.querySelector(".product-name").innerText,
        image: parentElement.querySelector("#image").getAttribute("src"),
        price: parentElement.querySelector(".uni-product-price").innerText,
        quantity: 1,
      };

      let isInCart =
        cartItems.filter((item) => item.id === product.id).length > 0;

      if (!isInCart) {
        addItemToTheDom(product);
      } else {
        alert("This Product Is In The Cart");
        return;
      }

      const cartDomItems = document.querySelectorAll(".cart_item");

      cartDomItems.forEach((inItem) => {
        if (inItem.querySelector("#product-id").value === product.id) {
          increaseItem(inItem, product);
          decreaseItem(inItem, product);
          removeItem(inItem, product);
        }
      });

      cartItems.push(product);
      calculateTotal();
      saveToLocalStorage();
    },
    false
  );
});

function saveToLocalStorage() {
  localStorage.setItem("cart___items", JSON.stringify(cartItems));
}

function addItemToTheDom(product) {
  cartItem.insertAdjacentHTML(
    "afterbegin",
    `
        <div class="cart_item">
            <input type="hidden" id="product-id" value="${product.id}">
            <img src="${product.image}" id="product__" alt="">
            <h4 class="product_name">${product.name}</h4>
            <div class="btn_small" action="increase">&plus;</div>
            <h4 class="product_quantity">${product.quantity}</h4>
            <div class="btn_small" action="decrease">&minus;</div>
            <h4 class="product_price">${product.price}</h4>
            <div class="btn_small btn-remove" action="remove">&times;</div>
        </div>
    `
  );
}

function calculateTotal() {
  let total = 0;
  cartItems.forEach((item) => {
    total += item.quantity * item.price;
  });
  totalCost.innerText = total;
  totalCount.innerText = cartItems.length;
}

function increaseItem(inItem, product) {
  inItem.querySelector("[action='increase']").addEventListener(
    "click",
    function () {
      cartItems.forEach((cartItem) => {
        if (cartItem.id === product.id) {
          inItem.querySelector(".product_quantity").innerText =
            ++cartItem.quantity;
          calculateTotal();
          saveToLocalStorage();
        }
      });
    },
    false
  );
}

function decreaseItem(inItem, product) {
  inItem.querySelector("[action='decrease']").addEventListener(
    "click",
    function () {
      cartItems.forEach((cartItem) => {
        if (cartItem.id === product.id) {
          if (cartItem.quantity > 1) {
            inItem.querySelector(".product_quantity").innerText =
              --cartItem.quantity;
          } else {
            cartItems = cartItems.filter(
              (newElement) => newElement.id !== product.id
            );
            inItem.remove();
          }

          calculateTotal();
          saveToLocalStorage();
        }
      });
    },
    false
  );
}

function removeItem(inItem, product) {
  inItem.querySelector("[action='remove']").addEventListener(
    "click",
    function () {
      cartItems.forEach((cartItem) => {
        if (cartItem.id === product.id) {
          cartItems = cartItems.filter(
            (newElement) => newElement.id !== product.id
          );
          inItem.remove();
          calculateTotal();
          saveToLocalStorage();
        }
      });
    },
    false
  );
}

function loadData() {
  if (cartItems.length > 0) {
    cartItems.forEach((product) => {
      addItemToTheDom(product);

      const cartDomItems = document.querySelectorAll(".cart_item");

      cartDomItems.forEach((inItem) => {
        if (inItem.querySelector("#product-id").value === product.id) {
          increaseItem(inItem, product);
          decreaseItem(inItem, product);
          removeItem(inItem, product);
        }
      });
    });
    calculateTotal();
    saveToLocalStorage();
  }
}

function clearCartItems() {
  localStorage.clear();
  cartItems = [];
  document.querySelectorAll(".cart_item").forEach((item) => {
    item.remove();
  });
  calculateTotal();
}

const uniCourse = document.querySelector(".uni-course-header");
const uniCourseP = document.querySelectorAll(".uni-curse-product");

window.addEventListener(
  "scroll",
  function () {
    if (
      this.window.pageYOffset >=
      document.documentElement.clientHeight + 1900
    ) {
      uniCourse.classList.add("course-active");
    }
    if (
      this.window.pageYOffset >=
      document.documentElement.clientHeight + 2000
    ) {
      uniCourseP.forEach((course) => {
        course.classList.add("cousrep-active");
      });
    }
  },
  false
);

// TEACHER SECTION
const teachersImg = document.querySelectorAll(".teachers-desc img");

teachersImg.forEach((btn) => {
  btn.onclick = () => {
    btn.classList.toggle("teachers-active");
  };
});

// QOUTE SECTION

const btnQoute = document.querySelector(".btnQoute");
const btnAnimate = document.querySelector(".btn-animate");

btnQoute.addEventListener(
  "click",
  function (e) {
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;
    let span = document.createElement("span");
    span.style.left = x + "px";
    span.style.top = y + "px";
    btnAnimate.appendChild(span);

    setTimeout(() => {
      span.remove();
    }, 20000);
  },
  false
);

const textarea = document.querySelector("#textarea");
const remaining = document.querySelector("#textarea-remaining");
let maxChares = 50;

textarea.addEventListener(
  "input",
  () => {
    const totalRemaining = maxChares - textarea.value.length;
    const color = totalRemaining < maxChares * 0.1 ? "red" : null;
    remaining.textContent = `${totalRemaining} Characters Left`;
    remaining.style.color = color;
    if (totalRemaining === 0) {
      remaining.textContent = `${totalRemaining} The Allowable Amount Is Complated`;
    }
  },
  false
);

// RECENT BLOG

const recentBlogEntry = document.querySelectorAll(".recent-blog-entry");
const recentSlider = document.querySelector("#blog-slider");
const angleLeft = document.querySelector(".blog-angle-left");
const angleRight = document.querySelector(".blog-angle-right");

angleLeft.addEventListener(
  "click",
  function () {
    recentSlider.scrollLeft -= 125;
  },
  false
);

angleRight.addEventListener(
  "click",
  function () {
    recentSlider.scrollLeft += 125;
  },
  false
);

const maxScrollLeft = recentSlider.scrollWidth - recentSlider.clientWidth;

function autoPlaySlider() {
  if (recentSlider.scrollLeft > maxScrollLeft - 1) {
    recentSlider.scrollLeft -= maxScrollLeft;
  } else {
    recentSlider.scrollLeft += 1;
  }
}

let playSlider = setInterval(autoPlaySlider, 50);

for (let i = 0; i < recentBlogEntry.length; i++) {
  recentBlogEntry[i].addEventListener("mouseover", () => {
    clearInterval(playSlider);
  });
  recentBlogEntry[i].addEventListener("mouseout", () => {
    return (playSlider = setInterval(autoPlaySlider, 50));
  });
}

// STUDENST SAYS ABOUT US SLIDER

const says = document.querySelectorAll(".students-says");
const sliderDot = document.querySelectorAll(".slider-dot button i");

for (let i = 0; i < sliderDot.length; i++) {
  sliderDot[i].addEventListener(
    "click",
    function () {
      for (let j = 0; j < sliderDot.length; j++) {
        sliderDot[j].classList.remove("sliderActive");
      }
      sliderDot[i].classList.add("sliderActive");

      const id = this.getAttribute("data-id");
      for (let x = 0; x < says.length; x++) {
        says[x].classList.remove("sliderActive");
      }
      says[id].classList.add("sliderActive");
    },
    false
  );
}

let indx = 0;
function updateSliderDot() {
  for (let i = 0; i < sliderDot.length; i++) {
    sliderDot[i].classList.remove("sliderActive");
  }
  sliderDot[indx].classList.add("sliderActive");
}

function nextSlider() {
  if (indx == says.length - 1) {
    indx = 0;
  } else {
    indx++;
  }
  changeSlides();
}

function changeSlides() {
  for (let i = 0; i < says.length; i++) {
    says[i].classList.remove("sliderActive");
  }
  says[indx].classList.add("sliderActive");
}

function restimer() {
  clearInterval(timer3);
  timer3 = setInterval(autoPlaySlider, 4000);
}

function autoPlayerS() {
  nextSlider();
  updateSliderDot();
}

let timer3 = setInterval(autoPlayerS, 4000);

// GALLERY

const galleryItem = document.querySelectorAll(".gallery-item");

galleryItem.forEach((btn) => {
  btn.addEventListener(
    "click",
    function () {
      btn.classList.toggle("activeGallery");
    },
    false
  );
});

// GO TO TOP

const toTop = document.querySelector(".to-top");

window.addEventListener(
  "scroll",
  function () {
    if (this.window.pageYOffset > 400) {
      toTop.classList.add("to-top-active");
    } else {
      toTop.classList.remove("to-top-active");
    }
  },
  false
);
