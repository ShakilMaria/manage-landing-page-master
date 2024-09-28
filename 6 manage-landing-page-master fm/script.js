let toggle = document.querySelector('.toggle_btn');

let toggleImage = document.querySelector('.toggle_btn img')
let menu = document.querySelector('#menu')
let x =1
toggle.addEventListener('click', ()=>{
   
    if (x === 1) {
        toggleImage.setAttribute('src', 'images/icon-close.svg' );
        x = x + 1
        console.log(x);
        menu.classList.remove('h-0')
       
        
    } else {
        toggleImage.setAttribute('src', 'images/icon-hamburger.svg' );
        menu.classList.add('h-0')
        x = x-1
    }
  
})