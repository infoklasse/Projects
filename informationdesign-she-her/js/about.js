const aboutinfo = [
    {   
        leftsidetext:   "You might have heard from Florence Nightingale. But does Emma Willard ring a bell? Probably not. This is why we felt it is time to shed light on women who contributed (and currently are contributing) to the field of information design. During the winter semester 2022/23 our course held at the Infoklasse at Universität der Künste in Berlin initiated a collaborative research. We found not only female designers, but also cartographers, scientists, and even a cookbook author. Some of them might be an obvious choice, others used methods of categorization, documentation, and visualization that are well-known in information design. <br> What started with weekly presentations of our research developed into a group project that is aiming to raise awareness for the inspiring work of these women. The result is this website and accompanying posters. We hope you spread the word and will ask your friends and family: Did you know…? ",
        
        studentstitle: "Students",
        studentslist: "Nour Al Safadi <br>Dara Elena Bubel <br>Quan Minh Ha<br>Mario Kreuzer<br>Thomas Kuhn <br> Annick Rietz <br>Miriam Seith",

        disclaimertitle: "Disclaimer",
        disclaimer:     "The class was held by Nina Bender as an optional subject for students of the Infoklasse at Universität der Künste Berlin, Germany.<br>In case you are missing someone in our list of women: We are fully aware that our selection can only be exactly that (a selection).<br>Since this website is the product of a single semester we might not be able to update it after its launch in February 2023.",
   
        imprint: "IMPRINT",
        
        LegalDisclosure: "Legal Disclosure", 
        legalcontect:"Information in accordance with section 5 TMG: <br>Universität der Künste Berlin <br>Grunewaldstr. 2-5<br>10823 Berlin <br>Person responsible for content in accordance with 55 Abs. 2 RStV <br>Nina Bender <br>n.bender@udk-berlin.de",
        
        dis:"Disclaimer",

        acount1: "Accountability for content",
        acountcont:"The contents of our pages have been created with the utmost care. However, we cannot guarantee the contents’ accuracy, completeness or topicality. According to statutory provisions, we are furthermore responsible for our own content on these web pages. In this context, please note that we are accordingly not obliged to monitor merely the transmitted or saved information of third parties, or investigate circumstances pointing to illegal activity. Our obligations to remove or block the use of information under generally applicable laws remain unaffected by this as per §§ 8 to 10 of the Telemedia Act (TMG).",
        
        acount2:"Accountability for links",
        acount2cont:"Responsibility for the content of external links (to web pages of third parties) lies solely with the operators of the linked pages. No violations were evident to us at the time of linking. Should any legal infringement become known to us, we will remove the respective link immediately.",
    },

]


  const maincontainer = document.querySelector(".mainContainerabout");


function structure(){
    for (i = 0; i < aboutinfo.length; i++){

        //main grid
        const maingrid = document.createElement("div");
        maingrid.classList.add("gridabout");

        //grid left
        const leftside = document.createElement("div");
        leftside.classList.add("left-content");
        

        //left text
        const about = document.createElement("p");
        about.classList.add("title-about");
        about.innerHTML = "About";

        leftside.appendChild(about);
        const textleft = document.createElement("p");
        textleft.classList.add("textleftabout");
        textleft.innerHTML = `${aboutinfo[i].leftsidetext}`;
      
        leftside.appendChild(textleft);

        //grid right 
        const rightside = document.createElement("div");
        rightside.classList.add("right-content");
        
        const textright = document.createElement("p");
        textright.classList.add("textrightabout");

        const title1 = document.createElement("span");
        title1.classList.add("title-about");
        title1.innerHTML = `${aboutinfo[i].studentstitle}` + "<br>" ;

        const subtitle1 = document.createElement("span");
        subtitle1.classList.add("subtitle-about");
        subtitle1.innerHTML = `${aboutinfo[i].studentslist}` + "<br>" + "<br>";
       
        const title2 = document.createElement("span");
        title2.classList.add("title-about");
        title2.innerHTML = `${aboutinfo[i].disclaimertitle}`+ "<br>";

        const subtitle2 = document.createElement("span");
        subtitle2.classList.add("subtitle-about");
        subtitle2.innerHTML = `${aboutinfo[i].disclaimer}` ;

        const title3 = document.createElement("span");
        title3.classList.add("title-about");
        title3.innerHTML = "<br>" + "<br>" + `${aboutinfo[i].imprint}` + "<br>"  + "<br>";

        const title01 = document.createElement("span");
        title01.classList.add("title-about");
        title01.innerHTML = `${aboutinfo[i].LegalDisclosure}` + "<br>";

        const subtitle01 = document.createElement("span");
        subtitle01.classList.add("subtitle-about");
        subtitle01.innerHTML = `${aboutinfo[i].legalcontect}` + "<br>" + "<br>";

        const title02 = document.createElement("span");
        title02.classList.add("title-about");
        title02.innerHTML = `${aboutinfo[i].dis}` + "<br>"  + "<br>";


        const title03 = document.createElement("span");
        title03.classList.add("title-about");
        title03.innerHTML = `${aboutinfo[i].acount1}` + "<br>";

        const subtitle03 = document.createElement("span");
        subtitle03.classList.add("subtitle-about");
        subtitle03.innerHTML = `${aboutinfo[i].acountcont}` + "<br>" + "<br>";
        
        const title04 = document.createElement("span");
        title04.classList.add("title-about");
        title04.innerHTML = `${aboutinfo[i].acount2}` + "<br>";

        const subtitle04 = document.createElement("span");
        subtitle04.classList.add("subtitle-about");
        subtitle04.innerHTML = `${aboutinfo[i].acount2cont}` + "<br>" + "<br>";

        title1.appendChild(subtitle1);
        title2.appendChild(subtitle2);
        title01.appendChild(subtitle01);
        title03.appendChild(subtitle03);
        title04.appendChild(subtitle04);

        textright.appendChild(title1);
        textright.appendChild(title2);
        textright.appendChild(title3);
        textright.appendChild(title01);
        textright.appendChild(title02);
        textright.appendChild(title03);
        textright.appendChild(title04);


        rightside.appendChild(textright);

        maingrid.appendChild(leftside);
        maingrid.appendChild(rightside);
        maincontainer.appendChild(maingrid);
    
       }
}

structure();
