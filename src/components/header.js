export default class Header{
    static loadHeader = () =>{
        const element = document.createElement("header");

        const headerContainer = document.createElement("div");
        headerContainer.classList.add("header-container");
        
        //Sticky on scroll
        const handleScroll = () =>{
            if(window.pageYOffset != 0){
                element.classList.add("sticky")
            } else {
                element.classList.remove("sticky");
            }
        }

        window.addEventListener("scroll", handleScroll);
    
        // Logo title
        const title = (logoName) =>{
            const box = document.createElement("div");
            box.className = "title-logo";
            box.innerHTML = `
                <a href="/"><span>${logoName}</span></a>`;
            return box;
        }

        // Hamburger menu button
        const menuButton = () =>{
            const button = document.createElement("button");
            button.classList.add("menu-btn");
            button.setAttribute("aria-controls", "primary-navigation");
            const setVisibility = () => {
                button.setAttribute("aria-hidden", window.innerWidth <= 800);
                button.setAttribute("aria-expanded", false);
            }
            setVisibility();
            button.innerHTML = `
                <svg fill="var(--button-color)" class ="hamburger" viewBox ="0 0 100 100" width ="30" height = "30">
                    <rect class ="line top" width ="80" height="6" x="10" y="30" rx="5">
                    </rect>
                    <rect class ="line middle" width ="80" height="6" x="10" y="50" rx="5">
                    </rect>
                    <rect class ="line bottom" width ="80" height="6" x="10" y="70" rx="5"></rect>
                </svg>`
            return button;
        }
    
        //Navigation
        //Bug: 
        //When window is minimized, navigation becomes in visible which is ok.  But, when maximize the window, navigation stays hidden.
        const navigation = () => {
            const container = document.createElement("nav");
            container.className = "primary-navigation";
            container.setAttribute("aria-hidden", false);
            container.setAttribute("aria-expanded", true);

            // const setVisibility = () =>{
            //     container.setAttribute("aria-hidden", window.innerWidth <= 880);
            //     container.setAttribute("aria-expanded", false);
            // };
            // setVisibility();
            // window.addEventListener("resize", setVisibility); // This fixes for resize bug
                        
            const lists = () => {
                const unOrderedList = document.createElement("ul");
                unOrderedList.classList.add("nav-container");
                 const tabs = [{page: "about", link: "about"}, {page: "work", link: "work"}, {page: "contact", link: "contact"}]
                 tabs.forEach((item) =>{
                    const list = document.createElement("li");
                    list.innerHTML = `<a href="#${item.page}" class="nav-links">${item.page}</a>`;
                    unOrderedList.appendChild(list);
                 });
    
                return unOrderedList;
            }
            container.appendChild(lists());
            return container;
        }


        headerContainer.appendChild(title("Go Gary!"));
        headerContainer.appendChild(menuButton());
        headerContainer.appendChild(navigation());

        element.appendChild(headerContainer);
    
        return element;
    }
}