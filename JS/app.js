// buger activation

let navbar = document.querySelector(".navbar");
let burger = document.querySelector(".burger");
let menu = document.querySelector(".links");
let img1 = document.querySelector(".img1");

burger.addEventListener("click", () => {
 console.log("hi")
  menu.classList.toggle("navactive");
  burger.classList.toggle("line");
});



let links = document.querySelectorAll(".page-redirection")
for(let i=0; i<links.length; i++){
  links[i].addEventListener("click",()=>{
    menu.classList.remove("navactive")
      burger.classList.remove ("line")
  })
}

//  navbar shadow after scroll

let nav = document.querySelector(".navbar");
window.onscroll = () => {
  if (window.scrollY > 0) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
};

//  smooth scorlling

let scroll = document.querySelectorAll('a[hreaf^="#"]');

scroll.forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behaviour: "smooth",
    });
  });
});

// images adding

let more = document.querySelector(".more");
let img = document.querySelectorAll(".img3,.img4,.img5");

more.addEventListener("click", (e) => {
  e.preventDefault();
  for (let i = 0; i < img.length; i++) {
    img[i].classList.toggle("img-active");
  }

  if (more.innerHTML == "LESS") {
    more.innerHTML = "MORE";
  } else {
    more.innerHTML = "LESS";
  }
});

// form validation

let uname = document.querySelector(".u-name");
let phone = document.querySelector(".u-mobile");
let email = document.querySelector(".u-email");
let textarea=document.querySelector('textarea')
let input = document.querySelectorAll("input[type='text'],input[type='email']");
let send = document.querySelector(".submit-btn");

for (let i = 0; i < input.length; i++) {
  input[i].addEventListener("focus", (e) => {
    e.preventDefault();
    const nameValue = uname.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    const textareaValue=textarea.value.trim();
    // name validation
    let isMatch = /[a-zA-z]{2,}/;
    if (nameValue.match(isMatch)) {
      e.preventDefault();
      uname.style.cssText = "border-bottom:2px solid green";
    } else {
      e.preventDefault();
      uname.style.cssText = "border-bottom:2px solid red";
      uname.focus();
      return false;
    }
    ///----- Phone Validation

    let numMatch = /[0-9]{10}/;

    if (phoneValue.match(numMatch)) {
      e.preventDefault();
      phone.style.cssText = "border-bottom:2px solid green";
    } else {
      phone.style.cssText = "border-bottom:2px solid red";
      phone.focus();
      return flase;
    }

    /////----- Email Validation

    let isValid = /[a-zA-Z0-9.]{1,}@[a-zA-z]{1,}[.]{1}[a-zA-Z]{2,3}$/;

    if (emailValue.match(isValid)) {
      e.preventDefault();
      email.style.cssText = "border-bottom:2px solid green";
    } else { 
      email.style.cssText = "border-bottom:2px solid red";
        email.focus();
        return flase
    }

    // textare match
    let text= /[a-zA-z0-9]{1,}/
    if(textareaValue.match(text)){
      e.preventDefault();
      textarea.focus()
    }else{
      return false
    }
  });
  document.querySelector(".u-form").reset();
}

// lead form submition


const scriptURL =
  "https://script.google.com/macros/s/AKfycbyQR0OpFGpywlI_WzGEa0RkZHyYn16GR2m3SUw9BlUUhMJFi8XfClqmGP8UIDfANVa7/exec";
const form = document.forms["contactform"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => console.log("Success!", response))
    .then(document.querySelector(".u-form").reset())
    .then(document.querySelector(".form-content").style.display="none")
    .then(document.querySelector(".conformation-msg").style.display="flex")
    .catch((error) => console.error("Error!", error.message));
});



// document.querySelector("submit-btn").addEventListener("click",()=>{
//   const nameValue = uname.value.trim();
//     const emailValue = email.value.trim();
//     const phoneValue = phone.value.trim();
//     const textareaValue=textarea.value.trim();
//     // name validation
//     let isMatch = /[a-zA-z]{2,}/;
//     if (nameValue.match(isMatch)) {
//       e.preventDefault();
//       uname.style.cssText = "border-bottom:2px solid green";
//     } else {
//       e.preventDefault();
//       uname.style.cssText = "border-bottom:2px solid red";
//       uname.focus();
//       return false;
//     }
//     ///----- Phone Validation

//     let numMatch = /[0-9]{10}/;

//     if (phoneValue.match(numMatch)) {
//       e.preventDefault();
//       phone.style.cssText = "border-bottom:2px solid green";
//     } else {
//       phone.style.cssText = "border-bottom:2px solid red";
//       phone.focus();
//       return flase;
//     }

//     /////----- Email Validation

//     let isValid = /[a-zA-Z0-9.]{1,}@[a-zA-z]{1,}[.]{1}[a-zA-Z]{2,3}$/;

//     if (emailValue.match(isValid)) {
//       e.preventDefault();
//       email.style.cssText = "border-bottom:2px solid green";
//     } else {
//       email.style.cssText = "border-bottom:2px solid red";
//         email.focus();
//         return flase
//     }

//     // textare match
//     let text= /[a-zA-z0-9]{1,}/
//     if(textareaValue.match(text)){
//       e.preventDefault();
//       textarea.focus()
//     }else{
//       return false
//     }
  
// })

document.querySelector(".form-btn").addEventListener("click",()=>{  
  document.querySelector(".conformation-msg").style.display="none"
  document.querySelector(".form-content").style.display="flex"
  for(let i=0;i<input.length;i++){
    input[i].style.cssText="border-bottom: 1px solid #707070;"
  }
})