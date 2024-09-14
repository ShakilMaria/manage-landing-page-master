let togglebar = document.querySelector("#list");

let header = document.querySelector(".header-area")
 
togglebar.addEventListener("click",  ()=>{
    console.log(togglebar);
    
    header.classList.toggle('active')
});
 
