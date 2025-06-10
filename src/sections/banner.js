import { typeWriter } from "../components/typewriter";

export default class Banner{
    static load = () =>{
        const container = document.createElement("div");
        container.classList.add("banner-container");

        setTimeout(() =>{
            container.appendChild(this.title())
        }, 500);
        setTimeout(() =>{
            container.appendChild(this.subText());
        }, 3000);
        setTimeout(() =>{
            container.appendChild(this.bannerHandlerBtn());
        }, 7000);

        return container;
    }

    static title = () =>{
        const title = "Hi, my name is Gary";
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