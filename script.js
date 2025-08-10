



let headerMenuBtn=document.querySelector(".header__menu");
let headerNavBar=document.querySelector(".header__nav-auth");
let showMenuIcon=document.querySelector(".header__menu .fa-bars");
let closeMenuIcon=document.querySelector(".header__menu .fa-xmark")


headerMenuBtn.addEventListener("click",()=>{
     headerNavBar.classList.toggle("show");

     if(headerNavBar.classList.contains("show")){
          showMenuIcon.style.display="none";     
          closeMenuIcon.style.display="block";     
    }else{
          showMenuIcon.style.display="block";     
          closeMenuIcon.style.display="none";  
    };
});
