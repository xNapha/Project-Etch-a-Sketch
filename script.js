const container = document.querySelector("#pixelContainer");
const sizeIndicator = document.querySelector("#sizeIndicator")
grid(55);
function darken(x){
    let num = x.style.filter.slice(11,14)
    x.style.filter = "brightness("+(parseInt(num) - 10)+"%)";
};
function grid(size){
    let length = (1/size)*100;
    sizeIndicator.textContent = size + " x "+size;
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    };
    for(let i = 0; i < size; i ++){
        let row=document.createElement("div");
        row.id= "row"+i;
        row.style.cssText = "width:"+length+"%;height :"+length+"%;";
        container.appendChild(row)
        for(let j = 0; j<size; j++){
            let rowX = document.getElementById("row"+i)
            let div = document.createElement("div");
            div.classList.add("pixel");
            div.setAttribute("onmousemove", 'darken(this)')
            div.style.cssText = "filter: brightness(100%); background-color: white; width:100%;height :100%;";
            rowX.appendChild(div);
        };
    }

};
