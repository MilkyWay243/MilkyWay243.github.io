const frame = "section";
const box = "article";
const speed = "0.5";
const activeClass = "on";
const btn = document.querySelectorAll("main ul li");
let grid;

function init(){
    grid = new Isotope("section", {
        itemSelector: box,
        columnWidth: box,
        transitionDuration: speed
    });
}

function filter(arr){
    for(let el of arr){
        el.addEventListener("click", e=>{
            e.preventDefault();

            const sort = e. currentTarget.querySelector("a").getAttribute("herf");

            grid.arrange({
                filter : sort
            });

            for(let el of arr){
                el.classList.remove(activeClass);
            }

            e.currentTarget.classList.add(activeClass);
        })
    }
}

window.addEventListener("load", ()=>{
    init();
    filter(btn)
});