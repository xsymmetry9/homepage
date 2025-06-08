export const typeWriter = (title, element) =>{

    for (let i = 0; i <= title.length; i++) {
        if(i != title.length)
        {
            setTimeout(() => {
                element.innerHTML = title.slice(0, i) + title.charAt(i) + `<span class="blink">|</span>`;
            }, i * 100 + (Math.random() * 100));
        } else {
            setTimeout(() => {
                element.innerHTML = title;
            }, i * 100 + (Math.random() * 150));
        }
    }

}