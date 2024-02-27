import header from "../components/header.js";
import footer from '../components/footer.js';
import banner from "./banner.js";
import work from "./work.js";
import about from "./about.js";
import contact from "./contact.js";
import eventHandlers from "../components/eventHandlers.js";

export default class HomePage {
    static loadPage = () =>{
        const body = document.getElementById("root");
        body.appendChild(header.loadHeader());
        body.appendChild(this.loadContent());
        body.appendChild(footer.loadFooter());

        eventHandlers.loadeHandlers();

    }

    static loadContent = () =>{
        const content = document.createElement("div");
        content.classList.add("content-container");

        content.appendChild(banner.load());
        content.appendChild(about.load());
        content.appendChild(work.load());
        content.appendChild(contact.load());

        return content;

    }
}