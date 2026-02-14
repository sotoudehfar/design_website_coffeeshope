const submenuOpenBtn = document.querySelector('.submenu-open-btn');
const toggleThemeBtns = document.querySelectorAll(".toggle-theme");
const submenu = document.querySelector(".submenu");
const navOpenBtn = document.querySelector(".navBar");
const navCloseBtn = document.querySelector(".nav-close-btn");
const nav = document.querySelector(".nav");
const overlay = document.querySelector('.overlay');

toggleThemeBtns.forEach(btn =>{
   
    btn.addEventListener("click", function(){
        console.log("dobare")
          if (localStorage.theme === "dark"){
            document.documentElement.classList.remove("dark");
            localStorage.theme = "light";
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme" , "dark");
        }   
    })

   })
submenuOpenBtn.addEventListener('click' ,  (e)=>{
// والد رو نارانجی کن
       e.currentTarget.parentElement.classList.toggle('text-orange-300');
//    زیر منوها باز شوند
       submenu.classList.toggle('submenu--open');
   })

navOpenBtn.addEventListener('click' ,  ()=>{
    nav.classList.remove('-right-64');
    nav.classList.add('right-0');
    overlay.classList.add('overlay--visible');

   })

navCloseBtn.addEventListener('click', ()=>{
    nav.classList.add('-right-64');
    nav.classList.remove('right-0');
    overlay.classList.remove('overlay--visible');  
   })


overlay.addEventListener('click', ()=>{
    nav.classList.add('-right-64');
    nav.classList.remove('right-0');
    overlay.classList.remove('overlay--visible');     

})

