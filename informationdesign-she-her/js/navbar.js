const navbar = document.querySelector(".leftnav");
const navbar2 = document.querySelector(".rightnav");

navbar2.addEventListener("click", () => {
        for (let i = 0; i < navbar.length; i++){
            navbar2.style.textDecoration = "none";
            console.log(i);

        }
    
        navbar2.style.textDecoration = "underline";
        
    })
