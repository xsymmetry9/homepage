import profilePicture from "../images/profilePicture.png";

export default class About{
    static load = () =>{
        const container = document.createElement("div");
        container.classList.add("section-container","about-background");
        container.setAttribute("id", "about");

        container.appendChild(this.title());

        const imageDescription = document.createElement("div");
        imageDescription.classList.add("imageDescription-container");
        imageDescription.appendChild(this.loadImage());
        imageDescription.appendChild(this.personalDescription());

        container.appendChild(imageDescription);
        return container;
    }
    static title = () =>{
        const title = document.createElement("h2");
        title.classList.add("section-title");
        title.textContent = "About me";

        return title;
    }

    static personalDescription = () =>{
        const p = document.createElement("p");
        p.classList.add("about-description");
        p.textContent = "As an ESL English teacher, I'm committed to fostering language proficiency and cultural understanding. Outside the classroom, I'm an avid runner, finding solace in each stride, and a passionate real estate enthusiast, exploring the intricacies of property investment. Balancing professional growth with personal pursuits drives my journey.";

        return p;
    }

    static loadImage = () =>{
        const image = new Image();
        image.src = profilePicture;
        image.alt = "A portrait for me";
        image.classList.add("profile-picture");
        return image;
    }
}