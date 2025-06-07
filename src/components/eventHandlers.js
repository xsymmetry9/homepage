export default class Handlers {

    static loadHandlers = () =>{
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
        const navigationPage = document.querySelector(".primary-navigation");
            
        const handler = () =>{

            if(menu.getAttribute("aria-expanded") === "false"){
                console.log("You have clicked this button when aria-expanded was false.  Now you changed it to true")
                menu.setAttribute("aria-expanded", true);
                navigationPage.setAttribute("aria-hidden", false);
                navigationPage.setAttribute("aria-expanded", true);
            } else {
                console.log("You have clicked this button when aria-expanded was true.  Now you changed it to false")
                menu.setAttribute("aria-expanded", false);
                navigationPage.setAttribute("aria-hidden", true);
                navigationPage.setAttribute("aria-expanded", false);
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
                // if it's more than 880, the navigation should stay hidden until the hamburger button is clicked.
                navigationPage.setAttribute("aria-hidden", "false"); //Disables mobile version
                menuBtn.setAttribute("aria-hidden", true); //Hides the hamburger button.
                menuBtn.setAttribute("aria-expanded", false); //Menu button sets to default
            } else {
                navigationPage.setAttribute("aria-hidden", "true");
                menuBtn.setAttribute("aria-hidden", false);
                // menuBtn.setAttribute("aria-expanded", true); //Menu button sets to default

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


