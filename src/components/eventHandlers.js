export default class Handlers {

    static loadeHandlers = () =>{
        this.menuBtnHandler();
        this.navigationHandler();
    }

    static menuBtnHandler = () =>{

        const menu = document.querySelector(".menu-btn");
        const navigationPage = document.querySelector("nav");
            
        const handler = () =>{

            if(navigationPage.getAttribute("aria-hidden") === "false" ?  navigationPage.setAttribute("aria-hidden", "true") : navigationPage.setAttribute("aria-hidden", "false"));

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
    
}

