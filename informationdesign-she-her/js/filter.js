let designers = 
[
  {
    "name":"Maria Sibylla Merian",
    "activeperiod":"17th Century",
    "mainfield":"Documentation",
    "specification": "Botany",
    
  },

  {
    "name":"Ada Lovelace",
    "activeperiod":"19th Century",
    "mainfield":"Science",
    "specification":"Technology",
    "pioner":"pioner"
    },

  {
    "name":"Alice Urbach",
    "activeperiod":"20th Century",
    "mainfield":"Documentation",
    "specification":"Visual Systems",
  },
 
  {
    "name":"Anna Atkins",
    "activeperiod":"19th Century",
    "mainfield":"Documentation",
    "specification":"Botany",
  },

  {
    "name":"Deborah Sussman",
    "activeperiod":"20th Century",
    "mainfield":"Design",
    "specification": "Visual Systems",
  },

  {
    "name":"Emma Willard",
    "activeperiod":"19th Century",
    "mainfield":"Design",
    "specification": "Cartography",
  },

  {
    "name":"Federica Fragapane",
    "activeperiod":"21th Century",
    "mainfield":"Design",
    "specification": "Data Visualization",
  },
  
  {
    "name":"Florence Nightingale",
    "activeperiod":"19th Century",
    "mainfield":"Science",
    "specification": "Data Visualization",
  },

  {
    "name":"Giorgia Lupi",
    "activeperiod":"21th Century",
    "mainfield":"Design",
    "specification": "Data Visualization",
  },

  {
    "name":"Jane Davis Doggett",
    "activeperiod":"20th Century",
    "mainfield":"Design",
    "specification": "Visual Systems",
  },

  {
    "name":"Jane Davis Doggett",
    "activeperiod":"20th Century",
    "mainfield":"Design",
    "specification": "Visual Systems",
  },

  {
    "name":"Luna Maurer",
    "activeperiod":"20th Century",
    "mainfield":"Design",
    "specification": "Technology",
  },

 
  {
    "name":"Marie Neurath",
    "activeperiod":"20th Century",
    "mainfield":"Design",
    "specification": "Data Visualization",
  },

  {
    "name":"Marie Tharp",
    "activeperiod":"20th Century",
    "mainfield":"Science",
    "specification": "Cartography",
  },

  {
    "name":"Muriel Cooper",
    "activeperiod":"20th Century",
    "mainfield":"Design",
    "specification": "Technology",
  },

  {
    "name":"Sandra Rendgen",
    "activeperiod":"21th Century",
    "mainfield":"Documentation",
    "specification": "Data Visualization",

  },

  {
    "name":"Stefanie Posavec",
    "activeperiod":"21th Century",
    "mainfield":"Design",
    "specification": "Data Visualization",
  },

  {
    "name":"Susan Kare",
    "activeperiod":"20th Century",
    "mainfield":"Design",
    "specification": "Visual Systems",
  },

  {
    "name":"Sylvia Harris",
    "activeperiod":"20th Century",
    "mainfield":"Design",
    "specification": "Visual Systems",
    
  },

];


let designerList = designers;
// Map
// const specificationUniqueList = designers.map(function(e){
//   return e.specifications
// });
const activeperiodUniqueList = [...(new Set(designers.map((e) => e.activeperiod)))];
const specificationUniqueList = [...(new Set(designers.map((e) => e.specification)))];
const mainfieldUniqueList = [...(new Set(designers.map((e) => e.mainfield)))];

const itemWrapper = document.querySelector("#itemWrapper");
const filterBtnContainer = document.querySelector("#filterbtn");
const filterallBtnContainer = document.querySelector(".allbtn");

const btngrid = document.querySelector(".btngrid");


//all btn
const buttonAll = document.createElement("button");
buttonAll.classList.add("btn01");

buttonAll.innerText = "all";

buttonAll.addEventListener("click", (e) => {
  designerList = designers;
  onUnCliked()
  buttonAll.classList.remove("unCliked");
  buttonAll.classList.add("cliked");
  itemBoxfuction()
})

const allbtn = document.createElement("div");
allbtn.classList.add("btn01");
allbtn.appendChild(buttonAll);
filterallBtnContainer.appendChild(allbtn);


const gridA = document.createElement("div");
gridA.classList.add("gridA");

