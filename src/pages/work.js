import cvMaker from "../images/cv-maker.png";

export default class Work{
    static load = () =>{
        const container = document.createElement("div");
        container.classList.add("section-container");
        container.setAttribute("id", "work");

    
        container.appendChild(this.title());
        container.appendChild(this.projects());
        return container;
    }

    static title = () =>{
        const title = document.createElement("h2");
        title.classList.add("section-title");
        title.textContent = "Work";

        return title;
    }

    static projects = () =>{
        const projects = [
            {name: "Tic Tac Toe", 
            description: "A Tic Tac Toe project implemented with HTML, CSS, and JavaScript. Players take turns marking squares in a 3x3 grid to get three in a row horizontally, vertically, or diagonally. CSS styles the game layout, while JavaScript handles game logic such as checking for wins and switching between player turns.", 
            image: ""},
            {name: "Weather App", 
            description: "A Tic Tac Toe project implemented with HTML, CSS, and JavaScript. Players take turns marking squares in a 3x3 grid to get three in a row horizontally, vertically, or diagonally. CSS styles the game layout, while JavaScript handles game logic such as checking for wins and switching between player turns.", 
            image: ""},
            {name: "CV Maker", 
            description: "A Tic Tac Toe project implemented with HTML, CSS, and JavaScript. Players take turns marking squares in a 3x3 grid to get three in a row horizontally, vertically, or diagonally. CSS styles the game layout, while JavaScript handles game logic such as checking for wins and switching between player turns.", 
            image: ""},
            {name: "Restaurant", 
            description: "A Tic Tac Toe project implemented with HTML, CSS, and JavaScript. Players take turns marking squares in a 3x3 grid to get three in a row horizontally, vertically, or diagonally. CSS styles the game layout, while JavaScript handles game logic such as checking for wins and switching between player turns.", 
            image: ""},
        ]

        const createElement = document.createElement("div");
        createElement.classList.add("project-container");
        projects.forEach((item) =>{

            const container = document.createElement("div");

            const title = document.createElement("h2");
            title.classList.add("title-name")
            title.textContent = item.name;

            const projectCards = document.createElement("div");
            projectCards.classList.add("project-cards")
            projectCards.innerHTML = `
                <div class="project-left">
                    <img class="project-image" src="${cvMaker}" alt="An image of ${item.name}" />
                </div>
                <div class="project-right">
                    <div class="text-container">
                        <p class="project-description">${item.description}</p>
                    </div>
                </div>`;

                container.appendChild(title);
                container.appendChild(projectCards);

                createElement.appendChild(container);
        });

        return createElement;
    }
}