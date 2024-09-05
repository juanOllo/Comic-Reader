const page = document.querySelector(".page");
const cover = Array.from(document.querySelectorAll(".cover"));
const resetBtn = document.getElementById("reset");
const nextBtn = document.getElementById("next");
const backBtn = document.getElementById("back");

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

const reColor = () => {
    if (cover[cover.length - 1].style.color !== "red"){
        for(let i = cover.length - 1; i > -1 ; i--) {
            if (cover[i].style.color === "red") {
                console.log("hola")
                cover[i+1].style.backgroundColor = "rgb(247, 241, 241)";
                i -= cover.length;
            }
        }
    }
}

resetBtn.addEventListener("click", () => {

    for (const x of cover) {
        // x.style.animation = "hide-anim 0.5s forwards";
        x.style.animation = "none";
        x.style.color = "blue";
        x.style.backgroundColor = "white";
    }

    cover[0].style.backgroundColor = "rgb(247, 241, 241)";
})

nextBtn.addEventListener("click", () => {
    page.style.gridColumn = "2/3";
    page.style.height = "4rem";
    page.style.width = "3rem";
    // page.style.animation = "page-old-anim 1s forwards";
})

backBtn.addEventListener("click", () => {
    page.style.gridColumn = "3/4";
    page.style.height = "40rem";
    page.style.width = "30rem";
    // page.style.animation = "page-old-anim 1s forwards";
})