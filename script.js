






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


let filterBtns=document.querySelectorAll(".cars__list-btn button");
let carCards=document.querySelectorAll('.cars__card');


filterBtns.forEach((Element)=>{
       Element.addEventListener("click",()=>{
             let selectedBrand=Element.getAttribute("data-brand");
             carCards.forEach(card=>{
                  let cardBrand=card.getAttribute("data-brand");

                  if(cardBrand===selectedBrand || selectedBrand==="all"){
                      card.style.display='block';
                 }else{
                     card.style.display='none';
                 }
             })
      //    remove active style from all button
      filterBtns.forEach(btn=>btn.classList.remove("btn-primary"));
      filterBtns.forEach(btn=>btn.classList.add("btn-secondary"));

      // add active style to clicked button
      Element.classList.remove("btn-secondary");
      Element.classList.add("btn-primary");
});
});


