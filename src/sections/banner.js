import { typeWriter } from "../components/typewriter";

export default class Banner{
    static load = () =>{
        const createOuterLayer = document.createElement("div");
        createOuterLayer.classList.add("outer-banner-container");

        const createInnerLayer = document.createElement("div");
        createInnerLayer.classList.add("inner-banner-container");

        setTimeout(() =>{
            createInnerLayer.appendChild(this.title())
        }, 500);
        setTimeout(() =>{
            createInnerLayer.appendChild(this.subText());
        }, 3000);
        setTimeout(() =>{
            createInnerLayer.appendChild(this.bannerHandlerBtn());
        }, 7000);

        createOuterLayer.appendChild(createInnerLayer);

        return createOuterLayer;
    }

    static title = () =>{
        const title = "Hi, I'm Gary";
        const titleText = document.createElement("h1");
        titleText.className = "banner-title";

         typeWriter(title, titleText);

        return titleText;
    }

    static subText = () =>{
        const subtitle = "A full-stack enthusiast."
        const text = document.createElement("p");
        text.classList.add("typeWriter", "subtitle");
        
        typeWriter(subtitle, text);

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