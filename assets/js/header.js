const links = document.querySelectorAll("header nav ul li a");
const nav = document.querySelector("header nav");
const actualLink = document.querySelector(".selected-nav");

links.forEach(link =>{

    link.onmouseenter = ()=>{

        links.forEach(linnk=> linnk.classList.remove("selected-nav"));

        link.classList.add("selected-nav");
    }
});

nav.onmouseleave = ()=>{

    links.forEach(link=> link.classList.remove("selected-nav"));

    actualLink.classList.add("selected-nav");
}


const navBtnShow = document.querySelector("#nav-btn-show");
const navBtnExit = document.querySelector("#nav-btn-exit");
const navSm = document.querySelector(".navigation-sm");
const shadow = document.querySelector(".shadow");
const pageContainer = document.querySelector(".page-container")


const  preventScrolling= bool => {

    bool?pageContainer.classList.add("stop-scrolling"):pageContainer.classList.remove("stop-scrolling");
}

navBtnShow.onclick = ()=>{
    shadow.style.display = "block";
    shadow.style.opacity = ".3";
    setTimeout(()=>{
        navSm.style.left = 0;
    },110);

    preventScrolling(true);
}
shadow.onclick = navBtnExit.onclick = ()=>{
    navSm.style.left = "-100%";
    setTimeout(()=>{
        shadow.style.opacity = "0";
    },160);

    setTimeout(()=>{
        shadow.style.display = "none";
    },300);
    preventScrolling(false);
} 