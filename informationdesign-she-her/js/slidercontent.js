const myslides = [
    {   
        tag1:   "19th Century",
        tag2:   "Science",
        tag3:   "Technology",
        text:  "invented the first computer programming system",
        answer: "Ada Lovelace",
    },
 
    {  
        tag1:   "20th Century",
        tag2:   "Documentation",
        tag3:   "Visual Systems",
        text:   "wrote a successful cookbook with an educational purpose",
        answer: "Alice Urbach",
    },

    {   
        tag1:   "19th Century",	
        tag2:   "Documentation",
        tag3:   "Botany",
        text:   "made the first photobook",
        answer: "Anna Atkins",
    },
    
    {   
        tag1:   "20th Century",
        tag2:   "Design",
        tag3:   "Visual Systems",
        text:   "carried out the boldest Olympic Games redesign",
        answer: "Deborah Sussman",
    },
    
    {   
        tag1: "19th Century",
        tag2: "Design",
        tag3: "Cartography",
        text: "founded the first school for higher education for women in the United States",
        answer: "Emma Willard",
    },
    
    {   
        tag1: "21th Century",
        tag2: "Design",
        tag3: "Data Visualization",
        text: "made the Shape of Dreams for Google Trends data visualizations",
        answer: "Federica Fragapane",
    },
    
    {   
        tag1: "19th Century",
        tag2: "Science",
        tag3: "Data Visualization",
        text: "created the coxcomb chart",
        answer: "Florence Nightingale",
    },
    
    {   
        tag1: "21th Century",
        tag2: "Design",
        tag3: "Data Visualization",
        text: "popularized the term Data Humanism",
        answer: "Giorgia Lupi",
    },
    
    {   
        tag1: "20th Century",
        tag2: "Design",
        tag3: "Visual Systems",
        text: "developed the first airport wayfinding system",
        answer: "Jane Davis Doggett",
    },
    
    {   
        tag1: "20th Century",
        tag2: "Design",
        tag3: "Technology",
        text: "coined the term Conditional Design",
        answer: "Luna Maurer",
    },
    
    {   
        tag1: "17th Century",
        tag2: "Documentation",
        tag3: "Botany",
        text: "discovered Metamorphosis",
        answer: "Maria Sibylla Merian",
    },
    
    {   
        tag1: "20th Century",
        tag2: "Design",
        tag3: "Data Visualization",
        text: "majorly influenced and continued the Isotype picture language",
        answer: "Marie Neurath",
    },
    
    {   
        tag1: "20th Century",
        tag2: "Science",
        tag3: "Cartography",
        text: "co-created the first comprehensive map of the entire ocean bottom",
        answer: "Marie Tharp",
    },

    {   
        tag1: "20th Century",
        tag2: "Design",
        tag3: "Technology",
        text: "was teaching many of today's most gifted software designers",
        answer: "Muriel Cooper",
    },

    {   
        tag1: "21th Century",
        tag2: "Documentation",
        tag3: "Data Visualization",
        text: "wrote some of the most comprehensive books on information design",
        answer: "Sandra Rendgen",
    },

    {   
        tag1:   "21th Century",
        tag2:   "Design",
        tag3:   "Data Visualization",
        text: "has created visualizations in the permanent collection of MoMa",
        answer: "Stefanie Posavec",
    },

    {   
        tag1: "20th Century",
        tag2: "Design",
        tag3: "Visual Systems",
        text: "created the first Macintosh user interface",
        answer: "Susan Kare",
    },

    {   
        tag1: "20th Century",
        tag2: "Design",
        tag3: "Visual Systems",
        text: "was in charge of the 2000 Census design for the United States Census Bureau",
        answer: "Sylvia Harris",
    },
]



const slideshowContainer = document.querySelector(".slideshow-container")


function createText(){
    for (i = 0; i < myslides.length; i++){

        let mainslide = document.createElement("div");
        mainslide.classList.add("mySlides");

        let tag1btn = document.createElement('button');
        tag1btn.innerHTML =`${myslides[i].tag1}`;
        tag1btn.classList.add("tag1btn");
        mainslide.appendChild(tag1btn);

        let tag2btn = document.createElement('button');
        tag2btn.innerHTML =`${myslides[i].tag2}`;
        tag2btn.classList.add("tag2btn");
        mainslide.appendChild(tag2btn);

        let tag3btn = document.createElement('button');
        tag3btn.innerHTML =`${myslides[i].tag3}`;
        tag3btn.classList.add("tag3btn");
        mainslide.appendChild(tag3btn);

        let desP  = document.createElement('p');
        desP.classList.add ("designerP");

        let doyou = document.createElement("span");
        doyou.classList.add("doyou");
        doyou.innerText = "Did you know" + " ";
        desP.appendChild(doyou);

        let qawarpper = document.createElement("span");
        qawarpper.classList.add("qaWrapper");

        let question = document.createElement("span");
        question.classList.add("question");
        question.innerHTML = "a woman" + "<br>";
        question.addEventListener("click", () => {window.location.href= "./html/designers.html"});

        let answer = document.createElement("span");
        answer.classList.add("answer");
        answer.innerText = `${myslides[i].answer + " "} ` ;
        answer.addEventListener("click", () => {window.location.href= "./html/designers.html"});
        
        qawarpper.appendChild(question);
        qawarpper.appendChild(answer);
        desP.appendChild(qawarpper);

        let text = document.createElement("span");
        text.classList.add("text");
        text.innerText = `${myslides[i].text + "?"} `;
        desP.appendChild(text);

        mainslide.appendChild(desP);
        slideshowContainer.appendChild(mainslide);
       }
}

createText();
