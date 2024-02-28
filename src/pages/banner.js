export default class Banner{
    static load = () =>{
        const container = document.createElement("div");
        container.classList.add("banner-container");

        container.appendChild(this.title());
        container.appendChild(this.subText());
        container.appendChild(this.bannerHandlerBtn());

        return container;
    }

    static title = () =>{
        const text = document.createElement("h1");
        text.classList.add("banner-title")
        text.textContent = "Gary Lei";
        return text;
    }
    static subText = () =>{
        const subtitle = "A web developer and an ESL teacher"
        const text = document.createElement("p");
        text.classList.add("typeWriter", "subtitle");

        let index = 0;

        const typeWriter = () =>{
            if(index < subtitle.length){
                text.innerHTML += subtitle.charAt(index);
                index++;
                setTimeout(typeWriter, 200)    
            } else {
                setTimeout(resetIndex, 3000);
            }
        }

        const resetIndex = () =>{
            text.innerHTML = "" //clear the title
            index = 0;
            typeWriter(); //Start typewrite effect again
        }
        typeWriter();

        return text;
    }

    static bannerHandlerBtn = () =>{
        const button = document.createElement("button");
        button.classList.add("banner-btn-nav-about")
        button.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <title>arrow-down-thick</title><path d="M10,4H14V13L17.5,9.5L19.92,11.92L12,19.84L4.08,11.92L6.5,9.5L10,13V4Z" />
            </svg>
        `

        const scrollToSection = () => {
            const section = document.getElementById("about");
            section.scrollIntoView({behavior: "smooth"});
        }
        button.addEventListener(("click"), scrollToSection);

        return button;
    }


}