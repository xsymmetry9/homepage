import plotSocialMediaIcons from "../components/socialMediaIcons";
import profilePicture from "../images/profilePicture.png";

export default class About{
    static load = () =>{
        const container = document.createElement("div");
        container.classList.add("section-container","about-background");
        container.setAttribute("id", "about");

        const imageDescription = document.createElement("div");
        imageDescription.classList.add("imageDescription-container");
        imageDescription.appendChild(this.loadImage());
        imageDescription.appendChild(this.personalDescription());

        container.appendChild(imageDescription);
        return container;
    }

    static personalDescription = () =>{
        const container = document.createElement("div");
        container.classList.add("about-description");

        const title = () =>{
            const title = document.createElement("h2");
            title.textContent = "About me";
            return title;
        }

        const description = () =>{
            const p = document.createElement("p");
            p.textContent = "As an ESL English teacher, I'm committed to fostering language proficiency and cultural understanding. Outside the classroom, I'm an avid runner, finding solace in each stride, and a passionate real estate enthusiast, exploring the intricacies of property investment. Balancing professional growth with personal pursuits drives my journey.";
    
            return p;
        }

        container.appendChild(title());
        container.appendChild(description());
        container.appendChild(plotSocialMediaIcons("about"));

        return container;
  
    }

    static loadImage = () =>{
        const image = new Image();
        image.src = profilePicture;
        image.alt = "A portrait for me";
        image.classList.add("profile-picture");
        return image;
    }
}