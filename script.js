const container = document.querySelector("#pixelContainer");
let enter = document.getElementById("size");

enter.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        e.preventDefault();
        document.getElementById("submit").click();
    };
});
function darken(x){
    x.style.backgroundColor = "black";
};
function reset(){
    console.log(container.childNodes.forEach((e)=>{
        e.style.backgroundColor = "white";
    }))
}

function grid(size){
    let totalSize = size * size;
    let length = (1/size)*100;
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    };
    if(size>100){
        let error = document.createElement("p");
        error.textContent = "Maximum value of 100";
        container.appendChild(error);
        return;
    }
    if(container.childNodes.length == 0){
        for(let i = 0; i<totalSize; i++){
            let div = document.createElement("div");
            div.classList.add("pixel");
            div.setAttribute("onmouseover", 'darken(this)')
            div.style.cssText = "background-color: white; width:"+length+"%;height :"+length+"%;";
            container.appendChild(div);
        };
    };
};
