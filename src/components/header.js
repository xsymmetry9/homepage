export default class Header{
    static loadHeader = () =>{
        const element = document.createElement("header");

        const headerContainer = document.createElement("div");
        headerContainer.classList.add("header-container");
        
        const handleScroll = () =>{
            if(window.pageYOffset != 0){
                element.classList.add("sticky")
            } else {
                element.classList.remove("sticky");
            }
        }

        window.addEventListener("scroll", handleScroll);
    
        const title = (fName, lName) =>{
            const box = document.createElement("div");
            box.className = "title-logo";
            box.innerHTML = `
                <a href="/"><span>${fName} ${lName}</span></a>`;
            return box;
        }

        const menuButton = () =>{
            const button = document.createElement("button");
            button.classList.add("menu-btn");
            button.setAttribute("aria-controls", "primary-navigation");
            button.setAttribute("aria-expanded", false);
            button.innerHTML = `
                <svg fill="var(--button-color)" class ="hamburger" viewBox ="0 0 100 100" width ="42" height = "42">
                    <rect class ="line top" width ="80" height="6" x="10" y="30" rx="5">
                    </rect>
                    <rect class ="line middle" width ="80" height="6" x="10" y="50" rx="5">
                    </rect>
                    <rect class ="line bottom" width ="80" height="6" x="10" y="70" rx="5"></rect>
                </svg>`
            return button;
        }
    
        const navigation = () => {
            const container = document.createElement("nav");
            container.className = "primary-navigation";
            if(window.innerWidth > 880)
            {
                container.setAttribute("aria-hidden", false);
            }
            else{
                container.setAttribute("aria-hidden", true);
            }
            
            const lists = () => {
                const unOrderedList = document.createElement("ul");
                unOrderedList.classList.add("nav-container");
                 const tabs = [{page: "about", link: "about"}, {page: "work", link: "work"}, {page: "contact", link: "contact"}]
                 tabs.forEach((item) =>{
                    const list = document.createElement("li");
                    list.innerHTML = `<a class="nav-links">${item.page}</a>`;
                    unOrderedList.appendChild(list);
                 });
    
                return unOrderedList;
            }
            container.appendChild(lists());
            return container;
        }
        headerContainer.appendChild(title("Gary", "Lei"));
        headerContainer.appendChild(menuButton());
        headerContainer.appendChild(navigation());

        element.appendChild(headerContainer);
    
        return element;
    }
}