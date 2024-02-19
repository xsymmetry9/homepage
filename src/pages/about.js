export default class About{
    static load = () =>{
        const container = document.createElement("div");
        container.setAttribute("id", "about");

        container.appendChild(this.title());
        container.appendChild(this.personalDescription());
        return container;
    }
    static title = () =>{
        const title = document.createElement("h1");
        title.textContent = "About me";

        return title;
    }

    static personalDescription = () =>{
        const p = document.createElement("p");
        p.textContent = "As an ESL English teacher, I'm committed to fostering language proficiency and cultural understanding. Outside the classroom, I'm an avid runner, finding solace in each stride, and a passionate real estate enthusiast, exploring the intricacies of property investment. Balancing professional growth with personal pursuits drives my journey.";

        return p;
    }
}