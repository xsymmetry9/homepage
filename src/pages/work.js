export default class Work{
    static load = () =>{
        const container = document.createElement("div");
        container.setAttribute("id", "work");

    
        container.appendChild(this.title());
        container.appendChild(this.projects());
        return container;
    }

    static title = () =>{
        const title = document.createElement("h1");
        title.textContent = "Work";

        return title;
    }

    static projects = () =>{
        const projects = [
            {name: "Project 1", 
            description: "A Tic Tac Toe project implemented with HTML, CSS, and JavaScript. Players take turns marking squares in a 3x3 grid to get three in a row horizontally, vertically, or diagonally. CSS styles the game layout, while JavaScript handles game logic such as checking for wins and switching between player turns.", 
            image: ""},
            {name: "Project 2", 
            description: "A Tic Tac Toe project implemented with HTML, CSS, and JavaScript. Players take turns marking squares in a 3x3 grid to get three in a row horizontally, vertically, or diagonally. CSS styles the game layout, while JavaScript handles game logic such as checking for wins and switching between player turns.", 
            image: ""},
            {name: "Project 3", 
            description: "A Tic Tac Toe project implemented with HTML, CSS, and JavaScript. Players take turns marking squares in a 3x3 grid to get three in a row horizontally, vertically, or diagonally. CSS styles the game layout, while JavaScript handles game logic such as checking for wins and switching between player turns.", 
            image: ""},
            {name: "Project 4", 
            description: "A Tic Tac Toe project implemented with HTML, CSS, and JavaScript. Players take turns marking squares in a 3x3 grid to get three in a row horizontally, vertically, or diagonally. CSS styles the game layout, while JavaScript handles game logic such as checking for wins and switching between player turns.", 
            image: ""},
            {name: "Project 5", 
            description: "A Tic Tac Toe project implemented with HTML, CSS, and JavaScript. Players take turns marking squares in a 3x3 grid to get three in a row horizontally, vertically, or diagonally. CSS styles the game layout, while JavaScript handles game logic such as checking for wins and switching between player turns.", 
            image: ""},
            {name: "Project 6", 
            description: "A Tic Tac Toe project implemented with HTML, CSS, and JavaScript. Players take turns marking squares in a 3x3 grid to get three in a row horizontally, vertically, or diagonally. CSS styles the game layout, while JavaScript handles game logic such as checking for wins and switching between player turns.", 
            image: ""},
        ]

        const createElement = document.createElement("div");
        createElement.classList.add("project-container");
        projects.forEach((item) =>{
            const createContainer = document.createElement("div");
            createContainer.innerHTML = `
                <h2 class="project-title">${item.name}</h2>
                <div class="project-left">image</div>
                <div class="project-right">
                    <div class="text-container">
                        <p class="project-description">${item.description}</p>
                    </div>
                </div>`;

                createElement.appendChild(createContainer);
        });

        return createElement;
    }
}