for(let i = 0; i < activeperiodUniqueList.length; i++){
 
  const buttonA = document.createElement("button");
  buttonA.innerText = activeperiodUniqueList[i];
  buttonA.classList.add("filterbtnA");

  buttonA.addEventListener("click",(e) => {
    onUnCliked();
    // //all btn reset
    buttonAll.classList.add("unCliked")
    buttonAll.classList.remove("cliked")

    // button event
    buttonA.classList.remove("unCliked");
    buttonA.classList.add("cliked");

    designerList = designers.filter((newE) => newE.activeperiod === e.target.innerText)
    itemBoxfuction()
  })
  
  gridA.appendChild(buttonA);
}
btngrid.appendChild(gridA);

const gridS = document.createElement("div");
gridS.classList.add("gridS");

for(let i = 0; i < specificationUniqueList.length; i++){
  const buttonS = document.createElement("button");
  buttonS.innerText = specificationUniqueList[i];
  buttonS.classList.add("filterbtnS");

  buttonS.addEventListener("click",(e) => {
    onUnCliked();
    //all btn reset
    buttonAll.classList.add("unCliked")
    buttonAll.classList.remove("cliked")

    // button event
    buttonS.classList.remove("unCliked");
    buttonS.classList.add("cliked");

    designerList = designers.filter((newE) => newE.specification === e.target.innerText)
    itemBoxfuction()
  })

  // filterBtnContainer.appendChild(btngrid);
  gridS.appendChild(buttonS);
}

btngrid.appendChild(gridS);

const gridM = document.createElement("div");
gridM.classList.add("gridM");

for(let i = 0; i < mainfieldUniqueList.length; i++){
  const buttonM = document.createElement("button");
  buttonM.innerText = mainfieldUniqueList[i];
  buttonM.classList.add("filterbtnM")

  buttonM.addEventListener("click",(e) => {
    onUnCliked();

    //all btn reset
    buttonAll.classList.add("unCliked");
    buttonAll.classList.remove("cliked");

    // button event
    buttonM.classList.remove("unCliked");
    buttonM.classList.add("cliked");

    designerList = designers.filter((newE) => newE.mainfield === e.target.innerText);
    itemBoxfuction()
  })

  gridM.appendChild(buttonM);
}

btngrid.appendChild(gridM);

// uncliked
function onUnCliked(){
  const buttonsA = document.getElementsByClassName("filterbtnA")
  const buttonsS = document.getElementsByClassName("filterbtnS")
  const buttonsM = document.getElementsByClassName("filterbtnM")

  for(let i = 0; i < buttonsA.length; i++){
    buttonsA[i].classList.add("unCliked"); 
    buttonsA[i].classList.remove("cliked");
  }
  
  for(let i = 0; i < buttonsS.length; i++){
    buttonsS[i].classList.add("unCliked"); 
    buttonsS[i].classList.remove("cliked");
  }

  for(let i = 0; i < buttonsM.length; i++){
    buttonsM[i].classList.add("unCliked"); 
    buttonsM[i].classList.remove("cliked");
  }
}


// ItemBox
function itemBoxfuction(){
  itemWrapper.innerHTML = "" //reset container
  for(let i = 0; i < designerList.length; i++){
    
    //create Div
    const div = document.createElement("div");
    const title = document.createElement("p");
    title.classList.add("titlep")
    const activeperiod = document.createElement("button");
    activeperiod.classList.add("tagbtn1");
    
    const specification = document.createElement("button");
    specification.classList.add("tagbtn3");

    const mainfield = document.createElement("button");
    mainfield.classList.add("tagbtn2");

    //title
    title.innerText = `${designerList[i].name}`;
    activeperiod.innerText = `${designerList[i].activeperiod}`;
    specification.innerText = `${designerList[i].specification}`;
    mainfield.innerText = `${designerList[i].mainfield}`;
  
    const subcontainer = document.createElement("div");
    subcontainer.classList.add("subcontainer");
    //div
    div.classList.add("boxItem");
    div.appendChild(title);
    div.appendChild(subcontainer);

    subcontainer.appendChild(activeperiod);
    subcontainer.appendChild(specification);
    subcontainer.appendChild(mainfield);
    itemWrapper.appendChild(div);
  }
}

itemBoxfuction();

