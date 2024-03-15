export default class Handlers {

    static loadeHandlers = () =>{
        this.menuBtnHandler();
        this.navigationHandler();
        this.navigationSectionHandler();
        this.sliderHandler();
    }

    static sliderHandler = () =>{
        const brands = document.querySelector("ul.brands"),
        total_brand = brands.children.length;

        document.documentElement.style.setProperty('--total-brand', total_brand);

        for(let i = 0; i < total_brand; i++){
            brands.appendChild(brands.children[i].cloneNode(true));
        }
    }

    static menuBtnHandler = () =>{

        const menu = document.querySelector(".menu-btn");
        const navigationPage = document.querySelector("nav");
            
        const handler = () =>{
            if(navigationPage.getAttribute("aria-hidden") === "false") {
                menu.setAttribute("aria-hidden", "true");
                navigationPage.setAttribute("aria-hidden", "true");
                navigationPage.classList.add("hidden");
            } else{
                navigationPage.setAttribute("aria-hidden", "false");
                menu.setAttribute("aria-hidden", "false");

                navigationPage.classList.remove("hidden");
            }   
        }
        menu.addEventListener(("click"), handler);
    
    }

    static navigationHandler = () =>{
        const menuBtn = document.querySelector(".menu-btn");
        const navigationPage = document.querySelector("nav");
        window.addEventListener(("resize"), () =>{
            const width = window.innerWidth;
            if(width > 880)
            {
                navigationPage.setAttribute("aria-hidden", "false");
                menuBtn.setAttribute("aria-hidden", "true");
                navigationPage.classList.remove("hidden");
            } else {
                navigationPage.setAttribute("aria-hidden", "true");
                navigationPage.classList.add("hidden");

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

