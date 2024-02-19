export default class Contact{
    static load = () =>{
        const container = document.createElement("div");
        container.setAttribute("id", "contact");

        const title = document.createElement("h1");
        title.textContent = "Contact";
    
        container.appendChild(title);
        return container;
    }
}