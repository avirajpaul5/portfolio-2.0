/* -- Glow effect -- */

const blob = document.getElementById("blob");

window.onpointermove = event => { 
  const { clientX, clientY } = event;
  
  blob.animate({
    left: `${clientX}px`,
    top: `${clientY}px`
  }, { duration: 4000, fill: "forwards" });
}

/* -- Text effect -- */
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

document.querySelector("h1").onmouseover = event => {  
  let iteration = 0;
  
  clearInterval(interval);
  
  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return event.target.dataset.value[index];
        }

        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");
    
    if(iteration >= event.target.dataset.value.length){ 
      clearInterval(interval);
    }
    
    iteration += 1 / 3;
  }, 30);
}

// ----------------------------------------------------------------------------------------

const burgerMenu = document.querySelector(".burger-menu");
const menu = document.querySelector(".menu");

burgerMenu.addEventListener("mouseover", function() {
  menu.classList.add("transition");
});

burgerMenu.addEventListener("mouseout", function() {
  menu.classList.remove("transition");
});
//TODO add transition class to menu so that menu stays on as long as the cursor is there
menu.addEventListener("mouseover", function(){

});
