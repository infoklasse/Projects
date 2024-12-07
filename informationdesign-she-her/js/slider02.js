

var slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}



function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("designerslider"); 

  //text-slides
  if (n > slides.length){
    slideIndex = 1;
  };

  if (n < 1){
    slideIndex = slides.length
  };
      
  for (i = 0; i < slides.length; i++){
      slides[i].style.display = "none"; 
  };

  slides[slideIndex-1].style.display = "block";

}

const navlists = [
  
  {   
      name:  "Ada Lovelace",
  },
  
  {   
      name:   "Alice Urbach",
  },

  {   
      name:   "Anna Atkins",  
  },

  {   
      name:   "Deborah Sussman",  
  },
  
  {   
      name:   "Emma Willard",
  },
  
  {   
      name:   "Federica Fragapane",
  },

  {   
      name:   "Florence Nightingale",
  },
 
  {   
      name:   "Giorgia Lupi",
  },

  {   
      name:   "Jane Davis Doggett",
  },
  
  {   
      name: "Luna Maurer",
      
  },

  {   
      name:   "Maria Sibylla Merian",   
  },

  {   
      name:   "Marie Neurath",
  },

  {   
      name:   "Marie Tharp",     
  },

  {   
      name:   "Muriel Cooper",    
  },

  {   
      name:   "Sandra Rendgen",
  },

  {   
      name:   "Stefanie Posavec",
  },

  {   
      name:   "Susan Kare",
    
  },

  {   
      name:   "Sylvia Harris",
     
  },

]


const test = document.querySelector(".deisgnerlist")


navlists.forEach((e, index) => {

  const main = document.createElement("div");
  main.classList.add("main1");

  const div = document.createElement("span")
  div.innerHTML = e.name ;
  div.classList.add("namesnav");

  div.addEventListener("click", (e) => {
    console.log(e)
    currentSlide(index + 1)

   
    const cc = document.querySelectorAll(".namesnav")
    for(let j = 0; j < cc.length; j++){
      cc[j].style.textDecoration = "none"
      cc[j].style.fontFamily = "subtitle"

      
    }
    div.style.textDecoration= 'underline';
    div.style.fontFamily = "lefttext"



  })
  main.appendChild(div);
  test.appendChild(main);
})



