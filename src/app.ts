const icon = document.querySelector(".imgCover") as HTMLDivElement;
const img = document.querySelector("img")!;
const body = document.querySelector("body")!;
const footer = document.querySelector("footer")!;
const form = document.querySelector("form")!;
const select = document.querySelector("select")!;
const client = document.querySelector("#tofrom") as HTMLInputElement;
const description = document.querySelector("#details") as HTMLInputElement;
const price = document.querySelector("#amount") as HTMLInputElement;
const btn = document.querySelector("button")!;

icon.addEventListener("click", ()=>{
    if(img.alt === "dark-mode icon")
    {
        img.src = "../public/assets/light-mode.png";
        img.alt = "light-mode icon";
        body.style.backgroundColor = "#000000";
        footer.style.boxShadow = "none";
        footer.style.backgroundColor = "#b8b8b8"
    }
    else if (img.alt === "light-mode icon"){
        img.alt = "dark-mode icon"
        img.src = "../public/assets/dark-mode.png"
        body.style.backgroundColor = "white";
        footer.style.backgroundColor = "#eee";
        footer.style.boxShadow = "1px 1px 10px 3px #d8d8d8";
    }
})
