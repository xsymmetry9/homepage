import header from "../components/header.js";
import footer from '../components/footer.js';
import banner from "../sections/banner.js";
import work from "../sections/work.js";
import about from "../sections/about.js";
import skills from "../sections/skills.js";
import contact from "../sections/contact.js";
import eventHandlers from "../components/eventHandlers.js";

export default class HomePage {
    static loadPage = () =>{
        const body = document.getElementById("root");
        body.appendChild(header.loadHeader());
        body.appendChild(this.loadContent());
        body.appendChild(footer.loadFooter());

        eventHandlers.loadHandlers();

    }

    static loadContent = () =>{
        const content = document.createElement("div");
        content.classList.add("content-container");

        content.appendChild(banner.load());
        content.appendChild(about.load());
        content.appendChild(skills.load());
        content.appendChild(work.load());
        content.appendChild(contact.load());

        return content;

    }
}