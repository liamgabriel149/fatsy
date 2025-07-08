const button = document.querySelector("button"),
 container = document.querySelector(".container"),
 closebutton = document.querySelector(".close"),
 progress = document.querySelector(".progress");


 button.addEventListener("click",() =>{
    container.classList.add("active");
    progress.classList.add("active");

    setTimeout(() =>{
        container.classList.remove("active");
    },5000);

    setTimeout(() =>{
        progress.classList.remove("active");

    },5400);
 });
 


 closebutton.addEventListener("click",() =>{
    container.classList.remove("active");
    

    setTimeout(() =>{
        progress.classList.remove("active");

    },400);

 });
 