const page = Array.from(document.querySelectorAll(".page"));
let cover = Array.from(document.querySelectorAll(".actual-page .cover"));
const allCovers = Array.from(document.querySelectorAll(".cover"));
const resetAllBtn = document.getElementById("reset-all");
const resetBtn = document.getElementById("reset");
const nextBtn = document.getElementById("next");
const backBtn = document.getElementById("back");
const fullNextBtn = document.getElementById("full-next");
const fullBackBtn = document.getElementById("full-back");

//  INICIALIZACIONES
cover[0].style.backgroundColor = "rgb(247, 241, 241)";

//  FUNCIONES
const gridFiller = () => {
    for (let d = 0; d < page.length; d++) {
        page[d].style.gridColumn = `${d+1} / ${d+2}`;
    }
}

const reColor = () => {
    if (cover[cover.length - 1].style.color !== "red"){
        for(let i = cover.length - 1; i > -1 ; i--) {
            if (cover[i].style.color === "red") {
                cover[i+1].style.backgroundColor = "rgb(247, 241, 241)";
                i -= cover.length;
            }
        }
    }
}

const reload = () => {
    cover = Array.from(document.querySelectorAll(".actual-page .cover"));
    cover[0].style.backgroundColor = "rgb(247, 241, 241)";
    
    for (const x of cover) {
        x.addEventListener("mouseover",  () => {
            if (x.style.backgroundColor == "rgb(247, 241, 241)") {
                x.style.animation = "show-anim 0.5s forwards";
                x.style.color = "red";
                reColor();
            }
        })
    }
}

const anim = (x, str) => {
    x.style.animation = "none";
    x.offsetHeight;
    x.style.animation = str;
}

//  LLAMADO DE FUNCIONES
gridFiller();
reload();

//  BUTTON ACTIONS
resetBtn.addEventListener("click", () => {
    anim(resetBtn.children[0], "rotate-anim 0.7s ease");

    for (const x of cover) {
        // x.style.animation = "hide-anim 0.5s forwards";
        x.style.animation = "none";
        x.style.color = "blue";
        x.style.backgroundColor = "white";
    }
    cover[0].style.backgroundColor = "rgb(247, 241, 241)";

    const aux = document.querySelector(".actual-page");
    anim(aux, "reset-pages-anim 0.5s forwards");
    anim(aux.children[0], "ae 1s ease");
})

resetAllBtn.addEventListener("click", () => {
    anim(resetAllBtn.children[0], "rotate-anim 0.7s ease");

    for (const x of allCovers) {
        // x.style.animation = "hide-anim 0.5s forwards";
        x.style.animation = "none";
        x.style.color = "blue";
        x.style.backgroundColor = "white";
    }
    cover[0].style.backgroundColor = "rgb(247, 241, 241)";
    
    for (let i = 0; i < page.length; i++) {
        anim(page[i], `reset-pages-anim 0.5s forwards ${i / 30}s`);
        anim(page[i].children[0], "ae 1s ease");
    }
})

nextBtn.addEventListener("click", () => {
    const actualPage = document.querySelector(".actual-page");
    anim(nextBtn, "next-anim 0.3s ease");

    
    for (let i = 0; i < page.length - 1; i++) {
        if (page[i] === actualPage) {
            page[i].classList.remove("actual-page");
            page[i+1].classList.add("actual-page");
            anim(page[i+1], "next-page-anim 0.4s ease");
            i += page.length; 
        }
    }
    reload();
})

backBtn.addEventListener("click", () => {
    const actualPage = document.querySelector(".actual-page");
    anim(backBtn, "next-anim 0.3s ease 0s 1 reverse");
    
    for (let i = 1; i < page.length; i++) {
        if (page[i] === actualPage) {
            page[i].classList.remove("actual-page");
            page[i-1].classList.add("actual-page");
            anim(page[i-1], "back-page-anim 0.4s ease");
            i += page.length; 
        }
    }
    reload();
})

fullNextBtn.addEventListener("click", () => {
    const actualPage = document.querySelector(".actual-page"); 
    anim(fullNextBtn, "full-next-anim 0.3s ease");

    actualPage.classList.remove("actual-page");
    page[page.length - 1].classList.add("actual-page");
    anim(page[page.length - 1], "next-page-anim 0.4s ease");
    reload();
})

fullBackBtn.addEventListener("click", () => {
    const actualPage = document.querySelector(".actual-page");
    anim(fullBackBtn, "full-back-anim 0.3s ease 0s");
    
    actualPage.classList.remove("actual-page");
    page[0].classList.add("actual-page");
    anim(page[0], "back-page-anim 0.4s ease");
    reload();
})