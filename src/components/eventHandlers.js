export default class Handlers {

    static loadeHandlers = () =>{
        this.menuBtnHandler();
        this.navigationHandler();
        this.navigationSectionHandler();
        this.sliderHandler();
        this.mobileNavLinks();
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
                document.querySelector("nav").style ="display: none";
            } else{
                navigationPage.setAttribute("aria-hidden", "false");
                menu.setAttribute("aria-hidden", "false");

                document.querySelector("nav").style ="display: block";
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
            } else {
                navigationPage.setAttribute("aria-hidden", "true");
                document.querySelector("nav").style ="display: none";
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

    static mobileNavLinks = () =>{
        const someName = () =>{
            const menuBtn = document.querySelector(".menu-btn");
            const primaryNavigation = document.querySelector(".primary-navigation");
            primaryNavigation.setAttribute("aria-hidden", true);
            menuBtn.setAttribute("aria-hidden", true);
            document.querySelector("nav").style ="display: none";
        }
        const links = document.querySelectorAll(".nav-links");
        links.forEach((item) =>{
            item.addEventListener(("click"), someName);
        })
    }
}


