const plotSocialMediaIcons = (className) =>{

    const container = document.createElement("div");
    container.innerHTML = `
    <ul class="social-media-icons-container ${className}">
        <li class="social-media-icons">
            <a href="www.github.com" target="_blank" class="social-media-links"><i class="devicon devicon-github-original"></i></a>
        </li>
        <li class="social-media-icons">
            <a href="www.twitter.com" target="_blank" class="social-media-links"><i class="devicon devicon-twitter-original"></i></a>
        </li>
        <li class="social-media-icons">
            <a href="www.linkedin.com" target="_blank" class="social-media-links"><i class="devicon devicon-linkedin-plain"></i></a>
        </li>
    </ul>
    `
    return container;
} 

export default plotSocialMediaIcons;