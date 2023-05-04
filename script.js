var sections = document.querySelectorAll('section');
var navLi = document.querySelectorAll('nav .nav-wrapper ul li');

let themeDots = document.getElementsByClassName("theme-dot");
let theme = localStorage.getItem('theme');
if(theme == null){
    setTheme('light')
}
else{
    setTheme(theme);
}

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeigth = section.clientHeight;
        const scrollPosY = window.pageYOffset;
        if(scrollPosY >= (sectionTop - sectionHeigth / 4)){
            current = section.getAttribute('id');
        }
    });

    navLi.forEach(li => {
        li.classList.remove('active');
        if(li.classList.contains(current)){
            li.classList.add('active');
            
        }
    });
});

for(var i = 0; themeDots.length > i; i++){
    let themeBtn = themeDots[i].dataset.mode;
    themeDots[i].addEventListener('click', ()=>{
        setTheme(themeBtn);
    })
}

function setTheme(themeBtn){
    if(themeBtn == "light"){
        document.documentElement.className = 'light-theme';
    }
    if(themeBtn == "blue"){
        document.documentElement.className = 'blue-theme';
    }
    
    if(themeBtn == "green"){
        document.documentElement.className = 'green-theme';
    }
    if(themeBtn == "purple"){
        document.documentElement.className = 'purple-theme';
    }
    localStorage.setItem('theme', themeBtn);
}

