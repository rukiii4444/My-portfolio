const headerContent = 
`
<header>
    <div class="header-logo">            
        <a href="my-portfolio/index.html" class="header-logo">haru</a>
    </div>
    <div class="header-list">
        <div class="header-left">
            <a href="my-portfolio/blogs/blog.html">Blog</a>
            <a href="my-portfolio/contact/contact.html">Contact</a>
        </div> 
        <a href="https://github.com/rukiii4444" class="header-right"><i class="fa-brands fa-github"></i>GitHub</a>
    </div>
</header>
`;

document.getElementById('header').innerHTML = headerContent;

const footerContent = 
`
<div class="footer-logo">haru</div>
<div class="footer-list">
    <ul>
        <li>Contact</li>
    </ul>
</div>
`

document.getElementById("footer").innerHTML = footerContent;