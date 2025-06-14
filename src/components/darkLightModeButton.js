const darkLightModeButton = () => {   
    const toggleButton = document.createElement("button");
    toggleButton.setAttribute("id", "theme-toggle");
    console.log(document.documentElement.getAttribute("data-theme"));
    toggleButton.textContent = "Light";
    let isDark = false;
    
    toggleButton.addEventListener(("click"), () => {

        isDark = !isDark;
        document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
        toggleButton.textContent = `${isDark ? "Dark" : "light"}`
    })

    const scrollHandler = () => {
        const scrollPosition = window.pageYOffset;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
  
        // When it's scroll to the buttom, adds a class called absolute and when it's
    // not, adds a class "sticky"
        if(windowHeight + scrollPosition != documentHeight) {
            toggleButton.classList.remove("absolute");
            toggleButton.classList.add("sticky");
        } else {
            toggleButton.classList.remove("sticky");
            toggleButton.classList.add("absolute");
        }

    }
    window.addEventListener("scroll", scrollHandler);


    return toggleButton;
}

export default darkLightModeButton;