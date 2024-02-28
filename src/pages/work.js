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

            const projectCards = document.createElement("div");
            projectCards.classList.add("project-cards")
            projectCards.innerHTML = `
                <div class="project-left">
                    <img class="project-image" src="${cvMaker}" alt="An image of ${item.name}" />
                </div>
                <div class="project-right">
                    <div class="top-container">
                        <h3 class="title-name">${item.name}</h3>

                        <ul class="link-file-container">
                        <li><a href="www.google.com" target="_blank">
                            <svg class="mdi-icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff">
                                <title>git</title><path d="M2.6,10.59L8.38,4.8L10.07,6.5C9.83,7.35 10.22,8.28 11,8.73V14.27C10.4,14.61 10,15.26 10,16A2,2 0 0,0 12,18A2,2 0 0,0 14,16C14,15.26 13.6,14.61 13,14.27V9.41L15.07,11.5C15,11.65 15,11.82 15,12A2,2 0 0,0 17,14A2,2 0 0,0 19,12A2,2 0 0,0 17,10C16.82,10 16.65,10 16.5,10.07L13.93,7.5C14.19,6.57 13.71,5.55 12.78,5.16C12.35,5 11.9,4.96 11.5,5.07L9.8,3.38L10.59,2.6C11.37,1.81 12.63,1.81 13.41,2.6L21.4,10.59C22.19,11.37 22.19,12.63 21.4,13.41L13.41,21.4C12.63,22.19 11.37,22.19 10.59,21.4L2.6,13.41C1.81,12.63 1.81,11.37 2.6,10.59Z" />
                            </svg>
                        </a></li>
                        <li><a href="www.google.com" target="_blank">
                            <svg class="mdi-icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff">
                                <title>open-in-new</title><path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
                            </svg>
                        </a></li>
                    </ul>

                    </div>
                    <p class="project-description">${item.description}</p>
                    
                </div>`;

                container.appendChild(projectCards);

                createElement.appendChild(container);
        });

        return createElement;
    }
}