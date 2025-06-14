const darkLightModeButton = () => {
    const toggleButton = document.createElement("button");
    toggleButton.setAttribute("id", "theme-toggle");
    toggleButton.textContent = "Toggle Theme";

    let isDark = false
    toggleButton.addEventListener(("click"), () => {
        isDark = !isDark;
        document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
        console.log(document.documentElement.getAttribute("data-theme"));
    })

    return toggleButton;
}

export default darkLightModeButton;