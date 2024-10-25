const sideMenu = document.querySelector('#sideMenu');

const navBar = document.querySelector("nav")
const navLinks = document.querySelector("nav ul")


function openMenu (){
         sideMenu.style.transform = 'translateX(-16rem)';
}

function closeMenu(){
    sideMenu.style.transform = 'translateX(16rem)';
}
 
window.addEventListener('scroll', ()=>{
    if(scrollY > 50){
           navBar.classList.add('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm','dark:bg-darkTheme', 'dark:shadow-white/20');
           navLinks.classList.remove('bg-white','bg-opacity-50','shadow-sm','dark:border','dark:border-white/50',"dark:bg-transparent");
    }else{
        navBar.classList.remove('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm','dark:border','dark:border-white/50','dark:bg-transparent');
        navLinks.classList.add('bg-white','bg-opacity-50','shadow-sm','dark:border','dark:border-white/50',"dark:bg-transparent");
    }
})



// Typewriter Effect

const texts = [
    "Frontend Devoloper",
    "IT Specialist",
    "Youtuber"
]

let speed  =210;
const textElements = document.querySelector(".typewriter-text");

let textIndex = 0;
let charcterIndex = 0;

function typeWriter(){
    if (charcterIndex < texts[textIndex].length){
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed); 
    }
    else{
        setTimeout(eraseText, 1000)
    }
}

function eraseText(){
    if(textElements.innerHTML.length > 0){
        textElements.innerHTML = textElements.innerHTML.slice(0,-1);
        setTimeout(eraseText, 50)
    }
    else{
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter, 500)
    }
}

window.onload = typeWriter







