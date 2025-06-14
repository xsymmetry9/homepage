import bootStrapIcon from "../assets/icons/bootstrap-icon.svg";
import cssIcon from "../assets/icons/css-icon.svg";
import figmaIcon from "../assets/icons/figma-icon.svg";
import githubIcon from "../assets/icons/github-icon.svg";
import htmlIcon from "../assets/icons/html-icon.svg";
import jsIcon from "../assets/icons/js-icon.svg";
import postmanIcon from "../assets/icons/postman-icon.svg";
import reactIcon from "../assets/icons/react-icon.svg";
import tsIcon from "../assets/icons/ts-icon.svg";

const icons = [
    {name: "Bootstrap", link: bootStrapIcon},
    {name: "CSS", link: cssIcon},
    {name: "Figma", link: figmaIcon},
    {name: "Github", link: githubIcon},
    {name: "HTML", link: htmlIcon},
    {name: "Javascript", link: jsIcon},
    {name: "Postman", link: postmanIcon},
    {name: "Typescript", link: tsIcon},
    {name: "React", link: reactIcon},

];

export default class skillSection{
    static load = () =>{
        const container = document.createElement("div");
        container.classList.add("section-container");
        container.setAttribute("id", "skills");

        const content = document.createElement("div");
        content.className = "content";

        content.appendChild(this.slider());

        container.appendChild(content);
        return container;
    }

    static slider = () =>{
        const container = document.createElement("div");
        container.className = "slider";

        const brands = () =>{
            const itemsHolder = document.createElement("ul");
            itemsHolder.className = "brands";

            icons.forEach((item) =>{
                const list = document.createElement("li");
                list.className = "brand-logo";

                const img = document.createElement("img");
                img.src = item.link;
                img.alt = `${item.name}`;
                img.className = "icon";

                list.appendChild(img);
                itemsHolder.appendChild(list);
            });
      

            return itemsHolder;
        }

        container.appendChild(brands());
    
        return container;
    }
}