const plotSocialMediaIcons = () =>{

    const container = document.createElement("ul");
    container.className =  `social-media-icons-container`;
    container.innerHTML = `
        <li class="social-media-icons">
            <a href="www.github.com" target="_blank" class="social-media-links"><i class="devicon devicon-github-original"></i></a>
        </li>
        <li class="social-media-icons">
            <a href="www.twitter.com" target="_blank" class="social-media-links"><i class="devicon devicon-twitter-original"></i></a>
        </li>
        <li class="social-media-icons">
            <a href="www.linkedin.com" target="_blank" class="social-media-links"><i class="devicon devicon-linkedin-plain"></i></a>
        </li>
    `;
    return container;
} 

export default plotSocialMediaIcons;