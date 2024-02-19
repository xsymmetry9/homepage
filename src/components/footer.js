export default class Footer{
    static loadFooter = () =>{
        const element = document.createElement("footer");

        const footerContainer = document.createElement("div");
        footerContainer.classList.add("footer-container");
    
        const title = (fName, lName) =>{
            const text = document.createElement("p");
            text.textContent = `© Copyright 2024, ${fName} ${lName}`;
            return text;
        }
        const link = () =>{
            const link = document.createElement("a");
            link.textContent = "This is an Open Source Project";

            return link;
        }
  
        footerContainer.appendChild(title("Gary", "Lei"));
        footerContainer.appendChild(link());

        element.appendChild(footerContainer);
    
        return element;
    }
}