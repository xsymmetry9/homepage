export default class Handlers {

    static loadeHandlers = () =>{
        this.menuBtnHandler();
        this.navigationHandler();
        this.navigationSectionHandler();
    }

    static menuBtnHandler = () =>{

        const menu = document.querySelector(".menu-btn");
        const navigationPage = document.querySelector("nav");
            
        const handler = () =>{
            if(navigationPage.getAttribute("aria-hidden") === "false") {
                navigationPage.setAttribute("aria-hidden", "true");
                menu.textContent = "menu";
            } else{
                navigationPage.setAttribute("aria-hidden", "false");
                menu.textContent = "close";
            }   
        }
        menu.addEventListener(("click"), handler);
    
    }

    static navigationHandler = () =>{
        const navigationPage = document.querySelector("nav");
        window.addEventListener(("resize"), () =>{
            const width = window.innerWidth;
            if(width > 880)
            {
                navigationPage.setAttribute("aria-hidden", "false");
            } else {
                navigationPage.setAttribute("aria-hidden", "true");
            }
        });   
    }

    static scrollToSection = (name) => {
        const section = document.getElementById(name);
        section.scrollIntoView({behavior: "smooth"});
    }

    static navigationSectionHandler = () =>{

        const navBtn = (e) =>{
            const section = e.currentTarget.textContent;
            this.scrollToSection(section);
        }
        const nav = document.querySelectorAll(".nav-links");
        nav.forEach((item) => item.addEventListener(("click"), navBtn))
    }

    
}

