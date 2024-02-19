export default class Banner{
    static load = () =>{
        const container = document.createElement("div");
        container.classList.add("banner-container");

        container.innerHTML = `
            <h1>Gary Lei</h1>
            <p>A full-stack developer</p>
        `;

        const button = document.createElement("button");
        button.textContent = "Yo";
        button.addEventListener(("click"), () =>{console.log("Hello")});
        // const title = document.createElement("h1");
        // title.textContent = "Gary Lei";

        container.appendChild(button);
        // const subTitle = document.createElement("p");
        // subTitle.textContent = "A full-stack developer";
        
        
        // container.appendChild(title);
        // container.appendChild(subTitle);
        return container;
    }
}