
// import phone from "../images/phone.svg";
import contactImg from "../images/contact.jpg";

export default class Contact{
    static load = () =>{
        const contact = {address: "1234 Smith Street Miami, Florida 33156", phone: "555-555-5555", email: "g123456@mail.com"};
        const container = document.createElement("div");
        container.classList.add("contact-container");
        container.setAttribute("id", "contact");
  
        const right = document.createElement("div");
        right.appendChild(this.title());
        right.appendChild(this.content(contact));

        const left = document.createElement("div");
        left.appendChild(this.plotImage());

        container.appendChild(right);
        container.appendChild(left);
        return container;
    }

    static title = () =>{
        const title = document.createElement("h1");
        title.textContent = "Contact";
        return title;
    }

    static plotImage = () =>{
        const createDiv = document.createElement("div");

        const image = new Image();
        image.classList.add("contact-image");
        image.src = contactImg;

        createDiv.appendChild(image);

        return createDiv;
    }

    static content = (contact) =>{
        const container = document.createElement("div");
        const subTitle = document.createElement("p");
        subTitle.textContent = "Please get in touch if you think our work could be mutually beneficial.";
        
        const plotContactInfo = () => {
            const container = document.createElement("div");
            container.innerHTML = `
                <div class="contact-flex">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  fill="#fff" width="30" height="30">
                        <title>map-marker-outline</title>
                        <path d="M12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5M12,2A7,7 0 0,1 19,9C19,14.25 12,22 12,22C12,22 5,14.25 5,9A7,7 0 0,1 12,2M12,4A5,5 0 0,0 7,9C7,10 7,12 12,18.71C17,12 17,10 17,9A5,5 0 0,0 12,4Z" />
                    </svg>
                    <p>${contact.address}</p>
                </div>
                <div class="contact-flex">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff" width="30" height="30">
                            <title>phone</title>
                            <path d="M19.5,22C20.33,22 21,21.33 21,20.5V17C21,16.17 20.33,15.5 19.5,15.5C18.33,15.5 17.18,15.32 16.08,14.95C15.55,14.78 14.97,14.92 14.56,15.32L13.12,16.76C10.64,15.41 8.57,13.34 7.23,10.87L8.66,9.44C9.07,9.05 9.22,8.47 9.04,7.91C8.68,6.82 8.5,5.67 8.5,4.5C8.5,3.67 7.83,3 7,3H3.5C2.67,3 2,3.67 2,4.5C2,14.15 9.85,22 19.5,22M3.5,4H7C7.28,4 7.5,4.22 7.5,4.5C7.5,5.78 7.7,7.03 8.09,8.22C8.14,8.36 8.13,8.56 7.97,8.72L6,10.68C7.65,13.91 10.07,16.33 13.31,18L15.26,16.03C15.4,15.89 15.59,15.85 15.77,15.9C16.97,16.3 18.22,16.5 19.5,16.5C19.78,16.5 20,16.72 20,17V20.5C20,20.78 19.78,21 19.5,21C10.4,21 3,13.6 3,4.5C3,4.22 3.22,4 3.5,4Z" />
                        </svg>
                        <p>${contact.phone}</p>
                </div>
                <div class="contact-flex">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff" width="30" height="30">
                        <title>email-outline</title>
                        <path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6M20 6L12 11L4 6H20M20 18H4V8L12 13L20 8V18Z" />
                    </svg>
                        <p>${contact.email}</p>
                </div>`;
            return container;
        }

        const plotSocialMediaIcons = () =>{

            const container = document.createElement("div");
            container.innerHTML = `
            <ul class="social-media-icons-container">
                <li class="social-media-icons">
                    <a href="www.github.com" target="_blank" class="social-media-links"><i class="devicon devicon-github-original"></i></a>
                </li>
                <li class="social-media-icons">
                    <a href="www.twitter.com" target="_blank" class="social-media-links"><i class="devicon devicon-twitter-original"></i></a>
                </li>
                <li class="social-media-icons">
                    <a href="www.linkedin.com" target="_blank" class="social-media-links"><i class="devicon devicon-linkedin-plain"></i></a>
                </li>
            </ul>
            `

            return container;
        } 
        container.appendChild(subTitle);
        container.appendChild(plotContactInfo());
        container.appendChild(plotSocialMediaIcons());

        return container;
    }

    
}