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
            const text = document.createElement("p");
            text.textContent = fName + " " +lName;
            text.classList.add("title-logo");
            return text;
        }

        const menuButton = () =>{
            const button = document.createElement("button");
            button.textContent = "menu";

            return button;
        }
    
        const navigation = () => {
            const container = document.createElement("nav");
         
            
            const lists = () => {
                const unOrderedList = document.createElement("ul");
                unOrderedList.classList.add("nav-container");
                 const tabs = [{page: "about", link: "#about"}, {page: "work", link: "#work"}, {page: "contact", link: "#contact"}]
                 tabs.forEach((item) =>{
                    const list = document.createElement("li");
                    list.innerHTML = `<a class="nav-links" href="${item.link}">${item.page}</a>`;
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